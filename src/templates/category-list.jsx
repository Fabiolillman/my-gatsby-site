// import * as React from "react"
// import {graphql } from "gatsby"
import { Link, graphql } from "gatsby"
import * as React from "react"
import styled from 'styled-components';
import SideMenu from "../components/sidemenu";

const CategoryListPage = ({data}) => {

  return (

    <StyledProjectList  >
    <SideMenu/>
    <article>
      {/* Get the title of category, 0 cause all the list has the same value regardless */}
    <h3>{data.allContentfulProjects.nodes[0].skill} Projects</h3>
    {data.allContentfulProjects.nodes.map(node => (
 <div key={node.id} className="project-container">
   <img src={node.image.url} alt={node.title} />
   <div className="text-wrap">
   <h2>{node.title}</h2>
   <p>{node.description}</p>
   <div className="button-wrap">
   <StyledLink to={`/projects/${node.slug}/`}>More Info</StyledLink>
   <a href="#">View Site</a>
   {/* <StyledLink to={`/category/${node.skill}/`}>{node.skill}</StyledLink> */}
   </div>
   </div>
 </div>
))}

    </article>

   </StyledProjectList >
  )
}

export default CategoryListPage


const StyledProjectList = styled.aside`
  margin-left: 13rem;
  height: 100vh;
h3{
  padding: 8rem 0 3rem;
}
article{
  width: 100%;
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
  margin-bottom: 2rem;
 }
}

`

const StyledLink = styled(Link)`

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
query ProjectsByCategory($skill: String!) {
    allContentfulProjects(filter: { skill: { eq: $skill } }) {
        nodes {
            title
            description
            slug
            id
            skill
            image {
              url
            }   
          }
    }
  }
`;

export const Head = () => <title>Category</title>