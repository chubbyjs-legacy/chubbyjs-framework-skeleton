import ResponseInterface from '@chubbyjs/psr-http-message/dist/ResponseInterface';
import { Duplex } from 'stream';

class ResponseDouble implements ResponseInterface {
    getStatusCode(): number {
        throw new Error('Method not implemented.');
    }
    withStatus(code: number, reasonPhrase?: string): this {
        throw new Error('Method not implemented.');
    }
    getReasonPhrase(): string {
        throw new Error('Method not implemented.');
    }
    getProtocolVersion(): string {
        throw new Error('Method not implemented.');
    }
    withProtocolVersion(version: string): this {
        throw new Error('Method not implemented.');
    }
    getHeaders(): Map<string, string[]> {
        throw new Error('Method not implemented.');
    }
    hasHeader(name: string): boolean {
        throw new Error('Method not implemented.');
    }
    getHeader(name: string): string[] {
        throw new Error('Method not implemented.');
    }
    getHeaderLine(name: string): string {
        throw new Error('Method not implemented.');
    }
    withHeader(name: string, value: string | string[]): this {
        throw new Error('Method not implemented.');
    }
    withAddedHeader(name: string, value: string | string[]): this {
        throw new Error('Method not implemented.');
    }
    withoutHeader(name: string): this {
        throw new Error('Method not implemented.');
    }
    getBody(): Duplex {
        throw new Error('Method not implemented.');
    }
    withBody(body: Duplex): this {
        throw new Error('Method not implemented.');
    }
}

export default ResponseDouble;
