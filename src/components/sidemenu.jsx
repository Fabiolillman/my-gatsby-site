import React, {useState,useEffect} from "react"
import styled from 'styled-components';
import { Link } from "gatsby";
import Cross from './../images/Cross.svg'
import Hamburger from './../images/hamburger-menu.svg'

const SideMenu = () => {

const [isOpen, setIsOpen] = useState(false);
// Hamburger menu
useEffect(() => {
    if (window.innerWidth < 950) {
        setIsOpen(false);
    } else {
        setIsOpen(true);
    }
    const handleResize = () => {
        if (prevWidth < 950 && window.innerWidth >= 950) {
            setIsOpen(true);
        } else if (prevWidth >= 950 && window.innerWidth < 950) {
            setIsOpen(false);
        }
        // Store the previous value of window.width
        prevWidth = window.innerWidth;
    };
    // Store the previous value of window.width
    let prevWidth = window.innerWidth;
    // Add eventlisterner to window every time it resizes 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

function toggle() {
  setIsOpen(!isOpen);
}




    return (
        <StyledSideMenu isOpen={isOpen}>
<button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggle}
>
  <svg>
    {/* Hamburger icon */}
  </svg>
</button>
{isOpen && (
    // I'm using an additional wrap to be able to use the property of display for flex on the inner div
    <div className="hide-nav-wrap">
  <nav className="link-wrap">
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/projects-list">Projects</StyledLink>
    <StyledLink to="/skills">Skills</StyledLink>
    <StyledLink to="/contact">Contact</StyledLink>
  </nav>

  <ul className="social-links-container">
                <li >
                    <div className="social-links" href=""></div>
                </li>
                <li>
                    <div  className="social-links" href=""></div>
                </li>
            </ul>
  </div>
  
)}


        </StyledSideMenu>
    )
};


const StyledSideMenu = styled.aside`
width: 13rem;
position: fixed;
height: 100vh;
left: 0;
top: 0;
display: flex;
background-color: #181717;
flex-direction: column;
align-items: center;
justify-content: space-between;

.link-wrap{
    align-self: flex-end;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80%;
}

li{
    display: flex;
    align-items: center;
}


.hide-nav-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

ul::after{
content: "";
display: block;
width: 0.1rem;
height: 6.5rem;
margin: 1rem auto;
background-color: white;
}

.social-links{
    display: block;
    background-color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-top: 1.5rem;
}
svg{
   /* background-color: ; */
    width: 50px;
    height: 50px;
}

.hamburger-button {
    display: none;
  }
@media screen and (max-width: 950px) {
z-index: 99;
width: 50%;
position: fixed;
height: 55px;
width: 55px;
left: 0;
top: 0;

  .hamburger-button {
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: cover;
    //Changes img back to hamburger after screen resize
    background-image: ${({isOpen}) => isOpen ? `url(${Cross})` : `url(${Hamburger})`};
    transition: background-image 0.3s;
    width: 50px;
    height: 50px;
    display: block;
    z-index: 100;
  }

  .hamburger-button.open + .hide-nav-wrap {
display: block;
width: 50%;
position: fixed;
height: 100vh;
left: 0;
top: 0;
display: flex;
background-color: #181717;
flex-direction: column;
align-items: center;
justify-content: space-between;    
  }

  //Blur the 2'nd half of the screen 
  .hamburger-button.open + .hide-nav-wrap::after {
    content: "";
    position: absolute;
    right: -100%;
    width: 100%;
    height: 100vh ;
    backdrop-filter: blur(3px);
  }

  .hide-nav-wrap{
    display: none;

  }
  .link-wrap {
    padding-top: 2rem;
    height: 60%;
  }

  .hamburger-button:not(.open) {
    /* styles for hamburger button when menu is not open */
    /* background-color: red; */
    /* transform: rotate(0deg); */
}
}
`
const StyledLink = styled(Link)`
font-size: 1.6rem;
color: white;
text-decoration: none;
::before{
    content: '<';
}
::after{
    content: '/>';
}
`

export default SideMenu