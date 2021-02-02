import styled from 'styled-components';

const FooterStyle = styled.div`
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    user-select: none;
    cursor: default;
    font-size: 0.85vw;
    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    max-width: 980px;
    margin: 20px auto 0;
    padding: 0 4%;
    color: grey;
    height: 250px;
`;
function Footer() {
    // eslint-disable-next-line react/no-unescaped-entities
    return <FooterStyle>FakeFlix's Footer</FooterStyle>;
}

export default Footer;
