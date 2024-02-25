// Fade on scroll
// NOT CURRENTLY WORKING WITH FADE ON PAGE LOAD!!!

// $(window).on("load",function() {
//     $(window).scroll(function() {
//       var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//       $(".fade").each(function() {
//         /* Check the location of each desired element */
//         var objectBottom = $(this).offset().top + $(this).outerHeight();
        
//         /* If the element is completely within bounds of the window, fade it in */
//         if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//           if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
//         } else { //object goes out of view (scrolling up)
//           if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
//         }
//       });
//     }).scroll(); //invoke scroll-handler on page-load
//   });

  $(document).ready(function() {


    // Function to load content based on the selected page
    function loadContent(page) {
      // You can use AJAX or fetch API to load content dynamically
      // Here's a basic example using jQuery's load() function
      //$('#content').load(page + '.html');



      $('#content').html(`<section id="home" class="fade-in">
                              <div id="intro-section" class="container-fluid intro-section">
                                  <div class="row">
                                      <h2>Michael & Sandra</h2>
                                  </div>
                          
                                  <div class="row">
                                      <div class="col">
                                          <p>Welcome to the wedding of Michael and Sandra.</p>
                                      </div>
                                  </div>
                              </div>
                          </section>`, function() {
                            $(this).fadeIn('slow');
                          });


    }

    // function loadContent(page) {
    //   $('#content').fadeOut('fast', function() {
    //     // Fade out the current content
    //     $(this).load(page + '.html', function() {
    //         // Callback function executed after content is loaded
    //         $(this).fadeIn('fast'); // Fade in the new content
    //     });
    //   });
      
    // }

    

    // // Initial content load
    // loadContent('home');

    // Navbar click event handler
    $('nav a').click(function(e) {
        e.preventDefault(); // Prevent default link behavior
        var page = $(this).attr('href'); // Get the page from the href attribute
        loadContent(page); // Load the content
    });
  });


  // $(document).ready(function(){
  //   // hideArrows();
  //   // addHoverToElement();
  //   $('nav a').hover(
  //     function () {
  //       var img_url = './images/test_arrow_gif.gif';
  //       $('#test_arrow').css('background-image', 'url('+ img_url +')');
  //       $('#test_arrow').fadeIn();
  //     },
  //     function () {
  //       $('#test_arrow').fadeOut();
  //     }
  //   )
    
  // })

  function displayContent(id) {
    // hide all other content
    var elements = ["intro-section","home-content","things-to-do-content","about-us"];
    elements.forEach(e => {
      toggleElement(e,"hide")
    });

    toggleElement(id, "show");
    console.log(` displayContent ${id}`)
  }




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