import { Oder } from "./Order";
import { Product } from './Product';
import { Lineitem } from './LineItem';

console.log("########Order##########");
const product1 = new Product ("c","cc","ccc")
console.log("########Lineitem##########");
const lineitem = new Lineitem(50,1000,product1)
