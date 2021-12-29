import {writeBatch, collection, query, where, documentId, getDocs, addDoc, Timestamp} from 'firebase/firestore';
import Swal from 'sweetalert2';
import {db} from './config';

export const generateOrder =  async (values, cart, totalPrice, clear) => {

    const order = {
        buyer: {...values},
        items: cart,
        total: totalPrice(),
        date: Timestamp.fromDate( new Date() )
    }

    const batch = writeBatch(db)

    const ordersRef = collection(db,"orders")
    const productsRef = collection(db, "products")
    const q = query(productsRef, where(documentId(), 'in', cart.map(el => el.id)))

    const outOfStock = []

    const products = await getDocs(q)

    products.docs.forEach((doc) =>{

        const itemToUpdate = cart.find((prod) => prod.id === doc.id);
        
        if(doc.data().stock >= itemToUpdate.counter){
            batch.update(doc.ref, {
                stock: doc.data().stock - itemToUpdate.counter
            })
        } else{
            outOfStock.push(itemToUpdate);
        }

    })

    if(outOfStock.length === 0){
        addDoc(ordersRef, order)
            .then((res) => {
                batch.commit()   
                    Swal.fire({
                        icon: 'success',
                        title: 'Your order has been placed successfully',
                        text: `Your order ID is: #${res.id}`,
                        footer: 'We will contact you very soon to update your order status. Thank you for your purchase!'                       
                    })
                    clear();
            })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'There is no stock available of these products:',
            text: outOfStock.map(el => el.name).join(', ')
        })
    }
    
}