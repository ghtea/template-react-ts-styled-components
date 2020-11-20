import styled from 'styled-components';

export const Div__NameApp = styled.div
`
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  
  width: auto; 
  height: 60px;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  & > *:nth-child(1) {
    width: auto;
	}
  & > *:nth-child(2) {
    width: auto;
    color: ${ ({theme})=>theme.color.FullPage.full_page_name_app___font };  
  
	  font-size: 1.6rem;
	  font-weight: bold;
	  
	  margin-left: 10px;
	}
`;


