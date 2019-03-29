import axios from "axios";

export default axios.create({
    baseURL: "http://ec2-3-9-13-102.eu-west-2.compute.amazonaws.com/api/",
    
    headers: {
        Accept: "application/json",
    },
});
