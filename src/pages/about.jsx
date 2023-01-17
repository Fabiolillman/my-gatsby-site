import React from "react"
import styled from 'styled-components';
import SideMenu from "../components/sidemenu"
import { graphql } from "gatsby"
// Used to display rich text to correct format
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// This is a comment to test
const AboutPage = ({data}) => {
    return (
        <StyledSideMenu>
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
 <aside className="list-container">
  
  <div className="work wrap">
           <h1>Education</h1>
            {data.allContentfulEducation.nodes.map(node => (
         <article key={node.id}>  
        <h5>{node.title}</h5>
         <p>{node.description}</p>
         <p>{node.year}</p>
        </article>
        ))}
</div>

<div className="education wrap">
<h1>Work Experience</h1>
          {data.allContentfulWorkExperience.nodes.map(node => (
         <article key={node.id}>  
        <h5>{node.title}</h5>
         <p>{node.description}</p>
         <p>{node.year}</p>
        </article>
        ))}
</div>
</aside>
        </StyledSideMenu>
    )
};


const StyledSideMenu = styled.main`
padding: 2rem;
font-size: 1.3rem;
height: 100%;
margin-left: 13rem;
 display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
article{
    width: 50%;
}

article h4{
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

.wrap h1{
margin-bottom: 1rem;
font-size: 1.3rem;
font-size: 1.5vw;
}

.work article, .education article{
  width: 100%;
  height: 10rem;
  box-sizing: contain;
/* background-color: pink; */
border: 1px solid green;
padding: 0.5rem;
margin-bottom: 1rem;
}
.wrap p, .wrap h5{
  font-size: 1rem;
}


@media screen and (max-width: 1090px) {
  .wrap h1{
font-size: 1.4vw;
}
}

@media screen and (max-width: 950px) {

  margin-left: 0;
  width: 100%;
  .wrap h1{
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
  padding: 0;
  .wrap h1{
font-size: 3.2vw;
}
  article{
    width: 90%;
}
.list-container{
  width: 90%;

}
}

@media screen and (max-width: 400px) {

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

export const Head = () => <title>About</title>