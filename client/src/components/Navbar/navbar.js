import React,{Component} from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

export class Navbar extends Component{
    render(){
        return(
            <>
            <div className='nav'>
                <Link to='/'><img className='logo' src='https://assets.zyrosite.com/presson88qto/logo_presson-ALppXq88vMc9Q1jB.svg'></img></Link>
                <ul className='list'>
                    <li className='list-item'>About us</li>
                    <li className='list-item'>Project</li>
                    <Link to='/contact'><li className='list-item'>contact us</li></Link>
                </ul>
            </div>
            </>
        )
    }
}

export default Navbar