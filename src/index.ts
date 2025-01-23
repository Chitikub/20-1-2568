import { Product } from './Product';
import { Lineitem } from './LineItem';
import { Order } from './Order';
import { Shopping_cart } from './Shopping_cart';
import { WebUser } from './WebUser';


const products: Product[] = [
    new Product("P001", "ปากกา", "บริษัท A"),
    new Product("P002", "ดินสอ", "บริษัท B"),
    new Product("P003", "สมุดโน้ต", "บริษัท C"),
    new Product("P004", "ยางลบ", "บริษัท D"),
    new Product("P005", "สมุดบันทึก", "บริษัท E")
];


console.log("รายการสินค้า:");
for (const product of products) {
    console.log(product.toString());
}


const user1 = new WebUser("Chitipat", "password123");
const user2 = new WebUser("Sasicha", "password456");

const cart1 = new Shopping_cart("2025-01-23");
cart1.addLineItem(new Lineitem(3, 20, products[0])); 
cart1.addLineItem(new Lineitem(2, 15, products[1])); 
const order1 = new Order("O001", "2025-01-23", "2025-01-25", "ที่อยู่ 1", "NEW", cart1.calculateTotal());
user2.addOrder(order1);


const cart2 = new Shopping_cart("2025-01-23");
cart2.addLineItem(new Lineitem(1, 50, products[2]));
cart2.addLineItem(new Lineitem(5, 5, products[3]));  
const order2 = new Order("O002", "2025-01-23", "2025-01-25", "ที่อยู่ 2", "NEW", cart2.calculateTotal());
user2.addOrder(order2);


console.log("\nWebUser 1:");
console.log(user1.toString());
console.log(cart1.toString());
console.log(order1.toString());

console.log("\nWebUser 2:");
console.log(user2.toString());
console.log(cart2.toString());
console.log(order2.toString());

