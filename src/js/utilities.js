// <!--NAVIGATION-->
var $e = jQuery.noConflict();
$e(function() {
	$e(".nav-item").hover(
		function() {
			$e(this).css("color", "#c8e0e8");
			$e(this).prepend('&#x25BA;');
		     
		},
		function() {
			$e(this).css("color", "white");
			var symbol = $e(this).text(); 	
			$e(this).text(symbol.slice(1));    
		});
	$e(".investment-button").hover(
		function() {
			$e(this).children("a").css("color", "#c8e0e8");
			$e(this).css("border-color", "#c8e0e8");
		     
		},
		function() {
			$e(this).children("a").css("color", "#ffffff");
			$e(this).css("border-color", "#ffffff");
		});
});

// <!--HAMBURGER NAV ON SCROLL-->
$o = jQuery.noConflict(); 
$o(window).scroll(function () {
var screen_width = $o(window).width(); 
  
 
    if ($o(document).scrollTop() < 5) {
		if($o("#popout_nav:visible")) { 
			$o("#popout_nav").css("display", "none"); 
			$o("#hamburger_nav").css("right", "0");
			$o("#popout_nav").css("visibility", "hidden");
	
		}	
		else if($o("#popout_nav_mobile").is(":visible")) { 
			$o("#popout_nav_mobile").css("display", "none"); 
			$o("#hamburger_nav").css("right", "0");
			$o("#popout_nav_mobile").css("visibility", "hidden");
	
		}	
		if(screen_width > 1024)
 		{
	
			$o('#hamburger_nav').fadeOut();
			$o('#navigation_right').fadeIn();
		}
	  } 
	  else {
		$o('#hamburger_nav').fadeIn();
		$o('#navigation_right').fadeOut();
	  }
 
});

// <!--HAMBURGER NAV-->
$p = jQuery.noConflict(); 
$p(function(){
$p("#hamburger_nav").click(function () {  
var screen_width = $o(window).width(); 
  
	if(screen_width > 1024)
 	{
		if($p("#popout_nav").is(":hidden")) {
			
				$p("#popout_nav").show(); 
				$p("#hamburger_nav").css("right", "18%");
				$p("#popout_nav").css("visibility", "visible");
		} 
		else  
		{
				$p("#popout_nav").hide();
				$p("#hamburger_nav").css("right", "0");
				$p("#popout_nav").css("visibility", "hidden");
		
		}
	}
	else if(screen_width > 767 && screen_width < 1025)
 	{
		if($p("#popout_nav").is(":hidden")) {
			
				$p("#popout_nav").show(); 
				$p("#hamburger_nav").css("right", "35%");
				$p("#popout_nav").css("visibility", "visible");
		} 
		else  
		{
				$p("#popout_nav").hide();
				$p("#hamburger_nav").css("right", "0");
				$p("#popout_nav").css("visibility", "hidden");
		
		}
	}
	else
	{
	   if($p("#popout_nav_mobile").is(":hidden"))
	    { 
				$p("#popout_nav_mobile").show(); 
				$p("#hamburger_nav").css("right", "60%"); 
				$p("#popout_nav_mobile").css("visibility", "visible");	
		}
		else  
		{ 
				$p("#popout_nav_mobile").hide();
				$p("#hamburger_nav").css("right", "0");	
				$p("#popout_nav_mobile").css("visibility", "hidden");
		}
	
	 }
	

	
	}); 
});


// <!--PEOPLE ROLL OVER-->
var $u = jQuery.noConflict();
$u(function() {
	
	$u("#jeff").hover(
		function() {
			this.src = "../src/assets/jeffkeswin_rollover.png"; 
		},
		function() {
			this.src = "../src/assets/jeffkeswin.png";  
		});
	$u("#andrew").hover(
		function() {
			this.src = "../src/assets/andrewwellington_rollover.png"; 
		},
		function() {
			this.src = "../src/assets/andrewwellington.png";  
		});
	$u("#caroline").hover(
		function() {
			this.src = "../src/assets/carolineritter.png"; 
		},
		function() {
			this.src = "../src/assets/carolineritter7-1.png";  
		});
});

var $x = jQuery.noConflict();
$x(function() {
			$x(".news-image").hover(
				function() {
					$x(this).children("img").end().children(".hover").css("background-color", "rgba(208,238,247,.6)"); 
				},
				function() {
					$x(this).children("img").end().children(".hover").css("background-color", "none"); 
				});
		});



$e = jQuery.noConflict(); 
$e(window).scroll(function () {
	if($e("#popout_nav").is(":visible")) {
	     $e("#popout_nav").fadeOut(); 
		 $e("#hamburger_nav").css("right", "0");
		 $e("#popout_nav").css("visibility", "hidden");
	}
	 
}); 