// BAD CODE
import { get } from "request-promise";
import { writeFile } from "fs-extra";

get("https://en.wikipedia.org/wiki/Monkey_D._Luffy")
  .then((body) => {
    return writeFile("article.html", body);
  })
  .then(() => {
    console.log("File written");
  })
  .catch((err) => {
    console.error(err);
  });

// GOOD CODE
import { get } from "request-promise";
import { writeFile } from "fs-extra";

async function getLuffyArticle() {
  try {
    const body = await get("https://en.wikipedia.org/wiki/Monkey_D._Luffy");
    await writeFile("article.html", body);
    console.log("File written");
  } catch (err) {
    console.error(err);
  }
}
