import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
  ScrollView,
} from 'react-native';
import Card from './Card';
import { products } from '../data/products';

export default function Products() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={styles.container}
        renderItem={({ item }: ListRenderItemInfo<Product>) => (
          <Card
            id={item.id}
            imgSrc={item.imgSrc}
            description={item.description}
            name={item.name}
            price={item.price}
          />
        )}
        keyExtractor={(product) => product.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
