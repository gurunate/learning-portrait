// this is the logger for the browser
import pino from 'pino';
import pkg from '../../../package.json';

const isProduction = process.env.NODE_ENV === 'production';

const config = {
    name: pkg.name,
    level: process.env.LOG_LEVEL || 'debug',
    serverUrl: process.env.HOST,
    env: process.env.NODE_ENV,
    publicUrl: process.env.HOST
};

const loggerUrl = `${config.serverUrl}/api/log`;

const pinoConfig = {
    browser: {
        asObject: true
    },
    ...(!isProduction && {
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true
            }
        }
    })
    // ...(isProduction && {
    //     transport: {
    //         target: 'pino-cloudwatch',
    //         options: {
    //             aws_access_key_id: '???',
    //             aws_secret_access_key: '???',
    //             aws_region: '???'
    //         }
    //     }
    // })
};

if (config.serverUrl) {
    // @ts-ignore
    pinoConfig.browser.transmit = {
        level: 'error',
        send: (level: string, logEvent: unknown) => {
            // @ts-ignore
            const msg = logEvent?.messages[0];

            const headers = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers':
                    'Origin, X-Requested-With, Content-Type, Accept',
                type: 'application/json'
            };

            const blob = new Blob([JSON.stringify({ msg, level })], headers);

            navigator.sendBeacon(loggerUrl, blob);
        }
    };
}

const logger = pino(pinoConfig);
if (!isProduction) {
    logger.info({ config }, 'logger');
    logger.info({ pinoConfig }, 'logger');
}

export const log = (msg: unknown) => logger.info(msg);
export default logger;
