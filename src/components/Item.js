import React from 'react';

export default ({ chore, deleteChore, key, index }) => (
  <div className="col-12 flex items-center chore-item">
    <i className="check-item">&#10004;</i>
    &nbsp;
    <span>{chore}</span>
    &nbsp;
    <button className="delete-chore" onClick={() => deleteChore(index, key) }>&#10006;</button>
  </div>
)