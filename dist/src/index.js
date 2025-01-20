"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const LineItem_1 = require("./LineItem");
console.log("########Order##########");
const product1 = new Product_1.Product("c", "cc", "ccc");
console.log("########Lineitem##########");
const lineitem = new LineItem_1.Lineitem(50, 1000, product1);
