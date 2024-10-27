// script.js

// Access the video element
const video = document.getElementById('video');

// Request access to the user's webcam
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error("Error accessing webcam: ", err);
  });

// Simulate AI-powered attendance marking
const attendanceStatus = document.getElementById('attendance-status');
const markAttendanceButton = document.getElementById('mark-attendance');

markAttendanceButton.addEventListener('click', () => {
  // Simulated AI facial recognition logic (in a real scenario, use a backend AI model)
  const recognized = Math.random() > 0.2;  // 80% chance to simulate recognition success
  
  if (recognized) {
    attendanceStatus.textContent = "Attendance: Marked Present";
    attendanceStatus.style.color = "green";
  } else {
    attendanceStatus.textContent = "Attendance: Face Not Recognized";
    attendanceStatus.style.color = "red";
  }
});
