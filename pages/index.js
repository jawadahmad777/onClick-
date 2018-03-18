import {Component} from 'react'
class startEvent extends Component{
    constructor(){
        super()
        this.state={
            name: 'Jawad'
     }}

    
   //the initial value of the state name if 'jawad'


 applyEvent= () =>{
     this.setState({
    name:'Khan'
     })}

     // We can creat a funcion which hold the new value that we want to display after the event accours

     render(){
    return(
        <div>
            <div>{this.state.name}</div>
            <button onClick={this.applyEvent}>ClickToChange</button>
            </div>
    )
     }
}
export default startEvent