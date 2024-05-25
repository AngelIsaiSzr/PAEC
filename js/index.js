$(window).on('load', function () {
  gsap.to('#loader', 1, { y: "-100%" });
  gsap.to('#loader', 1, { opacity: 0 });
  gsap.to('#loader', 0, { display: "none", delay: 1 });
  gsap.to('#header', 0, { display: "block", delay: 1 })
  gsap.to('#navigation-content', 0, { display: "none" });
  gsap.to('#navigation-content', 0, { display: "flex", delay: 1 });
});

$(function () {
  $('.color-panel').on("click", function (e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.color-changer').length) {
      $('.color-changer').removeClass('color-changer-active');
    }
  });
  $('.colors a').on("click", function (e) {
    e.preventDefault();
    var attr = $(this).attr("title");
    console.log(attr);
    $('head').append('<link rel="stylesheet" href="css/' + attr + '.css">');
  });
});

$(function () {
  $('.menubar').on('click', function () {
    gsap.to('#navigation-content', .6, { y: 0 });
  })
  $('.navigation-close').on('click', function () {
    gsap.to('#navigation-content', .6, { y: "-100%" });
  });
});

$(function () {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDevaring = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDevaring) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDevaring) { delta /= 2; }

    if (!this.isDevaring && this.txt === fullTxt) {
      delta = this.period;
      this.isDevaring = true;
    } else if (this.isDevaring && this.txt === '') {
      this.isDevaring = false;
      this.loopNum++;
      delta = 100;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
    document.body.appendChild(css);

    var spanElement = elements[0];

    function changeColor() {
      var currentWord = spanElement.innerText.trim();
      var colorClass = '';

      if (currentWord === 'Aula') {
        colorClass = 'color2';
      } else if (currentWord === 'Escuela') {
        colorClass = 'color3';
      } else if (currentWord === 'Comunidad') {
        colorClass = 'color4';
      }

      spanElement.classList.remove('color2', 'color3', 'color4');
      if (colorClass !== '') {
        spanElement.classList.add(colorClass);
      }
    }

    changeColor();

    setInterval(function () {
      changeColor();
    }, parseInt(period, 1200) || 1);
  };
});

$(function () {
  $('#about-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#gallery', 0, { display: "none" });
    gsap.to('#progress', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#contact', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#about', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });

  $('#contact-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#about', 0, { display: "none" });
    gsap.to('#gallery', 0, { display: "none" });
    gsap.to('#progress', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#contact', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });
  $('#progress-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#about', 0, { display: "none" });
    gsap.to('#contact', 0, { display: "none" });
    gsap.to('#gallery', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#progress', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });

  $('#gallery-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#about', 0, { display: "none" });
    gsap.to('#progress', 0, { display: "none" });
    gsap.to('#contact', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#gallery', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });

  $('#home-link').on('click', function () {
    gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
    gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
    gsap.to('#header', 0, { display: "none" });
    gsap.to('#about', 0, { display: "none" });
    gsap.to('#progress', 0, { display: "none" });
    gsap.to('#contact', 0, { display: "none" });
    gsap.to('#gallery', 0, { display: "none" });
    gsap.to('#breaker', 0, { display: "block" });
    gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
    gsap.to('#breaker', 0, { display: "none", delay: 2 });
    gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
    gsap.to('#header', 0, { display: "block", delay: .7 });
    gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
  });
});

$(function () {
  var body = document.querySelector('body');
  var $cursor = $('.cursor')
  function cursormover(e) {

    gsap.to($cursor, {
      x: e.clientX,
      y: e.clientY,
      stagger: .002
    })
  }
  function cursorhover(e) {
    gsap.to($cursor, {
      scale: 1.4,
      opacity: 1
    })

  }
  function cursor(e) {
    gsap.to($cursor, {
      scale: 1,
      opacity: .6
    })
  }
  $(window).on('mousemove', cursormover);
  $('.menubar').hover(cursorhover, cursor);
  $('a').hover(cursorhover, cursor);
  $('.navigation-close').hover(cursorhover, cursor);
});

$(function () {
  const fullImgBox = document.getElementById("fullImgBox"),
    imgElement = document.getElementById("img-element"),
    rightBtn = document.getElementById("right-btn"),
    leftBtn = document.getElementById("left-btn"),
    closeImg = document.getElementById("closeImg");

  var listImg = [...document.querySelectorAll(".image")];
  var indexImg = 0;

  const sliderBoxes = document.querySelectorAll('.slider-box');
  const viewImgBtns = document.querySelectorAll('.button button');

  viewImgBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      clicked(index);
      fullImgBox.style.display = "flex";
      imgElement.src = sliderBoxes[index].querySelectorAll('.image')[0].src;
    });
  });

  function clicked(position) {
    indexImg = 0;
    sliderBoxes.forEach((box, i) => {
      if (i === position) {
        listImg = [...box.querySelectorAll('.image')];
      }
    });
    imgElement.src = listImg[indexImg].src;
  }

  rightBtn.addEventListener("click", e => {
    if (indexImg >= listImg.length - 1) {
      indexImg = -1;
    }
    indexImg++;
    imgElement.src = listImg[indexImg].src;
  });

  leftBtn.addEventListener("click", e => {
    if (indexImg <= 0) {
      indexImg = listImg.length;
    }
    indexImg--;
    imgElement.src = listImg[indexImg].src;
  });

  closeImg.addEventListener("click", e => fullImgBox.style.display = "none");
});