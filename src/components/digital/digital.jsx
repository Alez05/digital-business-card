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
      <Global />
      <Background>
        <Themes />
        <Header />
        <Text />
        <Button />
        <Body />
      </Background>
      <Footer />
    </>
  );
};

export default Digital;
