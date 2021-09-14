import { Method } from '@chubbyjs/psr-http-message/dist/RequestInterface';
import ServerRequestInterface, {
    ParsedBody,
    QueryParams,
} from '@chubbyjs/psr-http-message/dist/ServerRequestInterface';
import UriInterface from '@chubbyjs/psr-http-message/dist/UriInterface';
import { Duplex } from 'stream';

class ServerRequestDouble implements ServerRequestInterface {
    getCookieParams(): Map<string, string> {
        throw new Error('Method not implemented.');
    }
    withCookieParams(cookieParams: Map<string, string>): this {
        throw new Error('Method not implemented.');
    }
    getQueryParams(): QueryParams {
        throw new Error('Method not implemented.');
    }
    withQueryParams(queryParams: QueryParams): this {
        throw new Error('Method not implemented.');
    }
    getParsedBody(): ParsedBody {
        throw new Error('Method not implemented.');
    }
    withParsedBody(parsedBody: ParsedBody): this {
        throw new Error('Method not implemented.');
    }
    getAttributes(): Map<string, unknown> {
        throw new Error('Method not implemented.');
    }
    getAttribute(name: string, defaultValue?: unknown): unknown {
        throw new Error('Method not implemented.');
    }
    withAttribute(name: string, value: unknown): this {
        throw new Error('Method not implemented.');
    }
    withoutAttribute(name: string): this {
        throw new Error('Method not implemented.');
    }
    getRequestTarget(): string {
        throw new Error('Method not implemented.');
    }
    withRequestTarget(requestTarget: string): this {
        throw new Error('Method not implemented.');
    }
    getMethod(): Method {
        throw new Error('Method not implemented.');
    }
    withMethod(name: Method): this {
        throw new Error('Method not implemented.');
    }
    getUri(): UriInterface {
        throw new Error('Method not implemented.');
    }
    withUri(uri: UriInterface, preserveHost?: boolean): this {
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

export default ServerRequestDouble;
