198

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".sticky-top").addClass("bgs");
  }
  else {
    $(".sticky-top").removeClass("bgs");
  }
});

$(".stories").click(function () {
  $(".inStoryArea").toggleClass("d-md-none");
});

AOS.init({
  duration: 1500,
})

$("#toggleMenu").click(function () {
  $('.navbar-toggler').toggleClass('togglerAct');
  $('.icb-1').toggleClass('icb-t');
  $('.icb-2').toggleClass('icb-m');
  $('.icb-3').toggleClass('icb-b');
});

$('.storyPlug').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  infinite: false,
  arrows: false,
  variableWidth: true,
  adaptiveHeight: true
});

$(document).ready(function () {
  $('.storyBox').topbox({
    skin: 'minimal',
  });
});

$(document).ready(function () {
  $('.lightbox').topbox();
});

$('.projects').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: '.images'
});

$('.images').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  centerMode: true,
  asNavFor: '.projects',
  nextArrow: $('#next'),
  prevArrow: $('#prev'),
});

$('.referenceLogo').slick({
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 5,
  infinite: true,
  arrows: false,
  centerMode: true,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
});

$("#searchScr").click(function () {
  $('.searchArea').css('width', '100%');
  $('.searchArea').css('left', '0');
});

$("#sClose").click(function () {
  $('.searchArea').css('width', '0%');
  $('.searchArea').css('left', '-100%');
});


$('.gallery').slick({
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: $('#next'),
  prevArrow: $('#prev'),
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
});

$('.certificates').slick({
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: $('#next'),
  prevArrow: $('#prev'),
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
});


(function ($) {
  $.fn.simpleLoadMore = function (options) {
    var settings = $.extend({
      count: 5,
      itemsToLoad: 5,
      btnHTML: '',
      btnText: 'View More',
      item: '',
      cssClass: 'load-more',
      showCounter: false,
      counterText: 'Showing {showing} out of {total}'
    }, options);


    var $loadMore = $(this);


    $loadMore.each(function (i, el) {


      var btnHTML = settings.btnHTML,
        btnText = settings.btnText,
        count = settings.count,
        itemsToLoad = settings.itemsToLoad,
        item = settings.item,
        cssClass = settings.cssClass,
        showCounter = settings.showCounter,
        counterText = settings.counterText;


      var $thisLoadMore = $(this),
        $items = $thisLoadMore.find(item),
        $btnHTML,
        $counterHTML = $('<p class="slm__counter">' + counterText + '</p>');


      if (showCounter) {
        $thisLoadMore.append($counterHTML);
      }

      if (!btnHTML) btnHTML = '<a href="#" class="' + cssClass + '__btn">' + btnText + '</a>';

      $btnHTML = $(btnHTML);

      if (!options.itemsToLoad || isNaN(options.itemsToLoad)) {
        settings.itemsToLoad = settings.count;
      }

      $thisLoadMore.addClass(cssClass);
      $items.addClass(cssClass + '__item');

      if (!$thisLoadMore.find('.' + cssClass + '__btn').length && $items.length > settings.count) {
        $thisLoadMore.append($btnHTML);
      }

      $btnHTML.add($counterHTML).html(function (i, oldHtml) {
        var newHtml = oldHtml.replace('{showing}', '<span class="slm__count slm__count--showing">' + count + '</span>');
        newHtml = newHtml.replace('{total}', '<span class="slm__count slm__count--total">' + $items.length + '</span>');

        return newHtml
      })

      var $btn = $thisLoadMore.find('.' + cssClass + '__btn');

      if (!$btn.length) {
        $btn = $btnHTML;
      }

      if ($items.length > settings.count) {
        $items.slice(settings.count).hide();
      }

      $btn.on('click', function (e) {
        e.preventDefault();

        var $this = $(this);
        var $hiddenItems = $items.filter(':hidden');
        var $updatedItems = $hiddenItems;

        if (settings.itemsToLoad !== -1 && settings.itemsToLoad > 0) {
          $updatedItems = $hiddenItems.slice(0, settings.itemsToLoad);
        }

        if ($updatedItems.length > 0) {
          $updatedItems.fadeIn();
        }

        $thisLoadMore.find('.slm__count--showing').text($items.filter(':visible').length);

        if ($hiddenItems.length <= settings.itemsToLoad || settings.itemsToLoad === -1) {
          $this.remove();
        }
      });
    });
  }
}(jQuery));

$('.downloads').simpleLoadMore({
  item: '.col-xl-4',
  count: 3,
  itemsToLoad: 3,
});

$('.othPst').simpleLoadMore({
  item: '.col-xl-4',
  count: 3,
  itemsToLoad: 3,
});

$('#uCv').click(function () {
  $("input[type='file']").trigger('click');
})

