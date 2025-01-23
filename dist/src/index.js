"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const LineItem_1 = require("./LineItem");
const Order_1 = require("./Order");
const Shopping_cart_1 = require("./Shopping_cart");
const WebUser_1 = require("./WebUser");
const products = [
    new Product_1.Product("P001", "ปากกา", "บริษัท A"),
    new Product_1.Product("P002", "ดินสอ", "บริษัท B"),
    new Product_1.Product("P003", "สมุดโน้ต", "บริษัท C"),
    new Product_1.Product("P004", "ยางลบ", "บริษัท D"),
    new Product_1.Product("P005", "สมุดบันทึก", "บริษัท E")
];
console.log("รายการสินค้า:");
for (const product of products) {
    console.log(product.toString());
}
const user1 = new WebUser_1.WebUser("Chitipat", "password123");
const user2 = new WebUser_1.WebUser("Sasicha", "password456");
const cart1 = new Shopping_cart_1.Shopping_cart("2025-01-23");
cart1.addLineItem(new LineItem_1.Lineitem(3, 20, products[0]));
cart1.addLineItem(new LineItem_1.Lineitem(2, 15, products[1]));
const order1 = new Order_1.Order("O001", "2025-01-23", "2025-01-25", "ที่อยู่ 1", "NEW", cart1.calculateTotal());
user2.addOrder(order1);
const cart2 = new Shopping_cart_1.Shopping_cart("2025-01-23");
cart2.addLineItem(new LineItem_1.Lineitem(1, 50, products[2]));
cart2.addLineItem(new LineItem_1.Lineitem(5, 5, products[3]));
const order2 = new Order_1.Order("O002", "2025-01-23", "2025-01-25", "ที่อยู่ 2", "NEW", cart2.calculateTotal());
user2.addOrder(order2);
console.log("\nWebUser 1:");
console.log(user1.toString());
console.log(cart1.toString());
console.log(order1.toString());
console.log("\nWebUser 2:");
console.log(user2.toString());
console.log(cart2.toString());
console.log(order2.toString());
