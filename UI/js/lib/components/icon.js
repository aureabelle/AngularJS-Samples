angular.module('appIcon', [])
    .directive('icon', function(){
        return {
            scope: {
                name: '@',
                prefix: '@',
                size: '@',
                text: '@',
                type: '@',
                withtext: '@'
            },
            restrict: 'E',
            replace: true,
            link: function(scope, element, attrs){
                element.removeAttr('name')
                       .removeAttr('prefix')
                       .removeAttr('size')
                       .removeAttr('text')
                       .removeAttr('type')
                       .removeAttr('withtext');
            },
            template: '<span class="{{ type }}-{{ size }} {{ prefix }}-{{ name }} {{ withtext }}" title="{{ text }}">' +
                           '<span class="icn"></span>' +
                           '<span class="icn-txt">{{ text }}</span>' +
                       '</span>'
        };
    });