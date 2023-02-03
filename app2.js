angular.module("app",["ngRoute"]);
console.log(angular.module("app",["ngRoute"]));
//var app = angular.module("app", ["ngRoute"]);

console.log(angular.module("app", []));

console.log(angular.module("app",["ngRoute"]).controller("MainController", function () {}));
angular.module("app",["ngRoute"]).controller("MainController", function () {
    console.log(this.type);

    console.log(this);
    
    var vm =  this;

    //this: OOP: đại diện cho object đang thực thi (view model)
    

    vm.title = "Learn Angular by example";
    vm.searchInput = "";
    vm.shows = [
        {

            //property: value

            title: 'Cuộc đời của Pi',
            author: 'Dịch giả Trịnh Lữ',
            favorite: true
        },

        {
            title: 'Một đời như kẻ tìm đường',
            author: 'Giáo sư Phan Văn Trường',
            favorite: true
        },
        {
            title: 'Kafka bên bờ biển',
            author: 'Murakami',
            favorite: true
        },{
            title: 'Biên niên kí chim vặn dây cót',
            author: 'Murakami',
            favorite: true
        },
        {
            title: 'Thuật tư tửơng',
            author: 'Nguyen Can',
            favorite: true
        },

        {
            title: 'Đại dương đen',
            author: 'Đặng Hoàng Giang',
            favorite: false
        },
        {
            title: "Quán gò đi lên", 
            author: "Nguyễn Nhật Ánh", 
            favorite: true
        }
        ,
        {
            title: "Đúng việc",
            author: "Giản Tư Trung", 
            favorite: true
        }, 
        {
            title: "Khuyến học",
            author: "Yukichi Fukuyawa",
            favorite: true
        },



    ];

    vm.orders =[
        {
            id: 1,
            title: "Author Ascending",
            key: "author",
            reverse: false
        },
        {
            id: 2,
            title: "Author Descending",
            key: "author",
             reverse: true
        }, 
        {
            id: 3, 
            title: "Title Ascending", 
            key: "title", 
            reverse: false
        },
        {
            id: 4, 
            title: "Title Descending", 
            key: "title", 
            reverse: true
        }

    ];

    vm.order = vm.orders[0];
    vm.new = {};
    vm.addShow = function () {
        vm.shows.push(vm.new);
        vm.new = {};

        // vm chính là main của js

    };
    

});