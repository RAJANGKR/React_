import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card
        title="Beautiful Landscape"
        description="A breathtaking view of the mountains during sunset."
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80"
      />
      <Card
        title="City Skyline"
        description="The vibrant city skyline illuminated at night."
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMHNreWxpbmV8ZW58MHx8fDB8fHww&w=1000&q=80"
      />
      <Card
        title="Serene Beach"
        description="A peaceful beach with crystal clear waters and white sand."
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&w=1000&q=80"
      />  
    </>
  )
}

export default App
