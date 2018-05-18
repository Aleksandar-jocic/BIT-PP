'use strict';

function Product(name, price, expirationDate) {
    this.productId = parseInt((10000 - 1000) * Math.random() + 10000);
    this.name = name;
    this.price = price;
    this.expirationDate = new Date(expirationDate);

    this.getInfo = function (name) {
        var lastLetter = this.name[this.name.length - 1];
        var firstLetter = this.name[0];
        var info = firstLetter + lastLetter + this.productId + ', ' + this.name + ', ' + price;
        return info
    }


}

function ShoppingBag() {

    this.productList = [];

    this.addProduct = function (Product) {
        var currentDate = new Date();
        if (product.expirationDate > currentDate) {
            this.productList.push(product);
        }
    }
    this.averagePrice = function (Product) {
        var sum = 0;
        for (var i = 0; i < this.productList.length; i++) {
            sum += this.productList[i].price;
        }
        var average = sum / this.productList.length;
        return average
    }
    this.MostExpensive = function () {
        var maxPriceProduct = this.productList[0];
        for (var i = 1; i < this.productList.length; i++) {
            if (maxPriceProduct.price < this.productList[i].price) {
                maxPriceProduct = this.productList[i];
            }
        }

        return maxPriceProduct.getInfo();
    }

    this.totalPrice = function () {
        var sum = 0;
        for (var i = 0; i < this.productList.length; i++) {
            sum += this.productList[i].price;
        }
        return sum
    }
}

var korpa = new ShoppingBag();
console.log(Product);
console.log(banana);
console.log(ShoppingBag);
console.log(korpa);

var banana = new Product("banana", 169, "11 / 12 / 2018");
var apple = new Product("apple", 56, "11 / 12 / 2020");

korpa = new ShoppingBag(apple);





