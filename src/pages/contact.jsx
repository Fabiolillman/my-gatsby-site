import React from "react"
import styled from 'styled-components';
import SideMenu from "../components/sidemenu"
import { graphql } from "gatsby"
import '../index.css';
// import { Link } from "gatsby";
import TurtleImg from '../images/turtle.svg'

const ContactPage = ({data}) => {
    return (
        <StyledContact>

<div className="tube-upper right"></div>
<div className="drip"></div>
<div className="drip"></div>
<div className="drip"></div>
<div className="drip"></div>

<img src={TurtleImg} alt="turtle" />
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
box-sizing: border-box;

img{
  height: 8vmin;
  /* width: 5vmin; */
  position: absolute;
  bottom: 0;
  left: 31vmin;
}


.tube-upper.right{
  position: absolute;
          top: 0;
          left: 23vmin;
          width: 11vmin;
          height: 4.5vmin;
          background: linear-gradient(217deg, rgba(0,0,0,1) 9%, rgba(0,0,0,0.4290091036414566) 49%, rgba(0,0,0,1) 80%);
      &:after{
      content: "";
      width: 10vmin;
      height: 13vmin;
      border-bottom-right-radius: 30px;
      background: linear-gradient(217deg, rgba(89,83,83,1) 100%, rgba(133,129,129,0.4290091036414566) 49%, rgba(101,99,99,1) 80%);
      position: absolute;
      position: absolute;
      top: 3vmin;
      right: 0vmin;
      transform: rotate(90deg);
     }
}



.drip{
  background-color: rgba(133, 224, 139, 0.922);
  top: 5.5vmin;
  left: 30vmin;
    border-radius: 50%;
    height: 3vmin;
    width: 3vmin;
    position: absolute;
    animation: drip 4s linear infinite;
    z-index: -2;

}

.drip:nth-last-of-type(2){
animation-delay: 1s;
}
.drip:nth-last-of-type(3){
animation-delay: 4s;
}
.drip:nth-last-of-type(3){
animation-delay: 1.3s;
}
.drip:nth-last-of-type(4){
animation-delay: 5s;
}


@keyframes drip {
  0%{
    top: 8vmin;
    left: 23.5vmin;
  }
  55%{
    top: 10vmin;
    left: 35.5vmin;

    opacity: 1;
    animation-timing-function: cubic-bezier(0.24, 0, 0.76, 0.14);
  }
  
  60%{
    animation-timing-function: ease-in;
    top: 11vmin;
   height: 5vmin;
    width: 5vmin;
    /* animation-timing-function: ease-out; */
  }

  70%{
    opacity: 1;
    animation-timing-function: linear;

    /* width: 30px; */
    /* height: 30px; */
    height: 4.5vmin;
    width: 4.5vmin;
  }
  90%{
    top: 90vh;
    opacity: 0.5;
    height: 4vmin;
    width: 4vmin;
  }
  100%{
    top: 85vh;
    width: 0.5vmin;
    height: 0.5vmin;
    opacity: 0;
    animation-timing-function: ease-out;
    
  }


}
















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

@keyframes drip {
  0%{
    top: 8vmin;
    left: 23.5vmin;
  }
  55%{
    top: 10vmin;
    left: 35.5vmin;

    opacity: 1;
    animation-timing-function: cubic-bezier(0.24, 0, 0.76, 0.14);
  }
  
  60%{
    animation-timing-function: ease-in;
    top: 11vmin;
   height: 5vmin;
    width: 5vmin;
    /* animation-timing-function: ease-out; */
  }

  70%{
    opacity: 1;
    animation-timing-function: linear;

    /* width: 30px; */
    /* height: 30px; */
    height: 4.5vmin;
    width: 4.5vmin;
  }
  90%{
    top: 92vh;
    opacity: 0.5;
    height: 4vmin;
    width: 4vmin;
  }
  100%{
    top: 85vh;
    width: 0.5vmin;
    height: 0.5vmin;
    opacity: 0;
    animation-timing-function: ease-out;
    
  }


}
}


@media screen and (max-width: 750px) {
@keyframes drip {
0%{
  top: 8vmin;
  left: 23.5vmin;
}
55%{
  top: 10vmin;
  left: 35.5vmin;

  opacity: 1;
  animation-timing-function: cubic-bezier(0.24, 0, 0.76, 0.14);
}

60%{
  animation-timing-function: ease-in;
  top: 11vmin;
 height: 5vmin;
  width: 5vmin;
}

70%{
  opacity: 1;
  animation-timing-function: linear;
  height: 4.5vmin;
  width: 4.5vmin;
}
90%{
  top: 93vh;
  opacity: 0.5;
  height: 4vmin;
  width: 4vmin;
}
100%{
  top: 90vh;
  width: 0.5vmin;
  height: 0.5vmin;
  opacity: 0;
  animation-timing-function: ease-out;
  
}
}
}

@media screen and (max-width: 620px) {
@keyframes drip {
0%{
  top: 8vmin;
  left: 23.5vmin;
}
55%{
  top: 10vmin;
  left: 35.5vmin;

  opacity: 1;
  animation-timing-function: cubic-bezier(0.24, 0, 0.76, 0.14);
}

60%{
  animation-timing-function: ease-in;
  top: 11vmin;
 height: 5vmin;
  width: 5vmin;
}

70%{
  opacity: 1;
  animation-timing-function: linear;
  height: 4.5vmin;
  width: 4.5vmin;
}
90%{
  top: 95vh;
  opacity: 0.5;
  height: 4vmin;
  width: 4vmin;
}
100%{
  top: 90vh;
  width: 0.5vmin;
  height: 0.5vmin;
  opacity: 0;
  animation-timing-function: ease-out;
  
}
}
}



@media screen and (max-width: 350px) {


@keyframes drip {
0%{
  top: 8vmin;
  left: 23.5vmin;
}
55%{
  top: 10vmin;
  left: 35.5vmin;

  opacity: 1;
  animation-timing-function: cubic-bezier(0.24, 0, 0.76, 0.14);
}

60%{
  animation-timing-function: ease-in;
  top: 11vmin;
 height: 5vmin;
  width: 5vmin;
}

70%{
  opacity: 1;
  animation-timing-function: linear;
  height: 4.5vmin;
  width: 4.5vmin;
}
90%{
  top: 97vh;
  opacity: 0.5;
  height: 4vmin;
  width: 4vmin;
}
100%{
  top: 90vh;
  width: 0.5vmin;
  height: 0.5vmin;
  opacity: 0;
  animation-timing-function: ease-out;
  
}


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