import { response } from "express";

("#burgers-form").on('submit', function(event) {
  event.preventDefault();

  const burgersdata = {
    burgers_menu_item: $('[name=burgers-name]').val().trim()
  }
  $.ajax({
    url:'api/burgers',
    method:'POST',
    data: burgersdata
  }).then(response =>{
    console.log(response);
    location.reload();
  });
});