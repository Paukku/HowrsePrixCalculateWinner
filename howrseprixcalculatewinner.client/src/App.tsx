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

function App() {
    const [bonuses, setBonuses] = useState<Bonuses[]>();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = bonuses === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {bonuses.map(bonus =>
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
            <p>* Perusmukautus on sellainen esine, joka antaa taitoihin +11 bounspistettä.</p>
        </>;

    return (
        <div>
            <h1 id="tableLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );

    async function populateWeatherData() {
        try {
            const responseBonuses = await fetch('bonuscategory');

            if (!responseBonuses.ok) {
                throw new Error(`HTTP error! status: ${responseBonuses.status}`);
            }

            const dataBonuses = await responseBonuses.json();

            // Varmista että data on oikeanmuotoinen ennen kuin asetat sen tilaan
            if (Array.isArray(dataBonuses)) {
                setBonuses(dataBonuses);
            } else {
                throw new Error("Received data is not an array");
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }
}

export default App;