import React, {useState} from 'react';


// ======================================
// Required Functional Controll Componets
// ======================================

function Row (cell_id, len, colA, colB) {
  const rowcells = Array.apply(null, {length: len}).map((cell) =>
    <span key={ cell_id }>
      { Cell(cell_id++, colA, colB) }
    </span>
  );
  return rowcells; /* Some UI... perhaps a list of cells? */
}

function Cell (index, colA, colB) {
  if (index % 2 === 0) {
    return React.createElement('span', { style: {
      width: '50px',
      height: '50px',
      display: 'inline-block',
      backgroundColor: colA }});  /* Some UI */
  }
  return React.createElement('span', { style: {
      width: '50px',
      height: '50px',
      display: 'inline-block',
      backgroundColor: colB }});  /* Some UI */
}

function CheckerBoard(props) {

  let [size, setSize] = useState(6),
      [colA, setColA] = useState('Red'),
      [colB, setColB] = useState('Black');

  let listRows = Array.apply(null, {length: size}).map((row, row_id) =>
    <li key={ row_id }>{ Row(row_id, size, colA, colB) }</li>
  );

  function handleSizeChange(e) {
    setSize(e.target.value);
  }

  function handleColAChange(e) {
    setColA(e.target.value);
  }

  function handleColBChange(e) {
    setColB(e.target.value);
  }

  return (
    <section className="flexed">
      <form onSubmit={ e => this.handleSubmit(e) } >
        <div className="row-input">
          <code>Enter number of cells: </code>
          <input
            className="input-entry"
            value={ size }
            onChange = { e => handleSizeChange(e) }
          />
        </div>
        <div className="row-input">
          <code>Enter color for cell 'A': </code>
          <input
            value={ colA }
            onChange = { e => handleColAChange(e) }
            className="input-entry"
          />
        </div>
        <div className="row-input">
          <code>Enter color for cell 'B': </code>
          <input
            value={ colB }
            onChange = { e => handleColBChange(e) }
            className="input-entry"
          />
        </div>
        <input type="submit" className="btn btn-md btn-primary" value="SUBMIT" />
      </form>

      <div className="row">
        { listRows }
      </div>
    </section>
  )
}

export default CheckerBoard;
