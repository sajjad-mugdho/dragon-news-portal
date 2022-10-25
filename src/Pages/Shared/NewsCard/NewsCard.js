import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaBookmark, FaEye, FaShare, FaStar } from 'react-icons/fa';


const NewsCard = ({ news }) => {

    const { _id, title, author, details, total_view, rating, image_url
    } = news;
    return (
        <div>
            <Card className="mb-3">
                <Card.Header className='d-flex justify-content-between align-item-center '>
                    <div className='d-flex'>
                        <Image className='mx-2'
                            roundedCircle src={author.img}
                            style={{ height: '60px' }}></Image>
                        <div>
                            <h5>{author.name}</h5>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaBookmark className='me-2'></FaBookmark>
                        <FaShare />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />

                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + "..."}<Link to={`/news/${_id}`}>read more</Link></p>
                                : <p>{details}</p>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <div >
                        <FaStar className=' me-2 text-warning' />
                        <span>{rating.number}</span>
                    </div>

                    <div className='me-2'>
                        <FaEye className='me-2' />
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;