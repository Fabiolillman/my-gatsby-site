import React from "react"
import styled from 'styled-components';
import SideMenu from "../components/sidemenu"
import { graphql } from "gatsby"
import '../index.css';
// Used to display rich text to correct format
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const AboutPage = ({data}) => {
    return (
        <StyledSideMenu>
          
          <div className="tube-upper"></div>
          <div className="connector"></div>
          <div className="drop-tube">
          <div className="dropplets"></div>
          <div className="dropplets"></div>
          <div className="dropplets"></div>
          <div className="dropplets"></div>
          <div className="dropplets"></div>
          <div className="dropplets"></div>
          <div className="dropplets"></div>
          <div className="dropplets"></div>
          <div className="dropplets"></div>
          <div className="dropplets"></div>
          <div className="tube-goo top"></div>
          <div className="tube-goo bot"></div>
          </div>
          <svg>
            <defs>
              <filter id='goo'>
                <feGaussianBlur in='SourceGraphic'
                stdDeviation='10'/>
                <feColorMatrix in='name' mode='matrix'
                values='
                 1 0 0 0 0
                 0 1 0 0 0 
                 0 0 1 0 0
                 0 0 0 30 -25'/>

                 <feBlend in="SourceGraphic"/>

              </filter>
            </defs>
          </svg>

            <SideMenu/>
            {data.allContentfulAbout.nodes.map(node => (
  <article key={node.id}>  

 <h3>{node.siteTitle}</h3>
  <h4>{node.textIntro}</h4>
  {/* Convert rich text to json */}
  <div>{documentToReactComponents(JSON.parse(node.text1.raw))}</div>
 <div>{documentToReactComponents(JSON.parse(node.text2.raw))}</div>
 </article>
 ))}
 {/* <aside className="list-container"> */}
  
  {/* <div className="work wrap">
           <h2>Education</h2>
            {data.allContentfulEducation.nodes.map(node => (
         <article key={node.id}>  
        <h3>{node.title}</h3>
         <p>{node.description}</p>
         <p>{node.year}</p>
        </article>
        ))}
</div> */}

{/* <div className="education wrap">
<h2>Work Experience</h2>
          {data.allContentfulWorkExperience.nodes.map(node => (
         <article key={node.id}>  
        <h3>{node.title}</h3>
         <p>{node.description}</p>
         <p>{node.year}</p>
        </article>
        ))}
</div> */}
{/* </aside> */}
        </StyledSideMenu>
    )
};


