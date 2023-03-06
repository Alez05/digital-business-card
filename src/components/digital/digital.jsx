import { Background, Global, Themes, Header, Text, Button } from '..';
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
        </Background>
      </Themes>
    </>
  );
};

export default Digital;
