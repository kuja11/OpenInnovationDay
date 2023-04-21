import * as winston from "winston";
const { combine, printf } = winston.format;

/**
 * Static class containing the wrapping methods for creating a Winston Logger.
 * Can be expanded for more complex setup.
 */
export default class Logger {

  private static _defaultLogger = this.createLogger("LOGGER");

  /**
   * Returns a standard default logger without origin naming.
   * Perfect for standard use.
   * @returns Default Logger
   */
  public static getInstance() : winston.Logger {
    return this._defaultLogger;
  }

  /**
   * Creates a logger for the given class.
   * Wrapper method for Winston logging functionality.
   * @param className Name of associated class
   * @returns Winston Logger
   */
  public static createLogger(className: string): winston.Logger {
    return winston.createLogger({
      format:  this.getFormat(className),
      transports: this.getTransports(),
    });
  }

  /**
   * Private method for getting the available transports for logging.
   * If non-production the transports will include a file logging option.
   * @returns Winston Transports Configuration
   */
  private static getTransports(): winston.transport[] {
    return process.env.NODE_ENV !== "production"
      ? [new winston.transports.Console(), new winston.transports.File({ filename: "combined.log" })]
      : [new winston.transports.Console()];
  }

  /**
   * Generates the desired format for the Winston logger
   * @param className The name of the class the logger is associated with
   * @returns Formatting rules for Winston logger
   */
  private static getFormat(className: string): winston.Logform.Format {
    const printFormat = printf(({ level, message, label, timestamp }) => {
        const date = timestamp.split("T")[0];
        const time = timestamp.split("T")[1].slice(0, -1);
        return `[${date}][${time}][${label}]::${level.toUpperCase()}:: ${message}`;
    });

    return combine(
        winston.format.label({ label: className }),
        winston.format.timestamp(),
        printFormat
      )
  }

}

