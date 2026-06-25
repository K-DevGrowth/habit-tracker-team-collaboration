import express from "express";

import {PORT} from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import habitRouter from "./routes/habit.routes.js";
import connectedToDatabase from "./database/mongodb.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";

const app = express();

app.use(express.json());
app.use(arcjetMiddleware);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/habits', habitRouter);

app.listen(PORT, async () => {
    console.log(`Server started on port http://localhost:${PORT}`);

    await connectedToDatabase();
});

export default app;