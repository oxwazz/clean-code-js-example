// if the student is at least 18 years of age
if (student.age >= 18) {
  // send meeting invitation to the student
  notificationService.sendMessageTo(student, meetingInvitation);
} else {
  // sends a meeting invitation to the student’s parent
  notificationService.sendMessageTo(student.parent, meetingInvitation);
}
