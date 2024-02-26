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
    var section = getElementById(sectionId);
    console.log(section);
    if (section) {
      section.scrollIntoView({behavior: 'smooth' });
    }
  }