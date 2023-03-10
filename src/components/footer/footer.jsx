import React from 'react';
import * as S from './footer.style';

const Footer = ({
  children,
  Twitter,
  Facebook,
  Instagram,
  Linkdin,
  Whatsapp,
}) => {
  return (
    <S.footEr>
      <S.Twitter Twitter={Twitter}>{children}</S.Twitter>
      <S.Facebook Facebook={Facebook}>{children}</S.Facebook>
      <S.Instagram instagram={Instagram}>{children}</S.Instagram>
      <S.Linkdin Linkedin={Linkdin}>{children}</S.Linkdin>
      <S.Whatsapp Whatsapp={Whatsapp}>{children}</S.Whatsapp>
    </S.footEr>
  );
};

export default Footer;
