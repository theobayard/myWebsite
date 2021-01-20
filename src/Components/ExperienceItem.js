import {Row} from 'react-bootstrap'

function ExperienceItem(props) {
    return (
        <div className="section-item">
            <Row>
                <b>{"Title: "}</b> {props.title}
            </Row>
            <Row>
                <b>{"Organization: "}</b> {props.organization}
            </Row>
            <Row>
                <b>{"Timeframe: "}</b> {props.timeframe}
            </Row>
            <Row>
                <b>{"Description: "}</b> {props.description}
            </Row>
        </div>
    )
}
export default ExperienceItem;