const StyledSideMenu = styled.main`
/* Check padding/box-sizing for when releasing the graded version */
/* padding: 2rem; */
text-align: center;
box-sizing: border-box;
font-size: 1.3rem;
min-height: 100vh;
/* margin-left: 5rem; */
 display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
overflow: hidden;


/* TUBE ANIMATION */
        .tube-upper{
          position: absolute;
          top: 0;
          right: 16vmin;
          width: 8vmin;
          height: 23vmin;

 background: linear-gradient(30deg, rgba(0,0,0,1) 9%, rgba(0,0,0,0.0) 49%, rgba(0,0,0,1) 80%);
        border-bottom-left-radius: 30px;
        &:after{
          content: "";
          width: 6vmin;
          height: 8vmin;
          background: linear-gradient(217deg, rgba(0,0,0,1) 9%, rgba(0,0,0,0.4290091036414566) 49%, rgba(0,0,0,1) 80%);
          position: absolute;
          bottom: 0;
          right: -6vmin;
        }
        }
        .drop-tube{
          z-index: -1;
          overflow: hidden;
          position: absolute;
          filter: url('#goo');
          top: 23vmin;
          right: 0;
          width: 8vmin;
          height: 77vmin;
          height: calc(100% - 23vmin);
          background: linear-gradient(90deg, rgba(133,224,139,1) 0%, rgba(0,255,132,0.1) 29%, rgba(0,255,174,0.01) 61%, rgba(67,212,169,1) 100%);
        }

        .connector{
            position: absolute;
            border-top-right-radius: 30px;
          width: 10vmin;
          height: 8vmin;
          background: linear-gradient(217deg, rgba(89,83,83,1) 9%, rgba(133,129,129,0.4290091036414566) 49%, rgba(101,99,99,1) 80%);
          position: absolute;
          top: 15vmin;
          right: 0vmin;
          }
        .tube-goo{
          position: absolute;
          width: 100%;
        }

        .tube-goo.top{
          background: linear-gradient(180deg, rgba(133, 224, 139, 0.922) 6%, rgba(0,255,132,0) 80%);
          height: 2vmin;
        }

        
        .tube-goo.bot{
          bottom: 0;
          background: linear-gradient(180deg, rgba(0,255,132,0) 10%, rgba(133,224,139,1) 20%);
          height: 80%;
        }

.dropplets{
  top:-5%;
  right: 0;
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: rgba(133, 224, 139, 0.922);
  border-radius: 50%;
  animation: drops 15s infinite linear;
}

.dropplets:nth-last-of-type(2n){
  width: 1.5rem;
  height: 1.5rem;
}

.dropplets:nth-last-of-type(3n){
  width: 2.5rem;
  height: 2.5rem;
}

.dropplets:nth-last-of-type(2){
right: 20%;
animation-delay: 1s;
}
.dropplets:nth-last-of-type(3){
right: 30%;
animation-delay: 4s;
}
.dropplets:nth-last-of-type(3){
right: 40%;
animation-delay: 1.3s;
}
.dropplets:nth-last-of-type(4){
right: 50%;
animation-delay: 5s;
}
.dropplets:nth-last-of-type(5){
right: 70%;
animation-delay: 8s;
}

.dropplets:nth-last-of-type(6){
right: 25%;
animation-delay: 5.5s;
}
.dropplets:nth-last-of-type(7){
right: 10%;
animation-delay: 10s;
}

.dropplets:nth-last-of-type(8){
right: 0%;
animation-delay: 14s;
}
.dropplets:nth-last-of-type(9){
right: 60%;
animation-delay: 12s;
}
.dropplets:nth-last-of-type(10){
right: 45%;
animation-delay: 12.9s;
}
@keyframes drops {
  0%{top:-5%;}
  25%{top:40%;}
  50%{top:60%;}
  100%{top:100%;}
}

/* @media screen and (max-width: 970px) {

  .drop-tube{
    height: 100%;
  }
} */
/* TUBE ANIMATION */




article{
    width: 50%;
}

article h4{
  /* text-align: center; */
font-size: 1.5rem;
margin: 3.5rem 0;
}
article p{
    margin-top: 2rem;
}

.list-container{
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.wrap{
  height: 100%;
  width: 45%;
}

.wrap h2{
margin-bottom: 1rem;
font-size: 1.3rem;
font-size: 1.5vw;
}

.work article, .education article{
  width: 100%;
  height: 10rem;
  box-sizing: contain;
border: 1px solid green;
padding: 0.5rem;
margin-bottom: 1rem;
}
.wrap p, .wrap h3{
  text-align: start;
  font-size: 1rem;
}


@media screen and (max-width: 1090px) {
  .wrap h2{
font-size: 1.4vw;
}
}

@media screen and (max-width: 950px) {

  margin-left: 0;
  width: 100%;
  .wrap h2{
font-size: 1.8vw;
}
.container {
  width: 20rem;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
article{
    width: 70%;
}
.list-container{
  width: 70%;

}
}

@media screen and (max-width: 650px) {
  padding: 0 1.3rem;
  .wrap h2{
font-size: 2.7vw;
}

  article{
    width: 90%;
}

.list-container{
  width: 100%;
}

}

@media screen and (max-width: 460px) {
.work article, .education article{
 height: auto;
}

}

`



export const query = graphql`
query MyQuery {
  allContentfulEducation {
    nodes {
      id
      description
      title
      year
    }
  }
  allContentfulAbout {
    nodes {
      siteTitle
      textIntro
      id
      text1 {
        raw
      }
      text2 {
        raw
      }
    }
  }
  allContentfulWorkExperience {
    nodes {
      id
      title
      year
      description
    }
  }
}
`;


export default AboutPage

// export const Head = () => <title>About</title>
export const Head = () => (
  <>
  <title>About</title>
  <meta name="description" content="About page talking about me as a person" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
  )