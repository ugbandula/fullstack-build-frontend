import {apiGETRequest} from '../utils/api';

class NewsService {
    static newsItems: [];
    
    constructor() {
        this.readUsers();
    }
    
    /**
     * Reads the news items in an asynchronous way using promises
     */
    private readUsers(): void {
        let url: string = 'https://hn.algolia.com/api/v1/search?query=europe';
        apiGETRequest(url)
            .then((response) => {
                // console.log(JSON.stringify(response));
                NewsService.newsItems = response.hits;
                console.log(JSON.stringify(NewsService.newsItems));
            }
        ).catch((error) => {
                console.log(JSON.stringify(error));
            }
        ).finally(() => {
            console.log('Finalize with the received data');
        });
    }
}

export default NewsService;