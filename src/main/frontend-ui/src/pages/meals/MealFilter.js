import {Typography, Box} from "@mui/material";

const MealFilter = ({categories, selectedCategory, selectCategory}) => {
    return (
        <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start"}}>

            {categories.map((category, index) => {
                return (
                    <Box boxShadow={1} mb={1} px={2} py={1} mr={2} onClick={() => selectCategory(category)}
                         sx={{
                             backgroundColor: selectedCategory === category ? 'primary.main' : 'white',
                             color: selectedCategory === category ? 'white' : 'primary.main',
                             cursor: 'pointer', transition: ".25s background-color ease", '&:hover':
                                 {backgroundColor: 'primary.main', color: 'tertiary.main'}
                         }}>
                        <Typography variant="body1">
                            {category.name}
                        </Typography>
                    </Box>
                )

            })}
        </Box>
    )
};

export default MealFilter;