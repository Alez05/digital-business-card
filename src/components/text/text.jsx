import React from 'react';
import * as S from './text.style';
import { siteData } from '../../data/site';

const name = siteData.map((siteData) => {
  return siteData.name;
});

const job = siteData.map((siteData) => {
  return siteData.job;
});

const Text = ({ getJob, getName, Email, children }) => {
  return (
    <>
      <S.Text getName={getName}>
        {children}
        {name}
      </S.Text>
      {/* <S.Text getJob={getJob}>
        {children}
        {job}
      </S.Text> */}
    </>
  );
};

export default Text;
