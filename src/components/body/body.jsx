import React from 'react';
import * as S from './body.style';
import { siteData } from '../../data/site';

const getAbout = siteData.map((get) => {
  return get.about;
});

const getText1 = siteData.map((get) => {
  return get.text1;
});

const getInterest = siteData.map((get) => {
  return get.interest;
});

const getText2 = siteData.map((get) => {
  return get.text2;
});

const Body = ({ children, body, title1, title2, text1, text2 }) => {
  return (
    <S.Nice>
      <S.Title1 title1={title1}>
        {children}
        {getAbout}
      </S.Title1>
      <S.Text1 text1={text1}>
        {children}
        {getText1}
      </S.Text1>
      <S.Title2 title2={title2}>
        {children}
        {getInterest}
      </S.Title2>
      <S.Text2 text2={text2}>
        {children}
        {getText2}
      </S.Text2>
    </S.Nice>
  );
};

export default Body;
