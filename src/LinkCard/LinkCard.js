import React from 'react'
import './LinkCard.css'
import Imgfacebook from './../img/facebook.png'
import Imggithub from './../img/github.png'
import Imglinkdin from './../img/linkdin.png'
import Imggmail from './../img/gmail.png'

const ImgMap = {
    "facebook": Imgfacebook,
    "github": Imggithub,
    "linkdin": Imglinkdin,
    "gmail": Imggmail
}


function LinkCard(props) {
    return (
        <div className={`link-card bg-${props.tittle}`}>
        <a href={props.link} className='hyperlink'>
            <div className='container-linkhandler'>

                <div>
                    <img src={ImgMap[props.tittle]} className='card-img' />

                </div>
                <div className='handle-name'>
                    <h3 className='username'>{props.username}</h3>
                </div>
            </div>
            <div className='handle-dec'>{props.tagline}</div>
            </a>
        </div>

    )
}
export default LinkCard;