/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    var publicPhotoFolder = "img/footprints/";
    var footprints = [
        {
            name:"1.jpg",
            location:"Biltmore 比尔迪莫庄园",
            date:"2014.09.29"
        },
        // {
        //     name:"2.jpg",
        //     location:"Biltmore 比尔迪莫庄园",
        //     date:"2014.09.29"
        // },
        {
            name:"2_1.jpg",
            location:"Great Smoky Mountain 大雾山(冬)",
            date:"2014.11.1"
        },
        {
            name:"3.jpg",
            location:"Duke University 杜克大学",
            date:"2014.11.30"
        },
        {
            name:"4.jpg",
            location:"Duke University 杜克大学",
            date:"2014.11.30"
        },
        {
            name:"5.jpg",
            location:"Savannah 萨凡纳",
            date:"2014.12.25"
        },
        {
            name:"6.jpg",
            location:"Universial Studio 环球影城",
            date:"2014.12.27"
        },
        {
            name:"7.jpg",
            location:"Universial Studio 环球影城",
            date:"2014.12.28"
        },
        {
            name:"8.jpg",
            location:"Everglade 大沼泽国家公园",
            date:"2014.12.29"
        },
        {
            name:"9.jpg",
            location:"Everglade 大沼泽国家公园",
            date:"2014.12.29"
        },
        {
            name:"10.jpg",
            location:"Miami 迈阿密",
            date:"2014.12.30"
        },
        {
            name:"11.jpg",
            location:"Boynton Beach & West Palm Beach 西棕榈沙滩",
            date:"2015.1.2"
        },
        {
            name:"12.jpg",
            location:"Atlanta 亚特兰大",
            date:"2015.4.18"
        },
        {
            name:"14_1.jpg",
            location:"Atlanta 亚特兰大",
            date:"2015.4.19"
        },
        {
            name:"15.jpg",
            location:"White Water Center 白水公园",
            date:"2015.5.23"
        },
        {
            name:"16.jpg",
            location:"Great Smoky Mountain 大雾山(夏)",
            date:"2015.6.9"
        },
        {
            name:"17.jpg",
            location:"Clemson 克莱姆森",
            date:"2015.7.5"
        },
        {
            name:"18.jpg",
            location:"Clemson 克莱姆森",
            date:"2015.7.5"
        },
        {
            name:"19.jpg",
            location:"Carowinds",
            date:"2015.9.12"
        },
        {
            name:"20.jpg",
            location:"Carowinds",
            date:"2015.9.12"
        },
        {
            name:"21.jpg",
            location:"Carowinds",
            date:"2015.9.12"
        },
        {
            name:"30_1.jpg",
            location:"Chimney Rock",
            date:"2015.10.12"
        },
        {
            name:"31.jpg",
            location:"Portland 波特兰",
            date:"2015.11.14"
        },
        {
            name:"32.jpg",
            location:"Portland 波特兰",
            date:"2015.11.14"
        },
        {
            name:"32_1.jpg",
            location:"Multnomah falls",
            date:"2015.11.15"
        },
        {
            name:"32_2.jpg",
            location:"Seattle 西雅图",
            date:"2015.11.16"
        },
        {
            name:"33.jpg",
            location:"Ponce 彭塞",
            date:"2015.12.26"
        },
        {
            name:"34.jpg",
            location:"Ponce 彭塞",
            date:"2015.12.26"
        },
        {
            name:"35_1.jpg",
            location:"Flamenco Beach",
            date:"2015.12.28"
        },
        {
            name:"35.jpg",
            location:"San Juan 圣胡安",
            date:"2015.12.30"
        }// },
        // {
        //     name:"36.jpg",
        //     location:"Charlotte 夏洛特",
        //     date:"2016.1.23"
        // }
    ];

    // $.each(footprints,function(i,val){
    //     $("#footprintinsertpoint").append("<div class='col-lg-4 col-sm-6'>\
    //                                             <span class='portfolio-box'>\
    //                                                 <div>\
    //                                                     <span style='padding-left:20px;float:left;'>"+ val.location +"</span> <span style='padding-right:20px;float:right;'>"+ val.date +"</span>\
    //                                                     <img src='" + publicPhotoFolder + val.name + "' class='img-responsive' alt=''>\
    //                                                 </div>\
    //                                                 <div class='portfolio-box-caption'>\
    //                                                     <div class='portfolio-box-caption-content'>\
    //                                                         <div class='project-category text-faded'>\
    //                                                             "+ val.location +"\
    //                                                         </div>\
    //                                                         <div class='project-name'>\
    //                                                             "+ val.date +"\
    //                                                         </div>\
    //                                                     </div>\
    //                                                 </div>\
    //                                             </span>\
    //                                         </div>");
    // });

    $.each(footprints,function(i,val){
        $("#footprintinsertpoint").append("<div class='col-sm-6 col-md-4'>\
                                            <div class='thumbnail'>\
                                              <img src='" + publicPhotoFolder + val.name + "'>\
                                              <div class='caption'>\
                                                <p>"+ val.location +"</p>\
                                                <p>"+ val.date +"</p>\
                                              </div>\
                                            </div>\
                                          </div>");
    });


    // $.each(footprints,function(i,val){
    //     $("#footprinttimeline").append("<li>\
    //             <div class='timeline-badge'>\
    //               <a><i class='fa fa-circle' id=''></i></a>\
    //             </div>\
    //             <div class='timeline-panel'>\
    //                 <div class='timeline-heading'>\
    //                     <h4>"+ val.location +"</h4>\
    //                 </div>\
    //                 <div class='timeline-body'>\
    //                     <img style='max-width:500px;' src='" + publicPhotoFolder + val.name + "' class='img-responsive'>\
    //                 </div>\
    //                 <div class='timeline-footer'>\
    //                     <p class='text-right'>"+ val.date +"</p>\
    //                 </div>\
    //             </div>\
    //         </li>");
    // });


    // $ ('ul#footprinttimeline li:odd').addClass('timeline-inverted');
    // $ ('ul#footprinttimeline li:odd div a i').addClass('invert');
    

})(jQuery); // End of use strict
