$(document).ready(function () {
	
	$('.btn').click(function() {
		$('.mnu_list').toggle(function () {
        $('.mnu_list').css("left","0px", 100);
      },
      function() {
        $('.mnu_list').css("left","0px", 100);
      });
});
})