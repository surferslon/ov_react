import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Image, Segment, Grid, Header, Rating} from 'semantic-ui-react'
import ButtonAddToCart from "./Components/ButtonAddToCart";
import Loading from "../../Components/Loading";
import API_BASE_URL from '../../Config'


export default function ProductDetail(props) {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // this.state.ShoppingCartItems = JSON.parse(localStorage.getItem('shopping-cart') || '[]');
        axios.get(`${API_BASE_URL}/product/${props.id}/`)
            .then(result => {
                setProduct(result.data)
                setLoading(false);
            });
    }, [props.id])

    if (loading) {
        return (
            <Loading/>
        );
    } else {
        return (
            <Segment style={{padding: '2em 0em', minHeight: 500}} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Image src={product.image}/>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Header as="h1">{product.title}</Header>
                            <Header as="h2">Price: {product.price}</Header>
                            <Header as="h4">Discount: {product.discount}</Header>
                            <Rating icon='star' defaultRating={5} maxRating={5}/>
                            <Header as="h4"> <ButtonAddToCart product={product}/> </Header>
                            <Header as="h5">Description: {product.description}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Segment>
        );
    }
}
