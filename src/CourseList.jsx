import { Link } from 'react-router-dom';

const CourseList = () => {
  return (
    <>
      <h1>Bem vindo à Hashtag Treinamentos</h1>
      <nav>
        <ul className="courses-list">
          <Link to="/courses/javascript">JavaScript Impressionador</Link>
          <Link to="/courses/sql">SQL Impressionador</Link>
          <Link to="/courses/htmlcss">HTML/CSS Impressionador</Link>
          <Link to="/courses/python">Python Impressionador</Link>
        </ul>
      </nav>
    </>
  );
};

export default CourseList;
