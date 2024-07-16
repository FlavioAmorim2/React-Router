import { Route, Routes } from 'react-router-dom';
import CourseList from './CourseList';
import Course from './Course';
import CreateCourse from './CreateCourse';
import PageNotFound from './PageNotFound';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CourseList />} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/courses/:selected" element={<Course />} />
      <Route path="/courses/new" element={<CreateCourse />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
