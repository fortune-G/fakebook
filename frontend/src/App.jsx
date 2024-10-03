import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import { AvatarRight } from './icons'
import SidebarMenu from './component/SidebarMenu'
import SidebarContext from './component/SidebarContext'
import PostContainer from './component/PostContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen'>
      <Header/>
      <main className='relative flex border h-screen pt-14'>
        <SidebarMenu />
        <PostContainer/>
        <SidebarContext/>
      </main>
    </div>
  )
}

export default App
