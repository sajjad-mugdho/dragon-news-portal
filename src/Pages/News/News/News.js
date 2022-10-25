import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const News = () => {
    const news = useLoaderData()
    const { _id, title, author, details, total_view, rating, image_url, category_id
    } = news;

    return (
        <Card style={{}}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">Go Home</Button>

                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;