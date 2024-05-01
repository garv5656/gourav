import React,{Component} from 'react'
import './contact.css';


 export class Contact extends Component{
    render(){
        return(
        <>
           
           <div className='main-div'>
               <span className='number'>CONTACT US</span>
            </div>
           
            <div className='contact'>
                <div className='send'>
                    <span className='us'>Send us a message</span>
                    <div className='have'>
                    <span className='inte'>If you're interested in hearing more about the way we work, have a business proposal, or are interested in making a purchase, we'd love to hear from you. </span>
                    </div>
                </div>

               
                <div className='form'>              
                    <label className='lab'>First Name*</label><br></br>
                    <input className='name' type='text'></input><br></br>
                    <label className='lab'>Last Name*</label><br></br>
                    <input className='name' type='text'></input><br></br>
                    <label className='lab'>Email add.*</label><br></br>
                    <input className='name' type='text'></input><br></br>
                    <label className='lab'>Message*</label><br></br>
                    <input className='mess' type='text'></input><br></br>

                    <button className='submit'>Submit</button>
              </div>
                

            </div>
           
        </>
        )
    }
}

export default Contact