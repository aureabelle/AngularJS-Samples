angular.module('appTooltip', [])
    .directive('tooltip', ['$document', function($document){
        return {
            scope: {text: '@'},
            restrict: 'E',
            replace: true,
            link: function(scope, element, attrs){
                var $body = angular.element( element[0].offsetParent),
                    title = attrs.title;

                element.removeAttr('text');

                attrs.ngMouseenter = function(){
                    var left = angular.element( element[0].offsetLeft ),
                        top = angular.element( element[0].offsetTop),
                        posLeft = left[0]+20,
                        posTop = top[0]+20;

                    $body.append('<div class="tip-box">'+ attrs.title +'</div>');
                    angular.element( element[0].offsetParent.lastChild ).css({ 'top': posTop+'px', 'left': posLeft+'px' });
                    element.removeAttr('title');
                };

                attrs.ngMouseleave = function(){
                    angular.element( element[0].offsetParent.lastChild).remove();
                    element.attr('title', title);

                    $document.unbind('mousemove');
                };

                attrs.ngMousemove = function(){
                    $document.bind('mousemove', mousemove);
                };

                function mousemove($event){
                    var left = $event.pageX + 20, top = $event.pageY + 20;
                    angular.element(element[0].offsetParent.lastChild).css({ 'top': top+'px', 'left': left+'px' });
                }
            },
            template: '<span class="tooltip" data-ng-mouseenter="" data-ng-mouseleave="" data-ng-mousemove="mousemove($event)">{{ text }}</span>'
        };
    }]);