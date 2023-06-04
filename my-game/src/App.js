import { Component } from 'react'
import React  from 'react'
import Cardlist from './Cardlist'
import { Robots } from './Robots'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary'
//import { Robots } from './Robots'
//import { render } from 'react-dom'



class App extends Component {
  constructor(){
    super()
    this.state = {
      Robots:Robots,
      searchfield:''
    }
  }
  
  onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
    }
  render(){
    const filterRobots=this.state.Robots.filter(Robots=>{
      return Robots.Name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
return (
    <div className='tc'>
      <h1 >Robofrinds</h1>
      <SearchBox searchChange={this.onSearchChange}></SearchBox>
      <Scroll>
        <ErrorBoundary>
      <Cardlist Robots={filterRobots}/>
      </ErrorBoundary>
      </Scroll>
    </div>
  )
}
}

export default App
