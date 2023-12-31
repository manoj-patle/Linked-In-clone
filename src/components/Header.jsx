import { styled } from 'styled-components';
import { SearchRounded, SmsRounded, HouseRounded, HailRounded, BusinessCenterRounded, ArrowDropDownRounded, AccountCircleRounded, AppsRounded, NotificationsRounded } from '@mui/icons-material';
import { Link } from "react-router-dom";
import NavOption from "./NavOption";
import { NavList } from "./NavOption";
import { LogoutAPI } from "../API/AuthAPI";
const Header = () => {
  return (
    <>
      <Container>
        <Content>
          <Logo>
            <Link to="/home">
              <img src="/images/home-logo.svg" alt="HomeLogo" />
            </Link>
          </Logo>
          <Search>
            <div>
              <MagnifyIcon />
            </div>
            <div>
              <input type="text" placeholder="Search" />
            </div>
          </Search>
          <Nav>
            <NavListWrapper>
              <NavOption Icon={HouseRounded} iconName="Home" isClass="true" />
              <NavOption Icon={HailRounded} iconName="My Network" />
              <NavOption Icon={BusinessCenterRounded} iconName="Jobs" />
              <NavOption Icon={SmsRounded} iconName="Messaging" />
              <NavOption Icon={NotificationsRounded} iconName="Notifications" />
              <User>
                <Link>
                  <NavUser />
                  <span>
                    Me
                    <NavDown />
                  </span>
                </Link>
                <SignOut>
                  <Link onClick={LogoutAPI}>Sign Out</Link>
                </SignOut>
              </User>
              <Work>
                <Link>
                  <NavWork />
                  <span>
                    For Business
                    <NavDown />
                  </span>
                </Link>
              </Work>
            </NavListWrapper>
          </Nav>
        </Content>
      </Container>
    </>
  );
};
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 3px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const MagnifyIcon = styled(SearchRounded)`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 5px;
  left: 3px;
  border-radius: 0, 2px, 2px, 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.15s;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;
const NavListWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  column-gap: 20px;
  .active {
    span:after {
      content: "";
      transform: scaleX(1.8);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transfrom 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const NavUser = styled(AccountCircleRounded)``;
const NavDown = styled(ArrowDropDownRounded)``;
const NavWork = styled(AppsRounded)``;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0, 0, 5px, 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167s;
  text-align: center;
  display: none;
  a {
    color: rgba(0, 0, 0, 0.6);
    &:hover {
      color: rgba(0, 0, 0, 1);
    }
  }
`;
const User = styled(NavList)`
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;
const Work = styled(User)`
  padding-left: 10px;
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export default Header;
