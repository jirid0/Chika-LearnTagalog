import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`;

export const Home = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ color }) => color};
`;

export const CustomText = styled.Text`
  color: black;
  font-size: 30px;
`;

export const HomeText = styled.Text`
  color: white;
  font-size: 30px;
`;