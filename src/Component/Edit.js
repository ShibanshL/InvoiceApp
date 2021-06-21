import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Edit extends Component {
    constructor(props){
        super(props)
        this.state={
            name:[''],
            email:'',
            price:'',
            materials:'',
            paid:'',
            id:this.props.nid
        }
    }
    // async handlePost(e){
    //     // if(this.state.name.length>=3 && this.state.email.includes("@") && Number(this.state.price)){ 
    //         e.preventDefault()
    //         let name=this.state
    //         await fetch('http://localhost:9000/posts/3',{
    //             method:'POST',
    //             headers:{
    //                 "Application":"application/json",
    //                 "Content-type":"application/json"},
    //             body:JSON.stringify(name)
    //         }).then( (result)=>{
    //             result.json().then((resp)=>{
    //                 console.log("here we are inside",resp)
    //             })
    //         })
    //         this.props.history.push('/nhome')
    //     // }
    // }
    // async componentDidMount(e){
    //     const url='http://localhost:9000/posts/2'
    //     const res=await fetch(url)
    //     const data=await res.json()
    //     this.setState({
    //         name:data
    //     })
    //     this.setState({
    //         email:data.email

    //     })
        
    // }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        console.log("hey",this.state.nid)
        return (
            <div>
                <h1>Nothing here yet</h1>
                <h1>H: {this.state.email}</h1>
                <Link to={"/"}>Back</Link>
                <input type='text' value={this.state.email} name="email" />
                {/* <h1>{this.state.name.email}</h1> */}
                {/* <div className="datac" key={this.state.name.id}>{this.state.name.map(e=>{
                        return(
                            <div className="style">
                                <h1 className="na">Name : {e.name}</h1>
                                <h2 className="em">Email :<span>{e.email}</span></h2>
                                <h2 className="id">ID : {e.id}</h2>
                                <h2 className="pr">Price : {e.price}</h2>
                                <h2 className="ma">Material : {e.materials}</h2>
                                <h2 className="paid">Paid :{e.paid}</h2>
                            </div>    
                        )
                })}
                </div> */}

            </div>
        )
    }
}
