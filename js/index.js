$(document).ready(function () {

  // открытие и закрытие панели по меню 
  let linksShow = true;

  $('.menu img').click(function () {
    if (linksShow) {
      $('.head_one .links').show(500);
    } else {
      $('.head_one .links').hide(500);
    }
    linksShow = !linksShow;
  });

  // покупка тура

  $('.se1 .start').click(function () {
    $('.overlay').show()
  })


  $('.overlay .close-popup').click(function () {
    $('.overlay').hide()
  })


  // форма тура

  $('.overlay button').click(function () {
    $('.shop').show()
  })


  $('.shop .close-popup_shop').click(function () {
    $('.shop').hide()
  })


  $('.shop button').click(function (e) {

    if ($('input').val != "") {
      $('input').attr('disabled', "disabled");
    } else {
      $('input').removeAttr('disabled')
      e.preventDefault()
    }

    if ($('label').val != "") {
      $('label').attr('disabled', "disabled")
    } else {
      $('label').removeAttr('disabled')
    }


    if ($('textarea').val != "") {
      $('textarea').attr('disabled', "disabled")
    } else {
      $('textarea').removeAttr('disabled')
    }




    if ($('.inp-n').val() == "") {
      $('.inp-n').css('background', 'red')

    } else if ($('.inp-f').val() == "") {
      $('.inp-f').css('background', 'red')

    } else if ($('.inp-o').val() == "") {
      $('.inp-o').css('background', 'red')

    } else if ($('.inp-zac').val() == "") {
      $('.inp-zac').css('background', 'red')

    } else if ($('.inp-vic').val() == "") {
      $('.inp-vic').css('background', 'red')

    } else if ($('.inp-1').val() == "") {
      $('.inp-1').css('background', 'red')

    } else if ($('.inp-2').val() == "") {
      $('.inp-2').css('background', 'red')

    } else if ($('.inp-3').val() == "") {
      $('.inp-3').css('background', 'red')

    } else if ($('text_a').val() == "") {
      $('.text_a').css('background', 'red')
    } else {
      alert('Форма отправлена')
    }
  })




  let flag = false;
  let flag2 = false;
 



  $('.send').click(function (e) {
    e.preventDefault();
    if (!flag) {
      if ($('.name-1').val() != '' &&
        $('.email-1').val() != '' &&
        $('.phone-1').val() != '' &&
        $('.FormsTwo textarea').val() != '' &&
        $('.check').is(':checked') &&
        $('.choice .star').is(':checked')
         )



  {
    alert('поля формы успешно заполнены!');


    $('.block1 input').each(function () {
      $(this).attr('disabled', 'disabled')
    })

    $('.FormsTwo textarea').attr('disabled', 'disabled');

    $('.check').attr('disabled', 'disabled');

    $('.choice option').attr('disabled', 'disabled')

    $('.null_string').removeAttr('disabled')

    flag = true;

  } else {
        alert('Вы не заполнили поля')
  }
}

    $('.block2 input').each(function () {
  if ($(this).is(':checked')) {
    $('.block2 input').each(function () {
      $(this).attr('disabled', 'disabled');
      flag2 = true;
    })
  }
})

    $('.choice option').each(function () {
  if ($('.star').is(':checked') ) {
    $('.choice option').each(function () {
      $(this).attr('disabled', 'disabled')
      $('.null_string').removeAttr('disabled')
    
    }) 

  }
})

    

  });
  
  $('.point a').click(function (e) {
    e.preventDefault();

    if($('.gal_big img').attr('src') != $(this).attr('href')) {
      $('.gal_big img').hide().attr('src', $(this).attr('href')).fadeIn(1000)
    }
    
  })

  $('.point2 a').click(function (e) {
    e.preventDefault();

    if ($('.gal_big2 img').attr('src') != $(this).attr('href')) {
      $('.gal_big2 img').hide().attr('src', $(this).attr('href')).fadeIn(1000)
    }

  })


  $('.point3 a').click(function (e) {
    e.preventDefault();

    if ($('.gal_big3 img').attr('src') != $(this).attr('href')) {
      $('.gal_big3 img').hide().attr('src', $(this).attr('href')).fadeIn(1000)
    }

  })



$('.point a img').mouseup(function () {
  $(this).fadeTo(2000, 0.6);
})

$(document).mouseup(function () {
  $('.point a img').fadeTo(0,1);
})






  $('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    merge: true,
    responsive: {
      500: {
        mergeFit: true
      },
      700: {
        mergeFit: false
      }
    }
  });

});


let slider = {

  slides: ['галерея1.jpg', 'галерея2.jpg',
   'галеря4.jpg',
  ],
  frame: 0, // индекс начального изображения
  set: function (image) {
    document.getElementById('scr').style.backgroundImage = "url(" + image + ")"
    // установка фона
  },

  init: function () {// запуск слайдера
    this.set(this.slides[this.frame])
  },

  left: function () {
    this.frame--;
    if (this.frame < 0) this.frame = this.slides.length - 1;
    this.set(this.slides[this.frame])
  },

  right: function () {
    this.frame++
    if (this.frame == this.slides.length) this.frame = 0;
    this.set(this.slides[this.frame])
  }
}


window.onload = function () {
  slider.init()
  setInterval(() => {
    slider.right()
  }, 2000);
}