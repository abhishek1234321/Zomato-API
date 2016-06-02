;(function() {

  angular
    .module('fyle')
    .factory('getCities', getCities);

  function getCities() {

    var cityList = [
      {
        'name': 'Bangalore',
        'value': 4
      },
      {
        'name': 'New Delhi',
        'value': 1
      },
      {
        'name': 'Mumbai',
        'value': 3
      },
    ];

    return {
      cities: cityList
    };
  }

})();
