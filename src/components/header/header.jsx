import React from 'react';
import * as S from './header.style';

const Header = ({ children }) => {
  return (
    <>
      <S.Header>{children}</S.Header>
    </>
  );
};

export default Header;
