$(document).ready(function() {
 var myDataRef = new Firebase('https://i1cxkjpynl8.firebaseio-demo.com/');
 
 myDataRef.on('child_added', function(snapshot) {
   var message = snapshot.val();    
   var talk = "<span id=\"talk\"><strong>" + message.name + ": </strong>" + message.text + "</span>";
   $('.chat-panel').append(talk);    
 });
 
 $('#name').keypress(function(e){
   if (e.keyCode == 13) {      
     $(this).prop('disabled', true);
   }
 });
 
 $('#clear').click(function(){    
   $('#name').prop('disabled', false);
   $('#name').val('');
 });
   
 $('#okButton').click(function() {
   sendMessage();
 });

 $('#message').keypress(function(e) {
   if (e.keyCode == 13) {      
     sendMessage();
   }
 })

 function sendMessage(){
  var name = $('#name').val();
  var text = $('#message').val();
  
  if(name != "" && text != "")
  {
    myDataRef.push({name: name, text: text});
    $('#message').val('');
  }
 }
 
});
