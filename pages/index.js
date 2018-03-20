
/*
import {Component} from 'react';
class startEvents extends Component{
    constructor(){
        super()
        this.state={
            name: 'Jawad'
     }}

    
   //the initial value of the state name if 'jawad'


 applyEvent= () =>{
     this.setState({
         name: 'Khan'
     })
    } 

     // We can creat a funcion which hold the new value that we want to display after the event accours

     render(){
    return(
        <div>
            <div>{this.state.name}</div><br/>
            <button onClick={this.applyEvent}>ClickToChange</button>
            </div>
    )
     }
}
export default startEvents
*/



/*
   import {Component} from 'react'
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
*/
import {Component} from 'react';
import Head from 'next/head'
class Toggle extends Component{
    constructor(){
        super()
        this.state={
            isON: false
        }}

       
click = ()=>{
    this.setState({
        isON: ! this.state.isON
    })
}

render(){
    return(
        <div>
                <Head>
        <link rel="stylesheet" href="../static/style.css"/>
    </Head>
        <button onClick={this.click}>Click here 
        </button><br/>
        {this.state.isON ?<img src="https://static.pexels.com/photos/14621/Warsaw-at-night-free-license-CC0.jpg" alt=""/> : 'Show Photo'}
        <br/>That is how to brings animations in React js
        </div>
    )
}
}
export default Toggle
