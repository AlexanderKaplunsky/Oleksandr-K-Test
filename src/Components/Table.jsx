import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: null,
      rows: [],
      filter: null
    };
  }
  componentDidMount() {
    const { data } = this.props;
    const newRows = [];
    for (
      let index = 0;
      index < data.cells.length / data.columns.length;
      index++
    ) {
      newRows.push(
        data.cells.slice(
          index * data.columns.length,
          (index + 1) * data.columns.length
        )
      );
    }
    this.setState({ rows: newRows });
  }

  setSort = ({ column }) => {
    let order = "asc";
    if (
      this.state.sort &&
      this.state.sort.column === column &&
      this.state.sort.order === "asc"
    )
      order = "desc";
    let newRows = this.state.rows.sort(function(a, b) {
      if (a[column].value > b[column].value) {
        return order === "desc" ? -1 : 1;
      }
      if (a[column].value < b[column].value) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    });
    const sort = {
      column,
      order
    };
    this.setState({ rows: newRows, sort });
  };

  setFilter = ({ column, type }) => {
    let newRows = this.state.rows.filter(
      item => typeof item[column].value === type
    );
    const filter = {
      column,
      type
    };
    this.setState({ rows: newRows, filter });
  };

  render() {
    return (
      <>
        <table>
          {this.state.rows.map((row, i) => (
            <tr>
              {row.map(cell => (
                <td>{cell.value}</td>
              ))}
            </tr>
          ))}
        </table>
        <button onClick={() => this.setFilter({ column: 0, type: "string" })}>
          Filter string
        </button>
        <button onClick={() => this.setFilter({ column: 0, type: "number" })}>
          Filter number
        </button>
        <button onClick={() => this.setSort({ column: 0, order: "asc" })}>
          Sort by increase
        </button>
        <button onClick={() => this.setSort({ column: 0, order: "desc" })}>
          Sort by decrease
        </button>
      </>
    );
  }
}
export default Table;
