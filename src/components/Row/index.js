import React from 'react';

function Row({user}) {
  return (
    <>
    <tr>
        <th><img alt="" src={user.picture.medium}></img></th>
        <th>{user.name.first}</th>
        <th>{user.name.last}</th>
        <th>{user.phone}</th>
        <th>{user.email}</th>
    </tr>
    </>
  )
}

export default Row;
