import styled from '@emotion/styled';
import { css } from '@emotion/react';

const title1 = css`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  width: 247px;
  height: 21px;
  top: 540px;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 150%;
  color: #f5f5f5;
`;

const text1 = css`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  width: 247px;
  height: 82px;
  top: 570px;
  font-weight: 400;
  font-size: 0.7rem;
  line-height: 150%;
  color: #dcdcdc;
`;

const title2 = css`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  width: 247px;
  height: 21px;
  top: 660px;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 150%;
  color: #f5f5f5;
`;

const text2 = css`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  width: 247px;
  height: 35px;
  top: 690px;
  font-weight: 400;
  font-size: 0.7rem;
  line-height: 150%;
  color: #dcdcdc;
`;

export const Nice = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title1 = styled.h1`
  ${title1}
`;
export const Title2 = styled.h1`
  ${title2}
`;
export const Text1 = styled.h2`
  ${text1}
`;
export const Text2 = styled.h2`
  ${text2}
`;
