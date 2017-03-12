$(function() {
 $("#post_button").click(function() {
   post_message();
 });
 get_messages();
});

function get_messages() {
 $.ajax({
   url: "/messages",
   dataType: "json",
   success: function(data) {
     update_message_list(data);
   }
 });
}

function post_message() {
 var new_message = $("#post_message").val();
 $.ajax({
   url: "/messages",
   type: "POST",
   dataType: "json",
   data: {
     "text": new_message
   },
   success: function(data) {
     get_messages();
   }
 });
}

function update_message_list(message_data) {
 $("#message_list").html("");
 $.each(message_data, function(index, value) {
   $("#message_list").append("<li>" + value.text + "</li>");
 });
}