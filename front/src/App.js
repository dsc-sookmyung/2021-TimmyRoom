import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

import Auth from './hoc/auth';
import LogOutMain from './components/LogOutMain';
import Main from './components/Main';
import LogInPage from './components/LogInPage';
import SignUpPage from './components/SignUpPage';
import Chat from './components/Chat'; 
import Need from './components/Need'; 
import ChatWithDev from './components/ChatWithDev'; 
import WritePage from './components/WritePage';
import ListPage from './components/ListPge';
import ViewPage from './components/ViewPage';

const App = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    return (
        <Router>
            <Switch>
                {/* {isLoggedIn ? (
                    <Route exact path="/main" component={Auth(Main, true)} />
                ) : (
                    <Route exact path="/" component={Auth(LogOutMain, false)} />
                )} */}
                <Route exact path="/" component={Auth(LogOutMain, null)} />
                <Route exact path="/login" component={Auth(LogInPage, null)} />
                <Route exact path="/signup" component={Auth(SignUpPage, null)} />
                <Route exact path="/main" component={Auth(Main, null)} />
                <Route exact path="/chat" component={Auth(Chat, null)} />
                <Route exact path="/need" component={Auth(Need, null)} />
                <Route exact path="/chatwithdev" component={Auth(ChatWithDev, null)} />
                <Route exact path="/write" component={Auth(WritePage, null)} />
                <Route exact path="/list" component={Auth(ListPage, null)} />
                <Route exact path="/view" component={Auth(ViewPage, null)} />
                <Route path="/*">404 Not Found</Route>
            </Switch>
        </Router>
    );
};

export default App;
