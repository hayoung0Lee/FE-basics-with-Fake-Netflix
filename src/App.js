// 헤더, 라우터 정의 하는 곳
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './container/Header';
import SearchPage from './container/search/Search';
import Settings from './container/settings/Settings';
import Browses from './container/browse/BrowseRoute';
import { Store } from './utils/store';
import { useState } from 'react';

// 프로젝트의 전체 헤더, 푸터 설정 및 라우터 설정
function App() {
    const [scroll, setScroll] = useState(0);
    return (
        <>
            <Router>
                <Store.Provider
                    value={{
                        scroll: scroll,
                        setScroll: setScroll,
                    }}
                >
                    <Header />
                    <Switch>
                        <Route path="/search">
                            <SearchPage />
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route path="/*" render={({ match }) => <Browses match={match} />}></Route>
                    </Switch>
                </Store.Provider>
            </Router>
        </>
    );
}

export default App;
