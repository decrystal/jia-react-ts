import React, {useEffect, useState} from "react";

export const SearchPanel = ({users, param, setParam}) => {
  
  return <form action="">
    <div>
      <input type="text" onChange={val=>{
        setParam({
          ...param,
          name: val.target.value
        })
      }}/>
      <select name="" id="" value={param.personId} onChange={evt=>{
        setParam({
          ...param,
          personId: evt.target.value
        })
      }}>
        <option value="">负责人</option>
        {users.map(item => 
            {return <option key={item.id} value={item.id}>{item?.name}</option>}
          )}
        </select>
    </div>
  </form>
}