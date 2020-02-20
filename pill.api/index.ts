import { container } from './src/container';
import { IApp } from './src/app';

container
    .resolve<IApp>('app')
    .start();
