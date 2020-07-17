import React from 'react';
import {Button} from '../../assets/Button';
import {Comments} from '../../assets/Comments';
import {Likes} from '../../assets/Likes';
import {Share} from '../../assets/Share';

import './styles.scss';

export const Article = ({title}) => (
    <div className="article_wrap">
        <div className="article_main">
            <div className="buttons_wrap">
                <Button>literature</Button>
                <Button>literature</Button>
            </div>
        </div>
        <div className="article_description">
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam animi cumque natus pariatur quod
                sapiente sequi, tempora vero vitae? Aliquam amet ea et ipsam libero maiores officiis quis ratione.</p>
        </div>
        <div className="article_footer">
            <div className="article_footer_wrap">
                <div className="article_footer_body">
                    <div className="article_footer_time">
                        <p>15.072017</p>
                    </div>
                    <div className="article_footer_social_wrap">
                        <Comments/>
                        <Likes/>
                        <Share/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
