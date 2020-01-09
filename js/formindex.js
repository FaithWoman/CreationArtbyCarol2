$('#contact').on('submit', formSubmit);

function formSubmit(event){
  
  var Name = $('#name').val();
  var Email = $('#email').val();
  
   $('#name, #email').css('border', 'none');
  
  if( Name === ''){
    event.preventDefault();
    
    $('#name').css('border', '1px solid red');
    
    alert("Name cannot be empty");
} 
  
if( Email === ''){
event.preventDefault();
    
 $('#email').css('border', '1px solid red');
 
  alert("Email cannot be empty");

 }

 }