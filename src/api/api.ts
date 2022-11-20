import axios from "axios";

const base_url = "http://localhost:3000/api/";

const rooms = {
    getAll: () => {
        const url = base_url + "rooms/getAll";
        return axios.get(url);
    },
    add: (data: any) => {
        const url = base_url + "rooms/postOne";
        return axios.post(url, data);
    }
}

const Api = {
    rooms,
};

export default Api;
