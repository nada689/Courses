import { useParams } from "react-router-dom";
import {useState , useEffect} from 'react';
import { getCourse } from "/services/courses";
import { Link } from "react-router-dom";

export default function Show() {
    const {id} = useParams();
    const [course , setCourse] = useState({});
    useEffect(() => {
        getCourse(id)
        .then(res => setCourse(res.data))
    } , [])
    return ( 
        <>
             <header className="my-5 container text-center 
            bg-dark w-50 mx-auto py-3 rounded-2 text-light">
                <h2>Course Details</h2>
           </header>

           <section className="text-center my-5 w-50 container mx-auto">
                <h2> {course.title}</h2>
                <Link to="/" className="btn btn-dark mt-2">Return to home</Link>
           </section>
        </>
     );
}