import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ListRenderItemInfo,
  Text,
} from 'react-native';
import Card from './Card';
import { getFirebaseCollection } from '../firebase/api';

export default function Products() {
  const [fetchedProducts, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getCollection() {
      const products = await getFirebaseCollection('products');

      setProducts(products);
    }

    getCollection();
  }, []);

  if (!fetchedProducts.length) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={fetchedProducts}
        numColumns={2}
        columnWrapperStyle={styles.container}
        renderItem={({ item }: ListRenderItemInfo<Product>) => (
          <Card
            id={item.id}
            imgSrc={item.imgSrc}
            description={item.description}
            name={item.name}
            price={item.price}
            shop={item.shop}
            product_type={item.product_type}
          />
        )}
        keyExtractor={(product) => product.id || ''}
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
