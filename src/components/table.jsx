import React from "react";
import "../css/table.css";

function Table(props) {
  // console.log(props.data);
  const [page, setpage] = React.useState(1);
  const [pagelimit, setpagelimit] = React.useState(10);
  const [lastpage, setlastpage] = React.useState(1);

  React.useEffect(() => {
    console.log("lastpage call" + page);
    setlastpage(Math.ceil(props.data.length / pagelimit));
  }, [pagelimit]);
  const generatehead = (singleobject) => {
    // console.log(singleobject);
    let keys = Object.keys(singleobject);
    // console.log(keys);
    return keys.map((each, index) => <th key={"th" + index}>{each}</th>);
    // return (
    //   <>
    //     <th>elango</th>
    //     <th>Elango</th>
    //     <th>Elan</th>
    //     <th>elango</th>
    //   </>
    // );
  };
  const generatedata = (singleobject) => {
    let keys = Object.keys(singleobject);
    return keys.map((each, index) => (
      <td key={"td" + index}>{singleobject[each]}</td>
    ));
  };
  const generaterow = (alldata) => {
    // let keys = Object.keys(singleobject);
    //console.log(alldata.slice(10, 20));
    //let page = 1;
    let start = (page - 1) * pagelimit;
    let end = start + pagelimit;

    return alldata
      .slice(start, end)
      .map((each, index) => <tr key={"tr" + index}>{generatedata(each)}</tr>);
  };
  const generatebuttons = () => {
    let buttons = [];
    let start = page - 2 > 0 ? page - 2 : 1;
    let end = page + 2 < lastpage ? page + 2 : lastpage;
    for (let i = start; i <= end; i++) {
      buttons.push(i);
    }
    return buttons.map((eachbutton) => (
      <button
        className={page === eachbutton ? "currentpage " : " "}
        onClick={() => setpage(eachbutton)}
      >
        {eachbutton}
      </button>
    ));
  };

  return (
    <>
      <div className="table">
        <div>
          <button onClick={() => setpage(1)}>&lt;&lt;</button>
          <button disabled={page === 1} onClick={() => setpage(page - 1)}>
            &lt;
          </button>
          {generatebuttons()}
          {/* <button onClick={() => setpage(1)}>1</button>
          <button onClick={() => setpage(2)}>2</button>
          <button onClick={() => setpage(3)}>3</button>
          <button onClick={() => setpage(4)}>4</button>
          <button onClick={() => setpage(5)}>5</button> */}
          <button
            disabled={page === lastpage}
            onClick={() => setpage(page + 1)}
          >
            &gt;
          </button>
          <button onClick={() => setpage(lastpage)}>&gt;&gt;</button>
          <select
            value={pagelimit}
            onChange={(e) => {
              setpagelimit(parseInt(e.target.value));
              setpage(1);
            }}
          >
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>{generatehead(props.data[0])}</tr>
          </thead>
          <tbody>
            {/* <tr>{generatedata(props.data[0])}</tr>
            <tr>{generatedata(props.data[1])}</tr>
            <tr>{generatedata(props.data[2])}</tr>
            <tr>{generatedata(props.data[3])}</tr> */}
            {generaterow(props.data)}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;

