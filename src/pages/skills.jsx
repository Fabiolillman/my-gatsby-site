import { graphql } from "gatsby"
import * as React from "react"
import styled from 'styled-components';
import SideMenu from "../components/sidemenu";


const SkillList = ({data}) => {
  return (
    <StyledSkillsList  >

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
    padding: 2rem;
  width: 55%;
  margin: auto;
  background-color: rgba(0,0,0,0.34);
  border-radius: 10px;
  box-shadow: 2px 5px 28px -4px rgba(0,0,0,0.6);
}

h2{
  padding-top: 0.5rem;
  font-size: 1.2rem;
}
.skills-container{
    align-self: center;
   justify-self: center;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
  width: 130px;
  height: 130px;
  /* background-color: yellow; */
  margin-bottom: 2rem;

}
img{
  max-width: 5.5rem;
  max-height: 5.5rem;
}

@media screen and (max-width: 1300px) {
 .skill-wrap{
  width: 75%;
}
}

@media screen and (max-width: 1000px) {
 .skill-wrap{
  width: 80%;
}
}

@media screen and (max-width: 950px) {
 margin-left: 0;
 width: 100%;

 .skill-wrap{
    grid-template-columns:  1fr 1fr 1fr;
  width: 65%;
}
}

@media screen and (max-width: 700px) {
 .skill-wrap{
    grid-template-columns: 1fr 1fr;
  width: 65%;
}
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


export const Head = () => <title>Skills</title>
// export const Head = () => <title>Home Page</title>
