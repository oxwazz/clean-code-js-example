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
