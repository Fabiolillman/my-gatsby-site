import React from "react"
import styled from 'styled-components';
import SideMenu from "../components/sidemenu"
import { graphql } from "gatsby"
// import { Link } from "gatsby";

const ContactPage = ({data}) => {
    return (
        <StyledContact>
            <SideMenu/>
        
         <section>
         <h3>Contact</h3>
    
        <form method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required/>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" required/>
        <label htmlFor="message">Message</label>
        <textarea type="text-field" id="message" cols="30" rows="10" required/>
        <button>SEND</button>
        {data && data.allContentfulLinks && data.allContentfulLinks.nodes.map(node => (
          <div key={node.id} className="contact-container">
         <p>{node.email}</p>
         <p>{node.phone}</p>
         <a href={node.linkedin} className="Linkedin">Linkedin</a>
         </div>
        ))}
        </form>
        </section>
        </StyledContact>
    )
};


const StyledContact = styled.aside`
  margin-left: 13rem;
  height: 100vh;
padding-top: 10rem;

section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
  width: 55%;
  margin: auto;
}
p{
  padding-top: 1rem;
  text-align: center;
}

form{
  width: 100%;
  display: flex;
  flex-direction: column;
}

label{
  color: #49B047;
  padding-top: 1rem;
}

input{
  box-sizing: border-box;
  padding-left: 0.5rem;
  outline: none;
  height: 2rem;
  border: none;
}
textarea{
  /* width: 100%!important; */
  box-sizing: border-box;
  padding: 0.5rem;
  outline: none;
  resize: none;
  border: none;
}

button{
margin: 1.3rem auto;
border: 1px solid black;
background-color: white;
width: 8rem;
height: 3rem;
font-size: 1.2rem;
text-decoration: none;
text-align: center;
font-family: 'Michroma';
bottom: 0;
color: black;
}

.contact-container{
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.contact-container a{
text-decoration: none;
padding-top: 1rem;
color: white;
}

@media screen and (max-width: 950px) {

  margin-left: 0;
  width: 100%;
  .contact-container{
  flex-direction: column;

}
}

`


export const query = graphql`
query MyQuery {
  allContentfulLinks {
    nodes {
      id
      phone
      linkedin
      email
    }
  }
}
`;

export default ContactPage


// export const Head = () => <title>Contact</title>
export const Head = () => (
  <>
  <title>Contact</title>
  <meta name="description" content="Contact page with contact info" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
  )