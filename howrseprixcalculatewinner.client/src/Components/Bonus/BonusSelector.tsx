import React, { useEffect, useState } from "react";
import { Bonus } from "../Bonus/Bonus";


export interface BonusSelectorProps {
    selectedBonus: Bonus | null;
    onBonusChange: (bonus: Bonus) => void;
    title: string;
    prefix: string; 
    bonusType: string; 
    fetchUrl: string;
}

function BonusSelector({ selectedBonus, onBonusChange, title, prefix, bonusType, fetchUrl }: BonusSelectorProps) {
    const [bonuses, setBonuses] = useState<Bonus[]>([]);

    useEffect(() => {
        populateBonusData();
    }, []);

    async function populateBonusData() {
        try {
            const responseBonuses = await fetch(fetchUrl);

            if (!responseBonuses.ok) {
                throw new Error(`HTTP error! status: ${responseBonuses.status}`);
            }

            const data = await responseBonuses.json();
            const categoryBonuses = data[bonusType]; 

            if (Array.isArray(categoryBonuses)) {
                setBonuses(categoryBonuses);
            } else {
                throw new Error(`Received data for ${bonusType} is not an array`);
            }
        } catch (error) {
            console.error("Error fetching bonus data:", error);
        }
    }

    const handleBonusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedBonusName = event.target.value;
        const bonus = bonuses.find(b => b.name === selectedBonusName);
        if (bonus) {
            onBonusChange(bonus);
        }
    };

    return (
        <div>
            <h3>{title}</h3>
            {bonuses.length > 0 ? bonuses.map((bonus) => (
                <div key={bonus.name} className="bonus-row">
                    <input
                        type="radio"
                        className="radio"
                        id={`${prefix}-${bonusType}-${bonus.name}`} // Käytetään sekä prefixiä että bonusTypea
                        name={title}
                        value={bonus.name}
                        checked={selectedBonus?.name === bonus.name}
                        onChange={handleBonusChange}
                    />
                    <label htmlFor={`${prefix}-${bonusType}-${bonus.name}`}>{bonus.name}</label><br />
                </div>
            )) : <p>Please refresh the page</p>}
        </div>
    );
}

export default BonusSelector;