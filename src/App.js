function App() {
  const changeInput = () => {
    const value = document.querySelector(".data").value;
    fetch(
      `https://api.locationiq.com/v1/autocomplete?key=${process.env.locationIQ}&q=${value}&limit=5&dedupe=1`
    )
      .then((temp) => {
        return temp.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <input type="text" className="data"></input>
      <button onClick={changeInput}>Submit</button>
    </div>
  );
}

export default App;
