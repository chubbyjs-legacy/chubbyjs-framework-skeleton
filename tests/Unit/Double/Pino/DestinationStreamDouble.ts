import { DestinationStream } from 'pino';

class DestinationStreamDouble implements DestinationStream {
    write(msg: string): void {
        throw new Error('Method not implemented.');
    }
}

export default DestinationStreamDouble;
