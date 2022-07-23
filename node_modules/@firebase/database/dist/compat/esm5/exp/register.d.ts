import { Database } from '../src/exp/Database';
declare module '@firebase/component' {
    interface NameServiceMapping {
        'database-exp': Database;
    }
}
export declare function registerDatabase(variant?: string): void;
