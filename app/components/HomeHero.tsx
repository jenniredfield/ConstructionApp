import React from 'react';
import { StyleSheet, View, Image, useWindowDimensions } from 'react-native';

const IMG = 'https://media.istockphoto.com/photos/experienced-engineer-explaining-the-problems-in-construction-works-picture-id1267010934?k=20&m=1267010934&s=612x612&w=0&h=orOoQ1keF4d0axah0pr5HENABscij3Nxg-PKUV_7YK0='

const HomeHero = React.memo(function Header() {
    const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image
        style={{ alignSelf: 'stretch' }}
        source={{
          uri: IMG,
          width: width,
          height: 300,
        }}
      ></Image>
    </View>
  );
});

export default HomeHero;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
