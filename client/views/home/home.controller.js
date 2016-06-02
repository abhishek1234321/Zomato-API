'use strict';

angular.module('fyle')
  .controller('HomeCtrl', function (getCities, Zomato) {
    var vm = this;

    vm.search = {};
    vm.restaurantList;

    vm.cities = getCities.cities;
  	vm.currentCity = vm.cities[0];

    angular.extend(vm, {
      name: 'HomeCtrl'
    });

    vm.searchZomato = function() {

    	var params = {
    		searchTerm: vm.search.term,
    		cityId: vm.currentCity.value
    	};

    	Zomato.get(params, function(data) {
    		// console.log('search', data);

    		if (data.restaurants.length > 0) {
  				vm.restaurantList = data.restaurants;
    		} else {
    			vm.restaurantList = [];
    		}

    		vm.search.showListing = true;
			});
    };

    vm.searchZomato();
  });
