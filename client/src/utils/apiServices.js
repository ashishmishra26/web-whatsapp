import Axios from "axios";
const MODE_URL = {
    local: 'http://localhost:4000'
}
const server = {
    get : (uri, options) => {
        return Axios.get(MODE_URL.local+uri, options);
    },
    post : (uri, options) => {
       return Axios({
            method: 'post',
            url: MODE_URL.local+uri,
            data: options
        }).catch(error => {
            console.log(error.message);
        });
    }
}

export default server;