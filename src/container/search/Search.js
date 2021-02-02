import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PhotoList from '../../component/PhotoList';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SearchStyle = styled.div`
    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 36px;
    margin-top: 72px;
    margin-left: auto;
    margin-right: auto;
    max-width: 980px;
    color: white;
`;

function SearchView() {
    let query = useQuery();
    return (
        <>
            <SearchStyle>
                <p>Your search for "{query.get('q')}" did not have any matches</p>
                <p>Suggestions: 제 친구의 고양이 사진을 보여주려고 합니다. 이름은 유월이에요</p>
            </SearchStyle>
            {/* justified로 보여주는 화면 */}
            <PhotoList />
        </>
    );
}

export default SearchView;
