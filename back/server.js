import express from "express";
import dbConnect from "./mongo.js"
import routes from "./routers/index.js";
import dotenv from 'dotenv';
dotenv.config();
const app = express();

dbConnect();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT ?? 1234;

    /* ===== MIDDLEWWARES ===== */

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

/* ===== ROUTERS ===== */

    // app.use("/static", express.static(path.join(__dirname, "notifications")));
    app.use("/", routes);

    /* ========== */

    /* ===== APP LISTENING ===== */

    // Error catching endware.
    app.use((err, req, res, ) => {
      const status = err.status || 500;
      const message = err.message || err;


      res.status(status).send(message);
    });
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
