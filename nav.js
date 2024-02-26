$(document).ready(function(){
	// $("#navbar").append(`<div class="topnav">
	// 					<h1 class="nav_title">RIT Player Piano</h1>
	// 					<a href="index.html">Home</a>
	// 					<a href="records.html">Records</a>
	// 					<a href="contact.html">Contact</a>
	// 					<a href="agenda.html">Agenda</a>
	// 				</div>`);
	$("#navbar").append(
		`<nav class="navbar navbar-expand-sm">
			<div class="container-fluid justify-content-center">
			<!-- Links -->
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="#section1" onclick="scrollToSection('section1')">Home</a>
					</li>
					
					<li class="nav-item">
						<a class="nav-link" href="#section2" onclick="scrollToSection('section2')" >Our Story</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#section3" onclick="scrollToSection('section3')">Registry</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#section4" onclick="scrollToSection('section4')">Wedding Details</a>
					</li>
				</ul>
			</div>
		
		</nav>
		`);
});


