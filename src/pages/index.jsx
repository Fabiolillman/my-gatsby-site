import * as React from "react"
import SideMenu from "../components/sidemenu"
import '../index.css';
import styled from 'styled-components';
import { graphql } from "gatsby"
// import { useEffect } from "react";



const IndexPage = ({data}) => {


  return (
    <StyledHomeMenu >
      <SideMenu/>
     {data.allContentfulPerson.nodes.map(node => (
  <div key={node.id} className="project-container">



{/* CSS for background animation */}
      <aside>
        <div className="pfp-wrap">
        <div className="container">
          <div className="img-container">
        <img src={node.image.url} alt={node.title} />
        </div>
<div className="main-circle">


<div className="line l2 fade">
  <div className="line "></div>
  <div className="ball b1"></div>
</div>


  <div className="line l1 fade">
    <div className="line "></div>
    <div className="ball b2"></div>
  </div>

   
  <div className="line l3 fade">
    <div className="line "></div>
    <div className="ball b3"></div>
  </div>

 
  <div className="line l4 fade">
    <div className="line "></div>
    <div className="ball b4"></div>
  </div>
 
    
  <div className="line l5 fade">
    <div className="line "></div>
    <div className="ball b5"></div>
  </div>


  <div className="line l6 fade">
    <div className="line "></div>
    <div className="ball b6"></div>
  </div> 
  
 
  <div className="line l7 fade">
    <div className="line "></div>
    <div className="ball b7"></div>
  </div>
 
   
  <div className="line l8 fade">
    <div className="line "></div>
    <div className="ball b8"></div>
  </div>
</div>
</div>
        </div>

        <div className="text-wrap">
          <h1>{node.name} </h1>
          <h2>{node.title}</h2>
          <div className="btn-wrap">
            <div className="background-neon"></div>
          <button className="contact-btn" aria-label="Send">Contact me</button>
          </div>
        </div>
      </aside>
      {/* Loop ends */}
      </div>
))}
    </StyledHomeMenu>
  )
}

export default IndexPage


const StyledHomeMenu = styled.main`
/* background-color: black; */
display: flex;

.project-container{
  margin-left: 13rem;
  width: 100%;
}

.img-container{
  position: absolute;
  z-index: 6;
max-width: 23rem;
max-height: 23rem;
border-radius: 50%;
overflow: hidden;
}

img{
max-width: 23rem;
max-height: 34.5rem;
background-size: contain;
overflow: hidden;
}


.text-wrap{
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1{
  font-size: 4.5rem;
}

h2{
  font-size: 2rem;
  padding: 1rem 0;
}

.btn-wrap{
  position: relative;
  width: 18rem;
  height: 5rem;
}

.background-neon{
  position: absolute;
  width: 18.3rem;
  height: 3.3rem;
  background: linear-gradient(120deg,rgba(0,255,16,1), rgba(0,255,209,1));
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: neon-background 2s infinite alternate;
}

.contact-btn{
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18rem;
  height: 3rem;
  color: white;
  background: #232323;
  &:hover{
    /* color: red; */
    transition: 0.5s;
    box-shadow:
    0 0 12px #fff,
    0 0 1px #fff,
    0 0 5px #fff,
    0 0 12px #0fa,
    0 0 20px #0fa,
    0 0 20px #0fa,
    0 0 30px #0fa,
    0 0 30px #0fa;
  }
}
h2{
text-align: center;
}

@media screen and (max-width: 950px) {
  .project-container{
  margin-left: 0;
  width: 100%;
}

.container {
  width: 20rem;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
}

@keyframes neon-background {
  from { 
    background-position:left top;
    background-size:200% 100%;
  
  }
  49.9% {
    background-position:left top;  
  }
  50% {
    background-size:100% 100%;
  }
  50.1% {
    background-position:right top; 
  }
  to { 
    background-position:right top;
    background-size:200% 200%;
  }
}























.container {
  width: 40rem;
  /* width: 100%; */
  height: 35rem;
  /* margin: auto; */
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 950px) {
.container {
  width: 100%;
  margin: auto;
  box-sizing: border-box;
}
}

@media screen and (max-width: 480px) {
  .main-circle {
  width: 15rem;
  height: 22rem;
}
.container {
  width: 21rem;
  box-sizing: border-box;
}
}

.main-circle {
  position: relative;
  border-radius: 50%;
  width: 30rem;
  height: 30rem;
  /* background-color: teal; */
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 480px) {
  .main-circle {
  width: 15rem;
  height: 22rem;
}
img{
  width: 15rem;
}
.img-container{
  width: 15rem;
  height: 15rem;
}
}
.line {
  background-color: #232323;
  z-index: 2;
  position: absolute;
  width: 0.2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: show 1s infinite;
  transition: opacity 0.3s;

}


.ball {
  opacity: 0;
  position: absolute;
  z-index: 1;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: white;
  animation: ball-movement 3s ease-in-out infinite;
}

.fade {
  animation: fades 1s ease-in;
  animation-fill-mode: forwards;
}

.l2 {
  transform: rotate(90deg);
  animation-delay: 0s;
}

.l1 {
  transform: rotate(180deg);
  animation-delay: 3s;
}

.l3 {
  transform: rotate(135deg);
  animation-delay: 6s;
}

.l4 {
  transform: rotate(45deg);
  animation-delay: 9s;
}

.l5 {
  transform: rotate(112.5deg);
  animation-delay: 12s;
}

.l6 {
  transform: rotate(23.5deg);
  animation-delay: 15s;
}

.l7 {
  transform: rotate(67.5deg);
  animation-delay: 18s;
}

.l8 {
  transform: rotate(157.5deg);
  animation-delay: 21s;
}

.b1 {
  animation-delay: 0s;
}

.b2 {
  animation-delay: 2.3s;
}

.b3 {
  animation-delay: 2.7s;
}

.b4 {
  animation-delay: 0.4s;
}

.b5 {
  animation-delay: 2.85s;
}

.b6 {
  animation-delay: 0.6s;
}

.b7 {
  animation-delay: 0.2s;
}

.b8 {
  animation-delay: 2.5s;
}

@keyframes ball-movement {
  0% {

    opacity: 1;
    display: block;
    top: 0%;
  }

  50% {
    top: 93.5%;
    opacity: 1;
  }

  to {
    top: 0%;
    opacity: 1;
  }
}

@keyframes show {
  from {
    transition: opacity 0.3s;
    opacity: 1;
  }

  to {
    transition: opacity 0.3s;
    opacity: 1;
  }
}

@keyframes fades {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}


@media (max-width: 1024px) and (max-height: 600px) {
.container{
  margin: auto;
}
}

@media (max-width: 1280px) and (max-height: 800px) {
  height: 100vh;
  padding-top: 0;
  margin-bottom: 0;
  margin-top: 0;
.container{
  margin: auto;
}
.pfp-wrap{
  height: 33rem;
}
}

`


export const query = graphql`
query MyQuery {
  allContentfulPerson {
    nodes {
      name
      title
      id
      image {
        url
      }
    }
  }
}
`;


// export const Head = () => <title>Home</title>
//Add meta tags directly here for site description
export const Head = () => (
<>
<title>Home</title>
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
<meta name="description" content="This is a portfolio website" />
<meta name="keywords" content="website, portfolio" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</>
)
