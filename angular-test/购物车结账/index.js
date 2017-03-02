function cartController($scope){
    $scope.carts=[
        {
            pId:1000,
            pName:'iphone6s',
            pnum:3,
            price:5400,
        },
        {
            pId:1200,
            pName:'mac',
            pnum:3,
            price:15400,
        },
        {
            pId:2000,
            pName:'iphone7s',
            pnum:10,
            price:7400,
        },
        {
            pId:3000,
            pName:'ipad',
            pnum:10,
            price:2400,
        }
    ];

    $scope.total = function(){
        var total = 0;
        angular.forEach($scope.carts,function(value,key){
            total += parseInt(value.pnum);
        });
        return total;
    }

    $scope.sum = function(){
        var sum = 0 ;
        angular.forEach($scope.carts,function(value,key){
            sum += value.pnum * value.price;
        });
        return sum;
    }


    $scope.del = function(id){
        var index = -1;
        angular.forEach($scope.carts,function(value,key){
            if(id == value.pId){
                index = key;
            }
        });
        if(index != -1){
            $scope.carts.splice(index,1);
        }
    }

    $scope.destory = function(){
        $scope.carts = '';
    }

    $scope.down = function(id){
        angular.forEach($scope.carts,function(value,key){
            if( id == value.pId){
                value.pnum -= 1 ;
                if (value.pnum ==0){
                    $scope.carts.splice(key,1);
                }
            }
        })
    }

    $scope.up = function(id){
        angular.forEach($scope.carts,function(value,key){
            if( id == value.pId){
                value.pnum += 1 ;
            }
        })
    }

}