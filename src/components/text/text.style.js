import { css } from '@emotion/react';
import styled from '@emotion/styled';

const getName = css`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 382px;
  height: 25.81px;
  font-size: 1.6rem;
  line-height: 30px;
  font-weight: 700;
  color: #ffffff;
`;

const getJob = css`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15px;
  top: 420px;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 15px;
  text-align: center;
  color: #f3bf99;
`;

const Email = css`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 18px;
  top: 445px;
  font-weight: 400;
  font-size: 0.6rem;
  line-height: 150%;
  text-align: center;
  color: #f5f5f5;
`;

export const Text = styled.h1`
  ${getName}
`;
export const Job = styled.h2`
  ${getJob}
`;

export const Mail = styled.h3`
  ${Email}
`;
