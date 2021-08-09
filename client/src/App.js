import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState({ message: '' })

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData({ message: res.message })
      })
      .catch((err) => console.error(err))
  }, [])

  return <div className="App">{data.message}</div>
}

export default App
