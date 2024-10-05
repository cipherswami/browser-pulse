const statusElement = document.getElementById('status');

// Detect when the window is focused (tab is active)
window.addEventListener('focus', function() {
  const statusElement = document.getElementById('status');
  statusElement.textContent = 'Status: Active';
  console.log("Active")
});

// Detect when the window is blurred (tab is inactive)
window.addEventListener('blur', function() {
  const statusElement = document.getElementById('status');
  statusElement.textContent = 'Status: Inactive';
  console.log("InActive")
});
