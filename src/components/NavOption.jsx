import { styled } from 'styled-components';

import PropTypes from 'prop-types';

const NavOption = ({ Icon, iconName, isClass }) => {
  return (
    <>
      <NavList className={isClass ? 'active' : ''}>
        <a>
          <Icon></Icon>
          <span className="active">{iconName}</span>
        </a>
      </NavList>
    </>
  );
};

export const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &.active {
    a {
      span {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;

NavOption.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  iconName: PropTypes.string.isRequired,
  isClass: PropTypes.string,
};
export default NavOption;
