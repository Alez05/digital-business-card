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

const Body = ({ children, title1, title2, text1, text2 }) => {
  return (
    <>
      <S.Nice>
        {' '}
        {children}
        <S.title1 title1={title1}>{getAbout}</S.title1>
        <S.text1 text1={text1}>{getText1}</S.text1>
        <S.title2 title2={title2}>{getInterest}</S.title2>
        <S.text2 text2={text2}> {getText2}</S.text2>
      </S.Nice>
    </>
  );
};

export default Body;
