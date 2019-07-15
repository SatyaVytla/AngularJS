(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyCheckList = this;
  buyCheckList.items = ShoppingListCheckOffService.getBuyCheckList()
  buyCheckList.boughtItem = function (itemIndex) {
  ShoppingListCheckOffService.removeItem(itemIndex);
  if(buyCheckList.items.length === 0){
    buyCheckList.message = "Everything is Bought!";
  }
  }

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItemList = this;
  boughtItemList.message = "Nothing Bought Yet.";
  boughtItemList.items = ShoppingListCheckOffService.getBoughtItems();
  boughtItemList.checkIfEmpty = function () {
  if(boughtItemList.items.length > 0)
    return false;

  else
    return true;

  }

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var checkListItems =[
    {
      itemName:"Cookies",
      itemQuantity:10
    },
    {
      itemName:"Chocolates",
      itemQuantity:6
    },
    {
      itemName:"Bread",
      itemQuantity:2
    },
    {
      itemName:"Cheese",
      itemQuantity:3
    },
    {
      itemName:"Nutella",
      itemQuantity:4
    },
    {
      itemName:"IceCream",
      itemQuantity:5
    },

  ]
  var boughtItems =[];

  service.removeItem = function (itemIndex) {
    boughtItemList.message = "";
    var item = {
      itemName: checkListItems[itemIndex].itemName,
      itemQuantity: checkListItems[itemIndex].itemQuantity
    };
    boughtItems.push(item);
    checkListItems.splice(itemIndex, 1);
  };

  service.getBuyCheckList = function () {
    return checkListItems;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();
