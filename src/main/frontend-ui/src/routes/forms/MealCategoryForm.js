import {FormControl, InputLabel, TextField, TextareaAutosize, Box, Typography, Button} from "@mui/material";
import Container from "@mui/material/Container";
import {DBCommunication} from "../../lib/DBCommunication";
import {useState} from "react";
import {toast} from 'react-toastify';

const MealCategoryForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image_url, setImage_url] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        const {response, status, message} = await DBCommunication.postMealCategory(name, description, image_url);
        // successfully added meal
        if (response != null) {
            toast.success("Successfully added meal category to database");
            // failed to add meal
        } else {
            toast.error("Failed to add meal category to database: " + message);
        }

    }
    return (
        <Container maxWidth="sm" sx={{p: 2}}>
            <form onSubmit={onSubmit}>

                <Box sx={{border: 1, p: 2}}>
                    <Typography variant="h4" sx={{mb: 2}}>
                        Create Meal Category
                    </Typography>
                    <FormControl>
                        <TextField label="Category name" id='name' variant='outlined' sx={{mb: 2}}
                                   onChange={(e) => setName(e.target.value)}/>
                        <TextField multiline label="Description" id='description' variant='outlined' sx={{mb: 2}}
                                   onChange={e => setDescription(e.target.value)}/>
                        <TextField multiline label="Image URL" id='image_url' variant='outlined' sx={{mb: 2}}
                                   onChange={e => setImage_url(e.target.value)}/>
                        <Button type='submit' variant="contained">Create</Button>
                    </FormControl>
                </Box>
            </form>
        </Container>

    )
};

export default MealCategoryForm;