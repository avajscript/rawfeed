import {Typography, Box, TextField, Chip, Stack, useTheme} from "@mui/material";
import {Search} from "@mui/icons-material";


const MealFilter = ({categories, selectedCategory, selectCategory}) => {
    const theme = useTheme();
    return (
        <Box sx={{display: "flex", flexDirection: "column", mb: 2}}>
            <Box sx={{display: 'flex', alignItems: "center", mb: 2}}>
                <TextField variant="outlined" size="small" sx={{mr: 1}} placeholder="Search..."/>
                <Search fontSize={'medium'}/>
            </Box>

            <Stack direction="row" spacing={1} flexWrap="wrap">
                {categories.map((category, index) => {
                    return (
                        <Chip label={category.name} variant='outlined'

                              onClick={() => selectCategory(category)}
                              sx={{
                                  marginBottom: '8px !important',
                                  backgroundColor: selectedCategory === category ? 'primary.main' : 'white',
                                  color: selectedCategory === category ? 'white' : 'primary.main',
                              }}/>

                    )


                })}
            </Stack>


        </Box>
    )
};

export default MealFilter;