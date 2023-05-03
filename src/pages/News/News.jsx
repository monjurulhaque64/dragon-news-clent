import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditoreInside from './EditoreInside';
import NavigationBar from '../Share/NevigationBar/NavigationBar';

const News = () => {
    const news = useLoaderData();
    const { category_id, title, details, image_url } = news;
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                   <Link to={`/catagory/${category_id}`}> 
                   <Button variant="danger"><FaArrowLeft></FaArrowLeft> All News in this Category</Button>
                   </Link>
                </Card.Body>
            </Card>
            <EditoreInside></EditoreInside>
        </div>
    );
};

export default News;