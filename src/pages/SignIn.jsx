import React, { useState } from 'react';
import { Form, RegisterBtn, Nav } from './Login';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HomePageLogo from '../components/HomePageLogo';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function SignIn() {
  const [inputCredentials, setInputCredentials] = useState({
    inputEmail: '',
    inputPassword: '',
  });

  const navigation = useNavigate();

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, inputCredentials.inputEmail, inputCredentials.inputPassword)
      .then((userCredentials) => {
        navigation('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <Container>
        <HomePageLogo />
        <Form>
          <input type="email" name="email" placeholder="Email" required onChange={(e) => setInputCredentials((prev) => ({ ...prev, inputEmail: e.target.value }))} />
          <input type="password" name="password" placeholder="Password" required onChange={(e) => setInputCredentials((prev) => ({ ...prev, inputPassword: e.target.value }))} />
          <LoginBtn onClick={handleSubmit}>Log In</LoginBtn>
        </Form>
      </Container>
    </>
  );
}

const LoginBtn = styled(RegisterBtn)``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
