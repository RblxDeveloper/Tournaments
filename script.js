document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the username value
    var usernameInput = document.getElementById('username');
    var username = usernameInput.value.trim();
  
    if (username !== '') {
      // Create a new list item with the username
      var listItem = document.createElement('li');
      listItem.textContent = username;
  
      // Append the list item to the participant list
      var participantList = document.getElementById('participant-list');
      participantList.appendChild(listItem);
  
      // Clear the username input field
      usernameInput.value = '';
    }
  });