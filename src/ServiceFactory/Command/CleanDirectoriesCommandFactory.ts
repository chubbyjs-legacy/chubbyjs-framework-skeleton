import PsrContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import { Config } from '../../../config/prod';
import CleanDirectoriesCommand from '../../Command/CleanDirectoriesCommand';

export default (container: PsrContainerInterface): CleanDirectoriesCommand => {
    return new CleanDirectoriesCommand(container.get<Config>('config').directories);
};
