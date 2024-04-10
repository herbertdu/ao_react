import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';

function App() {
    console.log("test")
    let url = document.location.toString()
    console.log(url)
    return (
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<Home />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
