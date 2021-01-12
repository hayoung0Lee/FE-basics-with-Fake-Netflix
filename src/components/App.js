// 헤더, 라우터 정의 하는 곳
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import Watch from "./Watch";
import Settings from "./Settings";
import Footer from "./Footer";
import Browses from "./Browse/Browses";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/watch">
          <Watch />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/">
          <Browses />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
