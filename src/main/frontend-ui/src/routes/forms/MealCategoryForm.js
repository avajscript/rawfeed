import {
    FormControl,
    InputLabel,
    TextField,
    TextareaAutosize,
    Box,
    Typography,
    Button,
    Autocomplete
} from "@mui/material";
import Container from "@mui/material/Container";
import {DBCommunication} from "../../lib/DBCommunication";
import {useEffect, useState} from "react";
import {toast} from 'react-toastify';

const MealCategoryForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image_url, setImage_url] = useState('');

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);

    const updateCategory = (categoryName) => {
        const newCategory = categories.find(category => category.name === categoryName);
        setCategory(newCategory);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const {
            response,
            status,
            message
        } = await DBCommunication.postMealCategory(name, description, image_url, category);
        // successfully added meal
        if (response != null) {
            toast.success("Successfully added meal category to database");
            // failed to add meal
        } else {
            toast.error("Failed to add meal category to database: " + message);
        }

    }

    useEffect(() => {
        const fetchMealCategories = async () => {
            const {response, status, message} = await DBCommunication.getMealCategories();
            if (response != null) {
                setCategories(response);
            } else {
                toast.error("Error fetching categories: " + message);
            }
        }
        fetchMealCategories();
    }, []);
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

                        <Autocomplete disablePortal options={categories.map(category => category.name)} id="category"
                                      value={category?.name}
                                      renderInput={(params) => <TextField {...params} label="Category"/>}
                                      sx={{mb: 2}} onChange={(e, value) => updateCategory(value)}
                        />

                        <Button type='submit' variant="contained">Create</Button>
                    </FormControl>
                </Box>
            </form>
        </Container>

    )
};

export default MealCategoryForm;