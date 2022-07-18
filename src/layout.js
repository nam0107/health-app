
import { Route, Switch, BrowserRouter } from "react-router-dom";


import Header from "./component/header";
import Footer from "./component/footer";

import Home from "./container/home";
import MyRecord from "./container/myRecord";
import Column from "./container/column";

import styles from "./styles.module.css";


function Layout() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className={styles.scrollTopButton} onClick={() => {
          window.scrollTo({top:0,behavior:"smooth"});
        }}>
          <img alt="" className={styles.arrow} src='/images/row.png' />
        </div>
        <Header />
        <Switch>
          <Route path={'/myRecord'}>
            <MyRecord />
          </Route>
          <Route path={'/news'}>
            <Column />
          </Route>
          <Route path='*'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );

}

export default Layout;
