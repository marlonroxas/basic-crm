import React from "react";
import moment from 'moment'
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import SortIcon from "../../img/sort-icon.png";
import "./style.scss";

/* Data list view */
const DataTable = props => {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th
              onClick={() => {
                props.onSortChange("id");
              }}
            >
              <span className="column-sort">
                Code
              </span>
            </th>
            <th
              onClick={() => {
                props.onSortChange("name");
              }}
            >
              <span className="column-sort">
                First Name
                <img src={SortIcon} alt="First Name" />
              </span>
            </th>
            <th
              onClick={() => {
                props.onSortChange("surname");
              }}
            >
              <span className="column-sort">
                Last Name
                <img src={SortIcon} alt="Last Name" />
              </span>
            </th>
            <th
              onClick={() => {
                props.onSortChange("birthdate");
              }}
            >
              <span className="column-sort">
                Birthdate
              </span>
            </th>
            <th
              onClick={() => {
                props.onSortChange("email");
              }}
            >
              <span className="column-sort">
                Email
              </span>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users && props.users.length ? (
            props.users.map(user => (
              <tr key={user.id}>
                <td>{(`${user.first_name}${user.last_name}${user.birthdate ? moment(user.birthdate).format('yyyyMMDD') : ''}`).replace(/ /g, '').toLocaleLowerCase()}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.birthdate}</td>
                <td>{user.email}</td>
                <td className="field-actions">
                <button
                    className="field-actions__view"
                    onClick={() => {
                      props.viewDetails(user);
                    }}
                    alt="View details"
                    title="View details"
                  >
                    <EyeOutlined />
                  </button>
                  <button
                    className="field-actions__update"
                    onClick={() => {
                      props.updateRow(user);
                    }}
                    alt="Update details"
                    title="Update details"
                  >
                    <EditOutlined />
                  </button>
                  <button
                    className="field-actions__delete"
                    onClick={() => props.deleteRow(user)}
                    alt="Delete this user"
                    title="Delete this user"
                  >
                    <DeleteOutlined />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                <div className="no-record-message">No Record!</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
