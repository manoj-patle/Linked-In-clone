import PropTypes from 'prop-types';
import { styled } from 'styled-components';
const ShareButtons = ({ imgSrc, PhotoName }) => {
  return (
    <>
      <Button>
        <img src={imgSrc} alt="" />
        <span>{PhotoName}</span>
      </Button>
    </>
  );
};
const Button = styled.button``;
ShareButtons.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  PhotoName: PropTypes.string.isRequired,
};

export default ShareButtons;
