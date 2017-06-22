$(document).ready(function() {
  $('form').on('submit', function(event) { 
  event.preventDefault() 
    $.ajax({ 
    url: '/add_url',
    method: 'post', 
    data: $(this).serialize(),

      success: function(data) {
      result = JSON.parse(data) 
      $('tr:first-child').after('<tr><td>' + result.long_url + 
        '</td><td><a href="' + result.short_url + '">'+ result.short_url +'</a></td><td>' 
        + result.click + '</td></tr>')

      }
    })
  })
});