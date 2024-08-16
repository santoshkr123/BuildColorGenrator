import { useState } from "react"
const App = ()=>{
  const [color ,setColor] = useState({
    red:125,
    green:14,
    blue:255
  })

  const changeColor = ()=>{
  const red = Math.floor( Math.random() *256 )
  const green = Math.floor(Math.random() *256)
  const blue =Math.floor(Math.random()*256)
  setColor({
    red,
    green,
    blue
  })
  }
  return (
    <div style = {{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      height:'100vh',
      background:`rgb(${color.red},${color.green},${color.blue})`

    }}>
      <button onClick={changeColor}>Try It</button>
    </div>
  )
}
export default App