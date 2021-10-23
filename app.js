import axios from "axios";

async function getData(user_id) {
    const endpointGet = "https://jsonplaceholder.typicode.com/users/";
    const endpointPost = "https://jsonplaceholder.typicode.com/posts?userId=";

    const userData = await (await axios.get(endpointGet + user_id)).data;
    const postData = await (await axios.get(endpointPost + user_id)).data;

    
    return {
        user : userData,
        posts : postData
    }
}

export default getData;