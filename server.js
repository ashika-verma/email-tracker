import express from "express";
import next from "next";
import BodyParser from "body-parser";
import compression from "compression";
import logger from "./server/logger";

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8080;
const app = next({ dev, quiet: false });
const nextRequestHandler = app.getRequestHandler();

function logRequest(req, res, next) {
  // https://regex101.com/r/yRs8Ws/1/
  const regex = /\/static\/[0-9]*\.png/gm;
  req.url.match(regex) ? logger.warn(req.url) : logger.info(req.url);
  next();
}

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.use(compression());
  }

  // logger middleware
  server.use(logRequest);

  server.use("/public", express.static("public"));
  server.use(BodyParser.json());
  server.use(
    BodyParser.urlencoded({
      extended: false,
    })
  );

  server.get("*", async (req, res) => {
    return nextRequestHandler(req, res, req.url);
  });

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.log(`[ server ]: http://localhost:${port}`);
  });
});
