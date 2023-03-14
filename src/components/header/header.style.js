import styled from '@emotion/styled';

export const Header = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 315px;
  height: 315px;
  top: 44px;
  background: url('/images/background/profile.jpeg');
  background-repeat: no-repeat;
  border-radius: 10px 10px 10px 10px;
  //phone

  /* @media screen and (max-width: 600px) {
    background: url('/images/background/profile.jpeg');
    width: 80vw;
    height: 315px;
    background-repeat: no-repeat;
  } */
  //phone x2
  @media screen and (min-width: 600px) {
    background: url('/images/background/profile.jpeg');
    width: 51vw;
    height: 315px;
    background-repeat: no-repeat;
  }

  //tablet
  @media screen and (min-width: 768px) {
    background-image: url('/images/background/profile.jpeg');
    width: 41vw;
    height: 315px;
    background-repeat: no-repeat;
  }

  //laptop
  @media screen and (min-width: 992px) {
    background-image: url('/images/background/profile.jpeg');
    width: 31vw;
    height: 315px;
    background-repeat: no-repeat;
  }
  //desktop
  @media screen and (min-width: 1200px) {
    background-image: url('/images/background/profile.jpeg');
    width: 22vw;
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
