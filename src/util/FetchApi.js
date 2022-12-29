import axios from "axios";


async function fetchUserTasks(email) {


    const { data } = await axios.get(`http://localhost:5000/tasks?userEmail=${email}`)
    return data
}

export default fetchUserTasks;