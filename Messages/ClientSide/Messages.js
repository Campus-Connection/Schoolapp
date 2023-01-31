$(document).ready(function() {
    // Function to handle sending a chat message
    $('#chat-send').click(function() {
      var chatInput = $('#chat-input').val();
  
      // Make an AJAX request to your server to send the chat message
      $.post('/send-chat-message', { message: chatInput }, function(data) {
        $('#chat-output').append('<p>' + chatInput + '</p>');
        $('#chat-input').val('');
      });
    });
  });