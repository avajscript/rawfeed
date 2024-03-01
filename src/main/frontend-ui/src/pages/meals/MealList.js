import {List, ListItem, ListItemIcon, ListItemText, Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import Box from "@mui/material/Box";
import {ExpandMore} from "@mui/icons-material";
import FoodTable from "../../components/food/FoodTable";
import Meal from "./Meal";

const MealList = ({meals}) => {
    return (
        <List>
            {meals.map((meal, index) => {
                // meal foods is first three foods comma seperated with ellipses at the end
                let mealFoods = meal.foods;
                let firstThreeFoods = [];
                // iterate over all mealFoods or 3, whichever is smaller
                for (let i = 0; i < (mealFoods.length > 3 ? 3 : mealFoods.length); i++) {
                    firstThreeFoods.push(mealFoods[i].name);
                }
                firstThreeFoods = firstThreeFoods.join(", ").trimEnd() + "...";
                return (
                    <Meal
                        meal={meal}
                        firstThreeFoods={firstThreeFoods}
                    />

                );
            })}
        </List>
    )
}

export default MealList;
