angular.module("gifApp").controller("SearchController", [
  "GiphyService",
  function(GiphyService) {
    console.log("loaded gif controller");

    var vm = this;

    this.random = function() {
      GiphyService.random().then(function(gif) {
        vm.results = [];
        vm.results.push({ url: gif.image_url });
      });
    };

    this.search = function() {
      GiphyService.search(this.q).then(function(gifs) {
        vm.results = gifs.map(function(gif) {
          return { url: gif.images.fixed_height.url };
        });
        console.log(vm.results);
      });
    };
  }
]);
