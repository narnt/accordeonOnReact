import React, { Component } from 'react';

export default class AccordeonItem extends Component {

    render() {
        const isOpen = this.props.isOpen
        return <li className = { isOpen ? "main__menu main__menu__item .menu__item__opened" : "main__menu main__menu__item" }
        onClick = { this.props.toggleOpen } > < p className = { isOpen ? "main__menu__item__p active" : "main__menu__item__p" } > { this.props.item.title } < /p> { this.getBody() } < /
        li >
    }
    getBody() {
        if (!this.props.isOpen) return null
        return <ul className = "main__menu__item__submenu" > < li className = "main__menu__item__submenu__item" > { this.props.item.text } < /li></ul >
    }

}