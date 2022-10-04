import axios from "axios";

export default axios.create({
    //For Development
    //http://localhost:7815

    baseURL: "http://localhost:7815",
    headers: {
        "Content-type" : "application/json"
    }
})