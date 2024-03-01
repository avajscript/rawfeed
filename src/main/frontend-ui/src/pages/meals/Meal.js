import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme
} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import FoodTable from "../../components/food/FoodTable";
import {useState} from "react";

const Meal = ({meal, firstThreeFoods}) => {
    const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);
    const toggleAccordion = () => {
        setIsAccordionExpanded(prev => !prev);
    }

    const theme = useTheme();
    return (
        <Accordion boxShadow={1} mb={2}
                   expanded={isAccordionExpanded}
                   onChange={toggleAccordion}
                   style={{
                       cursor: 'pointer',
                       backgroundColor: isAccordionExpanded ? theme.palette.background.default : 'white',
                       transition: 'background .25s ease'
                   }}>
            <AccordionSummary
                expandIcon={<ExpandMore/>}
            >

                <ListItem>
                    <ListItemIcon>
                        <img src={`/icons/${meal.image_url}`}/>
                    </ListItemIcon>
                    <ListItemText
                        primary={meal.name}
                        secondary={firstThreeFoods}
                    />
                </ListItem>
            </AccordionSummary>
            <AccordionDetails>
                <FoodTable foods={meal.foods}/>
            </AccordionDetails>

        </Accordion>
    )
};

export default Meal;