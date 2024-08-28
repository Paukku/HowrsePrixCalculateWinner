import { useEffect, useState } from 'react';
import './App.css';
interface Bonuses {
    name: string;
    stamina: number;
    speed: number;
    dressage: number;
    gallop: number;
    trot: number;
    jumping: number;
}

interface MyHorse {
    stamina: number;
    speed: number;
    dressage: number;
    gallop: number;
    trot: number;
    jumping: number;
    stamina_gp: number;
    speed_gp: number;
    dressage_gp: number;
    gallop_gp: number;
    trot_gp: number;
    jumping_gp: number;
    geneticpotential: number;   
}

function App() {
    const [customizationBonuses, setCustomizationBonuses] = useState<Bonuses[]>();
    const [equipmentBonuses, setEquipmentnBonuses] = useState<Bonuses[]>();
    const [extraBonuses, setExtranBonuses] = useState<Bonuses[]>();
    const [companionBonuses, setCompanionBonuses] = useState<Bonuses[]>();
    const [myHorse, setMyHorse] = useState<MyHorse>({
        stamina: 0,
        speed: 0,
        dressage: 0,
        gallop: 0,
        trot: 0,
        jumping: 0,
        stamina_gp: 0,
        speed_gp: 0,
        dressage_gp: 0,
        gallop_gp: 0,
        trot_gp: 0,
        jumping_gp: 0,
        geneticpotential: 0,
    });

    useEffect(() => {
        populateWeatherData();
    }, []);

    const handleSkill = (event: React.ChangeEvent<HTMLInputElement>, field: keyof MyHorse) => {
        const value = parseFloat(event.target.value);

        // Update the specific field in the myHorse state
        setMyHorse((prevHorse) => ({
            ...prevHorse,
            [field]: value,
        }));
    };

    const calculateSkills = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const sortedSkills = Object.entries(myHorse)
            .sort(([, a], [, b]) => b - a);

        console.log(sortedSkills);


        
        const totalSkills = sortedSkills[1][1] + 10 + (sortedSkills[1][1] / 5 * 2) + (sortedSkills[1][1] / 5 * 3) + 69.25 + (sortedSkills[0][1] * 0.025)
            + sortedSkills[2][1] + 10 + (sortedSkills[2][1] / 5 * 2) + (sortedSkills[2][1] / 5 * 3) + 69.25
            + sortedSkills[3][1] + 10 + (sortedSkills[3][1] / 5 * 2) + (sortedSkills[3][1] / 5 * 3)
            + sortedSkills[4][1] + 10 + (sortedSkills[4][1] / 5 * 2) + (sortedSkills[4][1] / 5 * 3)
            + sortedSkills[5][1] + 10 + (sortedSkills[5][1] / 5 * 2) + (sortedSkills[5][1] / 5 * 3)
            + sortedSkills[6][1] + 10 + (sortedSkills[6][1] / 5 * 2) + (sortedSkills[6][1] / 5 * 3);
        console.log(totalSkills)
        


    }

    const contents = customizationBonuses === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Stamina</th>
                        <th>Speed</th>
                        <th>Dressage</th>
                        <th>Gallop</th>
                        <th>Trot</th>
                        <th>Jumping</th>
                    </tr>
                </thead>
                <tbody>
                    {customizationBonuses.map(bonus =>
                        <tr key={bonus.name}>
                            <td>{bonus.name}</td>
                            <td>{bonus.stamina}</td>
                            <td>{bonus.speed}</td>
                            <td>{bonus.dressage}</td>
                            <td>{bonus.gallop}</td>
                            <td>{bonus.trot}</td>
                            <td>{bonus.jumping}</td>
                        </tr>
                    )}
                    {equipmentBonuses?.map(bonus =>
                        <tr key={bonus.name}>
                            <td>{bonus.name}</td>
                            <td>{bonus.stamina}</td>
                            <td>{bonus.speed}</td>
                            <td>{bonus.dressage}</td>
                            <td>{bonus.gallop}</td>
                            <td>{bonus.trot}</td>
                            <td>{bonus.jumping}</td>
                        </tr>
                    )}
                    {extraBonuses?.map(bonus =>
                        <tr key={bonus.name}>
                            <td>{bonus.name}</td>
                            <td>{bonus.stamina}</td>
                            <td>{bonus.speed}</td>
                            <td>{bonus.dressage}</td>
                            <td>{bonus.gallop}</td>
                            <td>{bonus.trot}</td>
                            <td>{bonus.jumping}</td>
                        </tr>
                    )}
                    {companionBonuses?.map(bonus =>
                        <tr key={bonus.name}>
                            <td>{bonus.name}</td>
                            <td>{bonus.stamina}</td>
                            <td>{bonus.speed}</td>
                            <td>{bonus.dressage}</td>
                            <td>{bonus.gallop}</td>
                            <td>{bonus.trot}</td>
                            <td>{bonus.jumping}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <p>* A basic enhancement is an item that grants +11 bonus points to skills.</p>
        </>;

    return (
        <div>
            <h1 id="tableLabel">Howrse Prix calculator</h1>
            <p>Please, add your foals skills and GP</p>
            <form onSubmit={calculateSkills}>
                <label>
                    Stamina: 
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={myHorse?.stamina}
                        onChange={(e) => handleSkill(e, "stamina")}
                    />
                </label>
                <br />
                <label>
                    Speed:
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={myHorse?.speed}
                        onChange={(e) => handleSkill(e, "speed")}
                    />
                </label>
                <br />
                <label>
                    Dressage:
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={myHorse?.dressage}
                        onChange={(e) => handleSkill(e, "dressage")}
                    />
                </label>
                <br />
                <label>
                    Gallop:
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={myHorse?.gallop}
                        onChange={(e) => handleSkill(e, "gallop")}
                    />
                </label>
                <br />
                <label>
                    Trot:
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={myHorse?.trot}
                        onChange={(e) => handleSkill(e, "trot")}
                    />
                </label>
                <br />
                <label>
                    Jumping:
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={myHorse?.jumping}
                        onChange={(e) => handleSkill(e, "jumping")}
                    />
                </label>
                <br />
                <label>
                    Stamina GP:
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={myHorse?.stamina_gp}
                        onChange={(e) => handleSkill(e, "stamina_gp")}
                    />
                </label>
                <br />
                <label>
                    Speed GP:
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={myHorse?.speed_gp}
                        onChange={(e) => handleSkill(e, "speed_gp")}
                    />
                </label>
                <br />
                <label>
                    Dressage GP:
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={myHorse?.dressage_gp}
                        onChange={(e) => handleSkill(e, "dressage_gp")}
                    />
                </label>
                <br />
                <label>
                    Gallop GP:
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={myHorse?.gallop_gp}
                        onChange={(e) => handleSkill(e, "gallop_gp")}
                    />
                </label>
                <br />
                <label>
                    Trot GP:
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={myHorse?.trot_gp}
                        onChange={(e) => handleSkill(e, "trot_gp")}
                    />
                </label>
                <br />
                <label>
                    Jumping GP:
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={myHorse?.jumping_gp}
                        onChange={(e) => handleSkill(e, "jumping_gp")}
                    />
                </label>
                <br />
                <label>
                    Genetic potential:
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={myHorse?.geneticpotential}
                        onChange={(e) => handleSkill(e, "geneticpotential")}
                    />
                </label>
                <br />
                <button type="submit">Add</button>
            </form>

            {contents}
        </div>
    );

    async function populateWeatherData() {
        try {
            const responseBonuses = await fetch('bonuscategory/AllBonuses');

            if (!responseBonuses.ok) {
                throw new Error(`HTTP error! status: ${responseBonuses.status}`);
            }

            const data = await responseBonuses.json();

            // Varmista että data on oikeanmuotoinen ennen kuin asetat sen tilaan
            if (Array.isArray(data.customizationBonuses) && Array.isArray(data.equipmentBonuses) && Array.isArray(data.extraBonuses) && Array.isArray(data.companionBonuses)) {
                setCustomizationBonuses(data.customizationBonuses);
                setEquipmentnBonuses(data.equipmentBonuses);
                setExtranBonuses(data.extraBonuses);
                setCompanionBonuses(data.companionBonuses);
            } else {
                throw new Error("Received data is not an array");
            }
        } catch (error) {
            console.error("Error fetching bonus data:", error);
        }
    }
}

export default App;