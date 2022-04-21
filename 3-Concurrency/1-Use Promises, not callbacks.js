import { get } from "request";
import { writeFile } from "fs";

get(
  "https://en.wikipedia.org/wiki/Monkey_D._Luffy",
  (requestErr, response, body) => {
    if (requestErr) {
      console.error(requestErr);
    } else {
      writeFile("article.html", body, (writeErr) => {
        if (writeErr) {
          console.error(writeErr);
        } else {
          console.log("File written");
        }
      });
    }
  }
);
