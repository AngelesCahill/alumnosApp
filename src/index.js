import express from "express";
import userRoutes from "./routes/users.routes.js";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"))
const PORT = 3000;

app.use(express.json());
app.use(userRoutes);


app.listen(PORT, console.log(`Server running on port ${PORT}`));