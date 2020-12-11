import React from 'react'
import newsImg from '../assets/images/news/news_4.jpg'
import {ReactComponent as IconFacebook} from '../assets/facebook.svg'
import {ReactComponent as IconTwitter} from '../assets/twitter.svg'
import {ReactComponent as IconPin} from '../assets/pin.svg'
import {ReactComponent as IconSpeak} from '../assets/volume.svg'

import db from '../database/news.json'

const NewsExpoItem = (props) => {

    return (
        <div className='news-expo__item'>
            <img src={'./assets/news/' + props.content.image}></img>
            <div className='news-expo__item__content'>
                <span>2 days ago</span>
                <h3>{props.content.title}</h3>
                <p className='news-expo__item__desc'>{props.content.description}</p>
                <div className='news-expo__item__social'>
                    <IconFacebook/>
                    <IconTwitter/>
                    <IconPin className='news-expo__item__pin'/>
                    <IconSpeak news-expo__item='news-expo__item__speak'/>
                </div>
            </div>
        </div>
    )
}

const NewsExpo = () => {
    //console.log(db.data)
    return (
        <div className="news-expo">
            <div className="one"><NewsExpoItem content={db.data[0]}/></div>
            <div className="two"><NewsExpoItem content={db.data[1]}/></div>
            <div className="three"><NewsExpoItem content={db.data[2]}/></div>
            <div className="four">
                <a class="twitter-timeline" data-height="100%" data-theme="light" href="https://twitter.com/uniofeastanglia?ref_src=twsrc%5Etfw">Tweets by uniofeastanglia</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        </div>
    )
}

export default NewsExpo