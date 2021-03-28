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
import ListPage from './components/ListPage';
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
                <Route exact path="/" component={Auth(LogOutMain, false)} />
                <Route exact path="/login" component={Auth(LogInPage, false)} />
                <Route exact path="/signup" component={Auth(SignUpPage, false)} />
                <Route exact path="/main" component={Auth(Main, true)} />
                <Route exact path="/chat" component={Auth(Chat, true)} />
                <Route exact path="/need" component={Auth(Need, true)} />
                <Route exact path="/chatwithdev" component={Auth(ChatWithDev, true)} />
                <Route exact path="/chat/write" component={Auth(WritePage, true)} />
                <Route exact path="/need/write" component={Auth(WritePage, true)} />
                <Route exact path="/chatwithdev/write" component={Auth(WritePage, true)} />
                <Route exact path="/chat/list" component={Auth(ListPage, true)} />
                <Route exact path="/need/list" component={Auth(ListPage, true)} />
                <Route exact path="/chatwithdev/list" component={Auth(ListPage, true)} />
                <Route exact path="/view/:id" component={Auth(ViewPage, true)} />
                <Route path="/*">404 Not Found</Route>
            </Switch>
        </Router>
    );
};

export default App;
