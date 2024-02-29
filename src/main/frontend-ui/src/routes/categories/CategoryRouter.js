import {Route, Routes} from "react-router-dom";
import Categories from "../../pages/categories";

const CategoryRouter = () => {
    return (
        <Routes>
            <Route path="" element={<Categories/>}/>
        </Routes>
    )
};

export default CategoryRouter;
