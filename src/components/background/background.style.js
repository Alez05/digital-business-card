import styled from '@emotion/styled';

const getColor = ({ theme }) => theme.color['harp'];

export const Background = styled.div`
  width: auto;
  height: 868px;
  background-color: ${getColor};
  display: flex;
  justify-content: center;
`;
