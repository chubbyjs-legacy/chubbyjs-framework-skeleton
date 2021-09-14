import ContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';

class ContainerDouble implements ContainerInterface {
    get<T>(id: string): T {
        throw new Error('Method not implemented.');
    }
    has(id: string): boolean {
        throw new Error('Method not implemented.');
    }
}

export default ContainerDouble;
