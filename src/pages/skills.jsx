import { graphql } from "gatsby"
import * as React from "react"
import '../index.css';
import styled from 'styled-components';
import SideMenu from "../components/sidemenu";


const SkillList = ({data}) => {
  return (
    <StyledSkillsList  >
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

     <SideMenu/>
     <article>
     <h3>Skills</h3>
     <div className="skill-wrap">
     {data.allContentfulSkills.nodes.map(node => (

  <div key={node.id} className="skills-container">

    <img src={node.image.url} alt={node.title} />

    <h2>{node.title}</h2>

  </div>

))}
</div>
     </article>

    </StyledSkillsList >
  )
}

export default SkillList
const StyledSkillsList = styled.div`
  margin-left: 13rem;
  height: 100vh;
padding-top: 10rem;
/* overflow: hidden; */
box-sizing: border-box;



.wave{
  width: 50vmin;
  position: absolute;
  top: 0;
  animation: wave 15s infinite linear;
}
.wave:nth-last-of-type(1){
  /* animation-delay: 2s; */
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
    top: 120%;
}
}

.tube.mid{
  z-index: -1;
          overflow: hidden;
          position: fixed;
          box-shadow: 0px 0vmin 1.5vmin 0vmin #0ff;
          background: linear-gradient(90deg, rgba(133,224,139,1) 0%, rgba(0,255,132,0.1) 29%, rgba(0,255,174,0.01) 61%, rgba(67,212,169,1) 100%);
          top: 0;
          left: 23.5vmin;
          width: 10vmin;
          height: 100%;
}

.tube.mid .wave{
transform: rotate(270deg);
left: -18vmin;
  animation: wave2 10s infinite linear;
}

.tube.mid .wave:nth-last-of-type(1){
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


h3{
  padding-bottom: 3rem;
}

.skill-wrap{
    display: grid;
    justify-content: center;
  align-content: center;
  gap: 2.25rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    padding: 2rem 0;
  width: 50rem;
  margin: auto;
  background-color: rgba(0,0,0,0.34);
  border-radius: 10px;
  box-shadow: 2px 5px 28px -4px rgba(0,0,0,0.6);
}

h2{
  text-align: center;
  padding-top: 0.5rem;
  font-size: 1rem;
}
.skills-container{
    align-self: center;
   justify-self: center;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
  width: 2rem;
  /* height: 8.125rem; */
  /* background-color: yellow; */
  /* margin-bottom: 2rem; */

}
img{
  max-width: 4rem;
  max-height: 4rem;
}

/* @media screen and (max-width: 1300px) {
 .skill-wrap{
  width: 75%;
}
} */

@media screen and (max-width: 1010px) {
 .skill-wrap{
  width: 80%;
}
}

@media screen and (max-width: 950px) {
 margin-left: 0;
 width: 100%;
padding-top: 2rem;
 .skill-wrap{
    /* grid-template-columns:  1fr 1fr 1fr; */
  width: 85vw;
}
}
/* comments */
@media screen and (max-width: 700px) {
 .skill-wrap{
  gap: 24px;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(4,1fr);
}
}

@media screen and (max-width: 520px) {

  .skill-wrap{
  gap: 12px;
width: 100vw;
justify-content: center;
}
 .skills-container h2{
font-size: 0.8rem;
}
}
@media screen and (max-width: 360px) {
.skills-container h2{
font-size: 0.7rem;
}
}

@media (max-width: 1024px) and (max-height: 600px) {
  padding-top: 2rem;
  .tube.mid{
          height: 130%;
}
}

@media (max-width: 1280px) and (max-height: 800px) {
  padding-top: 2rem;
}

`

export const query = graphql`
query AllSkills {
    allContentfulSkills {
      nodes {
        title
        slug
        id
        image {
          url
        }
      }
    }
  }
`;


// export const Head = () => <title>Skills</title>
// export const Head = () => <title>Home Page</title>
export const Head = () => (
  <>
  <title>Skill</title>
  <meta name="description" content="Displaying my skills" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
  )