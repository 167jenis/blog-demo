function Cpdata(props) {
  const ml = "jenis alagiya";
  return (
    <>
      <h2>cpdata component :{props.name}</h2>
      <button onClick={() => props.alert(ml)}>click me</button>
    </>
  );
}
export default Cpdata;
