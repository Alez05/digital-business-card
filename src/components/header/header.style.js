import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  min-width: 80vw;
  height: 315px;
  /* left: 39%; */
  /* margin: auto; */
  top: 44px;
  background: url('/images/background/profile.jpeg');
  background-repeat: no-repeat;
  border-radius: 10px 10px 10px 10px;

  @media screen and (min-width: 1440px) {
    background-image: url('/images/background/profile.jpeg');
    min-width: 22vw;
    height: 315px;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1200px) {
    background-image: url('/images/background/profile.jpeg');
    min-width: 26vw;
    height: 315px;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 992px) {
    background-image: url('/images/background/profile.jpeg');
    min-width: 32vw;
    height: 315px;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 768px) {
    background-image: url('/images/background/profile.jpeg');
    min-width: 41vw;
    height: 315px;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 600px) {
    background: url('/images/background/profile.jpeg');
    min-width: 52vw;
    height: 315px;
    background-repeat: no-repeat;
  }
`;
