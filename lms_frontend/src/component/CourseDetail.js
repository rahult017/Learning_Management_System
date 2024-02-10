import { useParams } from "react-router-dom";

function CourseDetailScreen() {
  let { course_id } = useParams();

  // Sample course data
  const courseData = {
    id: course_id,
    title: "Sample Course Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nisi eget nisi ullamcorper bibendum eget nec urna.",
    instructor: "John Doe",
    duration: "4 weeks",
    level: "Intermediate",
    price: "$49.99"
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{courseData.title}</h2>
          <h6 className="card-subtitle mb-2 text-muted">Instructor: {courseData.instructor}</h6>
          <p className="card-text">{courseData.description}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Duration:</strong> {courseData.duration}</li>
            <li className="list-group-item"><strong>Level:</strong> {courseData.level}</li>
            <li className="list-group-item"><strong>Price:</strong> {courseData.price}</li>
          </ul>
          <a href="#" className="btn btn-primary mt-3">Enroll Now</a>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailScreen;
