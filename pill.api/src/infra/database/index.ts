import { IDatabase } from './interfaces';
import connect from './connect';

export const database = (): IDatabase => connect();
