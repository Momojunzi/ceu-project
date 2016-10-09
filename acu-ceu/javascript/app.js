/**
 * Created by Mark on 10/1/2016.
 */
(function (){
    var app = angular.module('acuCEU', []);
    
    app.controller('MainController', function(){
       this.navtabs = navData;
        this.homepage = homeContent;
        this.page = 0;
        this.selectedPage = function(pageCheck){
            console.log(this.page);
            return this.page === pageCheck;
        };
        this.selectPage = function(pageNumber){
            this.page = pageNumber;
            console.log(this.page);
        };
    });
    
    app.directive("mainNavbar", function(){
        return{
            restrict: 'E',
            templateUrl: 'navbar.html',
            controller: function(){
            },
            controllerAs: 'pageAppear'
        }
    });
    
    app.directive("homePage", function(){
       return{
           restrict:'E',
           templateUrl: 'home.html'
       }
    });
    
    app.directive("jumboImage", function(){
       return{
           restrict: 'E',
           templateUrl: 'jumbo.html',
           link: function(scope, elem, attrs){
               var datavar = 0;
               setInterval(function(){
                   $('.jumbo-text').fadeOut(2000);
                      if(datavar == 0){
                          setTimeout(function(){
                              $('.jumbo-text').html(jumboText[1]).fadeIn(2000);
                              datavar = 1;
                              
                          },2000);
                      }
                      if(datavar == 1){
                          setTimeout(function(){
                              $('.jumbo-text').html(jumboText[2]).fadeIn(2000);
                              datavar = 2;
                              
                          }, 2000);
                      }
                      if(datavar == 2){
                          setTimeout(function(){
                              $('.jumbo-text').html(jumboText[0]).fadeIn(2000);
                              datavar = 0;
                              
                          },2000);
                      }
              }, 10000);
           }
       } 
    });
    
    app.directive("classPage", function(){
        return{
            restrict: 'E',
            templateUrl: 'classPage.html'
        }
    });
    
    var navData = [
        {
            title: 'Home',
            href: 'https://www.google.com',
            page: 1
        },
        {
            title: 'Classes',
            href: 'https://www.yahoo.com/',
            page: 2
        },
        {
            title: 'About',
            href: 'http://www.msn.com/',
            page: 3
        },
        {
            title: 'Log in',
            href: 'http://www.bbc.com/',
            page: 4
        },
        {
            title: 'Sign up',
            href: 'https://www.facebook.com/',
            page: 5
        }
    ];

    var homeContent = [
        {
            imgside: 'right-img',
            textside:'left-article',
            title: 'Life long learning',
            image: 'images/learning-1.JPG',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ' +
            'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ' +
            'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' +
            'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ' +
            'venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
        },
        {
            imgside: 'left-img',
            textside: 'right-article',
            title: 'Professional development',
            image: 'images/ren-1.JPG',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ' +
            'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ' +
            'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' +
            'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ' +
            'venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.' 
        },
        {
            imgside: 'right-img',
            textside:'left-article',
            title: 'Remembering our roots',
            image: 'images/herboloy-1.JPG',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ' +
            'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ' +
            'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' +
            'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ' +
            'venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
        },
        {
            imgside: 'left-img',
            textside: 'right-article',
            title: 'Moving forward',
            image: 'images/learning-2.JPG',
            text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ' +
            'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ' +
            'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' +
            'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ' +
            'venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.'
        }
    ];
    
    var jumboText = ["Continuing Education For A Better World", "Learning Is The Heart of Life", "Education Is The Foundation For The Future"];
})();