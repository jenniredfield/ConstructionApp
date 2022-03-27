import { useState, useEffect } from 'react';
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
import { db } from '../../firebase';

export default function Products() {
  const [fetchedProducts, setProducts] = useState<Product[]>([]);
  console.log("🚀 ~ file: Products.tsx ~ line 16 ~ Products ~ fetchedProducts", fetchedProducts)

  useEffect(() => {
    db.collection('products')
      .get()
      .then((querySnapshot) => {
        const newProducts: Product[] = [];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${JSON.stringify(doc.data(), null, 2)}`);
          newProducts.push({id: doc.id, ...doc.data()})
        });
        setProducts(newProducts);
      });
  }, []);

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
