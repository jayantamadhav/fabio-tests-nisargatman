import React, { useEffect, useState } from 'react';
import ImageContainer from '../../components/ImageContainer';
import Draggable, {DraggableCore} from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './index.scss';


const Index = () => {
    const [catData, setCatData] = useState();

    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL,
        timeout: 100000,
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }
    });

    const getImage = () =>  {
        let cat_gifs = [
            "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg",
            "https://cdn.pixabay.com/photo/2017/07/08/08/59/cat-2483826_1280.jpg",
            "https://cdn.pixabay.com/photo/2018/10/10/13/52/cat-3737295_1280.jpg",
            "https://cdn.pixabay.com/photo/2017/10/01/20/39/cat-2806957_1280.jpg",
            "https://cdn.pixabay.com/photo/2019/03/05/06/49/wink-4035665_1280.jpg",
            "https://cdn.pixabay.com/photo/2018/08/13/09/00/cat-3602557_1280.jpg",
            "https://cdn.pixabay.com/photo/2016/09/01/14/15/doll-1636212_1280.jpg",
        ]
        let idx = Math.floor(Math.random() * cat_gifs.length);
        return cat_gifs[idx];
    }

    const fetchCatData = () => {
        return new Promise((resolve, reject) => {
            axiosInstance.get('/')
            .then(res => {
                console.log(res.data.data);
                setCatData(res.data.data);
                resolve();
            })
            .catch(err => {
                console.log(err);
                reject();
            })
        })
    }

    useEffect(() => {
        document.title = "CatBank"
        console.log(process.env.REACT_APP_API_BASE_URL);
        (async () => {
            try {
                await fetchCatData();
            }
            catch (e) {
                console.log(e)
            }
        })();
    }, []);

    // const dragHandlers = { onStart: () => onStart(), onStop: () => onStop() };

    return(
        <Container className='p-5'>
            <h1>CatBank</h1>
            <Row className='justify-content-center g-3'>
                { catData && catData.map((el, index) => {
                    return (
                        <Draggable
                        defaultPosition={{x: 0, y: 0}}
                        position={null}
                        grid={[50, 50]}
                        scale={1}>
                            <Col lg={4}>
                                <div className='panel'>
                                    <div className='panel-header'>{el.product_title}</div>
                                    <div className='panel-body'>
                                        <ImageContainer src={getImage()}/>
                                    </div>
                                </div>
                            </Col>
                        </Draggable>
                    );
                })}
            </Row>
        </Container>
    );
}

export default Index;