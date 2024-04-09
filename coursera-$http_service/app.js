(function(){
  "use strict";
  angular.module("MenuCategoriesApp",[])
  .controller("MenuCategoriesController",MenuCategoriesController)
  .service("MenuCategoriesService",MenuCategoriesService);


  MenuCategoriesController.$inject = ["MenuCategoriesService"];
  function MenuCategoriesController(MenuCategoriesService){
    let menu = this ;

    let promise = MenuCategoriesService.getMenuCategories();
    promise.then(function(response){
      menu.categories = response.data;
    })
    .catch(function(error){
      console.log("Samething went terrible wrong");
    });

  };

  MenuCategoriesService.$inject = ["$http"] ;
  function MenuCategoriesService($http){
    let service = this ;

    service.getMenuCategories = function(){
      let response = $http ({
        method : "GET",
        url : ("https://jsonplaceholder.typicode.com/posts")
      })
      return response ;
    }
  }

})();