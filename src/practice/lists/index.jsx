import React, {useEffect, useState} from "react";
import { SearchPanel } from "./search-panel";
import {List} from "./list"
import { cleanObject } from "../../utils";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  });
  const [users, setUsers] = useState([])
  const apiUrl = process.env.REACT_APP_API_URL  
  const [lists, setLists] = useState([]);
  useEffect(()=>{
    fetch(`${apiUrl}/projects?${cleanObject(param)}`).then(async responce=>{
      if(responce.ok) {
        setLists(await responce.json())
      }
    }).catch(err=>{
      console.log("err->", err)
    })
  }, [param])
  useEffect(()=>{
    fetch(`${apiUrl}/users`).then(async responce=>{
      if(responce.ok) {
        setUsers(await responce.json())
      }
    }).catch(err=>{
      console.log("err->", err)
    })
  }, [])

  return <div>
    <SearchPanel users={users} param = {param} setParam={setParam}></SearchPanel>
    <List users={users} lists={lists}></List>
  </div>
}