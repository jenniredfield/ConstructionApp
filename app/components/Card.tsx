import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from 'react-native';

const Card = React.memo(function Cart({
  imgSrc,
  description,
  price,
  id,
}: Product) {
  const formattedPrice = '£' + (price / 100).toFixed(2); // move to another place?
  const { width } = useWindowDimensions();
  const halfWidth = width / 2 - 30;

  return (
    <View key={id} style={{ ...styles.container, width: halfWidth }}>
      <Image
        style={{}}
        source={{
          uri: imgSrc,
          width: halfWidth,
          height: halfWidth,
        }}
      ></Image>
      <View style={styles.descriptionContainer}>
        <Text>{description}</Text>
        <Text style={styles.price}>{formattedPrice}</Text>
      </View>
    </View>
  );
});

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 0,
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#808080',
    elevation: 3,
  },
  descriptionContainer: {
    padding: 10
  },
  price: {
    marginTop: 10
  }
});
