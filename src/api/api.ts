import RoomType from "./types/RoomType";

interface EndpointType {
    url: string;
    type: string;
}

const endpoints: EndpointType[] = [
    {
        url: "http://localhost:3000/api/rooms/getOneById",
        type: "GET_ONE_BY_ID",
    }
];

class Endpoint {
    private url: string;
    private type: string;
    private schema: any;

    constructor(url: string, type: string, schema: any) {
        this.url = url;
        this.type = type;
        this.schema = schema;
    }

    activate() {

    }
}

class Api {}

export { Api, Endpoint };
