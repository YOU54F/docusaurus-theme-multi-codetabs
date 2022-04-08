import React from "react";
import { useTable, useSortBy } from "react-table";

const DataTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(
          (headerGroup: {
            getHeaderGroupProps: () => JSX.IntrinsicAttributes &
              React.ClassAttributes<HTMLTableRowElement> &
              React.HTMLAttributes<HTMLTableRowElement>;
            headers: any[];
          }) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(
                (column: {
                  getHeaderProps: (
                    arg0: any[]
                  ) => JSX.IntrinsicAttributes &
                    React.ClassAttributes<HTMLTableCellElement> &
                    React.ThHTMLAttributes<HTMLTableCellElement>;
                  className: any;
                  getSortByToggleProps: () => any;
                  render: (
                    arg0: string
                  ) =>
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal;
                  isSorted: any;
                  isSortedDesc: any;
                }) => (
                  <th
                    {...column.getHeaderProps([
                      {
                        className: column.className,
                      },
                      column.getSortByToggleProps(),
                    ])}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ▼"
                          : " ▲"
                        : ""}
                    </span>
                  </th>
                )
              )}
            </tr>
          )
        )}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(
          (
            row: {
              getRowProps: () => JSX.IntrinsicAttributes &
                React.ClassAttributes<HTMLTableRowElement> &
                React.HTMLAttributes<HTMLTableRowElement>;
              cells: any[];
            },
            i: any
          ) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(
                  (cell: {
                    getCellProps: (
                      arg0: {}[]
                    ) => JSX.IntrinsicAttributes &
                      React.ClassAttributes<HTMLTableCellElement> &
                      React.TdHTMLAttributes<HTMLTableCellElement>;
                    column: { className: any; style: any };
                    render: (
                      arg0: string
                    ) =>
                      | boolean
                      | React.ReactChild
                      | React.ReactFragment
                      | React.ReactPortal;
                  }) => {
                    return (
                      <td
                        {...cell.getCellProps([
                          {
                            className: cell.column.className,
                            style: cell.column.style,
                          },
                        ])}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  }
                )}
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default DataTable;
