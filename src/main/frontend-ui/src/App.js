import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Index from './pages/meals';
import FormRouter from './routes/forms/FormRouter';
import {Grid, ThemeProvider} from "@mui/material";
import customTheme from './lib/customTheme';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import CategoryRouter from "./routes/categories/CategoryRouter";
import Box from "@mui/material/Box";

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <div className="App">
                <ToastContainer/>
                <Layout>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/meals" element={<Index/>}/>
                            <Route path="/forms/*" element={<FormRouter/>}/>
                            <Route path="/categories/*" element={<CategoryRouter/>}/>
                        </Routes>
                    </Box>
                </Layout>
            </div>
        </ThemeProvider>

    );
}

export default App;
