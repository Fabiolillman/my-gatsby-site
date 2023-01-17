import { Link, graphql } from "gatsby"
import * as React from "react"
import styled from 'styled-components';
import SideMenu from "../components/sidemenu";


const ProjectList = ({data}) => {
  return (
    <StyledProjectList  >
     <SideMenu/>
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
    <StyledLink to={`/projects/${node.slug}/`}>More Info</StyledLink>
    <a href="">View site</a>
    <StyledLink to={`/category/${node.skill}/`}>{node.skill}</StyledLink>
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
 border: 1px solid black;
background-color: white;
width: 10rem;
height: 3.5rem;
font-size: 1.2rem;
text-decoration: none;
text-align: center;
line-height: 3.5rem;
font-family: 'Michroma';
color: black;
}
@media screen and (max-width: 1000px) {
.button-wrap a{
  font-size: 0.9rem;
}
}
@media screen and (max-width: 950px) {
 margin-left: 0;
 width: 100%;

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
@media screen and (max-width: 500px) {
 .text-wrap, img{
  width: 100%;
}
.button-wrap a{
  font-size: 0.8rem;
}
}
`

const StyledLink = styled(Link)`
//add this for actual publishing, and remove category link
/* position: absolute; */
border: 1px solid black;
background-color: white;
width: 10rem;
height: 3.5rem;
font-size: 1.2rem;
text-decoration: none;
text-align: center;
line-height: 3.5rem;
font-family: 'Michroma';
color: black;
::before{
    /* content: 'Category'; */
    /* padding: 2rem 0; */
    /* color: red; */
}
::after{
    /* content: '/>'; */
    /* color: red; */
}
`
export const query = graphql`
  query MyQuery {
    allContentfulProjects {
      nodes {
        title
        description
        slug
        skill
        id
        image {
          url
        }
      }
    }
  }
`;


export const Head = () => <title>Projects</title>
// export const Head = () => <title>Home Page</title>
