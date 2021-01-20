import PageSection from './PageSection'
import TypedText from './TypedText'
import theoPhoto from '../pic_of_theo.JPG'
import {Col, Row} from 'react-bootstrap'

function AboutSection() {
    const bodyText = "> I am a Student at Pitzer College pursuing a bachelor's degree in computer science through Harvey Mudd's CS program. Currently, I am on track to graduate in May of 2022. I specialize in creating applications that enable users to explore data. Since May 2020 I have been working at Harvey Mudd's WHISK lab on a web app that enables researchers to more easily create and interpret ML, specifically LDA, models and have loved every minute of developing it (more info below). I was raised in Boulder Colorado, and in my free time I like to ski, explore nature, learn about the natural world, and cultivate gourmet mushrooms."
    
    return (
        <PageSection id={"about"} title={"About"}> 
            <Row>
                <Col xs={12} md={9}>
                    <TypedText text={bodyText} msSpeed={10} className="section-body-text"/>
                </Col>
                <Col xs={12} md={3}>
                    <img src={theoPhoto} style={{width:"90%"}} alt={"Theo"}/>
                </Col>
            </Row>
        </PageSection>
    )
}

export default AboutSection