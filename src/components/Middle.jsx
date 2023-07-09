import { styled } from 'styled-components';
import { ArtCard } from './LeftSideBar';
import ShareButtons from './ShareButtons';
import Article from './Article';
const Middle = () => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <ShareButtons imgSrc={'/images/photo-icon.svg'} PhotoName={'Photo'} />
          <ShareButtons imgSrc={'/images/video-icon.svg'} PhotoName={'Video'} />
          <ShareButtons imgSrc={'/images/event-icon.svg'} PhotoName={'Event'} />
          <ShareButtons imgSrc={'/images/article-icon.svg'} PhotoName={'Write article'} />
        </div>
      </ShareBox>
      <div>
        <Article />
      </div>
    </Container>
  );
};
const Container = styled.div`
  grid-area: middle;
`;
export const ShareBox = styled(ArtCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.4);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        border: 1px solid rgba(0, 0, 0, 0.15);
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        display: flex;
        flex-direction: row;
        /* flex-wrap: wrap; */
        img {
          margin: 0 4px 0 -2px;
        }
        @media (max-width: 980px) {
          overflow: hidden;
        }
        @media (max-width: 805px) {
          overflow: visible;
        }
      }
    }
  }
`;

export default Middle;
