import Data from "./Data.json";
function Array() {
  return (
    <>
      <div>
        {/* hello array */}
        <table border="1px">
          {Data.map((item, index) => (
            <>
              {item.details.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.title}</td>
                </tr>
              ))}
            </>
          ))}
        </table>
      </div>
    </>
  );
}
export default Array;
