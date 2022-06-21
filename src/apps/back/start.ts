import {BackApp} from "./BackApp.js";

try {
  new BackApp().start();
} catch (e) {
  console.log(e);
  process.exit(1);
}
