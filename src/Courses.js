import Course from "./Course";
function Courses({ courses = [], removeCourse }) {
  console.log(courses);

  return (
    <div className="coursesMainDiv">
      <div>
        <h2>KURSLARIM</h2>
      </div>
      <div className="cardDiv">
        {courses.map((course, index) => {
          return (
            <Course key={index} {...course} removeOneCourse={removeCourse} />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
