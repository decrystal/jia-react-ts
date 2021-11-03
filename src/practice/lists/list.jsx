import React, {useEffect, useState} from "react";

export const List = ({lists, users}) =>{
  return <table>
    <thead>
      <tr>
        <th>名称</th>
        <th>负责人</th>
      </tr>
    </thead>
    <tbody>
      {lists.map(item=>{
        return <tr key={item.id}>
          {/* ?.避免前面没有导致后面的name出事 */}
          <td>{item?.name}</td>
          <td>{users.find(i=> i.id===item.personId)?.name}</td>
        </tr>
      })}
    </tbody>
  </table>
}