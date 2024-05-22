import winstonDaily from "winston-daily-rotate-file";
import { utilities, WinstonModule } from "nest-winston";
import winston from "winston";

const dailyOption = (level: string) => {
  let fileLevel: string = level;

  const LOG_DIR: string = process.env.LOG_DIR;

  if (level !== "warn" && level !== "debug" && level !== "error") {
    fileLevel = "info";
  }

  return {
    level,
    datePattern: "YYYY-MM-DD",
    dirname: LOG_DIR + fileLevel,
    filename: `%DATE%.${fileLevel}.log`,
    zippedArchive: true,
    format: winston.format.combine(
      winston.format.timestamp(),
      utilities.format.nestLike(process.env.MODE, {
        colors: false,
        prettyPrint: false,
      }),
    ),
  };
};

export const winstonLogger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      level: process.env.MODE === "local" ? "debug" : "info",
      format: winston.format.combine(
        winston.format.timestamp(),
        utilities.format.nestLike(process.env.MODE, {
          colors: true,
          prettyPrint: true,
        }),
      ),
    }),

    new winstonDaily(dailyOption("info")),
    new winstonDaily(dailyOption("warn")),
    new winstonDaily(dailyOption("debug")),
    new winstonDaily(dailyOption("error")),
  ],
});
