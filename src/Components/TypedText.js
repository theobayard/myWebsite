import React, { Component } from 'react';

class TypedText extends Component {
    blockFlashSpeed = 400
    blockChar = "▊"

    constructor(props) {
        super(props);
        this.state = {
            text: props.text[0],
            index: 0,
            hasBlock: false,
            msSpeed: props.msSpeed,
        }
    }

    componentDidMount() {
        this.recursiveTextUpdate()
    }

    recursiveTextUpdate = () => {
        this.updateText()
        setTimeout(this.recursiveTextUpdate, this.state.msSpeed)
    }

    updateText = () => {
        // If still typing
        if(this.state.text.length < this.props.text.length - 1) {
            const newIndex = this.state.index + 1
            const newText = this.state.text + this.props.text[newIndex]
            this.setState({
                index: newIndex,
                text: newText,
            })
        } 
        // If just finished typing
        else if(this.state.text.length === this.props.text.length - 1) {
            const newText = this.props.text
            this.setState({
                msSpeed: this.blockFlashSpeed,
                text: newText,
            })
        } else if(this.state.hasBlock) {
            const newText = this.props.text
            this.setState({
                hasBlock: false,
                text: newText,
            })
        } else {
            const newText = this.state.text.slice(0,-1) + this.blockChar
            this.setState({
                hasBlock: true,
                text: newText,
            })
        }
        
    }

    render = () => {
        return(
            <div className={this.props.className}>
                {this.state.text}
            </div>
        )
    }
}

export default TypedText;