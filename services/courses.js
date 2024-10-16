import axios from "axios";

const url = "http://localhost:3000/courses"

export async function getData() {
    return await axios.get(url);
}

export async function getCourse(id) {
    return await axios.get(`${url}/${id}`);
}

export async function addData(course) {
    return await axios.post(url , course)
}

export async function updateCourse(id , course) {
    return await axios.put(`${url}/${id}` , course);
}

export async function deleteCourse(id) {
    return await axios.delete(`${url}/${id}`)
}
