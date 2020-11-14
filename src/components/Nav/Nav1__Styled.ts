import styled, { keyframes } from 'styled-components';

export const Div__Nav1 = styled.div
`
 
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: space-between; align-items: center;
  
  box-sizing: border-box;
  
  width: 100%;
  height: auto;      /* we should let 'Content' know this value too */ 
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  
	@media (min-width: 768px) { // 320≤ XS< 576,   576 ≤ S< 768,   768 ≤ M< 992,   992 ≤ L< 1200,   1200 ≤ XL
    display: none;
	}
  
  & * {
    color: ${ ({theme})=>theme.color.Nav.nav1_bar___font };  
  
  }
`;

const keyframes_RotateIconX = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
`

const keyframes_RotateIconThreeBars = keyframes`
  0% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`



export const Div__Bar = styled.div
`
 
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: space-evenly; align-items: center;
  
  box-sizing: border-box;
  border-bottom: 1px solid ${ ({theme})=>theme.color.Nav.nav1_bar___border };  /* border: 2px dashed #aaa; */

  background-color: ${ ({theme})=>theme.color.Nav.nav1_bar___bg };  
  color: ${ ({theme})=>theme.color.Nav.nav1_bar___font };  
  
  
  width: 100%;
  height: 40px;      /* we should let 'Content', 'Nav1 - Board' know this value too */ 
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  z-index: 100;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  & > div:nth-child(1) {
    width: 40px;
  }
  & > div:nth-child(2) {
    width: calc(100% - 80px);  // 320-80 ~
  }
  & > div:nth-child(3) {
    width: 40px;
    & button .IconX {
      animation: ${keyframes_RotateIconX} 0.4s ease-out 0s 1 normal;
    }
    & button .IconThreeBars {
      animation: ${keyframes_RotateIconThreeBars} 0.4s ease-out 0s 1 normal;
    }
  }
  
  
	@media (min-width: 768px) { // 320≤ XS< 576,   576 ≤ S< 768,   768 ≤ M< 992,   992 ≤ L< 1200,   1200 ≤ XL
    display: none;
	}
  
`;


export const Div__Board = styled.div
`
 
  display: flex;
  flex-flow: column nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  background-color: ${ ({theme})=>theme.color.Nav.nav1_board___bg };  
  
  
  width: 100%;
  height: calc(100vh - 40px);      /* we should let 'Content' know this value too */ 
  font-size: 1rem;
  border-radius: 0px;
  
  position: fixed;
  top: 40px; 
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */

  
	@media (min-width: 768px) { // 320≤ XS< 576,   576 ≤ S< 768,   768 ≤ M< 992,   992 ≤ L< 1200,   1200 ≤ XL
    display: none;
	}
  
  & > div {
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: center; align-items: center;
    
    height: 90px;
    color: ${ ({theme})=>theme.color.Nav.nav1_board___font };  
  }
`;
