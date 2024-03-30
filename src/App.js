import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Login from './Login';
import { auth } from './firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      dispatch({
        type:"SET_USER",
        user:user
      })
    })
  },[])
  return (
    <Router>
      <Switch>
        {!user?(<Login/>) : (
          <div className="App">
      <div className="app__body">
        <Sidebar />
          <Route exact path='/'>
            <Chat />
          </Route>
          <Route path='/room/:roomId'>
            <Chat/>
          </Route>
      </div>
    </div>

        )}
      
      </Switch>
      
    </Router>
    
  );
}

export default App;
