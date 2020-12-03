import React, { useState } from 'react';
import { Button, Container, Header, Icon, Segment, Image } from 'semantic-ui-react';
import HeaderImage from './header.jpg';
import HeaderLogo from './header_logo_white.png'


function Introduction() {
    const [img_url] = useState(HeaderImage)
    const [img_logo] = useState(HeaderLogo)

    return (
        <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 500, padding: '1em 0em',
                    backgroundImage: "url(" + img_url + ")" }}
            vertical
        >
            <Container text>
                <Image src={img_logo} style={{ marginTop: '6em' }}>

                </Image>
                {/* <Header
                    as='h1'
                    inverted
                    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '2em' }}
                    image={img_logo}
                /> */}
                {/* <Button primary size='huge'>
                    Get Started
                    <Icon name='right arrow' />
                </Button> */}
            </Container>
        </Segment>
    );
}

export default Introduction;