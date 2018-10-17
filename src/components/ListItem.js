import React from 'react';
import Item from './Item';

export default ({ chores, deleteChore }) => (
  <div className="col-12 row flex justify-center">
    <div className="col-6">
      {chores.map((i, k) => <Item chore={i} deleteChore={deleteChore} key={k} index={k}/>)}
    </div>
  </div>
)