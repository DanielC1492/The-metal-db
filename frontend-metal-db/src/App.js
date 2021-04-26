import {BrowserRouter,Switch, Route} from 'react-router-dom';
import '../src/css/main.css';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Signup from './Containers/Signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/signup' exact component={Signup}/>
          {/* <Route path='/profile' exact component={Profile} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
