import {
    FormControl,
    InputLabel,
    TextField,
    TextareaAutosize,
    Box,
    Typography,
    Divider,
    Button,
    Autocomplete
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Container from "@mui/material/Container";
import {useEffect, useState} from "react";
import {MEASUREMENTS, COMMON_CURRENCIES} from "../../lib/Constants";
import FoodList from "../../components/food/FoodList";
import {DBCommunication} from "../../lib/DBCommunication";
import {toast} from "react-toastify";

const MUI_CURRENCIES = COMMON_CURRENCIES.map(currency => {
    return {
        label: `(${currency.code}) ` + currency.name,
        id: currency.code
    }
})

const MealForm = () => {
    // meal values
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image_url, setImage_url] = useState("");
    // list of foods
    const [foods, setFoods] = useState([]);
    // current food in form that will be reset when added
    const [food, setFood] = useState({
        name: "",
        quantity: "",
        measurement: "",
        currency: "",
        price: "",
    });

    // used to update values in food state from form
    const updateFood = (key, value) => {
        setFood(prev => {
            return {
                ...prev,
                [key]: value
            }
        });
    }

    // add food to foods array and reset food values to empty
    const addFood = () => {
        // replace empty food values with null
        let foodCopy = food;
        for (const [key, value] of Object.entries(foodCopy)) {
            if (value == "" || value == 0 || value == NaN) {
                foodCopy[key] = null;
            }
        }
        // add the food to foods array
        setFoods(prev => {
            return [...prev, foodCopy];
        });
        // reset food to empty values
        setFood({
            name: "",
            quantity: "",
            measurement: "",
            currency: "",
            price: "",
        });


    }

    // submit the form and add the meal to the database
    const handleSubmit = async (event) => {
        event.preventDefault();
        // structure meal object for post request to database
        const meal = {
            name: name,
            description: description,
            image_url: image_url,
            foods: foods
        };
        const {response, status, message} = await DBCommunication.postMeal(meal);

        if (response != null) {
            toast.success(message);
            // reset meal values and foods to empty array
            setName("");
            setDescription("");
            setImage_url("");
            setFoods([]);
        } else {
            toast.error(message);
        }


    }

    return (
        <Container maxWidth="sm" sx={{p: 2}}>
            <form onSubmit={handleSubmit}>

                <Box sx={{border: 1, p: 2}}>
                    <Typography variant="h4" sx={{mb: 2}}>
                        Create Meal
                    </Typography>
                    <FormControl fullWidth>
                        {/** Start of meal form **/}
                        <TextField label="Meal name" id='name' variant='outlined' sx={{mb: 2}}
                                   value={name} onChange={e => setName(e.target.value)}/>

                        <TextField multiline label="Description" id='description' variant='outlined'
                                   value={description} onChange={e => setDescription(e.target.value)} sx={{mb: 2}}/>
                        <TextField label="Image url" id='image_url' variant='outlined'
                                   value={image_url} onChange={e => setImage_url(e.target.value)} sx={{mb: 2}}/>
                        {/** End of meal form **/}
                        <Divider sx={{mb: 2}}/>

                        {/** Start of food form **/}
                        <Typography variant="h4" sx={{mb: 2}}>
                            Add Food
                        </Typography>
                        <TextField label="Food Name" id='food_name' variant='outlined' sx={{mb: 2}}
                                   value={food.name} onChange={e => updateFood("name", e.target.value)}/>

                        <TextField label="Price" id='price' variant='outlined' sx={{mb: 2}}
                                   value={food.price} onChange={e => updateFood("price", Number(e.target.value))}/>

                        <Autocomplete disablePortal options={MUI_CURRENCIES} id="currency"
                                      value={food.currency}
                                      renderInput={(params) => <TextField {...params} label="Currency"/>}
                                      sx={{mb: 2}} onChange={(e, value) => updateFood("currency", value.id)}
                        />

                        <TextField label="quantity" id='food_quantity' variant='outlined' sx={{mb: 2}}
                                   value={food.quantity}
                                   onChange={e => updateFood("quantity", Number(e.target.value))}/>

                        <Autocomplete disablePortal options={MEASUREMENTS} id="measurement"
                                      value={food.measurement}
                                      renderInput={(params) => <TextField {...params} label="Measurement"/>}
                                      sx={{mb: 2}} onChange={(e, value) => updateFood("measurement", value)}
                        />


                        <Button variant="outlined" startIcon={<AddIcon/>} sx={{mb: 2}} onClick={addFood}>
                            Add Food
                        </Button>
                        {/** End of food form **/}
                        <FoodList
                            foods={foods}
                        />

                        <Button type='submit' variant="contained">Create</Button>

                    </FormControl>
                </Box>
            </form>
        </Container>

    )
};

export default MealForm;