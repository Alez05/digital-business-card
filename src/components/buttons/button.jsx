import React from 'react';
import * as S from './button.style';
import { siteData } from '../../data/site';

const button = siteData.map((siteData) => {
  return siteData.emailbtn;
});

const Button = ({ children, Button }) => {
  return (
    <>
      <S.Button button={Button}>
        {children}
        {button}
      </S.Button>
    </>
  );
};

export default Button;
