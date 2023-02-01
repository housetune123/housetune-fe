import React from 'react';
import { Link } from 'react-router-dom';
// import Link from 'react-scroll/modules/components/Link';
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from 'react-table';

export default function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,

    nextPage,
    previousPage,
    setPageSize,
    state,

    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <div className="col-3">
          <input
            className="form-control"
            value={state.globalFilter || ''}
            onChange={(e) => {
              setGlobalFilter(e.target.value);
            }}
            placeholder={'搜尋'}
          />
        </div>
        <Link to="add">
          <button className="btn btn-info col-auto">新增商品</button>
        </Link>
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <i class="fa-solid fa-caret-up p-1 text-gray-300" />
                    ) : (
                      <i class="fa-solid fa-caret-down p-1 text-gray-300" />
                    )
                  ) : (
                    ''
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-end pagination mt-3">
        <div className="d-flex align-items-center mx-3">
          <button className="btn" onClick={() => previousPage()}>
            <i class="fa-solid fa-angle-left text-gray-300 fs-7" />
          </button>
          <span className="fw-bold mx-2 text-primary-400">
            {state.pageIndex + 1}
          </span>
          <button className="btn" onClick={() => nextPage()}>
            <i class="fa-solid fa-angle-right text-gray-300 fs-7" />
          </button>
        </div>
        <div className="d-flex align-items-center">
          <span className="text-gray-300">每頁</span>
          <div className="col-auto mx-2">
            <select
              className="form-select py-1 text-gray-300"
              value={state.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
          <span className="text-gray-300">筆</span>
        </div>
      </div>
    </>
  );
}
