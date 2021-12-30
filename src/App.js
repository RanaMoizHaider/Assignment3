import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
