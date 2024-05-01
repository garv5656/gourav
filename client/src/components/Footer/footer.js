import './footer.css'
import React,{Component} from 'react'
export class Footer extends Component{
    render(){
        return(
            <>
                <div className='foot'>
                    <img className='prison' src='https://assets.zyrosite.com/presson88qto/logo_presson_white-AMqqXN22XxI2Oz6Z.svg'></img>
                    <div className='cont'>
                        <h1 className='footext'><center>Contacts</center></h1>
                        <span className='footext'><center>1234-567-890</center></span>
                        <span className='footext'><center>info@presson.com</center></span>
                    </div>

                    <div className='control'>
                        <h1 className='footext'><center>Address</center></h1>
                        <span className='footext'><center>123 your street name, </center></span>
                        <span className='footext'><center>City name, Country, post code </center></span>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer