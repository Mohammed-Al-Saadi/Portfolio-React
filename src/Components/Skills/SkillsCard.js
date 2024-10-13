import React from "react";
import { BsCheckCircle } from "react-icons/bs"


import './SkillsCard';

export default function SkillsCard({ body }) {
   
    return (
        <div className="card-inner "  >
            {body.body.map((list, index) => { return <div className="skillmap" key={index}><BsCheckCircle/> {list}</div> })}
        </div>
    )
}

