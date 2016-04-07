/*
 * ALIVE - A premium web template from Designova
 * Author: Designova, http://www.designova.net
 * Copyright (C) 2015 Designova
 * This is a premium product. For licensing queries please contact info@designova.net
 */
/*global $:false */
/*global window: false */
(function() {
    "use strict";
    $(function($) {

        //Detecting viewpot dimension
        var vH = $(window).height();
        var vW = $(window).width();
        //Adjusting Intro Components Spacing based on detected screen resolution
        $('.fullwidth').css('width', vW);
        $('.fullheight').css('height', vH);
        $('.halfwidth').css('width', vW / 2);
        $('.halfheight').css('height', vH / 2);

        //PRELOADER
        $('body, html').addClass('preloader-running');
        $('#mastwrap').css('visibility', 'hidden');
        $(window).load(function() {
            $("#status").fadeOut();
            $("#preloader").css('width',vW-260);
            $("#preloader").delay(1000).fadeOut(1000);
            $('body, html').removeClass('preloader-running');
            $('body, html').addClass('preloader-done');
            $("#mastwrap").delay(1000).css('visibility',
                'visible');
        });

        //BASIC UX
        $('.menu-trigger').on('mouseenter',function(){
            $('nav.mastnav').slideDown();
        })
        $('nav.mastnav').on('mouseleave',function(){
            $(this).slideUp();
        })
        $('.news-block').on('mouseenter',function(){
            $('.news-block').addClass('hovered');
            $(this).removeClass('hovered');
        })
        $('.news-block').on('mouseleave',function(){
            $('.news-block').removeClass('hovered');
        })
        $('.mastwrap').on('click',function(){
            $('nav.mastnav').slideUp();
        })


        //ISOTOPE
        $(window).load(function() {
             //ISOTOPE INIT
                    var $container1 = $('.works-container');
                    var $stampElem = $('.filter-item-stamp');
                    $container1.isotope({
                            // options
                            itemSelector: '.works-item',
                            layoutMode: 'masonry',
                            transitionDuration: '0.8s'
                     });
                    $container1.isotope( 'stamp', $stampElem );
                        //forcing a perfect masonry layout after initial load
                        setTimeout(function() {
                        $container1.isotope('layout');
                        }, 100);
                        $container1.isotope('bindResize');
                        //Isotope ReLayout on Page Load event.
                        $(window).load(function() {
                            $container1.isotope('layout');
                        });
                        //Isotope ReLayout on Window Resize event.
                        $(window).on('resize', function() {
                            $container1.isotope('layout');
                        });
                        //Isotope ReLayout on device orientation changes
                        window.addEventListener("orientationchange", function() {
                            $container1.isotope('layout');
                        }, false);

            $('.works-filter li a').on('click', function(event) {
                event.preventDefault();
                $('.works-filter li a').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $('.works-container').isotope({
                    filter: selector
                });
                setTimeout(function() {
                    $container1.isotope('layout');
                }, 800);
            });

        });

        //VENOBOX
        $('.venobox, .image-lightbox-link').venobox({
            numeratio: true
        });

        //BACKSTRETCH
        if ( $( ".slideshow-slide" ).length ) {
            // backstretch slideshow extended by Designova
            var items = [];
            $('.slideshow-content').hide();
            $('.slideshow-slide').each(function () {
                items.push(this.src);
            });
            var options = {
                fade: "slow",
                duration: 4000
            };
            // Start Backstretch, and save a reference to it.
            var slideshow = $("body").backstretch(items,options);

        }


    });
    // $(function ($)  : ends
})();
//  JSHint wrapper $(function ($)  : ends