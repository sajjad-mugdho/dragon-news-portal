
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../Assets/Images/brand1.jpeg';
import brand2 from '../../../Assets/Images/brand2.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';




const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogle = () => {
        providerLogin(googleProvider).then(result => {
            const user = result.user;
            console.log(user);
        }).catch(error => console.error(error))
    }


    return (
        <div>
            <ButtonGroup vertical>

                <Button onClick={handleGoogle} className='px-5 mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login With GitHub</Button>
            </ButtonGroup>
            <div className='mt-5'>

                <h5>Find on Us</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2' ><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaGithub /> GitHub</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                </ListGroup>
            </div>

            <div className='mt-3'>

                <h5 className='mt-3'>Brand With US</h5>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={brand1}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={brand2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default RightSideNav;