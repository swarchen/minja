(function() {
    var app = angular.module('minja', ['duScroll','luegg.directives']);
    app.directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if (event.which === 13) {
                    scope.$apply(function() {
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });

    app.controller('MyCtrl', function($scope, $document) {
        var container = angular.element(document.getElementById('container'));
        var step1 = angular.element(document.getElementById('step-1'));
        var step2 = angular.element(document.getElementById('step-2'));
        var step3 = angular.element(document.getElementById('step-3'));
        $scope.unfill = 0;
        $scope.typeIn = 0;
        $scope.sendMsg = function(){
        	var myEl = angular.element( document.getElementById( 'msgContent' ) );
     		myEl.append('<div class="msg col-md-12"><span class="msg-right">'+$scope.inputText+'</span></div>');   
        	if($scope.inputText == $scope.input1 && $scope.inputText !== undefined){
        		setTimeout(function(){
        			myEl.append('<div class="msg col-md-12"><span class="msg-left">'+$scope.reply1+'</span></div>');   
        		},1000);
        		$scope.typeIn = 1;
        	}else if($scope.inputText == $scope.input2 && $scope.inputText !== undefined){
        		setTimeout(function(){
        			myEl.append('<div class="msg col-md-12"><div class="thumbnail"><img src="/img/logo.png" alt="..."><div class="caption"><h3>您的網站名稱</h3><p>這邊會是您的網站的資訊</p><a target="_blank" href="'+$scope.reply2+'">前往你的網站</a></div></div></div>');   
        		},1000);
        		$scope.typeIn = 1;
        	}else if($scope.input1 === undefined || $scope.input2 === undefined || $scope.reply2 === undefined || $scope.reply1 === undefined || $scope.welcome === undefined){
        		$document.scrollToElementAnimated(step2);
        		$scope.unfill = 1;
        	}else if($scope.inputText !== undefined){
        		setTimeout(function(){
        			myEl.append('<div class="msg col-md-12"><span class="msg-left">'+$scope.welcome+'</span></div>');   
        		},1000);
        		$scope.typeIn = 1;
        	}
        	$scope.inputText="";
        }
        $scope.toStep1 = function() {
            $document.scrollToElementAnimated(step1);
        };
        $scope.toStep2 = function() {
            $document.scrollToElementAnimated(step2);
        }

        $scope.toStep3 = function() {
            $document.scrollToElementAnimated(step3);
        }

    });


})();
