// JavaScript Document
/*  jslint browser:true */
"use strict";

var pizza = {

    // Setting the three properties/variables that make up the pizza object
    crust: "",
    topping: "",
    size: "",

    // Create a method that sets the Crust function
    setCrust: function(value) {
        this.crust = value;
    },
    // Create a method that sets the Topping function
    setTopping: function(value) {
        this.topping = value;
    },
    // Create a method that sets the Size function
    setSize: function(value) {
        this.size = value;
    },
    // Create a method that builds the Pizza function

    buildPizza: function() {
        var statement = "Baking a " + this.size + " pizza on a " + this.crust + " crust with " + this.topping + " and cheese just for you.";
        document.getElementById('message').innerHTML = statement;  
    }, // End of the Method

    // Create a method that displays the shopping list of items to buy for making the pizza
    shoppingList: function(){
        // Setting variables for the amount of cups it takes to build each particular order
        var smallThinPizza = 1;
        var smallThickPizza = 2;
        var largeThinPizza = 2;
        var largeThickPizza = 4;
   
    if (this.size === 'small' && this.crust === 'thin') {
        var list = "You will need to purchase " + smallThinPizza + " cup of flour and 1 lb of " + this.topping;
        document.getElementById('message').innerHTML = list;
    }

    if (this.size === 'small' && this.crust === 'thick') {
        var list = "You will need to purchase " + smallThickPizza + " cups of flour and 1 lb of " + this.topping;
        document.getElementById('message').innerHTML = list;
    }

    if (this.size === 'large' && this.crust === 'thin') {
        var list = "You will need to purchase " + largeThinPizza + " cups of flour and 1 lb of " + this.topping;
        document.getElementById('message').innerHTML = list;
    }

    if (this.size === 'large' && this.crust === 'thick') {
        var list = "You will need to purchase " + largeThickPizza + " cups of flour and 1 lb of " + this.topping;
        document.getElementById('message').innerHTML = list;
    }

    } // End of the Method


}; // End of Object

