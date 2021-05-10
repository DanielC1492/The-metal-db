import {BrowserRouter,Switch, Route} from 'react-router-dom';
import '../src/css/main.css';
import Band from './Containers/Band/Band';
import Buy from './Containers/Buy/Buy';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Shop from './Containers/Shop/Shop';
import Signup from './Containers/Signup/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/signup' exact component={Signup}/>
          <Route path='/shop' exact component={Shop}/>
          <Route path='/buy' exact component={Buy}/>
          <Route path='/band' exact component={Band}/>
          {/* <Route path='/profile' exact component={Profile} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
