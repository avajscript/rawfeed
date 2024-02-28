import {Routes, Route} from 'react-router-dom';
import MealForm from "./MealForm";
import MealCategoryForm from "./MealCategoryForm";
import Forms from './index';

const FormRouter = () => {
    return (
        <Routes>
            <Route path="" element={<Forms/>}/>
            <Route path="meal" element={<MealForm/>}/>
            <Route path="mealCategory" element={<MealCategoryForm/>}/>
        </Routes>
    )
};

export default FormRouter;