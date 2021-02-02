// 장르별로 보여주는 곳g
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const SettingsStyle = styled.div`
    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 36px;
    margin-top: 72px;
    margin-left: auto;
    margin-right: auto;
    max-width: 980px;
    height: 500px;
    color: white;
`;

function Settings() {
    const location = useLocation();

    return (
        <SettingsStyle>
            <div>
                <span>You are currently seeing {location.pathname} page</span>
            </div>
        </SettingsStyle>
    );
}

export default Settings;
