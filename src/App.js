import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

import {images} from './constants';

export default function App() {
  return (
    <Wrapper>
       <Spline class="spline" scene="https://prod.spline.design/kPvnge6cNt29sTVz/scene.splinecode" />
       <Content>
        <Menu>
          <li><img src={images.image4} alt="Logo"/></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">Download</a></li>
          <li><a href="/">App</a></li>
          <li><a href="/">Login</a></li>
          <li><button>Get Started</button></li>
        </Menu>
        <h1>Collaborate with people</h1>
        <p>Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
        <button>
         <img src={images.image1} alt="Download"/> Download for Mac 
        </button>
       </Content>
       <Social>
        <div />
        <img src={images.image2} alt="Twitter"/>
        <img src={images.image3} alt="YouTube"/>
       </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'Spline Sans', sans-serif;
  font-size: 16px;
  color: white;
  margin: 0 auto;
  position: relative;


  .spline {
    position: absolute;
    width: 100%;
    margin: 0;
    top: 0;
    right: -10rem;
    z-index: 2;

    @media screen and (max-width: 1640px) {
      transform: scale(1.2) translateX(280px) translateY(-30px);
    }

    @media screen and (max-width: 1440px) {
      transform: scale(1) translateX(280px) translateY(20px);
    }


    @media screen and (max-width: 1024px) {
      transform: scale(0.8) translateX(180px) translateY(80px);
    }

    @media screen and (max-width: 800px) {
      transform: scale(1) translateX(180px);
    }

    @media screen and (max-width: 700px) {
      transform: scale(1) translateX(170px);
    }

    @media screen and (max-width: 600px) {
      transform: scale(1) translateX(600px);
      left: 50%;
      margin-left: -500px;
    }

    @media screen and (max-width: 500px) {
      transform: scale(0.9) translateX(760px) translateY(50px);
      left: 50%;
      margin-left: -600px;
    }

    @media screen and (max-width: 375px) {
      transform: scale(0.8) translateX(760px) translateY(85px);
    }
  }

`;

const Content = styled.div `
  position: absolute;
  top: 90px;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media screen and (max-width: 1024px) {
    gap: 60px;
  }

  h1 {
    font-family: 'Spline Sans Mono', monospace;
    font-size: 70px;
    font-weight: bold;
    margin: 0;
    max-width: 500px;

    @media screen and (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
      padding-top: 50px;
    }

    @media screen and (max-width: 800px) {
   
      font-size: 40px;
      max-width: 300px;
    }

    @media screen and (max-width: 700px) {
      padding-top: 60px;
    }

    @media screen and (max-width: 600px) {
      padding-top: 70px;
    }

  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  h1, p, button {
    margin: 0 30px 0 100px;
  }

  button {
    backdrop-filter: blur(20px);
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    color: white;
    font-size: 16px;
    max-width: 280px;
    padding: 12px 30px;
    transition: 1s;

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

`;

const Menu = styled.ul`

  display: flex;
  gap: 30px;
  align-items: center;
  
  margin: 0 30px 0 100px;
  padding: 0;

  li {
    list-style: none;
    margin: 0;

    button {
      width: 200px;
    }

    a {
      border: 1px solid rgba(255, 255, 255, 0);
      border-radius: 14px;
      color: white;
      padding: 8px 20px;
      text-decoration: none;
      transition: 1s;

      &:hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }

`;

const Social = styled.div`
  
  position: absolute;
  top: 219px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg, 
      #08B6F9 0%, 
      #6C56EF 33.57%, 
      #1306DD 65.86%, 
      #AA0EB2 100%);
  }

`;
