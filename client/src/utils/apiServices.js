import Axios from "axios";
const MODE_URL = {
    local: 'http://localhost:4000'
}
const server = {
    get : (uri, options) => {
        return Axios.get(MODE_URL.local+uri, options);
    },
    post : (uri, options) => {
        return Axios.post(MODE_URL.local+uri, options).then(res => {
            console.log(res);
        }).catch(console.error);
    }
}

export default server;