$("input[type='file']").change(function () {
  $('#val').text(this.value.replace(/C:\\fakepath\\/i, ''))
})

$('.locations').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: true,
  draggable: false,
  swipe: false,
});

$('.mainSlider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: false,
  draggable: true,
  swipe: true,
  asNavFor: '.miniSlider',
  nextArrow: $('.ms-left'),
  prevArrow: $('.ms-right'),

});

$('.miniSlider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: false,
  draggable: true,
  swipe: true,
  vertical: true,
  verticalSwiping: true,
  focusOnSelect: true,
  asNavFor: '.mainSlider',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
      }
    },
  ]
});

$('.sliderArea').each(function () {
  var slickInduvidual = $(this);
  slickInduvidual.find('.lImage').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    nextArrow: $(this).find('.lImage').next().find('.next'),
    prevArrow: $(this).find('.lImage').next().find('.prev'),
  })
});

$('.sliderArea').each(function () {
  var slickInduvidual = $(this);
  slickInduvidual.find('.rImage').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    nextArrow: $(this).find('.rImage').next().find('.next'),
    prevArrow: $(this).find('.rImage').next().find('.prev'),
  })
});



$('.mcp').each(function () {
  var slickInduvidual = $(this);
  slickInduvidual.each(function () {
    var slickInduvidual = $(this);
    slickInduvidual.find('.cp').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      draggable: false,
      swipe: false,
    })
  })
})



  $('.collapser').click(function (){
    $(this).toggleClass('collapsed');
    $(this).parents().next('.collapse').collapse('toggle')
  });



references();
function references() {
$('.col-gallery').each(function(key, item) {

  var sliderIdName = 'slider' + key;
  var sliderNavIdName = 'sliderNav' + key;

  this.id = sliderIdName;
  $('.cpArea')[key].id = sliderNavIdName;

  var sliderId = '#' + sliderIdName;
  var sliderNavId = '#' + sliderNavIdName;

  $(sliderId).slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    asNavFor: sliderNavId,
    draggable: false,
    swipe: false,
  });

  $(sliderNavId).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: sliderId,
    dots: false,
    arrows: false,
    draggable:false,
    fade: true,
    centerMode: false,
    focusOnSelect: false,
    swipe: false,
  });

});
}



// $('.outBox').each(function () {
//   var slickInduvidual = $(this);
//   slickInduvidual.find('.col-gallery').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: false,
//     fade: true,
//     draggable: true,
//     nextArrow: $(this).find('.col-gallery').next().find('.colorNext'),
//     prevArrow: $(this).find('.col-gallery').next().find('.colorPrev'),
//     asNavFor: $(this).find('.cpArea'),
//   });
// })

// $('.outBox').each(function () {
//   var slickInduvidual = $(this);
//   slickInduvidual.find('.cpArea').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     draggable: false,
//     dots: false,
//     fade: false,
//   });
// })

// slickInduvidualLeft.find('.col-gallery').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   dots: false,
//   fade: false,
//   nextArrow: $(this).find('.col-gallery').next().find('.colorNext'),
//   prevArrow: $(this).find('.col-gallery').next().find('.colorPrev'),
//   asNavFor: $(this).find('.cp'),
// });


// $(this).find('.cp').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   dots: false,
//   fade: true,
// });


  




$('#acOn').click(function () {
  $('#slick-slide-control00').click();
})
$('#acTw').click(function () {
  $('#slick-slide-control01').click();
})
$('#acTh').click(function () {
  $('#slick-slide-control02').click();
})

var $sub = $('.sub');
var $sub2 = $('.sub-2');
var $uA = $('#uploadArea');

$('select').first().change(function () {
  if (this.selectedIndex > 0)
    $uA.eq(this.selectedIndex - 1)
  $uA.attr('style', 'display:flex !important');
}).change();

$('select').first().change(function () {
  $sub.hide();
  if (this.selectedIndex > 0)
    $sub.eq(this.selectedIndex - 1).show();
  $uA.eq(this.selectedIndex - 2).attr('style', 'display:none !important');
}).change();

$('.sub select').first().change(function () {
  $sub2.hide();
  if (this.selectedIndex > 0)
    $sub2.show();
}).change();


/* PLYR IO START */

document.addEventListener('DOMContentLoaded', () => { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player = new Plyr('#player');
  
  // Expose
  window.player = player;

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

  // Play
  on('.js-play', 'click', () => { 
    player.play();
  });

  // Pause
  on('.js-pause', 'click', () => { 
    player.pause();
  });

  // Stop
  on('.js-stop', 'click', () => { 
    player.stop();
  });

  // Rewind
  on('.js-rewind', 'click', () => { 
    player.rewind();
  });

  // Forward
  on('.js-forward', 'click', () => { 
    player.forward();
  });
});

/* PLYR IO END */