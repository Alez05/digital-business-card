import React from 'react';
import * as S from './text.style';
import { siteData } from '../../data/site';

const name = siteData.map((siteData) => {
  return siteData.name;
});

const job = siteData.map((siteData) => {
  return siteData.job;
});

const email = siteData.map((siteData) => {
  return siteData.email;
});

const Text = ({ getJob, getName, Email, children }) => {
  return (
    <>
      <S.Text getName={getName}>
        {children}
        {name}
      </S.Text>
      <S.Job getJob={getJob}>
        {children}
        {job}
      </S.Job>
      <S.Mail Email={Email}>
        {children}
        {email}
      </S.Mail>
    </>
  );
};

export default Text;
