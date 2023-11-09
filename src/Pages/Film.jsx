import React from 'react'

const Film = () => {
  return (
    <div><select className="select" multiple>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
  </select>
  <label className="form-label select-label">Example label</label></div>
  )
}

export default Film