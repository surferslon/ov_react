import React, {useState} from 'react';
import Introduction from './Components/Introduction';
import { Button, Container, Divider, Grid, Header, Image, Segment } from 'semantic-ui-react'
import Ring0 from './ring_0.jpg'
import Ring1 from './ring_1.jpg'


export default function Home() {
    const [Ring0Img] = useState(Ring0)
    const [Ring1Img] = useState(Ring0)

    return (
        <div>
            <Introduction />

            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>

                    <Grid.Row>

                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>Обручальные кольца</Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Не следует, однако забывать, что начало повседневной работы по
                                формированию позиции представляет собой интересный эксперимент проверки системы обучения кадров,
                                соответствует насущным потребностям.
                            </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>Эксклюзивные кольца</Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Повседневная практика показывает, что начало повседневной работы по формированию позиции
                                влечет за собой процесс внедрения и модернизации модели развития.
                            </p>
                        </Grid.Column>

                        <Grid.Column floated='right' width={6}>
                            <Image
                                circular
                                size='medium'
                                src={Ring0}
                            />
                            <Image
                                circular
                                size='medium'
                                src={Ring1}
                            />
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Button size='huge'>Check Them Out</Button>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Segment>

            <Divider
                as='h4'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
                Цепи
            </Divider>

            <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>Плетение I</Header>
                            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>Плетение II</Header>
                            <p style={{ fontSize: '1.33em' }}>
                                <Image avatar src='' />
                                <b>Nan</b> Chief Fun Officer Acme Toys
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ padding: '8em 0em' }} vertical>
                <Container text>
                    <Header as='h3' style={{ fontSize: '2em' }}>Эксклюзивные изделия</Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Таким образом постоянное информационно-пропагандистское обеспечение нашей
                        деятельности требуют от нас анализа направлений прогрессивного развития.
                    </p>
                    <Button as='a' size='large'>Уже загорелся</Button>

                    <Header as='h3' style={{ fontSize: '2em' }}>Ремонт</Header>

                    <p style={{ fontSize: '1.33em' }}>
                       Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности
                       обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.
                    </p>
                    <Button as='a' size='large'>Очень интересно</Button>
                </Container>
            </Segment>

        </div>
    )
}
