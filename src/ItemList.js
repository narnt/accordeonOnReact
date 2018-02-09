import React from 'react';
import AccordeonItem from './AccordeonItem'
import { Items } from './AccordeonTexts'

export default function ItemList() {
    const listItems = Items.map((item) =>
        <
        AccordeonItem item = { item }
        key = { item.id }
        />
    );
    return <ul > { listItems } < /ul >
}