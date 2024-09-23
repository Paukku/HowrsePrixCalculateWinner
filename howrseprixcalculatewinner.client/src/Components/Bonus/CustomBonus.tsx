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

function CustomBonuses({ selectedBonus, onBonusChange, title, prefix }: BonusSelectorProps) {
    const [customizationBonuses, setCustomizationBonuses] = useState<Bonus[]>();

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

            // Varmista että data on oikeanmuotoinen ennen kuin asetat sen tilaan
            if (Array.isArray(data.customizationBonuses)) {
                // && Array.isArray(data.equipmentBonuses) && Array.isArray(data.extraBonuses) && Array.isArray(data.companionBonuses)
                setCustomizationBonuses(data.customizationBonuses);
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
        const bonus = customizationBonuses?.find(b => b.name === selectedBonusName);
        if (bonus) {
            onBonusChange(bonus);
        }
    };



    return (
        <div>
            
            {customizationBonuses ? customizationBonuses.map((bonus) => (
                <div key={bonus.name} className="bonus-row">
                    <input
                        type="radio"
                        className="radio"
                        id={`${prefix}-${bonus.name}`}
                        name={ title }
                        value={bonus.name}
                        checked={selectedBonus?.name === bonus.name}
                        onChange={handleBonusChange}
                    />
                    <label htmlFor={bonus.name}>{bonus.name}</label><br />
                </div>
            )) : <p>Please refresh the page</p>}
        </div>
    );
}

export default CustomBonuses;