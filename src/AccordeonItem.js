import React, { Component } from 'react';

export default class AccordeonItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { isOpen } = this.state
        return <li className = "main__menu main__menu__item"
        onClick = { this.toggleOpen } > < p className = { isOpen ? "main__menu__item__p active" : "main__menu__item__p" } > { this.props.item.title } < /p> { this.getBody() } < /
        li >
    }
    getBody() {
        if (!this.state.isOpen) return null
        return <ul className = "main__menu__item__submenu" > < li className = "main__menu__item__submenu__item" > { this.props.item.text } < /li></ul >
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })

    }

}