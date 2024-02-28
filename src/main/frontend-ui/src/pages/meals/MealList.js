import {List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import Box from "@mui/material/Box";

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
                    <Box key={index} boxShadow={1} mb={2} style={{cursor: 'pointer'}}>

                        <ListItem>
                            <ListItemIcon>
                                <img src={`/icons/${meal.image_url}`}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={meal.name}
                                secondary={firstThreeFoods}
                            />
                        </ListItem>
                    </Box>

                );
            })}
        </List>
    )
}

export default MealList;
