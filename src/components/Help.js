import React from "react";

// const Help = ()=>{
//     return <h1>Help Component</h1>
// }

// export default Help;


class Help extends React.Component {
    
    constructor(props){
        super(props);
        console.log("constructor called");
        this.state = {
            name: "Ashish",
        }
    }
    
    async componentDidMount(){
        
        console.log("componentDidMount called");
        const data = await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1774553&lng=78.0077653&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
       
    }
    
   
    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }
    render() {
        console.log("render called");
      return (
        <>
        <h1>hi {this.state.name}</h1>
        <button onClick={()=> this.setState({
            name: "Singh",
        })}>Change</button>
        
        </>
      )
    }
  }

  export default Help;