(function() {
    'use strict';

    angular
        .module('sdsdApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('cg-configuration', {
            parent: 'admin',
            url: '/configuration',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'Configuration'
            },
            views: {
                'content@': {
                    templateUrl: 'app/admin/configuration/configuration.html',
                    controller: 'CgConfigurationController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
