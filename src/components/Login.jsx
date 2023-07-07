import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src="/images/login-logo.svg" alt="" />
        </Link>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero1.png" alt="" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};
const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;
const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #8f5849;
    font-weight: 100;
    text-decoration: none;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    /* z-index: -1; text should have more prority */
    margin-top: 50px;
    width: 700px;
    /* height: 600px; */
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 980px) {
      transition-duration: 200ms;
      width: 600px;
    }
    @media (max-width: 880px) {
      transition-duration: 200ms;
      width: 500px;
    }
    @media (max-width: 778px) {
      transition-duration: 200ms;
      top: 230px;
      width: 400px;
      position: initial;
      height: initial;
    }
  }
`;
const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; /* https://getcssscan.com/css-box-shadow-examples */
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.7);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.9);
  }
`;
export default Login;
