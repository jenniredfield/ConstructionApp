import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card() {
  return (
    <View>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/bedrosians/image/upload/t_product_detail,f_auto/v1/cdn-bedrosian/assets/products/hiresimages/CERBROSTA410B.jpg',
          width: 200,
          height: 200
        }}
      ></Image>
      <Text>This is description</Text>
      <Text>This price</Text>
    </View>
  );
}
