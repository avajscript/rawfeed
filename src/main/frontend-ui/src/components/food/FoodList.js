import Box from "@mui/material/Box";
import {ListItem, Typography} from "@mui/material";

const FoodList = ({foods}) => {

    return (
        <>
            {foods.map((food, index) => {
                return (
                    <Box key={index} boxShadow={1} mb={2}>
                        <ListItem sx={{display: 'flex', justifyContent: "space-between"}}>
                            <Typography variant="body1">
                                {food.name}
                            </Typography>

                            <Typography variant="body1">
                                ${food.price} ({food.currency})
                            </Typography>

                            <Typography variant="body1">
                                ({food.quantity})
                            </Typography>

                            <Typography variant="body1">
                                {food.measurement}
                            </Typography>
                        </ListItem>
                    </Box>
                )
            })}
        </>
    )
};

export default FoodList;