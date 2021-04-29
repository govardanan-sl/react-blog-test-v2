import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Create from './component/Create';
import PostDetails from './component/PostDetails';
import NotFound from './component/NotFound';
import Profile from './component/Profile';
import ProfileDetails from './component/ProfileDetails';
import Login from './component/Login/Login';
import Register from './component/Login/Register';
import HomeNew from './component/Home/Home';
import ErrorBoundary from './component/ErrorBoundary/ErrorBoundary';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import UserProfileIDContextProvider from './contexts/UserProfileID';

function App() {
  return (
   <Router>
      <div className="App">
      <UserProfileIDContextProvider>
        <Navbar/>
        <div className="content">
        <ErrorBoundary>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/react-blog-test-v2">
              <HomeNew/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route exact path="/profile/:id">
              <ProfileDetails></ProfileDetails>
            </Route>
            <Route exact path="/profile">
              <Profile/>
            </Route>
            <Route path="/posts/:id">
              <PostDetails></PostDetails>
            </Route>
            <Route path="/new-home">
              <HomeNew/>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </ErrorBoundary>
        </div>
        </UserProfileIDContextProvider>
      </div>
    </Router>
  );
}

export default App;
