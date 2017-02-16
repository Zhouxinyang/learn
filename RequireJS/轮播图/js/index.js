/*require.config({
    paths: {
        "jquery" : "jquery-1.12.4"
    }
});*/
require([/*"jquery",*/"carousel"],function(Carousel){

    var arr1 = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"]
    var settings1 = {
        selector : "#container1",
        imgs : arr1,
        bottonStyle : "circle",
        arrowPos : "bottom",
        speed : 500
    };
    var lbt1 = new Carousel();
    lbt1.init(settings1);

    var arr2 = ["img/1.jpg", "img/2.jpg", "img/3.jpg"]
    var settings2 = {
        selector : "#container2",
        imgs : arr2,
        bottonStyle : "square",
        arrowPos : "center",
        speed : 1000
    };
    var lbt2 = new Carousel();
    lbt2.init(settings2);

    var arr3 = ["img/1.jpg", "img/2.jpg", "img/3.jpg"]
    var settings3 = {
        selector : "#container3",
        imgs : arr3,
        bottonStyle : "square",
        arrowPos : "hidden",
        speed : 800
    };
    var lbt3 = new Carousel();
    lbt3.init(settings3);
});