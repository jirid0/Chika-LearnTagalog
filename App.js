import React from 'react';
import Swiper from 'react-native-swiper';
import {Image, Text} from 'react-native';

import { Container,Home,HomeText ,CustomText } from './styles';

export default function App() {
  return (
    <Swiper 
    loop={false}
    index={1} 
    showsPagination={false}
    >
      <Container color='white'>
        <CustomText>Left Menu</CustomText>
      </Container>
      <Home color="#34ebc9">
        <Image source={require('./assets/favicon.png')} />
        <HomeText>Home Screen</HomeText>
      </Home>
      <Container color='white'>
        <CustomText>Right Menu</CustomText>
      </Container>
    </Swiper>
  );
}