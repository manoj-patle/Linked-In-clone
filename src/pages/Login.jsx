import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import HomePageLogo from '../components/HomePageLogo';
// import { Connect } from 'react-redux';
const Login = () => {
  const [userValue, setUserValue] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const navigation = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const handleSignBtn = () => {
    navigation("/signin");
  };

  const handleSubmit = async () => {
    console.log(userValue);
    createUserWithEmailAndPassword(
      auth,
      userValue.userEmail,
      userValue.userPassword
    )
      .then(async (userCredential) => {
        navigation("/signin");
        console.log(userCredential);
        const user = await userCredential.user;

        updateProfile(user, {
          displayName: userValue.userName,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const SignInwithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((register) => {
        console.log(register);
        navigation("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <Container>
      <Nav>
        <HomePageLogo />
        <div>
          <Join>Join now</Join>
          <SignIn onClick={handleSignBtn}>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Logo>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-logo1.png" alt="" />
        </Logo>
        <Form>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={(e) =>
              setUserValue((prev) => ({ ...prev, userName: e.target.value }))
            }
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setUserValue((prev) => ({ ...prev, userEmail: e.target.value }))
            }
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) =>
              setUserValue((prev) => ({
                ...prev,
                userPassword: e.target.value,
              }))
            }
          />
          <RegisterBtn onClick={handleSubmit}>Register</RegisterBtn>
          <Or>
            <p></p>
            <p>or</p>
            <p></p>
          </Or>
          <Google onClick={() => SignInwithGoogle()}>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};
export const Container = styled.div`
  padding: 0px;
`;
export const Nav = styled.nav`
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
  cursor: pointer;
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
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;
const Logo = styled.div`
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
      /* vertical-align: center; */
    }
  }
  img {
    /* z-index: -1; text should have more prority */
    /* margin-top: 50px; */
    width: 700px;
    height: 560px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    /* @media (max-width: 980px) {
      transition-duration: 200ms;
      width: 600px;
    }
    @media (max-width: 880px) {
      transition-duration: 200ms;
      width: 480px;
    } */
    @media (max-width: 993px) {
      transition-duration: 200ms;
      top: 230px;
      /* width: 400px; */
      width: initial;
      position: initial;
      height: initial;
    }
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
    margin: 0, auto;
  }
`;
const Or = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  vertical-align: center;
  align-items: content;
  p:first-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    width: 46%;
    margin-bottom: 10px;
  }
  p:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    margin-bottom: 10px;
    width: 46%;
  }
`;
export const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  /* justify-content: center; */
  /* vertical-align: center; */
  input {
    font-size: 20px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    height: 45px;
    width: 100%;
    border-radius: 5px;
  }
  input[type="email"]::placeholder,
  input[type="password"]::placeholder,
  input[type="text"]::placeholder {
    text-align: center;
    color: rgba(0, 0, 0, 0.4);
  }
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
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; /* https://getcssscan.com/css-box-shadow-examples */
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

export const RegisterBtn = styled(Google)`
  align-items: center;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  font-weight: 600;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.useState.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    SignInwithGoogle: () => dispatch(signInAPI),
  };
};

// const mapDispatchToProps = (dispatch) => ({});
// // eslint-disable-next-line react-refresh/only-export-components
// export default Connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;
