// BAD CODE
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

// GOOD CODE
// async function createUser(username, password) {
//   const { data, error } = await saveUser(username, password);
//   showPopup(error);
//   if (!error) await sendEmailVerification(data);
// }

// async function saveUser(username, password) {
//   const hashPassword = bcrypt.hash("hitohitonomi");
//   return await User.save(username, hashPassword);
// }

// function showPopup(error) {
//   let popupText = "Error Create User! Please try again.";
//   if (error) {
//     popupText = "Success Create User!";
//   }
//   show.popup(popupText);
// }

// async function sendEmailVerification(data) {
//   const emailText = `
//       <div>
//         <h1>Email Verification</h1>
//         <p>this is your verfication code ${data.verificationCode}</p>
//       </div>
//     `;
//   await send.emailVerification(emailText);
// }
