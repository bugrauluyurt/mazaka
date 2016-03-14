// JavaScript Document
$( document ).ready(function() {

   	$('.group').hover(
   		function () {
    	    $(this).children('path').attr("class", "result_hover");
        },
        function () {
            $(this).children('path').attr("class", "st1");
        }
    );   

});