var app = angular.module("loadProfile", []);
app.controller("loadProfileController", ['$scope','getProfile', function($scope,getProfile)  {

$scope.data='';

$scope.submit=function()
{
	//alert("deepak");
	getProfile.getData($scope.data).then(function(data){
    //alert(JSON.stringify(data));
 	$scope.profileData= data;
});

};


}]);
 app.factory("getProfile",['$http',function($http){
  
  return{

    getData:function(data){
    	//alert(data);
    datas=$http({
      method: 'GET',
      url: 'https://api.github.com/users/'+data
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return datas;

   }  
    
}
}]);


