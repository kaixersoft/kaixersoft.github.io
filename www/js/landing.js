/* TooTip */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


/* Pages */
$('.nav-box .fa-smile-o').click(function(){
	location.href = "/about.html";
});

$('.nav-box .fa-flag-checkered').click(function(){
	location.href = "/portfolio.html";
});

$('.nav-box .fa-puzzle-piece').click(function(){
	location.href = "/technology.html";
});

$('.nav-box .fa-wordpress').click(function(){
	location.href = "/blog.html";
});

$('.nav-box .fa-gift').click(function(){
	location.href = "/gift.html";
});
