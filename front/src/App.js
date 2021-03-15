import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Auth from './hoc/auth';
import LogOutMain from './components/LogOutMain';
import Main from './components/Main';
import LogInPage from './components/LogInPage';
import SignUpPage from './components/SignUpPage';
import WritePage from './components/WritePage';

const App = () => {
    const [login, setLogin] = useState(false);

    return (
        <Router>
            <Switch>
                {/* {login ? (
                    <Route exact path="/" component={LogInMain} />
                ) : (
                    <Route exact path="/" component={LogOutMain} />
                )} */}
                <Route exact path="/" component={Auth(LogOutMain, false)} />
                <Route exact path="/login" component={Auth(LogInPage, false)} />
                <Route exact path="/signup" component={Auth(SignUpPage, false)} />
                <Route exact path="/main" component={Auth(Main, true)} />
                <Route exact path="/write" component={Auth(WritePage, true)} />
                <Route path="/*">404 Not Found</Route>
            </Switch>
        </Router>
    );
};

export default App;
