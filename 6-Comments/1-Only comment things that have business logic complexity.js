// BAD CODE
function hashIt(data) {
  // The hash
  let hash = 0;

  // Length of string
  const length = data.length;

  // Loop through every character in data
  for (let i = 0; i < length; i++) {
    // Get character code.
    const char = data.charCodeAt(i);
    // Make the hash
    hash = (hash << 5) - hash + char;
    // Convert to 32-bit integer
    hash &= hash;
  }
}

const regexYoutubeId =
  /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;

// GOOD CODE
// function hashIt(data) {
//   let hash = 0;
//   const length = data.length;

//   for (let i = 0; i < length; i++) {
//     const char = data.charCodeAt(i);
//     hash = (hash << 5) - hash + char;

//     // Convert to 32-bit integer
//     hash &= hash;
//   }
// }

// // parsing video id from URL for youtube, example:
// // http://youtu.be/NLqAF9hrVbY -> NLqAF9hrVbY
// // http://www.youtube.com/watch?v=NLqAF9hrVbY -> NLqAF9hrVbY
// const regexYoutubeId =
//   /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;
