import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { notFoundHandler } from "./middlewares/notFound.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import router from "./routes/index.js";

import { userContext } from "./middlewares/userContext.middleware.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());

app.use(express.json());

app.use("/api/v1",router);

app.use(userContext);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;