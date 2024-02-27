// Fade on scroll
// NOT CURRENTLY WORKING WITH FADE ON PAGE LOAD!!!

$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  


      // hideArrows();
    // addHoverToElement();
    $('nav a').hover(
      function () {
        var img_url = './images/test_arrow_gif.gif';
        $('#test_arrow').css('background-image', 'url('+ img_url +')');
        $('#test_arrow').fadeIn();
      },
      function () {
        $('#test_arrow').fadeOut();
      }
    )

    createCountdownTimer();
      
    
  
  });


  

    



  function hideArrows() {
    var names = ["test_arrow"];
    names.forEach(name => {
      $(`#${name}`).hide();
    });
  }

  function toggleElement(name, action) {
    if (action == "hide") {
      $(`#${name}`).hide();
    } else {
      $(`#${name}`).show();
    }
  }

  function addHoverToElement() {
    var names = ["nav-link"];
    names.forEach(name => {
      $(`#${name}`).hover(function(){
        toggleTeamRole(`${name}`, "show");
      }, function(){
        toggleTeamRole(`${name}`, "hide");
    });
    });
  }

  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({behavior: 'smooth' });
    }
  }


function createCountdownTimer() {
  // Set the date we're counting down to
  var countDownDate = new Date("Oct 19, 2024 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("weddingCountdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("weddingCountdown").innerHTML = "It's time!";
    }
  }, 1000);
}
