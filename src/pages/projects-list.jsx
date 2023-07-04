import { graphql } from "gatsby"
import * as React from "react"
import '../index.css';
import styled from 'styled-components';
import SideMenu from "../components/sidemenu";
import APK from '../images/app-release.apk'

const ProjectList = ({data}) => {

  return (
    <StyledProjectList  >
     <SideMenu/>
     <div className="tube-upper right"></div>
     <div className="tube-upper left"></div>
     <div className="tube top">
     <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#85e08b" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#85e08b" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#85e08b" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
<svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#85e08b" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
<svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#85e08b" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
<svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#85e08b" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
      <div className="slime top">
        <div className="tube-goo right"></div>
        <div className="tube-goo left"></div>

      </div>
     </div>
     <div className="tube mid">
           <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#85e08b" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#85e08b" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#85e08b" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
<svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#85e08b" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
<svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#85e08b" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
<svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#85e08b" fillOpacity="1" d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
     <div className="slime mid"></div>
     </div>
     <article>
     <h3>Projects</h3>
     {/* Regular loop through query data */}
     {data.allContentfulProjects.nodes.map(node => (
  <div key={node.id} className="project-container">
    <img src={node.image.url} alt={node.title} />
    <div className="text-wrap">
    <h2>{node.title}</h2>
    <p>{node.description}</p>
    <div className="button-wrap">
    {/* <StyledLink to={`/projects/${node.slug}/`}>More Info</StyledLink> */}
    {/* <a href="link">View site</a> */}
    {node.android &&
          // <a className='android-download' href={node.android.url} target="_blank" rel="noreferrer" aria-label="Download link to the APK file">Download APK file</a>
          <a className='android-download' href={APK} target="_blank" rel="noreferrer" aria-label="Download link to the APK file">Download APK file</a>
        }
    {node.githublink &&
          <a href={node.githublink} target="_blank" rel="noreferrer" aria-label="Link to github code">View code</a>
        }
    {node.linksToPage &&
          <a href={node.linksToPage} target="_blank" rel="noreferrer" aria-label="Link to project live server">View Site</a>
        }

    {/* <a href={node.githublink}>View code</a> */}
    {/* <StyledLink to={`/category/${node.category.category}`}>{node.category.category}</StyledLink> */}
    </div>
    </div>
  </div>
))}

     </article>

    </StyledProjectList >
  )
}

