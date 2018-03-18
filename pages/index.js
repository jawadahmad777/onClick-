
/*import {Component} from 'react'
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
*/    import {Component} from 'react'
class Increment extends Component{
    constructor(){
        super()
        this.state={
            likes: 0,
            dislike:0
            
        }
        this.increaseLike= this.increaseLike.bind(this);
        this.increaseDislike=this.increaseDislike.bind(this);
     }

     increaseLike= () =>{
         this.setState({
             likes: this.state.likes + 1
         })}
increaseDislike= () =>{
         this.setState({
             dislike: this.state.dislike + 1
         })}

 render(){
     return(
         <div>
             <div>{this.state.likes}
             <button onClick={this.increaseLike}>Like</button></div>
             <div>{this.state.dislike}
             <button onClick={this.increaseDislike}>hate</button></div>
         </div>
     )
 }
}
export default Increment