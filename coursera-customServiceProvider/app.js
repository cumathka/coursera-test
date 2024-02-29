(function(){
    "use strict";

    angular.module("ControllerAsApp",[])
    .controller("ShoppingListController",ShoppingListController)
    .provider("ShoppingListService",ShoppingListServiceProvider)
    .config(Config);

    // change the maxItem 
   Config.$inject = ["ShoppingListServiceProvider"];
   function Config (ShoppingListServiceProvider){
    ShoppingListServiceProvider.default.maxItems=2;
   };

    ShoppingListController.$inject = ["ShoppingListService"];
    function ShoppingListController (ShoppingListService){
        let list = this;
        list.itemName = "";
        list.itemQuantity ="" ;

        list.items = ShoppingListService.getItems();

        list.removeItem = function ( itemIndex){
            ShoppingListService.removeItem(itemIndex);
        };

        list.addItem = function (){
            try {
                ShoppingListService.addItem(list.itemName,list.itemQuantity)
            } catch (error) {
                list.errorMessage = error.message ;
            }
        };

    };



    function ShoppingListService(maxItems){
        let service = this ;
        let items = [];


        service.getItems = function (){
            return items ;
        };

        service.removeItem = function(itemIndex){
            items.splice(itemIndex, 1);
        };


        service.addItem = function(itemName, itemQuantity){
            if (maxItems === undefined || maxItems !== undefined && items.length < maxItems ) {
                let item = {
                    name : itemName,
                    quantity : itemQuantity
                };
                items.push(item);
            } else {
                throw new Error ("max item (" + maxItems + ") reached");
            }
        };




    };



    function ShoppingListServiceProvider (){

        let provider = this ;
        provider.default = {
            maxItems: 5,
        };


       provider.$get = function () {
        let shoppingList = new ShoppingListService(provider.default.maxItems)
        return shoppingList ;

       };
    };





})();