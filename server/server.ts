import App from "./index";

const port: any = process.env.PORT || 3030;

const app = new App().app;
app.listen(port, (err: { [key: string]: any }) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${port}`);
});
// import app from "./index";

// const port = process.env.PORT || 3000;

// app.listen(port, (err) => {
//   if (err) {
//     return console.log(err);
//   }

//   return console.log(`server is listening on ${port}`);
// });
