import {Row} from 'react-bootstrap'

function BodyOfWorkItem(props) {
    return (
        <div className="section-item">
            <Row>
                <h3>{props.name}</h3> 
            </Row>
            {props.link? <Row><a href={props.link}>Link</a></Row> : null}
            <Row>
                <b>{"Stack: "}</b> {props.stack}
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
export default BodyOfWorkItem;