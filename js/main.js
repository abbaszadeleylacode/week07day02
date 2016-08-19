
$(document).ready(function(){
 $('.navbar a')
    .on('click', function(){
    $('.navbar a').attr('id',"");
    $(this).attr('id',"active");
    var thisData=$(this).attr('class');
    var offset=$('#'+ thisData).offset();
    console.log(offset);
    $('html,body').animate({scrollTop: offset.top-3},1000);
    return false;
    })
// on background
   $("#onBackground").fadeIn(2000);

//logo slide down 
      $(".logo1").slideDown(500);
      $(".logo2").slideDown(800);

      $(".logo3").slideDown(1200);
      $(".logo4").slideDown(1500);
      $(".logo5").slideDown(1800);
  });

//behind the scenes slide  




// 00000000000000000000000000000000000

// $(window).scroll(function() {
//   $( "#logo img").slideDown( "slow" );
// });
// 0000000000000000000000000000000