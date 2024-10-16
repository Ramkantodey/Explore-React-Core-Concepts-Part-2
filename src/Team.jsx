import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }

    const handlerRemove = () => {
        setTeam(team - 1)
    }


    return (
        <div style={{ border: '2px solid green ', marginTop: '10px', borderRadius: '10px' }}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handlerRemove}>Remove</button>
        </div>
    )
}