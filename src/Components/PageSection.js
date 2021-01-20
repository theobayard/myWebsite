import Fade from 'react-reveal'

function PageSection(props) {
    return(
        <div class='page-section'>
            <Fade bottom>
                <>
                <p class="anchor" id={props.id}></p>
                <h2>{props.title}</h2>
                {props.children}
                </>
            </Fade>
        </div>
    )
}

export default PageSection;