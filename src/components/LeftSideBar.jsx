import { styled } from 'styled-components';
import { TurnedInRounded, Add } from '@mui/icons-material';
import { useSelector } from "react-redux";

const LeftSideBar = () => {
  const userData = useSelector((state) => state.currentUser.currentUser);
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>{userData && userData.displayName}</Link>
          </a>
          <a>
            <HeadlineText>
              Business Manager | Sales and Service Operations
            </HeadlineText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>{`Who's viewed your profile`}</span>
            </div>
            <div>{Math.floor(Math.random() * 50)}</div>
          </a>
          <a>
            <div>
              <span>{`Impressions of your post`}</span>
            </div>
            <div>{Math.floor(Math.random() * 20)}</div>
          </a>
        </Widget>
        <Premium>
          <div>Access exclusive tools & insights</div>
          <div>
            <span>
              <img src="\images\RetryPremium.svg" alt="" />
              <p>Network Smarter, Try Premium Free</p>
            </span>
          </div>
        </Premium>
        <Item>
          <span>
            <MyItem />
            My Items
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>
          <span>Recent</span>
        </a>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <AddComponent />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area: leftside;
`;
export const ArtCard = styled.div`
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
  color: rgba(0, 0, 0, 0.7);
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;
const HeadlineText = styled.div`
  color: rgba(0, 0, 0, 0.6);
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
      font-weight: 600;
      font-size: 12px;
      span {
        line-height: 1.33;
        color: rgba(0, 0, 0, 0.6);
      }
      &:last-child {
        color: #0a66c2;
      }
    }
  }
`;
const Premium = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  line-height: 16px;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.4); */
  span {
    display: flex;
    align-items: center;
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
    & > p {
      text-decoration: underline;
      font-weight: 600;
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  &:last-child {
    border-top: 1px solid rgba(0, 0, 0, 0.4);
  }
`;
const Item = styled(Premium)``;
const MyItem = styled(TurnedInRounded)``;
const AddComponent = styled(Add)``;
const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;
    &:hover {
      color: #0a66c2;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:nth-child(3) {
      padding-bottom: 8px;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

export default LeftSideBar;
