import React, { Component } from 'react'
// import Home from './Home'
import { Link } from 'react-router-dom'
import './Try.css'
// import Data from './Data'
var a=[]
export default class Try extends Component {
    
    constructor(props){
        super(props)
        // var a=[]
        this.state={
            name:'',
            email:'',
            price:'',
            materials:'',
            paid:'',
            
        }
        this.handleChange=this.handleChange.bind(this)
       
        this.handlePost=this.handlePost.bind(this)


    }
    
    // async componentDidMount(){
    //     const url='/posts'
    //     const res= await fetch(url)
    //     const data= await res.json()
       
    
    //     console.log("he",data)
    //     console.log("state",this.state.allData)
    // }
    handleChange(e){
            this.setState({
                [e.target.name]:e.target.value
            })
    }
    // valid(e){ 
    //     let a=[]
    //     if(this.state.name>=3){
    //         a.state.name='name is required'
    //         return(
    //             <p>no</p>
    //         )
    //     }
    //     // else null
    //     return a
    // }
    valid(){
        if(this.state.name.length<=3 && this.state.name.length==0){
            return(
                alert("Name is too short")
            )
        }
        // else if(!this.state.email.includes("@")){
        //     return(
        //         alert("Invalid Email")
        //     )
        // }
        // // const a=this.state.price
        // else if(!Number(this.state.price)){
        //     return(
        //         alert("Invalid input, enter number")
        //     )
        // }
        else{
            // this.handlePost()
        }
        
        // else if()
    }

    async handlePost(e){
        if(this.state.name.length>=3 && this.state.email.includes("@") && Number(this.state.price)){ 
            e.preventDefault()
            let data=this.state
            await fetch('/posts',{
                method:'POST',
                headers:{
                    "Application":"application/json",
                    "Content-type":"application/json"},
                body:JSON.stringify(data)
            }).then( (result)=>{
                result.json().then((resp)=>{
                    console.log("here we are",resp)
                })
            })
            this.props.history.push('/nhome')
        }
        else{
            return(
                alert("Invalid input")
            )
        }
        
       
        }
    render() {
        return (
            <div className="main">
                <div className="submain">
                    <form onSubmit={this.handlePost}>
                        <div className="inform">
                            <h2 className="na1">Name :</h2>
                            <input type='text'
                                    value={this.state.name}
                                    name="name"
                                    onChange={this.handleChange} 
                                    /><br></br>
                                    {this.valid}
                            <h2 className="em1">Email :</h2>
                            <input type='text'
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.handleChange} 
                                    /><br></br>
                            <h2 className="pr1">Price :</h2>
                            <input type='text'
                                    value={this.state.price}
                                    name="price"
                                    onChange={this.handleChange} 
                                    />
                            <h2 className="me">Materials :</h2>
                            <input type='text'
                                    value={this.state.materials}
                                    name="materials"
                                    onChange={this.handleChange} 
                                    />
                            <h2 className="pa">Paid :</h2>
                            <input type='text'
                                    value={this.state.paid}
                                    name="paid"
                                    onChange={this.handleChange} 
                                    />
                            <button type='submit'>Submit</button>
                        </div>
                </form>
                
                    <Link className="lnk1" to={"/nhome"}>Home</Link>
                    {/* <Link className="lnk1" to={"/home"}>O-Home</Link> */}

                   
                </div>
            </div>
        )
    }
}
