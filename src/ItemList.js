import React, { Component } from 'react';
import AccordeonItem from './AccordeonItem'
import { Items } from './AccordeonTexts'

export default class ItemList extends Component {
    state = {
        openItemId: null
    }
    render() {
        const listItems = Items.map((item) => <
            AccordeonItem item = { item }
            key = { item.id }
            openItemId = { this.state.openItemId }
            isOpen = { item.id === this.state.openItemId }
            toggleOpen = { this.toggleOpenItem.bind(this, item.id) }
            />

        );
        return <ul > { listItems } < /ul >
    }
    toggleOpenItem = openItemId => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }
}