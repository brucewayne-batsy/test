import React from "react";
import {Route, Switch,BrowserRouter,Redirect} from "react-router-dom";

//import {Route} from "react-router";
import Sign from "./Components/Signin"; 
import Signup from "./Components/signup";
import Topheader from "./Components/Topheader";
//import BillingTable from "./Components/table";

class App extends React.Component{

  constructor(){
    super();
    this.state={
      signin:false,
      username:"batsy",
      password:7911,
      
    }
   
  }

    //this.setState(state => ({      isToggleOn: !state.isToggleOn    }));

signout=()=>{
  console.log(this.state.signin);
  console.log(this.state.username);

  this.setState(    ()=>({signin:false,username:"batsy"}),()=> {console.log(this.state.signin); console.log(this.state.username)});



}
check=(username,password)=>{   
  
  console.log(username);
  console.log(password);
  if(this.state.username==username&&this.state.password==password){
  this.setState(()=>({ signin:true }))

} }

rendering=()=>{
  console.log(this.state.signin );
}

render(){
  return(

    <div>
    
    <BrowserRouter>

    <Switch> 
<Route exact path="/user">
{(this.state.signin) ? <Topheader  signin={this.state.signin} varification={this.state.username} signout={this.signout }  auth={this.state.username} ></Topheader> : <Redirect to="/"  /> }
</Route>
 <Route exact path="/signup"> <Signup></Signup>   </Route>
    
    <Route  path="/"      >
    {(!this.state.signin)?     <Sign check={this.check} />:<Redirect to="/user"  />
 } 
     </Route> 
   
    </Switch>
    </BrowserRouter>


   </div>
  
  

    );
}

}
export default App;