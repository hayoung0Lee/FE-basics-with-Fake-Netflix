// 장르별로 보여주는 곳
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const BrowseGenreStyle = styled.div`
    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 36px;
    margin-top: 72px;
    margin-left: auto;
    margin-right: auto;
    max-width: 980px;
    height: 500px;
    color: white;
`;

function Genre() {
    let { id } = useParams();
    const location = useLocation();

    return (
        <BrowseGenreStyle>
            <h1>Genre ID: {id}</h1>
            <span>You are currently seeing {location.pathname} page</span>
        </BrowseGenreStyle>
    );
}

export default Genre;
