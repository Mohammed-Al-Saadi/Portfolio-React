import { useState } from 'react'
import SkillsCard from './SkillsCard'
import './css/SkillsButton.css'
import { skills } from './data'
import { GiClick } from "react-icons/gi"





export default function SkillsButton() {
    const [active, setActive] = useState("message")





    return (
        <div className="skills_main">
                            

            <div className="nav">
                <nav className="nav_buttons">


                    <button className="button-17 bt1"  onClick={() => setActive("Frontend")}> Frontend<GiClick /></button>
                    <button className="button-17"  onClick={() => setActive("Backend")}> Backend<GiClick /></button>
                    <button className="button-17 bt2"  onClick={() => setActive("Other Skills")}>Other skills <GiClick /></button>



                </nav>

                <div className="card_active">

                     {active === "message" && <p className="skills-main-page">Skills && Technology's</p>}



                    {active === "Frontend" && <SkillsCard body={skills.find(Obj => { return Obj.id === 1 })} />}
                    {active === "Backend" && <SkillsCard body={skills.find(Obj => { return Obj.id === 2 })} />}
                    {active === "Other Skills" && <SkillsCard body={skills.find(Obj => { return Obj.id === 3 })} />}




                </div>

            </div>
        </div>

    )
}