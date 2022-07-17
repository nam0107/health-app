
import { Route, Switch, BrowserRouter } from "react-router-dom";


import Header from "./component/header";
import Footer from "./component/footer";

import Home from "./container/home";
import MyRecord from "./container/myRecord";
import Column from "./container/column";

import "./styles.module.css";


function Layout() {
  return (
    <BrowserRouter>
      <div className="App">
       <Header/>
        <Switch>
          <Route path={'/myRecord'}>
            <MyRecord />
          </Route>
          <Route path={'/column'}>
            <Column />
          </Route>
          <Route path='*'>
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );

}

export default Layout;
