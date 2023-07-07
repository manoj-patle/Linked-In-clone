import React from 'react';
import { styled } from 'styled-components';
import TurnedInRoundedIcon from '@mui/icons-material/TurnedInRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';

const LeftSide = () => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, Manoj Patle</Link>
          </a>
          <a>
            <AddPhotoText>Add Photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Conections</span>
              <span>Grow Network</span>
            </div>
            <AddConnection />
          </a>
        </Widget>
        <Item>
          <span>
            <MyItem />
            My Items
          </span>
        </Item>
      </ArtCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area: leftside;
`;
const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;
const CardBackground = styled.div`
  background: url('/images/card-bg.svg');
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;
const Photo = styled.div`
  box-shadow: none;
  background-image: url('/images/photo.svg');
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  margin: -38px auto 12px;
  background-size: 70%;
  border-radius: 50%;
`;
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;
const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 500;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  padding-top: 12px;
  padding-bottom: 12px;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.33;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
`;
const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
const AddConnection = styled(GroupAddRoundedIcon)``;
const MyItem = styled(TurnedInRoundedIcon)``;

export default LeftSide;
