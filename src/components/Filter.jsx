import React from 'react'


function Filter({setStatus}) {
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <div className="filter-box">
        <p className='items-left'> 0 items left</p>
        <div className="filter-todos" >
            <button  onClick={statusHandler} value="all">All</button>
            <button  onClick={statusHandler} value="active">Active</button>
            <button  onClick={statusHandler} value="completed">Completed</button>
        </div>
        {/* <p className="clear">Clear Completed</p> */}
    </div>
  )
}

export default Filter