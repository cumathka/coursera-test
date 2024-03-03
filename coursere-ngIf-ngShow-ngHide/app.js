(function(){
    "use strict";

    angular.module("ControllerAsApp",[])
    .controller("ShoppingListController",ShoppingListController)
    .provider("ShoppingListService",ShoppingListServiceProvider)
    .config(Config);


    Config.$inject = ["ShoppingListServiceProvider"];
    function Config (ShoppingListServiceProvider){
        ShoppingListServiceProvider.defaults.maxitems = 3;
    };


    ShoppingListController.$inject=["ShoppingListService"];
    function ShoppingListController(ShoppingListService){
        let list = this ;

        list.itemName = "";
        list.itemQuantity ="";

        list.items = ShoppingListService.getItems();

        list.addItem= function(){
           try {
            ShoppingListService.addItem(list.itemName,list.itemQuantity);
           } catch (error) {
            list.errorMessage = error.message
           }
        }

        list.removeItem= function(index){
            ShoppingListService.removeItem(index)
        }
    };
    
    // Service Provider Provider                                                                        

    function ShoppingListService(maxitems){
        let service = this ;
        let items = [] ;

        service.addItem = function(itemName, itemQuantity) {
            if (maxitems === undefined || (maxitems !== undefined && items.length < maxitems)) {
                let item = {
                    name: itemName,
                    quantity: itemQuantity
                };
                items.push(item);
            } else {
                throw new Error("Max items (" + maxitems + ") reached");
            }
        };

        service.removeItem = function(index){
            items.splice(index,1);
        };

        service.getItems = function () {
            return items;
          };
        
    };


    function ShoppingListServiceProvider (){
        let provider = this ;
        provider.defaults = {
            maxitems : 7
        };
        provider.$get = function (){
            let shoppingList = new ShoppingListService(provider.defaults.maxitems);
            return shoppingList
        };
    };

})();