import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import {Routes} from "react-router-dom";
import Home from './pages/Home';
import Meals from './pages/Meals';

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}></>
                </Routes>
            </Layout>

        </div>
    );
}

export default App;
