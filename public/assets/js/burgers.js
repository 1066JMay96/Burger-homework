import { response } from "express";

("#burgers-form").on('submit', function(event) {
  event.preventDefault();

  const burgersData = {
    burgers_menu_item: $('[name=burgers-name]')
    .val()
    .trim()
  };
  $.ajax({
    url:'api/burgers',
    method:'POST',
    data: burgersData
  })
  .then(response => {
    console.log(response);
    location.reload();
  });
});
$('.devourBurger').on('click', function() {
  // get id of burger to devour
  const burgerId = $(this).attr('data-burgersid');

  $.ajax({
    url: `/api/burgers/${burgerId}`,
    method: 'PUT',
    data: {
      devoured: 1
    }
  })
  .then(response => {
    console.log(response);
    location.reload();
  });
});

$('.regurgitate').on('click', function() {
  // get id of burger to undevour
  const burgerId = $(this).attr('data-burgersid');

  $.ajax({
    url: `/api/burgers/${burgerId}`,
    method: 'PUT',
    data: {
      devoured: 0
    }
  })
  .then(response => {
    console.log(response);
    location.reload();
  });
});

$('.deleteburgers').on('click', function() {
  const burgersId = $(this).attr(data-burgersid);

  $.ajax({
    url: `/api/burgers/${burgersId}`,
    method: 'DELETE',
    data: {

    }
  })
}).then(response => {
  console.log(response);
  location.reload();
});
$('.deleteburgers').on('click', function() {
  const burgersId = $(this).attr('data-burgersId');
})