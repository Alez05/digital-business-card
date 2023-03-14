import styled from '@emotion/styled';

// const visitPage = () => {
//   window.open();
// };

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 11px 9px 11px;
  gap: 8px;
  position: absolute;
  width: 247px;
  height: 34px;
  top: 480px;
  /* white */
  color: #1a1b21;
  background: #ffffff;
  /* gray/300 */
  border: 1px solid #d1d5db;
  /* shadow/sm */
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  /* icon */
  background-image: url('/images/icons/envelop.svg');
  background-repeat: no-repeat;
  background-position: 37%;
`;
