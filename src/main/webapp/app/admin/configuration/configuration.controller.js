(function() {
    'use strict';

    angular
        .module('sdsdApp')
        .controller('CgConfigurationController', CgConfigurationController);

    CgConfigurationController.$inject = ['$filter','CgConfigurationService'];

    function CgConfigurationController (filter,CgConfigurationService) {
        var vm = this;

        vm.allConfiguration = null;
        vm.configuration = null;

        CgConfigurationService.get().then(function(configuration) {
            vm.configuration = configuration;
        });
        CgConfigurationService.getEnv().then(function (configuration) {
            vm.allConfiguration = configuration;
        });
    }
})();
