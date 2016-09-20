import { InMemoryDbService } from 'angular2-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let roles = [
            { id: 1, name: 'Administration 1', createdDate: new Date().toLocaleDateString() },
            { id: 2, name: 'User', createdDate: new Date().toLocaleDateString() },
            { id: 3, name: 'Moderation', createdDate: new Date().toLocaleDateString() }
        ];
        return { roles };
    }
}
