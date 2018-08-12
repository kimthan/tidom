import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Showcase from './components/Showcase/Showcase'
import SectionA from './components/SectionA/SectionA'
import SectionB from './components/SectionB/SectionB'
import SectionC from './components/SectionC/SectionC'
import Footer from './components/Footer/Footer'
class App extends Component {
  state = {
    sideDrawerOpen: false
  }
  
  drawerToggleClickHandler = () => {
this.setState((prev)=>{
  return {
    sideDrawerOpen:!prev.sideDrawerOpen
  }
})
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false})
  }
  render() {
 
    let backdrop

    if(this.state.sideDrawerOpen){
    
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height:'100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop:'56px'}}>


        <Showcase />



        <SectionA />
        <SectionB />
        <SectionC />
        <Footer />
        </main>
      </div>
    );
  }
}

export default App;
