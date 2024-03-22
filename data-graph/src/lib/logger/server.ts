import PrettyStream from 'bunyan-pretty-colors';
import bunyan from 'bunyan';
import dotenv from 'dotenv';
import pkg from '../../../package.json' assert { type: 'json' };

dotenv.config();

const PRODUCTION = 'production';
const TEST = 'test';

/**
 * Log Level order from the docs https://github.com/trentm/node-bunyan#level-suggestions:
 *
 * The log levels in bunyan are as follows. The level descriptions are best practice opinions of the author.
 *
 * - "fatal" (60): The service/app is going to stop or become unusable now. An operator should definitely look into this soon.
 * - "error" (50): Fatal for a particular request, but the service/app continues servicing other requests. An operator should look at this soon(ish).
 * - "warn" (40): A note on something that should probably be looked at by an operator eventually.
 * - "info" (30): Detail on regular operation.
 * - "debug" (20): Anything else, i.e. too verbose to be included in "info" level.
 * - "trace" (10): Logging from external libraries used by your app or very detailed application logging.
 *
 */

const { name } = pkg;

const prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

const isProduction = process.env.NODE_ENV === PRODUCTION;
const env = process.env.NODE_ENV || PRODUCTION;
const level = process.env.LOG_LEVEL || 'debug';

const log = bunyan.createLogger(
    // @ts-ignore
    env === TEST
        ? { name, level: 'fatal' }
        : {
              name,
              level,
              stream: !isProduction ? prettyStdOut : process.stdout
          }
);

log.info('🪵 Logger initialized', { env, level });

export default log;
