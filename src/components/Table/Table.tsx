import React from 'react';
import './Table.scss';

function Table({ children }: any) {
  return (
    <div className='table-container'>
      <table className='table'>
        {children}
      </table>
    </div>
  )
}

Table.Head = function ({ children }: any) {
  return (
    <thead>{children}</thead>
  )
}

Table.Body = function ({ children }: any) {
  return (
    <tbody>{children}</tbody>
  )
}

Table.Row = function ({ children }: any) {
  return (
    <tr>{children}</tr>
  )
}

Table.Header = function ({ children }: any) {
  return (
    <th>{children}</th>
  )
}

Table.Data = function ({ children }: any) {
  return (
    <td>{children}</td>
  )
}

export default Table