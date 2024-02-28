import {useEffect, useState} from "react";
import {DBCommunication} from "../../lib/DBCommunication";

const Index = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        // fetch all meals
        const fetchMeals = async () => {
            try {

                const mealsData = await DBCommunication.getMeals();
                setMeals(mealsData);
            } catch (error) {
                console.error("Error fetching meals: " + error);
            }
        }
        fetchMeals();

    }, []);
    console.log("meals");
    console.log(meals);
    return (
        <></>
    )
};

export default Index;