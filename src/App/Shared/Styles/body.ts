import styled from 'styled-components';

export const Body: any = styled.div`
    width: 100%;
		max-width: 100vw;
		overflow: auto;
    height: 100%;
    font-size: 16px;
    text-align: center;
    font-family: 'Archivo', sans-serif;  
    text-align: center;

    * {
        /* transition: all .3s ease-in-out; */
    }

    button {
			border-radius: 2px;
    }

    a {
        text-decoration: none;
        // color: inherit;
        &:visited {
            // color: inherit;
        }
    }

    ul {
        list-style-type: square;
    }

    @media screen and (min-width: 360px) {font-size: 12px;}

    @media screen and (min-width: 600px) {font-size: 14px;}

    @media screen and (min-width: 700px) {}

    @media screen and (min-width: 768px) {}

    @media screen and (min-width:920px) {font-size: 15px;}

    @media screen and (min-width: 1000px) {}
`;
