import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LogOutMain from './components/LogOutMain';
import LogInMain from './components/LogInMain';
import LogInPage from './components/LogInPage';
import SignUpPage from './components/SignUpPage';

const App = () => {
    const [login, setLogin] = useState(false);

    return (
        <Router>
            <Switch>
                {login ? (
                    <Route exact path="/" component={LogInMain} />
                ) : (
                    <Route exact path="/" component={LogOutMain} />
                )}
                <Route exact path="/login" component={LogInPage} />
                <Route exact path="/signup" component={SignUpPage} />
            </Switch>
        </Router>
    );
};

export default App;
