// 헤더, 라우터 정의 하는 곳
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import SearchView from "./Search/SearchView";
import Watch from "./Watch";
import Settings from "./Settings";
import Footer from "./Footer";
import Browses from "./Browse/Browses";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/search">
          <SearchView />
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
