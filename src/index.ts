import express, { Request, Response } from "express";

const app = express();

app.use("/", (request: Request, response: Response) => {
  response.send("Express server!");
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
