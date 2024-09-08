import React, { useEffect, useState } from 'react'

function Github() {
  const [data,setData]=useState([])

  useEffect(()=>{
  fetch('https://api.github.com/users/Dr-Dev2672')
  .then(res=>res.json())
  .then(data=>{setData(data)})
  },[])

  return (
    <div className='text-3xl bg-green-600'>Github followers:{data.followers}
    <img className='text-center' width={300} src={data.avatar_url} alt="Github picture" />
    </div>
  )
}

export default Github