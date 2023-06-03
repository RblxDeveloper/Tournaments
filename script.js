// Function to save the participant list to local storage
function saveParticipantList(participants) {
  localStorage.setItem('participants', JSON.stringify(participants));
}

// Function to load the participant list from local storage
function loadParticipantList() {
  var participants = localStorage.getItem('participants');
  return participants ? JSON.parse(participants) : [];
}

// Function to update the participant list in the UI
function updateParticipantList() {
  var participantList = document.getElementById('participant-list');
  participantList.innerHTML = '';

  var participants = loadParticipantList();
  participants.forEach(function (username) {
    var listItem = document.createElement('li');
    listItem.textContent = username;
    participantList.appendChild(listItem);
  });
}

// Event listener for form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var usernameInput = document.getElementById('username');
  var username = usernameInput.value.trim();

  if (username !== '') {
    var participants = loadParticipantList();
    participants.push(username);
    saveParticipantList(participants);

    updateParticipantList();

    usernameInput.value = '';
  }
});

// Load the participant list on page load
updateParticipantList();
