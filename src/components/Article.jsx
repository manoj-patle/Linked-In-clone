import { styled } from 'styled-components';
import { ArtCard } from './LeftSideBar';
import { MoreHoriz } from '@mui/icons-material';
import ShareButtons from './ShareButtons';
const Article = () => {
  return (
    <>
      <Airticles>
        <SharedMember>
          <a>
            <img src="/images/user.svg" alt="" />
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </a>
          <button>
            <Ellipse />
          </button>
        </SharedMember>
        <Discription>Post Disc</Discription>
        <SharedImg>
          <a>
            <img src="/images/shared-images.jpg" alt="" />
          </a>
        </SharedImg>
        <SocialCounts>
          <li>
            <span>35 likes</span>
          </li>
          <li>
            <span>3 comments</span>
          </li>
        </SocialCounts>
        <SocialActions>
          <ShareButtons imgSrc="/images/like-icon.svg" PhotoName="Like" />
          <ShareButtons imgSrc="/images/comment-icon.svg" PhotoName="Comment" />
          <ShareButtons imgSrc="/images/repost-icon.svg" PhotoName="Repost" />
          <ShareButtons imgSrc="/images/send-icon.svg" PhotoName="Send" />
        </SocialActions>
      </Airticles>
    </>
  );
};
const Ellipse = styled(MoreHoriz)``;
const Airticles = styled(ArtCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedMember = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;
const Discription = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
  }
`;
const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  /* flex-wrap: wrap; */
  button {
    flex-grow: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    height: 40px;
    border: none;
    flex-wrap: wrap;
    background-color: transparent;
    border-radius: 5px;
    img {
      height: 20px;
    }
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.15);
    }
  }
`;
export default Article;
