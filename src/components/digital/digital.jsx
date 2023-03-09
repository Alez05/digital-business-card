import {
  Background,
  Global,
  Themes,
  Header,
  Text,
  Button,
  Body,
  Footer,
} from '..';
import React from 'react';

const Digital = () => {
  return (
    <>
      <Themes>
        <Global />
        <Background>
          <Header />
          <Text />
          <Button />
          <Body />
        </Background>
        <Footer />
      </Themes>
    </>
  );
};

export default Digital;
