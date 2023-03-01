import { css } from '@emotion/react';
import styled from '@emotion/styled';

const getName = css`
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 25.81px;
  top: 382px;
  color: #ffffff;
`;

const getJob = css`
  position: absolute;
  width: 178.06px;
  height: 14.19px;
  left: 186px;
  top: 414px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  color: #f3bf99;
`;

const Email = css`
  position: absolute;
  width: 228px;
  height: 16px;
  left: 161px;
  top: 437px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 150%;
  /* identical to box height, or 15px */
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
