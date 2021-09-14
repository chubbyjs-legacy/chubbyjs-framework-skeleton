import LoggerInterface from '@chubbyjs/psr-log/dist/LoggerInterface';
import LogLevel from '@chubbyjs/psr-log/dist/LogLevel';

class LoggerDouble implements LoggerInterface {
    emergency(message: string, context: Record<string, any>): void {
        throw new Error('Method not implemented.');
    }
    alert(message: string, context: Record<string, any>): void {
        throw new Error('Method not implemented.');
    }
    critical(message: string, context: Record<string, any>): void {
        throw new Error('Method not implemented.');
    }
    error(message: string, context: Record<string, any>): void {
        throw new Error('Method not implemented.');
    }
    warning(message: string, context: Record<string, any>): void {
        throw new Error('Method not implemented.');
    }
    notice(message: string, context: Record<string, any>): void {
        throw new Error('Method not implemented.');
    }
    info(message: string, context: Record<string, any>): void {
        throw new Error('Method not implemented.');
    }
    debug(message: string, context: Record<string, any>): void {
        throw new Error('Method not implemented.');
    }
    log(level: LogLevel, message: string, context: Record<string, any>): void {
        throw new Error('Method not implemented.');
    }
}

export default LoggerDouble;
