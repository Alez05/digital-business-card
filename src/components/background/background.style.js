import styled from '@emotion/styled';

const getColor = ({ theme }) => theme.color['harp'];

export const Background = styled.div`
  /* position: absolute; */
  width: 1440px;
  height: 868px;
  background-color: ${getColor};
`;
