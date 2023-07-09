import PropTypes from 'prop-types';
const ShareButtons = ({ imgSrc, PhotoName }) => {
  return (
    <>
      <button>
        <img src={imgSrc} alt="" />
        <span>{PhotoName}</span>
      </button>
    </>
  );
};

ShareButtons.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  PhotoName: PropTypes.string.isRequired,
};

export default ShareButtons;
