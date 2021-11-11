import * as React from 'react';
import {
  useState,
  // useEffect,
  // useContext,
  // createContext,
} from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
// import axios from 'axios';
import Overview from './05.Overview/Overview';
import Home from './01.Homepage/Home';
import NotFound from './SharedComponents/NotFound/NotFound';
import Navbar from './SharedComponents/02.Navbar/Navbar';
import ProtectedRoute from './SharedComponents/04.ProtectedRoute/ProtectedRoute';
import Login from './03.Login/Login';
import SignUp from './02.Signup/Signup';
import Additionalinfo from './02.Signup/Additional-info';
import Settings from './04.Settings/Settings';
import Footer from './SharedComponents/03.Footer/Footer';
import Header from './SharedComponents/01.Header/Header';
import Goals from './06.Goals/Goals';
import BudgetBreakdown from './07.BudgetBreakdown/BudgetBreakdown';
import Subscriptions from './08.Subscriptions/Subscriptions';
import CreditPayments from './09.CreditPayments/CreditPayments';
import AppContext from './SharedComponents/06.Context/AppContext';
import auth from '../auth/auth';

function App() {
  const [userObj, setUserObj] = useState<any>({
    id: '',
    email: '',
    access_token: '',
    item_id: '',
  });

  return (
    <AppContext.Provider value={{ userObj, setUserObj }}>
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/additional-info" component={Additionalinfo} />
            <div>
              <Header />
              {auth.isAuthenticated()
                ? <Navbar />
                : null}
              <ProtectedRoute path="/home/overview" component={Overview} />
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <ProtectedRoute path="/home/settings" component={Settings} />
              <ProtectedRoute path="/home/goals" component={Goals} />
              <ProtectedRoute path="/home/budget" component={BudgetBreakdown} />
              <ProtectedRoute path="/home/subscriptions" component={Subscriptions} />
              <ProtectedRoute path="/home/credit" component={CreditPayments} />
              <Route exact path="*" component={NotFound} />
              <Footer />
            </div>
          </Switch>
        </div>
      </HashRouter>
    </AppContext.Provider>
  );
}

export default App;
