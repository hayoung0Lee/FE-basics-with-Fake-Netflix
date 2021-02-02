import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Main from './BrowseMain';
import Genre from './BrowseGenre';

function Browses({ props }) {
    let match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.path}browse/genre/:id`}>
                <Genre />
            </Route>
            <Route path={`${match.path}browse`}>
                <Main />
            </Route>
            <Route path={match.path}>
                <Main />
            </Route>
        </Switch>
    );
}

export default Browses;
