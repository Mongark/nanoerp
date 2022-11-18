import axios from "./axios";

interface Binding {
    type: string;
    callback: any;
}

const Bindings = {
    activate(url: string, type: string, data: any) {
        switch(type) {
            case "GET":
                return axios.get(url, data);
            case "POST":
                return axios.post(url, data);
        }
    }
};

export { Bindings }
