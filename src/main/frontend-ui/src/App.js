import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Index from './pages/meals';
import FormRouter from './routes/forms/FormRouter';
import {ThemeProvider} from "@mui/material";
import customTheme from './lib/customTheme';

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <div className="App">
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/meals" element={<Index/>}/>
                        <Route path="/forms/*" element={<FormRouter/>}/>
                    </Routes>
                </Layout>
            </div>
        </ThemeProvider>

    );
}

export default App;
