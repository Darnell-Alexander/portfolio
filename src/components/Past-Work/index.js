import './index.scss'
import Fred from "../../Images/fredstarandfamily.png"
import Hex from "../../Images/hexadot.png"
import Mary from "../../Images/lovemaryreed.png"
import {faAngleDown as Arrow } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const PastWork =()=>{
    const fredS = 'Design e-commerce store to sell pet products. For all products, update variants and prices.Teach client to edit website without aid.'
    const hexS = 'Build website to showcase clients interior design portfolio, and connect to instagram account.'
    const maryS = 'Design website using clients choice in CMS (Wix.com).program backend to verify/approve users using a google spreadsheet via the GoogleSheets API.'
    return(
        <>
        <div className='pw-container' >
            <PwThumbnail t={Hex} d={hexS}/>
            <PwThumbnail t={Mary} d={maryS}/>
            <PwThumbnail t = {Fred} d={fredS}/>
        </div>
        </>
    )
}

const PwThumbnail =(props)=>{
    return(
        <>
            <div className='pw-block'>
                <img src={props.t} />
                <div className='pw-block-cover'>
                    <button className='visit' onClick={test}>Visit</button>
                    <span className='more' onClick={test}>
                        <FontAwesomeIcon icon={Arrow} />
                    </span>
                </div>
                <div className='desc'>
                    <p>{props.d}</p>
                </div>
            </div>
              
        </> 
    )
}

function test(){
    console.log('test');
}
export default PastWork