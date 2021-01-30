import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import Login from './componentes/login/login';
import Maker from './componentes/maker/maker';

function App({FileInput, authService}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/student-management']}>
          <Login authService={authService}/>
        </Route>
        <Route path="/maker">
          <Maker FileInput={FileInput} authService={authService}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
