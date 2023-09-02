import Header from "./header/Header" 
import Sidebar from "./sidebar/Sidebar"
import "./header/header.scss"
const App = () => {
  return (
    <div>
        <Sidebar />
        <Header />
    </div>
  )
}

export default App