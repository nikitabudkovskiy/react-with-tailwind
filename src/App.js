import logo from './logo.svg'
import './App.css'
import './tailwind.output.css'
import { Header } from './components/Header'
import { AboutMe } from './components/AboutMe'
import { MyProject } from './components/MyProject'
import { Feeback } from './components/Feedback'

export const App = () => (
  <div className="bg-gunmental">
    <Header />
    <AboutMe />
    <MyProject />
    <Feeback />
  </div>
)

