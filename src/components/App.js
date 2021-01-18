// 헤더, 라우터 정의 하는 곳
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import SearchView from "./Search/SearchView";
import Watch from "./Watch";
import Settings from "./Settings";
import Browses from "./Browse/Browses";
import Store from "../utils/store";
import { useState } from "react";

function App() {
  const [scroll, setScroll] = useState(0);

  return (
    <Router>
      <Store.Provider
        value={{
          scroll: [scroll, setScroll],
        }}
      >
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
          <Route
            path="/*"
            render={({ match }) => <Browses match={match} />}
          ></Route>
        </Switch>
      </Store.Provider>
    </Router>
  );
}

export default App;
