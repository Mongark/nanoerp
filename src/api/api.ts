class Api {
    private base_url: string;

    constructor(base_url: string) {
        this.base_url = base_url;
    }

    getEndpoint(uri: string) {
        const url = this.base_url + uri;
    }
}

export {};