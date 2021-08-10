import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from "react-router-dom";
import {ReactComponent as AnimationIcon} from '../../img/icon-animation.svg'
import {connect} from "react-redux";
import axios from "axios";

// Components
import CardItem from "../../components/CardItem";

// Actions
import {setGoods} from '../../redux/actions/goods'

import './styles.sass'
import BlogItem from "../../components/BlogItem";


const Home = ({goods, setGoods}) => {

    const [articles, setArticles] = useState([])
    const history = useHistory()

    const getGoods = () => {
        axios.get('http://127.0.0.1:8000/api/v1/random-goods')
            .then(data => {
                setGoods(data.data)
            })
    }

    const getArticles = () => {
        axios.get('http://localhost:8000/api/v1/articles/')
            .then(data => setArticles(data.data))
    }

    useEffect(() => {
        getGoods()
        getArticles()
    }, [])


    const handleClick = (id) => {
        history.push('url.routs.general.newsItem({id: id})')
    }

    return (
        <div className={'Home'}>
            <div className={'Home__main-banner'}>
                <div className={'Home__ultimate-text'}>
                    The most important part <br/>
                    -- Community
                </div>
                <div className={'Home__animation-icon'}>
                    <AnimationIcon/>
                </div>
            </div>
            <div className={'Home__title'}>
                Новое в женском
            </div>
            <div className={'Home__random-items'}>
                {goods && goods.map((data) => {
                    return (
                        <div className={'Home__random-item'}>
                            <CardItem img={data.img} title={data.title} price={data.price}/>
                        </div>
                    )
                })}
            </div>
            <div className={'Home__title'}>
                Новое в мужском
            </div>
            <div className={'Home__random-items'}>
                {goods && goods.map((item) => <div className={'Home__random-item'}>
                    <CardItem img={item.img} title={item.title} price={item.price} onClick={() => handleClick(item.id)}/>
                </div>)}
            </div>
            <div className={'Home__title'}>
                Kich Журнал
            </div>
            <div className={'Home__blog-grid'}>
                {articles.articles && articles.articles.map((data) => {
                    return (
                        <BlogItem title={data.title}
                                  text={data.text}
                                  img={data.img} />
                    )
                })}
            </div>
        </div>
    );
};

Home.propTypes = {};

const mapStateToProps = (state) => ({
    username: state.authReducer.username,
    first_name: state.authReducer.first_name,
    last_name: state.authReducer.last_name,
    email: state.authReducer.email,
    goods: state.goodsReducer.goods,
})

export default connect(mapStateToProps, {setGoods})(Home)