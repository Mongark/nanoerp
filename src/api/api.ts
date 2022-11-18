import axios from "./client/axios";

const Api = {
    getRooms: () => {
        return axios
            .get( "http://localhost:3000/api/rooms/getAll/");
    }
};

export default Api;
