import React from "react";
import { useParams } from "react-router";

const Item = () => {
    const { item } = useParams()
    console.log(item);
    return (
        <div>this is the item page</div>
    )
}

export default Item;