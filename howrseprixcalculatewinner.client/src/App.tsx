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
    stamina?: number;
    speed?: number;
    dressage?: number;
    gallop?: number;
    trot?: number;
    jumping?: number;
    geneticpotential?: number;
   
}

function App() {
    const [customizationBonuses, setCustomizationBonuses] = useState<Bonuses[]>();
    const [equipmentBonuses, setEquipmentnBonuses] = useState<Bonuses[]>();
    const [extraBonuses, setExtranBonuses] = useState<Bonuses[]>();
    const [companionBonuses, setCompanionBonuses] = useState<Bonuses[]>();
    const [myHorse, setMyHorse] = useState<MyHorse>();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const handleStamina = (event: React.ChangeEvent<HTMLInputElement>, field: keyof MyHorse) => {
        const value = parseFloat(event.target.value);
        console.log('Before update:', myHorse);

        // Update the specific field in the myHorse state
        setMyHorse((prevHorse) => ({
            ...prevHorse,
            [field]: value,
        }));

        console.log('After update:', {
            ...myHorse,
            [field]: value,
        });
    };

    const addBlog = (event: any) => {
        event.preventDefault()
        console.log(myHorse)

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
            <form onSubmit={addBlog}>
                <label>
                    Stamina: 
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={myHorse?.stamina}
                        onChange={(e) => handleStamina(e, "stamina")}
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
                        onChange={(e) => handleStamina(e, "speed")}
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
                        onChange={(e) => handleStamina(e, "dressage")}
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
                        onChange={(e) => handleStamina(e, "gallop")}
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
                        onChange={(e) => handleStamina(e, "trot")}
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
                        onChange={(e) => handleStamina(e, "jumping")}
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
                        onChange={(e) => handleStamina(e, "geneticpotential")}
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