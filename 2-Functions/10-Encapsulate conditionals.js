// BAD CODE
if (data.status === "fetching" && !data.rows) {
  // show spinner
}

const SomeReactComponent = ({ meeting, userId }) => {
  return (
    <div>
      <h2>Some Title</h2>
      <p>Some Text.</p>
      {new Date() > new Date(meeting.startTime) &&
        (userId === meeting.creatorId ||
          (!!meeting.permissions && meeting.permissions.cancel)) && (
          <button>Cancel Meeting</button>
        )}
    </div>
  );
};

// GOOD CODE
// function shouldShowSpinner(data) {
//   return data.status === "fetching" && !data.rows;
// }

// if (shouldShowSpinner(data)) {
//   // show spinner
// }

// const SomeReactComponent = ({ meeting, userId }) => {
//   const meetingHasStarted = new Date() > new Date(meeting.startTime);
//   const hasCreatedMeeting = userId === meeting.creatorId;
//   const hasCancelPermission =
//     hasCreatedMeeting || (!!meeting.permissions && meeting.permissions.cancel);
//   const showCancelButton = !meetingHasStarted && hasCancelPermission;

//   return (
//     <div>
//       <h2>Some Title</h2>
//       <p>Some Text.</p>
//       {showCancelButton && <button>Cancel Meeting</button>}
//     </div>
//   );
// };
