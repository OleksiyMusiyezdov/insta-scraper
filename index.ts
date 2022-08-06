import * as dotenv from "dotenv";
import { scrapper } from "./src/scraper";

dotenv.config();

const username: string | undefined = process.argv[2];

if (!username) {
  (() => {
    console.log(
      "Username is undefined. You have to pass username in order to use scraper."
    );
    return;
  })();
} else {
  scrapper(username);
}
