import { db } from '../../firebase';
import { products } from '../data/products';

export function seedTestDB() {
    products.forEach((product) => {
        db.collection("products").add(product)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    })
}

