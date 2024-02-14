function Student(props) {
  // props
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>name={props.name}</h1>
      <h1 style={{ textAlign: "center" }}>email={props.email}</h1>
      <span style={{ textAlign: "center", display: "block" }}>
        addresa={props.others.add}
      </span>
    </div>
  );
}
export default Student;
