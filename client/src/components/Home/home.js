import React,{Component} from 'react'
import './home.css';

 export class Home extends Component{
    render(){
        return(
        <>
            <div className='main'>
               <span className='time'>TIME TO MEET YOUR</span>
               <span className='new'>NEW HOME</span>

               <div className='second'>
                    <span className='find'>Finding the perfect place to call home can be hard. Our team of </span>
                    <span className='find'>creatives and specialists makes real estate easy. </span>
                </div>
            </div>
            <div className='third'>
                <div className='fourth'>
                    <div className='offer-div'>
                    <span className='offer'>WHAT WE OFFER</span>
                    </div>
                </div>
                <div className='logos'>
                        <img src="https://assets.zyrosite.com/presson88qto/STAR_white-mjEE09EooPIvgVMR.svg"></img>
                        <img src="https://assets.zyrosite.com/presson88qto/STAR_white-mjEE09EooPIvgVMR.svg"></img>
                        <img src="https://assets.zyrosite.com/presson88qto/STAR_white-mjEE09EooPIvgVMR.svg"></img>
                    </div>
                <div className='fifth'>
                    
                        <div className='para'>
                            <h4 className='text'>EXPERIENCED TEAM</h4>
                            <span className='text'>Each of us is a master of our craft – we've worked a number of years in our field and each have passion and creative vision for every project we put our hands on. </span>
                        </div>
                        <div className='para'>
                        <h4 className='text'>QUALITY TO DIE FOR</h4>
                            <span className='text'>We pay a lot of attention to each and every detail, because we know that we are in charge of creating somebody's safe haven. We partner up with the best craftsmen to ensure our famed quality.</span>
                        </div>
                        <div className='para'>
                        <h4 className='text'>VISIONARIES OF THE FUTURE </h4>
                            <span className='text'>We're not scared to go beyond the horizon. As the visionaries of tomorrow, we won't say no to experimentation, unusual materials, or unlikely combinations. </span>
                        </div>
                </div>
            </div>
           <div className='sixth'>
                <div className='project'>
                <h1 className='latest'>LATEST PROJECT</h1>
                </div>
                <img className='img' src="https://assets.zyrosite.com/presson88qto/STAR-mP44eQoonWF39eWL.svg"></img>
                <div className='line'>
                            <span className='line1'>Presson team is constantly striving for perfection. We are lucky to work with notable and known clients, who trust us and let us guide them with our creative vision, making their real estate dreams true.</span>
                        </div>
           </div>
           <div className='seven'> 
                <span className='see'>SEE OUR OTHER PROJECTS</span>
                <img className='image' src="https://assets.zyrosite.com/presson88qto/STAR-mP44eQoonWF39eWL.svg"></img>
                <div className='photos'>
                    <img className='home' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=507,fit=crop/presson88qto/img-mnllz9aMRWSWnkrL.png"></img>
                    <img className='home' src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=507,fit=crop/presson88qto/img-YZ99lbJeRkUp5gOx.png"></img>
                </div>
                <div className='our'>
                <span>Our years of experience makes us the ideal partner for your next project. We won't shy away from a challenge, but also know how to manage risks.</span>
                </div>
                <div className='more'><span className='seemore'>See More</span></div>
           </div>
        </>
        )
    }
}

export default Home