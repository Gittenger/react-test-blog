import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [data, setData] = useState({ message: '' })
  const postId = '602b83f68995a1ff2ac71fcd'

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/posts/${postId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setData({ message: res.data.content })
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="App">
      <ReactMarkdown children={data.message} />
    </div>
  )
}

export default App
