import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import Login from './componentes/login/login';
import Maker from './componentes/maker/maker';

function App({authService}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/student-management']}>
          <Login authService={authService}/>
        </Route>
        <Route path="/maker">
          <Maker authService={authService}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
