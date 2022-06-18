import winston from "winston"

function logger(meta = {}) {
  const winstonLogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: meta,
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
        level: 'info'
      }),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });

  if (process.env.NODE_ENV !== 'production') {
    winstonLogger.add(new winston.transports.Console({
      format: winston.format.simple()
    }));
  }

  return winstonLogger
}
export default logger;
