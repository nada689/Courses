import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addData } from "/services/courses";
import Form from "react-bootstrap/Form";
import "./home.css";
import Alert from "react-bootstrap/Alert";
export default function Create() {
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


  const navigate = useNavigate();

  const createCourse = (event) => {
    event.preventDefault();
    if(course.title && course.price && 
      course.instructor && course.desc) {
          addData(course)
      .then(() => {
        toggleShow();
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
    }else
    {alert("Please Fill All Inputs")};
  };

  return (
    <>
      <header
        className="my-5 container text-center 
            bg-gray w-50 mx-auto py-3 rounded-2"
      >
        <h2>Create Course</h2>
      </header>

      <section className="my-5 w-50 container mx-atuo">
        {show && (
          <Alert variant="success" onClose={toggleShow} dismissible>
            <Alert.Heading>Create</Alert.Heading>
            <p>Course Added Successfully</p>
          </Alert>
        )}
        <Form onSubmit={createCourse}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Course Title</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCourse({ ...course, title: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Course Price</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCourse({ ...course, price: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="instructor">
            <Form.Label>Course Instructor</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) =>
                setCourse({ ...course, instructor: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="desc">
            <Form.Label>Course Description</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => setCourse({ ...course, desc: e.target.value })}
            />
          </Form.Group>
          <div
            className="text-center 
          mx-auto"
          >
            <input
              type="submit"
              value="Create Course"
              className="btn btn-secondary w-100 my-4 text-center 
             mx-auto"
            />
          </div>
        </Form>
      </section>
    </>
  );
}
