(function() {
    'use strict';

    angular
        .module('sdsdApp')
        .controller('CgHealthCheckController', CgHealthCheckController);

    CgHealthCheckController.$inject = ['CgHealthService', '$uibModal'];

    function CgHealthCheckController (CgHealthService, $uibModal) {
        var vm = this;

        vm.updatingHealth = true;
        vm.getLabelClass = getLabelClass;
        vm.refresh = refresh;
        vm.showHealth = showHealth;
        vm.baseName = CgHealthService.getBaseName;
        vm.subSystemName = CgHealthService.getSubSystemName;

        vm.refresh();

        function getLabelClass (statusState) {
            if (statusState === 'UP') {
                return 'label-success';
            } else {
                return 'label-danger';
            }
        }

        function refresh () {
            vm.updatingHealth = true;
            CgHealthService.checkHealth().then(function (response) {
                vm.healthData = CgHealthService.transformHealthData(response);
                vm.updatingHealth = false;
            }, function (response) {
                vm.healthData =  CgHealthService.transformHealthData(response.data);
                vm.updatingHealth = false;
            });
        }

        function showHealth (health) {
            $uibModal.open({
                templateUrl: 'app/admin/health/health.modal.html',
                controller: 'HealthModalController',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    currentHealth: function() {
                        return health;
                    },
                    baseName: function() {
                        return vm.baseName;
                    },
                    subSystemName: function() {
                        return vm.subSystemName;
                    }

                }
            });
        }

    }
})();
