import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Index from './pages/meals';

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/meals" element={<Index/>}/>
                </Routes>
            </Layout>

        </div>
    );
}

export default App;
