import {useEffect, useState} from "react";
import {DBCommunication} from "../../lib/DBCommunication";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Pagination} from "@mui/material";
import MealList from "./MealList";

const Index = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        // fetch all meals
        const fetchMeals = async () => {
            try {
                const mealsData = await DBCommunication.getMeals();
                setMeals(mealsData || []);
            } catch (error) {
                console.error("Error fetching meals: " + error);
            }
        }
        fetchMeals();

    }, []);
    console.log("meals");
    console.log(meals);
    return (
        <>

            <Container maxWidth="md" sx={{m: 2}}>

                <Typography variant="h3" gutterBottom>
                    View All Meals
                </Typography>
                <MealList
                    meals={meals}
                />
                <Pagination count={30}/>
            </Container>

        </>
    )
};

export default Index;