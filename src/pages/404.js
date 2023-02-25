import * as React from "react"
import SideMenu from "../components/sidemenu"
import styled from 'styled-components';
import '../index.css';



const NotFoundPage = () => {
  return (
    <StyledSideMenu >
      <SideMenu/>
    <h1>ERROR 404 No page found</h1>
    <h2>Click links on sidemenu to get back</h2>
  </StyledSideMenu>
  )
}

const StyledSideMenu = styled.main`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export default NotFoundPage

export const Head = () => <title>Not found</title>
