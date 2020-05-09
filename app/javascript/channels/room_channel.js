import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('We are Live');
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $('#msg').append('<div class="message">' + data.content + '</div>')
    console.log(data.content);
  },

  speak: function() {
    return this.perform('speak');
  }
});

var submitMessages;

$(document).on('turbolinks:load', function () {
  // console.log('turbolinks loaded');
  submitMessages()
})

submitMessages = function () {
  $('#message_content').on('keydown', function (event) {
    $('input').click()
      // event.target.value = ''
      // event.preventDefault()

    // if (event.keyCode === 13) {
    //   $('input').click()
    //   event.target.value = ''
    //   event.preventDefault()
    //   console.log('We hitted Enter');
    // } 
  })
}
