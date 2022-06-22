import {BackApp} from "./BackApp.js";

try {
  const app = new BackApp()
  await app.start()

  // console.log('start')
  // const response = await fetch('http://localhost:3000/status')
  // console.log(response.status)
  // await app.stop()
  // console.log('end')
} catch (e) {
  console.log(e);
  process.exit(1);
}
