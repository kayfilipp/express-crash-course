var app = angular.module('MyApp', ['ngFileUpload'])
    app.controller('MyController', function ($scope, $window) {
        
				$scope.SelectFile = function (file) {
            $scope.SelectedFile = file;
        };
			
        $scope.Upload = function () {
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
            if (regex.test($scope.SelectedFile.name.toLowerCase())) {
                if (typeof (FileReader) != "undefined") {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var customers = new Array();
                        var rows = e.target.result.split("\r\n");
                        
												for (var i = 1; i < rows.length; i++) {
                            var cells = rows[i].split(",");
                            
														if (cells.length > 1) {
                                var customer = {};
                                customer.CustomerId = cells[0];
                                customer.Name = cells[1];
                                customer.Country = cells[2];
                                customers.push(customer);
                                $scope.$apply(function () {
                                    $scope.Customers = customers;
                                    $scope.IsVisible = true;
                                });
                            }
													
                        }
 
                    }
                    reader.readAsText($scope.SelectedFile);
                } else {
                    $window.alert("This browser does not support HTML5.");
                }
            } else {
                $window.alert("Please upload a valid CSV file.");
            }
        }
    });