// Store attendance data
let attendanceData = [];

// Get DOM elements
const attendanceForm = document.getElementById('attendanceForm');
const studentNameInput = document.getElementById('studentName');
const attendanceList = document.getElementById('attendanceItems');

// Add event listener to the form
attendanceForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the student name from the input field
  const studentName = studentNameInput.value;
  
  // Check if the student name is not empty
  if (studentName.trim() !== '') {
    // Add the student to the attendance list
    attendanceData.push(studentName);
    
    // Clear the input field
    studentNameInput.value = '';
    
    // Update the attendance list
    updateAttendanceList();
  }
});

// Function to update the attendance list
function updateAttendanceList() {
  // Clear the attendance list
  attendanceList.innerHTML = '';
  
  // Iterate over the attendance data and create list items
  attendanceData.forEach(function(student) {
    const listItem = document.createElement('li');
    listItem.textContent = student;
    attendanceList.appendChild(listItem);
  });
}
