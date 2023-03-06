import * as S from './background.style';
import React from 'react';
import { Header } from '../header';
import { Text } from '../text';
import { Button } from '../buttons';

const Background = () => {
  return (
    <S.Background>
      <Header></Header>
      <Text></Text>
      <Button></Button>
    </S.Background>
  );
};

export default Background;
