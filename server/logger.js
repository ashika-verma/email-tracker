require("dotenv").config();
const { createLogger, format, transports } = require("winston");
require("winston-mongodb").MongoDB;

const logger = createLogger({
  transports: [
    new transports.MongoDB({
      db: process.env.MONGODB_URI,
      level: "warn",
      collection: process.env.MONGODB_COLLECTION,
      options: {
        useUnifiedTopology: true,
      },
    }),
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
    new transports.File({
      filename: "logs/error.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transports.File({
      filename: "logs/info.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

module.exports = logger;
