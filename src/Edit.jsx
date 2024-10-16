import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCourse, updateCourse } from "/services/courses";
import Form from "react-bootstrap/Form";
import "./home.css";
import Alert from "react-bootstrap/Alert";
export default function Edit() {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const [course, setCourse] = useState({
    id: id,
    title: "",
    price: "",
    instructor: "",
    desc: "",
  });

  useEffect(() => {
    getCourse(id).then((res) => setCourse(res.data));
  }, []);

  const navigate = useNavigate();

  const editCourse = (event) => {
    event.preventDefault();
    updateCourse(id, course)
      .then(() => {
        toggleShow();
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <header
        className="my-5 container text-center 
            bg-gray w-50 mx-auto py-3 rounded-2"
      >
        <h2>Edit Course</h2>
      </header>

      <section className="my-5 w-50 container mx-atuo">
        {show && (
          <Alert variant="success" onClose={toggleShow} dismissible>
            <Alert.Heading>Update</Alert.Heading>
            <p>Course Updated Successfully</p>
          </Alert>
        )}
        <Form onSubmit={editCourse}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Course Title</Form.Label>
            <Form.Control
              type="text"
              value={course.title}
              onChange={(e) => setCourse({ ...course, title: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Course Price</Form.Label>
            <Form.Control
              type="text"
              value={course.price}
              onChange={(e) => setCourse({ ...course, price: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="instructor">
            <Form.Label>Course Instructor</Form.Label>
            <Form.Control
              type="text"
              value={course.instructor}
              onChange={(e) =>
                setCourse({ ...course, instructor: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="desc">
            <Form.Label>Course Description</Form.Label>
            <Form.Control
              as="textarea"
              value={course.desc}
              onChange={(e) => setCourse({ ...course, desc: e.target.value })}
            />
          </Form.Group>
          <div
            className="text-center 
          mx-auto"
          >
            <input
              type="submit"
              value="Edit Course"
              className="btn btn-secondary w-100 my-4 text-center 
             mx-auto"
            />
          </div>
        </Form>
      </section>
    </>
  );
}
