import express from "express";
import conn from "./db/conn.js";
import router from './Routes/studentsData.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
const student_Route = router;
app.use("/api", student_Route);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
