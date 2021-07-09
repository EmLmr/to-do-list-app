function newItem() {

  //1. Adding a new item to the list of items:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  let text = document.createTextNode(inputValue);

  li.append(inputValue);

    // Conditional to make sure a list entry was made.
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    let list = $('#list');
    list.append(li);
  }

  //2. Crossing out an item from the list of items, when clicking on it:
  li.on('click', function() {
      li.addClass("strike");
    });
}
