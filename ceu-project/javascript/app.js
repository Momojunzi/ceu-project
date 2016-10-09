/**
 * Created by Mark on 9/25/2016.
 */
"use strict";
(function(){
    var app = angular.module('ceuApp', []);

    app.controller('ClassController', function(){
        this.ceus = classes;
    });

    /*app.controller('PanelController', function(){
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }
    });*/
    app.controller("ReviewController", function(){
       this.review = {};
        this.addReview = function(ceu){
            ceu.reviews.push(this.review);
            this.review = {};
        }
    });

    app.directive('ceuTitle', function(){
       return {
           restrict:'E',
           templateUrl: 'ceu-title.html'
       }
    });

    app.directive('productPanels', function(){
        return{
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function(){
                this.tab = 1;
                this.selectTab = function(setTab){
                    this.tab = setTab;
                };
                this.isSelected = function(checkTab){
                    return this.tab === checkTab;
                }
            },
            controllerAs: 'panel'
        }
    });

    var classes = [
        {
            name: 'Class 1',
            price: 50.00,
            description: 'A good class to take',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: "https://upload.wikimedia.org/wikipedia/commons/6/66/Batus_barbicornis_-_Edward_Zambrano.jpg",
                    thumb: "https://upload.wikimedia.org/wikipedia/commons/6/66/Batus_barbicornis_-_Edward_Zambrano.jpg"
                }
            ],
            reviews: [
                {
                    stars:5,
                    body: "I love this class!",
                    author: "joe@joe.com"
                },
                {
                    stars: 5,
                    body: "I love this class!",
                    author: "joe@joe.com"
                }
            ]

        },
        {
            name: 'Class 2',
            price: 50.00,
            description: 'A second class to take',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: "https://upload.wikimedia.org/wikipedia/commons/5/58/Caminantes_del_cielo_-_Rina_Mar%C3%ADa_del_Carmen_Pellizzari_Raddatz.jpg",
                    thumb: "https://upload.wikimedia.org/wikipedia/commons/5/58/Caminantes_del_cielo_-_Rina_Mar%C3%ADa_del_Carmen_Pellizzari_Raddatz.jpg"
                }
            ],
            reviews: [
                {
                    stars:5,
                    body: "I love this class!",
                    author: "joe@joe.com"
                },
                {
                    stars:5,
                    body: "I love this class!",
                    author: "joe@joe.com"
                }
            ]
        },
        {
            name: 'Class 3',
            price: 50.00,
            description: 'A third class to take',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: "https://upload.wikimedia.org/wikipedia/commons/1/13/Corvus_corax_-_Carolina_Fuentes.jpg",
                    thumb: "https://upload.wikimedia.org/wikipedia/commons/1/13/Corvus_corax_-_Carolina_Fuentes.jpg"
                }
            ],
            reviews: [
                {
                    stars:5,
                    body: "I love this class!",
                    author: "joe@joe.com"
                },
                {
                    stars:5,
                    body: "I love this class!",
                    author: "joe@joe.com"
                }
            ]
        },
        {
            name: 'Class 4',
            price: 50.00,
            description: 'A fourth class to take',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: "https://upload.wikimedia.org/wikipedia/commons/7/72/Graellsia_isabelae_-_David_Zurita_G%C3%B3mez.jpg",
                    thumb: "https://upload.wikimedia.org/wikipedia/commons/7/72/Graellsia_isabelae_-_David_Zurita_G%C3%B3mez.jpg"
                }
            ],
            reviews: [
                {
                    stars:5,
                    body: "I love this class!",
                    author: "joe@joe.com"
                },
                {
                    stars:5,
                    body: "I love this class!",
                    author: "joe@joe.com"
                }
            ]
        }
    ]

})();



