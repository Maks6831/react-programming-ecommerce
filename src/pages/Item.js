import React from "react";
import { useParams } from "react-router";
import itemInfo from "../itemInfo.json"

const Item = () => {
    const { item } = useParams()
    const currentItem = itemInfo.filter((id)=>((id.name === item)));
    console.log(currentItem);
    return (
        <div>this is the item page</div>
    )
}

export default Item;