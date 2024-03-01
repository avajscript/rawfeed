import {useEffect, useState} from "react";
import {DBCommunication} from "../../lib/DBCommunication";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Pagination} from "@mui/material";
import MealList from "./MealList";
import MealFilter from "./MealFilter";

const Index = () => {
    const [meals, setMeals] = useState([]);
    const [mealCategories, setMealCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    useEffect(() => {
        // fetch all meals
        const fetchMeals = async () => {
            try {
                const mealsData = await DBCommunication.getMeals();
                setMeals(mealsData || []);

                const {response, status, message} = await DBCommunication.getMealCategories();
                setMealCategories(response);
            } catch (error) {
                console.error("Error fetching meals: " + error);
            }
        }
        fetchMeals();

    }, []);

    console.log("meals");
    console.log(meals);

    console.log("categories");
    console.log(mealCategories);

    // Set to null if selected same category or set to new category
    const selectCategory = (category) => {
        if (selectCategory === category) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
        }

    }

    return (
        <>

            <Container maxWidth="md" sx={{m: 2}}>

                <Typography variant="h3" gutterBottom>
                    View All Meals
                </Typography>

                <MealFilter
                    categories={mealCategories}
                    selectedCategory={selectedCategory}
                    selectCategory={selectCategory}
                />
                <MealList
                    meals={meals}
                />
                <Pagination count={30}/>
            </Container>

        </>
    )
};

export default Index;