$(function() {

  var state=true;
  var width = $(window).width();

  //responsinve feature for making it look good on phone
  $('.md-sidenav-content').toggleClass('col-xs-12 col-md-10');


  //Changing the main container size when clicking on the side nav
  $('#close-Open-SideNav').on('click',function () {
    $('.md-sidenav-content').toggleClass('col-md-10');
    console.log("clicked");
  });

  if(width <=500)
  {
    $('#discoverMeBtn').trigger('click');
    console.log('button clicked');
  }

  //Closes the sidebar when shrinking screen or opening through phone
  $( window ).resize(function()
  {
    width = $(window).width();
    if (width <= 950 && state==true)
    {
      $('#discoverMeBtn').trigger('click');
      console.log('button clicked');
      state=false;
    }

  })


//Top Menu Changing active class on click
  $("#menu-list li").click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  });

});





/* var urlpath = $(location).attr('pathname');

 if(urlpath.includes('projects'))
 {
 $('#menu-list li').addClass('active').siblings().removeClass('active');

 }*/

