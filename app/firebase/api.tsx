import { db } from '../../firebase';

export const getFirebaseCollection = async (query: string) => {
  return await db
    .collection(query)
    .get()
    .then((querySnapshot) => {
      const newProducts: Product[] = [];
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data(), null, 2)}`);
        newProducts.push({ id: doc.id, ...doc.data() });
      });

      return newProducts;
    });
};
