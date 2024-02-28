import {FormControl, InputLabel, TextField, TextareaAutosize, Box, Typography, Divider} from "@mui/material";
import Container from "@mui/material/Container";


const MealForm = () => {

    return (
        <Container maxWidth="sm" sx={{p: 2}}>
            <form action="">

                <Box sx={{border: 1, p: 2}}>
                    <Typography variant="h4" sx={{mb: 2}}>
                        Create Meal
                    </Typography>
                    <FormControl>
                        <TextField label="Meal name" id='meal_name' variant='outlined' sx={{mb: 2}}/>

                        <TextField multiline label="Description" id='description' variant='outlined'/>
                    </FormControl>
                </Box>
            </form>
        </Container>

    )
};

export default MealForm;