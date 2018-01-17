(function () {
    'use strict';

    angular
        .module('sdsdApp')
        .config(materialDesignConfig);

    function materialDesignConfig() {
        // Initialize material design
        $.material.init();
    }
})();
