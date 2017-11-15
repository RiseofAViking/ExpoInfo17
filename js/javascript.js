function CreerEnTete()
{
	document.getElementById("header").innerHTML = 	
	"<nav class='navbar navbar-custom navbar-fixed-top' role='navigation'>"
    + 	"<div class='container'>"
    +      "<div class='navbar-header page-scroll'>"
    +          "<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-main-collapse'>"
    +              "<i class='fa fa-bars'></i>"
    +          "</button>"
    +          "<a class='navbar-brand' href='index.html'>"
    +               "<h1>Rise of a Viking</h1>"
    +          "</a>"
    +   	"</div>"
    +       "<div class='collapse navbar-collapse navbar-right navbar-main-collapse'>"
    +  "<ul class='nav navbar-nav'>"
    +   "<li class='active'><a href='index.html#intro'>Accueil</a></li>"
    +   "<li><a href='index.html#description'>&#192; propos de RoaV</a></li>"
	+	"<li><a href='index.html#about'>Notre \351quipe</a></li>"
	+	"<li class='dropdown'>"
    +     "<a href='#' class='dropdown-toggle' data-toggle='dropdown'>Multimédia <b class='caret'></b></a>"
    +     "<ul class='dropdown-menu'>"
    +       "<li><a href='gallery.html'>Galerie</a></li>"
	+       "<li><a href='gallery.html#trailer'>Bande-annonce</a></li>"
    +       "<li><a href='gallery.html#levels'>Les niveaux</a></li>"
    +     "</ul>"
    +   "</li>"  
    + "</ul>"
    + "</div>"
    + "</div>"
    + "</nav>";
}

function CreerPiedDePage()
{
	document.getElementById("footer").innerHTML =
	"<div class='container'>"
	+	"<div class='row'>"
	+		"<div class='col-md-12 col-lg-12'>"
	+			"<div class='wow shake' data-wow-delay='0.4s'>"
	+			"<div class='page-scroll marginbot-30'>"
	+				"<a href='#intro' id='totop' class='btn btn-circle'>"
	+					"<i class='fa fa-angle-double-up animated'></i>"
	+				"</a>"
	+			"</div>"
	+			"</div>"
	+			"<p>&copy;Copyright 2017 - Rise of a Viking Team. Tous droits r\351serv\351s.</p>"
	+		"</div>"
	+	"</div>"	
	+ "</div>";
}
