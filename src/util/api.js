
//get a single task
export const getSingleTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
}

//get a single completed task

export const getSingleCompletedTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/completed/${id}`);
    const data = await res.json();
    return data;
}