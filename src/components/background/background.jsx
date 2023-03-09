import * as S from './background.style';
import React from 'react';
import { Header } from '../header';
import { Text } from '../text';
import { Button } from '../buttons';
import { Body } from '../body';

const Background = () => {
  return (
    <S.Background>
      <Header />
      <Text />
      <Button />
      <Body />
    </S.Background>
  );
};

export default Background;
