import React from 'react'

function Repo(props) {
    const {name, link} = props.details;
  return (
    <li>
      {name} : <a href={link}> {link} </a> 
    </li>
  )
}

export default Repo
