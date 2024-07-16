import { useParams } from 'react-router-dom';

const courseDictionary = {
  javascript: 'JavaScript Impressionador',
  python: 'Python Impressionador',
  sql: 'SQL Impressionador',
  htmlcss: 'HTML e CSS Impressionador',
};

const Course = () => {
  const { selected } = useParams();
  return (
    <>
      <h1>{courseDictionary[selected]}</h1>
    </>
  );
};

export default Course;
