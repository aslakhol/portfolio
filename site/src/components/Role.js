import React from "react"

const Role = props => {
  const { name, start_date, end_date } = props.role

  return (
    <li>
      <div className="role-content">
        <span>{name} </span>
        <div className="role-date-range">
          <span>{start_date} - </span>
          <span>{end_date ? end_date : "Nå"}</span>
        </div>
      </div>
    </li>
  )
}

export default Role
