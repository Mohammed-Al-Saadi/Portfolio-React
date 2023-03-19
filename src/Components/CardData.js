import React from "react";
import Card from "./Card";
import { skills } from "./data";
import { AiOutlineCheckCircle } from "react-icons/ai"





export default function CardData() {
    return (

        <div className="cards_row ">{skills.map(skill => (
            <Card body={skill.body.map(body => (<div className="card_icon"><AiOutlineCheckCircle/> {body}</div>))}
                tittle={skill.tittle} src={skill.img} key={skill.id} />))}</div>);
};
