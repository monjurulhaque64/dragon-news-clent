import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';

const Catagory = () => {
    const {id} = useParams();
    const catagoryNews = useLoaderData();
    return (
        <div>
            {id && <h2> this category news: {catagoryNews.length}</h2>}
            {
                catagoryNews.map(news => <NewsCart key={news._id} news={news}>
                    
                </NewsCart>)
            }
        </div>
    );
};

export default Catagory;