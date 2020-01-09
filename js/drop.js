$('.main-navigation > li').on('mouseover', dropNav);
function dropNav(){
// console.log(this);
  $('.submenu').hide();
  
  $(this).find('.submenu').show();
  
  $(this).find('.submenu').on('mouseleave', function(){
  // console.log()('hover me baby')
  
//   if( 
//     $('.submenu').hide();
    
//     var submenu = $(this).find(' .submenu');
    
//     submenu.show();
    
//    submenu.on(mouseleave', function (){
//               $('.submenu'.hide();
 
//   }else {
//     $('.submenu').show()
//     // $(this).addClass('megamenu')
//   }
  })

}
