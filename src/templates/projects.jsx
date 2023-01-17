import * as React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';
import SideMenu from "../components/sidemenu"


const SingleProjectsPage = ({data}) => { 

 
    const post = data.contentfulProjects
    // const images = post.image.gatsbyImage.images
    // const imageFallback = images.fallback

  return (
    <StyledSingleProduct >
     <article>
     <h3>Projects</h3>
       <SideMenu/>


<picture>
  {/* <source srcSet={imageFallback.srcSet} sizes={imageFallback.sizes} types="image/webp" /> */}
  {/* <img src={post.image.url} alt="" width="1000"/> */}
  {/* Mapthrough img */}
  {post.snapShots.map(pic => (
<img key={pic.id} src={pic.url} alt="" />
        ))}
</picture>
<h2>{post.title}</h2>
<p>{post.description}</p>
<div className="replace-links">
<a href="javascript:void(0)">View Site</a>
</div>
</article>
    </StyledSingleProduct>
  )
}



const StyledSingleProduct = styled.main`
padding: 2rem;
font-size: 1.3rem;
height: 100%;
margin-left: 13rem;
 display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 

article{
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
}

picture{
display:flex;
}

img{
  margin: 0.5rem;
    max-width: 25rem;
    max-height: 25rem;
    object-fit: contain;
  }

h2{
font-size: 1.5rem;
margin-bottom: 3.5rem;
}

p{
    margin-top: 3.5rem;
}

.replace-links a{
  margin-top: 2rem;
  display: block;
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

@media screen and (max-width: 1270px) {
  picture{
margin: 2rem 0;
flex-direction: column;
}
}


@media screen and (max-width: 950px) {
  margin-left: 0;
  padding: 0;
  width: 100%;
.container {
  width: 20rem;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.replace-links{
  margin-bottom: 2rem;
}
}

@media screen and (max-width: 650px) {
  img{
    width: 15rem;
    height: 15rem;
}

}

`

export default SingleProjectsPage

export const query = graphql`
query SingleProjects($slug: String!) {
  contentfulProjects(slug: { eq: $slug }) {
    description
    title
    skill
    image {
      url
            gatsbyImage(
      formats: WEBP
      width: 500
      outputPixelDensities: [1,1])
          }
      snapShots {
            id
            url
          }
    }
}
`;


export const Head = () => <title>Project</title>

