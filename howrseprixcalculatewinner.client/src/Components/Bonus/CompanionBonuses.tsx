import { useEffect, useState } from 'react';
import '../SkillFormFieldStyle.css';
export interface Bonus {
    name: string;
    stamina: number;
    speed: number;
    dressage: number;
    gallop: number;
    trot: number;
    jumping: number;
}

interface BonusSelectorProps {
    selectedBonus: Bonus | null;
    onBonusChange: (bonus: Bonus) => void;
    title: string;
    prefix: string;
}

function CompanionBonuses({ selectedBonus, onBonusChange, title, prefix }: BonusSelectorProps) {
    const [companionBonuses, setCompanionBonuses] = useState<Bonus[]>();

    useEffect(() => {
        populateWeatherData();
    }, []);

    async function populateWeatherData() {
        try {
            const responseBonuses = await fetch('bonuscategory/AllBonuses');

            if (!responseBonuses.ok) {
                throw new Error(`HTTP error! status: ${responseBonuses.status}`);
            }

            const data = await responseBonuses.json();

            // Varmista ett� data on oikeanmuotoinen ennen kuin asetat sen tilaan
            if (Array.isArray(data.companionBonuses)) {
                // && Array.isArray(data.equipmentBonuses) && Array.isArray(data.extraBonuses) && Array.isArray(data.companionBonuses)
                setCompanionBonuses(data.companionBonuses);
                // setEquipmentnBonuses(data.equipmentBonuses);
                //setExtranBonuses(data.extraBonuses);
                //setCompanionBonuses(data.companionBonuses);
            } else {
                throw new Error("Received data is not an array");
            }
        } catch (error) {
            console.error("Error fetching bonus data:", error);
        }
    }

    const handleBonusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedBonusName = event.target.value;
        const bonus = companionBonuses?.find(b => b.name === selectedBonusName);
        if (bonus) {
            onBonusChange(bonus);
        }
    };

    return (
        <div>
            <h3>Companion bonuses</h3>
            {companionBonuses ? companionBonuses.map((bonus) => (
                <div key={bonus.name} className="bonus-row">
                    <input
                        type="radio"
                        className="radio"
                        id={`${prefix}-${bonus.name}`}
                        name={title}
                        value={bonus.name}
                        checked={selectedBonus?.name === bonus.name}
                        onChange={handleBonusChange}
                    />
                    <label htmlFor={`${prefix}-${bonus.name}`}>{bonus.name}</label><br />
                </div>
            )) : <p>Please refresh the page</p>}
        </div>
    );
}

export default CompanionBonuses;