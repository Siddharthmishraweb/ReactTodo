import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Plan from './components/plan';
import useState, { Component } from 'react';
class App extends Component {


   state = {
    items:[],
    text:""
  }
  handleChange = (e)=>{
    this.setState({text:e.target.value});
  }
  handleClick = (e) => {
    if(this.state.text != ""){
      const items = [...this.state.items,this.state.text];
      this.setState({items:items,text:""});
      console.log(items);
    }
  }
  handleDelete = (id) => {
    console.log("Deleted",id);
    const oldItems = this.state.items;
    console.log(oldItems)
    const newList = oldItems.filter((currElement,i) => {
         return i !== id ;
    })
    console.log("new list : ",newList);
    this.setState({
      items:newList
    })
  }
  render(){
  return(
    <div className = "container">
      <div className = "row">
          <div className = "col-sm-6 mx-auto shadow-lg p-3 mb-5 bg-pink rounded">
              <h1 className="text-center text-black">Today's Plan of action</h1>
              <div className = "row p-3">
                   <div className="col-9 d-flex">
                     <input type="text" className="form-control rounded" placeholder = "Your Today's Plan" name = "Email" 
                        value = {this.state.text} onChange = {this.handleChange}></input>
                   </div>
                   <div className = "col-2">
                      <button type="button" className="btn btn-warning px-5 fw-bold" onClick={this.handleClick}>Add</button>
                   </div>
                   <div className="container-fluid list-unstyled  bg-transparent row m-3 input-group">
                        <ul className="disabled listr">
                          {                      
                            this.state.items.map((value,i) => {
                                return <Plan value={value} id = {i} key = {i} sendData = {this.handleDelete}/>
                            })
                          }
                        </ul>
                   </div>
                   {/* <div class="input-group">
                      <input type="text" class="form-control" />
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button">Go!</button>
                      </span>
                    </div> */}
              </div>           
          </div>
      </div>
    </div>
  )
}
}

export default App;
