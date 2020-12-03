import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, Icon, Image, Menu, Rating} from 'semantic-ui-react'
import ButtonAddToCart from "./ButtonAddToCart";

const styles = {
    link: {
        color: '#ffffff'
    }
}


function ProductItem(props) {
    return (
        <Card color='blue'>

            <Image style={{width: '100%'}} src={props.product.image}/>

            <Card.Content>
                <Card.Header> {props.product.title} </Card.Header>
                <Card.Meta> Price: {props.product.price} </Card.Meta>
                <Card.Meta> Discount: {props.product.discount}% </Card.Meta>

                <Card.Description>
                    <ButtonAddToCart product={props.product}/>
                    <Button color='orange' animated='vertical'>
                        <Button.Content visible>
                            <Icon name='browser'/> Detail
                        </Button.Content>
                        <Button.Content hidden>
                            <Menu.Item as={Link} style={styles.link} to={"/product/" + props.product.id} name="home">
                                View detail
                            </Menu.Item>
                        </Button.Content>
                    </Button>
                </Card.Description>

            </Card.Content>

            <Card.Content extra>
                <Rating icon='star' defaultRating={5} maxRating={5}/>
            </Card.Content>

        </Card>
    );
}

export default ProductItem;