export default ProjectList
const StyledProjectList = styled.aside`
  margin-left: 13rem;
  height: 100vh;


/* Animation Start */




.tube-upper.right{
  position: fixed;
  z-index: -1;
          top: 0;
          right: 0vmin;
          width: 8vmin;
          height: 4.5vmin;
          background: linear-gradient(217deg, rgba(0,0,0,1) 9%, rgba(0,0,0,0.4290091036414566) 49%, rgba(0,0,0,1) 80%);
      &:after{
      content: "";
      width: 10vmin;
      height: 9vmin;
      border-bottom-right-radius: 30px;
      background: linear-gradient(217deg, rgba(89,83,83,1) 9%, rgba(133,129,129,0.4290091036414566) 49%, rgba(101,99,99,1) 80%);
      position: absolute;
      top: 4.5vmin;
      right: 0vmin;
     }
}
.tube-upper.left{
  z-index: -1;
     width: 11vmin;
      height: 11vmin;
      border-top-left-radius: 30px;
      background: linear-gradient(217deg, rgba(89,83,83,1) 9%, rgba(133,129,129,0.4290091036414566) 49%, rgba(101,99,99,1) 80%);
      position: fixed;
      top: 4.5vmin;
      left: 23vmin;
      &:after{
        content: "";
      width: 2vmin;
      height: 9vmin;
      background: linear-gradient(50deg, rgba(89,83,83,1) 9%, rgba(133,129,129,0.4290091036414566) 49%, rgba(101,99,99,1) 80%);
      position: absolute;
      top: 0;
      right: -2vmin;
      }
}

.tube.top{
  z-index: -1;
          overflow: hidden;
          position: fixed;
          box-shadow: 0px 0vmin 1.5vmin 0vmin #0ff;
          background: linear-gradient(180deg, rgba(133,224,139,1) 0%, rgba(0,255,132,0.1) 29%, rgba(0,255,174,0.01) 61%, rgba(67,212,169,1) 100%);
          top: 5vmin;
          right: 10vmin;
          height: 8vmin;
          width: calc(100% - 46vmin);
}

.tube-goo.right{
  position: absolute;
  background: linear-gradient(180deg, rgba(133, 224, 139, 0.922) 6%, rgba(0,255,132,0) 80%);
  top: -2vmin;
          height: 10vmin;
          width: 0.3vmin;
          right: 0vmin;
}
.tube-goo.left{
  position: absolute;
  background: linear-gradient(90deg, rgba(133, 224, 139, 0.922) 6%, rgba(0,255,132,0) 80%);
  top: -2vmin;
          height: 10vmin;
          width: 0.5vmin;
          left: 0vmin;
}

.slime.top{
  position: absolute;
width: 100%;
bottom: 0;
height: 6vmin;
background: linear-gradient(180deg, rgba(0,255,132,0) 10%, rgba(133,224,139,1) 20%);
}

.wave{
  width: 50vmin;
  position: absolute;
  top: 0;
  animation: wave 15s infinite linear;
}

.wave:nth-last-of-type(2){
  animation-delay: 3s;
}
.wave:nth-last-of-type(3){
  animation-delay: 5s;
}
.wave:nth-last-of-type(4){
  animation-delay: 7s;
}
.wave:nth-last-of-type(5){
  animation-delay: 10s;
}
.wave:nth-last-of-type(6){
  animation-delay: 12s;
}

.button-wrap .android-download{
  /* color: red; */
  padding: 0 1rem
}
@keyframes wave {
  0%{
    top: -2vmin;
    right:-40%;}
    5%{
    top: -2vmin;
    right:-50%;}
  45%{
    top: -1vmin;
    right:20%;}
  70%{
    top: 0vmin;
    right:50%;}
  100%{
    top: 0vmin;
    right:100%;}
}

@keyframes wave2 {
  0%{
    top: -20%;
}
  45%{
    top: 20%;
}
  70%{
    top: 40%;
}
  100%{
    top: 100%;
}
}

.tube.mid{
  z-index: -1;
          overflow: hidden;
          position: fixed;
          box-shadow: 0px 0vmin 1.5vmin 0vmin #0ff;
          background: linear-gradient(90deg, rgba(133,224,139,1) 0%, rgba(0,255,132,0.1) 29%, rgba(0,255,174,0.01) 61%, rgba(67,212,169,1) 100%);
          top: 15.5vmin;
          left: 23.5vmin;
          width: 10vmin;
          height: 166vh;
}

.tube.mid .wave{
transform: rotate(270deg);
left: -18vmin;
  animation: wave2 10s infinite linear;
  /* animation-delay: 15s; */
}

.tube.mid .wave:nth-last-of-type(1){
  /* background-color: red; */
  animation-delay: 0.2s;
}
.tube.mid .wave:nth-last-of-type(2){
  animation-delay: 3s;
}
.tube.mid .wave:nth-last-of-type(3){
  animation-delay: 5s;
}
.tube.mid .wave:nth-last-of-type(4){
  animation-delay: 7s;
}
.tube.mid .wave:nth-last-of-type(5){
  animation-delay: 10s;
}
.tube.mid .wave:nth-last-of-type(6){
  animation-delay: 12s;
}
.slime.mid{
  position: absolute;
height: 100%;
top: 0;
right: 0;
width: 6vmin;
background: linear-gradient(90deg, rgba(0,255,132,0) 10%, rgba(133,224,139,1) 20%);
}


/* Animation End */














h3{
  padding: 8rem 0 3rem;
}
article{
  width: 100%;
  padding-bottom: 5rem;
}
.project-container{
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
}
img{
  margin-right: 2rem;
  width: 25rem;
  height: 18rem;
}
.text-wrap{
  /* border: 1px solid white; */
  width: 25rem;
  height: 18rem;
  position: relative;
}
.text-wrap p{
  /* border: 1px solid white; */
  /* width: 25rem;
  height: 18rem;
  position: relative; */
  /* line-height: 3rem; */
  font-size: 1.3rem;
  /* word-spacing: 3px; */
  font-family: 'Times New Roman', Times, serif;
}
article h2{
  padding-bottom: 1rem;  
}

p, h2{
  font-family: 'Michroma';
}
.button-wrap{
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.button-wrap a{
 border: 1px solid white;
background-color: white;
min-width: 9rem;
height: 3.5rem;
font-size: 1.2rem;
text-decoration: none;
text-align: center;
line-height: 3.5rem;
font-family: 'Michroma';
color: black;
box-shadow: 0px 0px 6px 0px rgba(249, 249, 249, 0.75);
&:hover{
  box-shadow: 0px 0px 6px 0px rgba(118, 246, 139, 0.75);
  transition: 0.3s;
  border: 1px solid green;
  background-color: black;
  color: white;
}
}


@media screen and (max-width: 1000px) {
.button-wrap a{
  font-size: 0.9rem;
}
}
@media screen and (max-width: 950px) {
 margin-left: 0;
 width: 100%;
 .tube-upper.left{
      left: 5vmin;
}
 
.tube.top{
          width: calc(100% - 28vmin);
}
 .tube.mid{
          left: 5.5vmin;
}
h3{
  padding: 3rem 0 3rem;
}
 .project-container{
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 4rem;
 }
 img{
  margin-right: 0;
  margin-bottom: 2rem;
 }
}

@media screen and (max-width: 680px) {
  .tube.mid{
          height: 310vh;
}
}


@media screen and (max-width: 500px) {
 .text-wrap, img{
  width: 85%;
}

}

@media screen and (max-width: 440px) {
  .text-wrap{
  /* border: 1px solid white; */
  /* width: 25rem; */
  height: 20rem;
  position: relative;
}

.button-wrap{
  width: 100%;
  /* position: s; */
  position: static;
  margin-top: 2rem;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
}

@media screen and (max-width: 370px) {
.text-wrap{
  height: auto;
  padding-bottom: 3rem;
}
.button-wrap a{
  font-size: 0.8rem;
min-width: 25vmin;
height: 12vmin;
line-height: 12vmin;
}
.button-wrap{
  justify-content: space-around;
}
}

@media screen and (max-width: 350px) {


}

@media (max-width: 1280px) and (max-height: 800px) {
  .tube.mid{
          height: 200%;
}

@media (max-width: 1024px) and (max-height: 600px) {
  padding-right: 1rem;
  .tube.mid{
          height: 272%;
}
}


}

`

// const StyledLink = styled(Link)`
// //add this for actual publishing, and remove category link
// border: 1px solid black;
// background-color: white;
// width: 10rem;
// height: 3.5rem;
// font-size: 1.2rem;
// text-decoration: none;
// text-align: center;
// line-height: 3.5rem;
// font-family: 'Michroma';
// color: black;
// `
export const query = graphql`
query MyQuery {
  allContentfulProjects(sort: {title: DESC}) {
    nodes {
      title
      android {
        url
      }
      description
      slug
      skill
      id
      linksToPage
      githublink
      image {
        url
      }
      category {
        id
        category
      }
    }
  }
}
`;


// export const Head = () => <title>Projects</title>
// export const Head = () => <title>Home Page</title>
export const Head = () => (
  <>
  <title>Projects</title>
  <meta name="description" content="A list of all my projects" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
  )
