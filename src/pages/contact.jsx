import React, {useRef} from "react"
import styled from 'styled-components';
import SideMenu from "../components/sidemenu"
import { graphql } from "gatsby"
import '../index.css';
// import { Link } from "gatsby";
import TurtleImg from '../images/turtle.svg'
import LinkedinIcon from '../images/linkedin-icon.svg'
import EmailIcon from '../images/email-icon.svg'
import emailjs from 'emailjs-com';

const ContactPage = ({data}) => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_EACT_APP_API)
      .then((result) => {
        console.log("IT WORKED")
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  };

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
    
         <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required/>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" required/>
          <label htmlFor="message">Message</label>
          <textarea type="text-field" id="message" cols="30" rows="10" required/>
          <button className="submit-btn" aria-label="Submit form">SEND</button>
          {data && data.allContentfulLinks && data.allContentfulLinks.nodes.map(node => (
            <div key={node.id} className="contact-container">
              {/* <a href='' className="email-btn" aria-label="Link to email form"></a> */}

              <a href={node.linkedin} target="_blank" rel="noreferrer" aria-label="Link to linkedin" className="linkedin-btn"></a>
              <p>{node.phone}</p>
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


.linkedin-btn{
  width: 4rem;
  height: 3rem;
  border-radius: 50%;
  background-image: url(${LinkedinIcon});
  background-repeat: no-repeat;
  background-size: cover;
}

.email-btn{
  width: 4rem;
  height: 3rem;
  border-radius: 50%;
  background-image: url(${EmailIcon});
  background-repeat: no-repeat;
  background-size: cover; 
}



img{
  height: 8vmin;
  position: fixed;
  z-index: -1;
  bottom: 0;
  left: 31vmin;
}


.tube-upper.right{
  position: fixed;
  z-index: -1;
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
    position: fixed;
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

.submit-btn{
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
box-shadow: 0px 0px 6px 0px rgba(249, 249, 249, 0.75);
&:hover{
  box-shadow: 0px 0px 6px 0px rgba(118, 246, 139, 0.75);
  transition: 0.3s;
  border: 1px solid green;
  background-color: black;
  color: white;
}
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
padding-top: 3rem;
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


@media (max-width: 1024px) and (max-height: 600px) {
  padding-top: 3rem;
  /* overflow: hidden; */
}

@media (min-width: 355px) and (min-height: 575px) and (max-width: 500px) {
  /* padding-top: 3rem; */
  section{
    padding: 1rem;
}
}

@media (min-height: 576px) and (max-height: 781px) and (min-width: 951px) {
  padding-top: 0rem;
  

  section{
    padding: 1rem;
}
  img{
  left: 40vmin;
}
.tube-upper.right{
          left: 32vmin; 
}

.drip{
  left: 39vmin;
}

@keyframes drip {
  0%{
    top: 8vmin;
    left: 32.5vmin;
  }
  55%{
    top: 10vmin;
    left: 44.5vmin;

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