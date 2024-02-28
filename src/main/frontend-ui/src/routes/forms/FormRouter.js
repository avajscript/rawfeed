import {Routes, Route} from 'react-router-dom';
import MealForm from "./MealForm";
import Forms from './index';

const FormRouter = () => {
    return (
        <Routes>
            <Route path="" element={<Forms/>}/>
            <Route path="meal" element={<MealForm/>}/>
        </Routes>
    )
};

export default FormRouter;