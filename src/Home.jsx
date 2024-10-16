import { useState, useEffect } from "react";
import { deleteCourse, getData } from "/services/courses";
import { Link } from "react-router-dom";
import "./home.css";
import Alert from "react-bootstrap/Alert";
export default function Home() {
  const [courses, setCourses] = useState([]);
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  useEffect(() => {
    getData()
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, []);

  const removeCourse = (id) => {
    deleteCourse(id).then(() => {
      setCourses((Courses) => {
        return Courses.filter((course) => course.id !== id);
      });
      toggleShowA();
      setTimeout(() => {
        setShowA(false);
      }, 2000);
    });
  };

  return (
    <>
      <div className="container">
        <header
          className="my-5 container text-center 
            bg-gray w-75 mx-auto py-3 rounded-2"
        >
          <h3>Courses</h3>
        </header>

        <section className="my-5 container mx-auto">
          {showA && (
            <Alert
              className="w-50 text-center mx-auto"
              variant="danger"
              onClose={toggleShowA}
              dismissible
            >
              <Alert.Heading>Delete</Alert.Heading>
              <p>Course Deleted Successfully</p>
            </Alert>
          )}
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th className="bg-dark text-light">Id</th>
                <th>Title</th>
                <th className="bg-dark text-light">Price</th>
                <th>Instructor</th>
                <th className="bg-dark text-light">Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            {courses.length > 0 && (
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.title}</td>
                    <td>{course.price}</td>
                    <td>{course.instructor}</td>
                    <td>{course.desc}</td>
                    <td>
                      <Link
                        to={`/${course.id}`}
                        className="btn btn-sm btn-primary mx-1"
                      >
                        show
                      </Link>
                      <Link
                        to={`/${course.id}/edit`}
                        className="btn btn-sm btn-warning mx-1"
                      >
                        edit
                      </Link>
                      <button
                        className="btn btn-sm btn-danger 
                                                mx-1"
                        onClick={() => removeCourse(course.id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </section>
      </div>
    </>
  );
}
