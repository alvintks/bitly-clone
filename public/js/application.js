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

      },

      error: function(data) {
      $("#error").html(data)
      }

    })
  })
//   //attach click event onto a href links (inside table)
//   $('table tr td a').on('click', function(e){
//     // ele is the click count td next to the clicked link
//     ele = $(e.target).parent().next()
//     // current click count + 1
//     num = parseInt(ele.text()) + 1 
//     // update click count value
//     ele.text(num)
//   })
// });