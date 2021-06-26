import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './commons/components/Header';
import Footer from './commons/components/Footer';
import Sneakers from './features/sneakers/containers/Sneakers';
import Senaker from './features/sneakers/containers/Sneaker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="container-app">
                <Header />
                <Switch>
                    <Route path="/sneaker/">
                        <Senaker />
                    </Route>
                    <Route path="/">
                        <Sneakers />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
