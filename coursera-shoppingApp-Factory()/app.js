(function(){
    "use strict";

    angular.module("ControllerAsApp",[])
    .controller ("ShoppingListController1",ShoppingListController1)
    .controller ("ShoppingListController2",ShoppingListController2)
    .factory ("ShoppingListFactory",ShoppingListFactory);



    ShoppingListController1.$inject = ["ShoppingListFactory"]
    function ShoppingListController1(ShoppingListFactory){
        let list1 = this ;

        // Use factory to create new shopping list service
        let ShoppingList = ShoppingListFactory();

        list1.itemName = "" ;
        list1.itemQuantity= "";

        list1.addItem = function(){
            ShoppingList.addItem(list1.itemName, list1.itemQuantity);
        }

        list1.items = ShoppingList.getItems();
       

        list1.removeItem = function(index){
            ShoppingList.removeItem(index)
           };

    }


    ShoppingListController2.$inject = [ "ShoppingListFactory" ];
    function ShoppingListController2(ShoppingListFactory){

        let list2 = this ;

        // Use factory to create new shopping list service
        let ShoppingList = ShoppingListFactory(3);
        list2.itemName = "" ;
        list2.itemQuantity= "";

        list2.addItem = function(){
            try {
                ShoppingList.addItem(list2.itemName,list2.itemQuantity)
            } catch (error) {
                list2.errorMessage = error.message ;
            }
        }

        list2.removeItem = function(index){
         ShoppingList.removeItem(index)
        };

        list2.items = ShoppingList.getItems();


    


    }



    function ShoppingListService (maxItems) {
        let service = this ;

        let items = [] ;

        service.addItem = function (itemName,itemQuantity){
            if(maxItems === undefined || maxItems !== undefined && items.length < maxItems){
                let item = {
                    name: itemName,
                    quantity : itemQuantity
                }
                items.push(item) ;
                console.log(items);
            }else{
                throw new Error("Max items (" + maxItems + ") reached.")
            }

           
        }

        service.getItems = function () {
            return items;
          };

        service.removeItem = function (index){
            items.splice(index,1)
        }
    }


    function ShoppingListFactory(){
        let factory = function (maxItems){
            return new ShoppingListService(maxItems);
        }
        return factory;
    }



})()