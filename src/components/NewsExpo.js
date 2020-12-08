import React from 'react'
import newsImg from '../assets/images/news/news_4.jpg'
import {ReactComponent as IconFacebook} from '../assets/facebook.svg'
import {ReactComponent as IconTwitter} from '../assets/twitter.svg'

import db from '../database/news.json'

const NewsExpoItem = (props) => {

    return (
        <div className='news-expo__item'>
            <img src={'./assets/news/' + props.content.image}></img>
            <div className='news-expo__item__desc'>
                <span>2 days ago</span>
                <h3>{props.content.title}</h3>
                <p>{props.content.description}</p>
                <div className='news-expo__item__social'>
                    <IconFacebook/>
                    <IconTwitter/>
                </div>
            </div>
        </div>
    )
}

const NewsExpo = () => {
    console.log(db.data)
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