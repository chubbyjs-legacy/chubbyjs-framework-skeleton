import PathToRegexpRouteMatcher from "@chubbyjs/chubbyjs-framework-router-path-to-regexp/dist/PathToRegexpRouteMatcher";
import PathToRegexpUrlGenerator from "@chubbyjs/chubbyjs-framework-router-path-to-regexp/dist/PathToRegexpUrlGenerator";
import ErrorMiddleware from "@chubbyjs/chubbyjs-framework/dist/Middleware/ErrorMiddleware";
import RouteMatcherMiddleware from "@chubbyjs/chubbyjs-framework/dist/Middleware/RouteMatcherMiddleware";
import ResponseFactory from "@chubbyjs/chubbyjs-http-message/dist/Factory/ResponseFactory";
import LaminasFactoryInterface from "@chubbyjs/chubbyjs-laminas-config/dist/LaminasFactoryInterface";
import PinoPsrLogger from "@chubbyjs/chubbyjs-pino-psr/dist/PinoPsrLogger";
import { createWriteStream, realpathSync, WriteStream } from "fs";
import { DestinationStream, LoggerOptions } from 'pino';
import CleanDirectoriesCommand from "../src/Command/CleanDirectoriesCommand";
import PingRequestHandler from "../src/RequestHandler/PingRequestHandler";
import CleanDirectoriesCommandFactory from "../src/ServiceFactory/Command/CleanDirectoriesCommandFactory";
import ErrorMiddlewareFactory from "../src/ServiceFactory/Framework/ErrorMiddlewareFactory";
import MiddlewaresFactory from "../src/ServiceFactory/Framework/MiddlewaresFactory";
import PathToRegexpRouteMatcherFactory from "../src/ServiceFactory/Framework/PathToRegexpRouteMatcherFactory";
import PathToRegexpUrlGeneratorFactory from "../src/ServiceFactory/Framework/PathToRegexpUrlGeneratorFactory";
import RouteMatcherMiddlewareFactory from "../src/ServiceFactory/Framework/RouteMatcherMiddlewareFactory";
import RoutesFactory from "../src/ServiceFactory/Framework/RoutesFactory";
import ResponseFactoryFactory from "../src/ServiceFactory/Http/ResponseFactoryFactory";
import PinoPsrLoggerFactory from "../src/ServiceFactory/Logger/PinoPsrLoggerFactory";
import PingRequestHandlerFactory from "../src/ServiceFactory/RequestHandler/PingRequestHandlerFactory";

export type Config = {
    debug: boolean,
    dependencies: {
        factories: Map<string, LaminasFactoryInterface>,
    };
    directories: Map<string, string>,
    pino: {
        options: Omit<LoggerOptions, 'level'> & { level: 'fatal' | 'error' | 'warn' | 'info' | 'debug'; },
        stream: DestinationStream,
    },
};

const rootDir = realpathSync(__dirname + '/..');

export default (env: string): Config => {
    const cacheDir = rootDir + '/var/cache/' + env;
    const logDir = rootDir + '/var/log';

    let logStream: WriteStream | undefined;

    return {
        debug: false,
        dependencies: {
            factories: new Map<string, LaminasFactoryInterface>([
                ['Middleware[]', MiddlewaresFactory],
                ['Routes', RoutesFactory],
                [CleanDirectoriesCommand.name, CleanDirectoriesCommandFactory],
                [ErrorMiddleware.name, ErrorMiddlewareFactory],
                [PathToRegexpRouteMatcher.name, PathToRegexpRouteMatcherFactory],
                [PathToRegexpUrlGenerator.name, PathToRegexpUrlGeneratorFactory],
                [PingRequestHandler.name, PingRequestHandlerFactory],
                [PinoPsrLogger.name, PinoPsrLoggerFactory],
                [ResponseFactory.name, ResponseFactoryFactory],
                [RouteMatcherMiddleware.name, RouteMatcherMiddlewareFactory],
            ]),
        },
        directories: new Map([
            ['cache', cacheDir],
            ['log', logDir],
        ]),
        pino: {
            options: {
                name: 'chubbyjs-framework-skeleton',
                level: 'info',
            },
            stream: {
                write: (msg: string): void => {
                    if (!logStream) {
                        logStream = createWriteStream(logDir + '/' + env + '.log', { flags: 'a' });
                    }

                    logStream.write(msg);
                }
            },
        },
    };
};
