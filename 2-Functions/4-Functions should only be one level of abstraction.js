async function createUser(username, password) {
  const hashPassword = bcrypt.hash("hitohitonomi");
  const { data, error } = await User.save(username, hashPassword);

  let popupText = `Success Create User ${username}!`;
  if (error) {
    popupText = `Error Create User ${username}! Please try again.`;
  }
  show.popup(popupText);

  if (!error) {
    emailText = `
      <div>
        <h1>Email Verification</h1>
        <p>this is your verfication code ${data.verificationCode}</p>
      </div>
    `;
  }
  send.emailVerification(emailText);
}
