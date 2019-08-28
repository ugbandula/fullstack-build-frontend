import {apiGETRequest} from '../utils/api';

class UserService {
    static users: object;
    
    constructor() {
        this.readUsers();
    }
    
    private readUsers(): void {
       let url: string = 'https://www.googleapis.com/customsearch/v1?Test';
        let response = apiGETRequest(url);
        console.log(JSON.stringify(response));
    }
}

export default UserService;