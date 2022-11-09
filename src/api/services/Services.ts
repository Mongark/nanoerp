import axios from "../client/axios";

interface Service {
    name: string,
    uri: string,
}

const Services: Service[] = [
    {
        name: "GET",
        uri: "/getOneById",
    },
    {
        name: "GET",
        uri: "/getAll",
    },
    {
        name: "GET",
        uri: "/getCount",
    },
];

export default Services;