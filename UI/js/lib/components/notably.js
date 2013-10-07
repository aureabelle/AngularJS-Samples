angular.module('appNotably', [])
    .directive('notably', ['$document', '$window', function($document, $window){
        return {
            scope: {
                title: '@',
                content: '@'
            },
            transclude: true,
            replace: true,
            restrict: 'E',
            link: function(scope, element, attrs){
                var $body = angular.element( element[0].offsetParent),
                    title = attrs.title,
                    content = attrs.content,
                    template = '<div class="notably-box">' +
                                    '<div class="notably-header">' +
                                        '<h6>'+ title +'</h6>' +
                                        '<a href="#" class="icon-16 icn-close icon-only close-notably" data-ng-click="click($event)"><span class="icn"></span><span class="icn-txt">Close</span></a>' +
                                    '</div>' +
                                    '<div class="notably-content">'+ attrs.content +'</div>' +
                                '</div>';

                element.removeAttr('title')
                       .removeAttr('content');

                attrs.ngClick = function(){
                    var left = angular.element( element[0].offsetLeft ),
                        top = angular.element( element[0].offsetTop),
                        posLeft = left[0],
                        posTop = top[0];

                    if( element[0].offsetParent.lastChild.className === 'notably-box'){
                        var notablyBox = element[0].offsetParent.lastChild;
                        angular.element( notablyBox ).remove();

                        createBox( $body, template, element[0], posTop, posLeft );
                        angular.element( $window ).bind('resize', resizeWindow);

                    }else if( element[0].offsetParent.lastChild.className != 'notably-box' || element[0].offsetParent.lastChild.className == 'undefined' ){
                        createBox( $body, template, element[0], posTop, posLeft );
                        angular.element( $window ).bind('resize', resizeWindow);
                    }
                };

                // Create the box
                function createBox(theBody, theTemplate, el, topPos, leftPos){
                    theBody.append(theTemplate);

                    var notablyBox = el.offsetParent.lastChild,
                        closeBox = el.offsetParent.lastChild.children[0].children[1],
                        boxHeight = notablyBox.offsetHeight,
                        posTop = topPos,
                        posLeft = leftPos;

                    angular.element( notablyBox ).css({ 'top': posTop-boxHeight+'px', 'left': posLeft+'px' });
                    angular.element( closeBox ).bind('click', click);
                }

                // Bind close box click event
                function click($event){
                    var notablyBox = element[0].offsetParent.lastChild;
                    $event.preventDefault();
                    angular.element( notablyBox ).remove();
                }

                // Bind window resize after box is created
                function resizeWindow(){
                    var notablyBox = element[0].offsetParent.lastChild,
                        top = angular.element( element[0].offsetTop),
                        left = angular.element( element[0].offsetLeft),
                        posTop = top[0],
                        posLeft = left[0],
                        boxHeight = element[0].offsetParent.lastChild.clientHeight + 2;

                    angular.element(notablyBox).css({ 'top': posTop-boxHeight+'px', 'left': posLeft+'px' });
                }

            },
            template: '<a href="" data-ng-transclude="" data-ng-click=""></a>'
        };
}]);