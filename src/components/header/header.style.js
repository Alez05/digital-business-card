import styled from '@emotion/styled';

export const Header = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 22vw;
  height: 315px;
  top: 44px;
  background: url('/images/background/profile.jpeg');
  background-repeat: no-repeat;
  border-radius: 10px;

  //phone

  @media screen and (min-width: 320px) and (max-width: 480px) {
    background: url('/images/background/profile.jpeg');
    width: 80vw;
    height: 315px;
    background-repeat: no-repeat;
  }

  //tablet
  @media screen and (min-width: 481px) and (max-width: 768px) {
    background-image: url('/images/background/profile.jpeg');
    width: 65vw;
    height: 315px;
    background-repeat: no-repeat;
  }

  //laptop
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    background-image: url('/images/background/profile.jpeg');
    width: 40vw;
    height: 315px;
    background-repeat: no-repeat;
  }
  //desktop
  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    background-image: url('/images/background/profile.jpeg');
    width: 30vw;
    height: 315px;
    background-repeat: no-repeat;
  }
  //large desktop
  /* @media screen and (min-width: 1201px) and (max-width: 1440px) {
    background-image: url('/images/background/profile.jpeg');
    width: 21vw;
    height: 315px;
    background-repeat: no-repeat;
  } */
`;
