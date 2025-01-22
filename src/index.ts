import { Order } from "./Order";
import { Product } from './Product';
import { Lineitem } from './LineItem';
import { Account } from './Account';
import { Customer } from "./Customer";

console.log("########Order##########");
const product1 = new Product ("c","cc","ccc")
console.log("########Lineitem##########");
const lineitem = new Lineitem(50,1000,product1)

const account1 = new Account ("1","kanchanaburi",false,"open","")