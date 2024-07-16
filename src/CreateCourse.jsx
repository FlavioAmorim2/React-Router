const CreateCourse = () => {
  return (
    <div className="create-course-container">
      <h1>Registrar novo curso</h1>
      <form>
        <div className="field">
          <label htmlFor="course-name">Nome do Curso:</label>
          <input type="text" name="course-name" />
        </div>
        <div className="field">
          <label htmlFor="instructor-name">Nome do Professor:</label>
          <input type="text" name="instructor-name" />
        </div>
        <div className="field">
          <label htmlFor="hours">Carga Horária:</label>
          <input type="number" name="hours" />
        </div>
        <button>Registrar</button>
      </form>
    </div>
  );
};

export default CreateCourse;
