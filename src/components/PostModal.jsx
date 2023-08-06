import { Close, Image, SmartDisplay, CommentRounded } from '@mui/icons-material';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const PostModal = ({ showModal, handleClick }) => {
  const [editedText, setEditedText] = useState('');

  const reset = (e) => {
    setEditedText('');
    handleClick(e);
  };

  const submitPost = (e) => {
    e.preventDefault();
    alert('post added');
    addDoc(collection(db, 'Posts'), {
      postedBy: 'Manoj',
      postText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      postMessage: 'inputPost',
      photoURL: 'userPhoto URL',
      timeStamp: serverTimestamp(),
      likes: 2,
      comments: [
        {
          by: 'Rishabh',
          comment: 'Great Share',
        },
      ],
    });
  };
  return (
    <>
      {showModal ? (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(e) => reset(e)}>
                <Close />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src="/images/user.svg" alt="" />
                <span>Name</span>
              </UserInfo>
              <Editor>
                <textarea value={editedText} name="editedText" onChange={(e) => setEditedText(e.target.value)} placeholder="Start typing or draft with AI🪄 " autoFocus={true} />
                <UploadImage>
                  <input type="file" accept="image/gif, imahe/jpeg, image/png" name="image" id="file" style={{ display: 'none' }} onChange={() => handleChange()} />
                  <p>
                    <label htmlFor="file">Select an image to share</label>
                  </p>
                </UploadImage>
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachedAsset>
                <AssetBtn>
                  <Image color="action" />
                </AssetBtn>
                <AssetBtn>
                  <SmartDisplay color="action" />
                </AssetBtn>
              </AttachedAsset>
              <ShareComment>
                <AssetBtn>
                  <CommentRounded color="action" />
                  Anyone
                </AssetBtn>
              </ShareComment>
              <PostBtn onClick={submitPost} disabled={!editedText}>
                Post
              </PostBtn>
            </ShareCreation>
          </Content>
        </Container>
      ) : null}
    </>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;
const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    border: none;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    svg,
    img {
      pointer-events: none;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
  align-items: center;
`;
const AssetBtn = styled.button`
  display: flex;
  align-items: center;
  height: 30px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
`;
const AttachedAsset = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetBtn} {
    width: 40px;
    margin: 5px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetBtn} {
    margin-right: 5px;
  }
`;
const PostBtn = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${(props) => (props.disabled ? 'rgba(0,0,0,0.8)' : '#0a66c2')};
  color: white;
  height: 30px;

  &:hover {
    background: ${(props) => (props.disabled ? 'rgba(0,0,0,0.4)' : '#004182')};
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
const UploadImage = styled.div``;
PostModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default PostModal;
