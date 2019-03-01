import Axios from "axios";
const MODE_URL = {
    local: 'http://localhost:4000'
}
const server = {
    get : (uri, options) => {
        console.log(MODE_URL.local+uri);
        return Axios.get(MODE_URL.local+uri, options);
    }
}

export default server;