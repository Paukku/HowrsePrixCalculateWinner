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
    selectedBonuses: Bonus[];  // Allow multiple selected bonuses
    onBonusesChange: (bonuses: Bonus[]) => void;  // Change handler for multiple bonuses
    title: string;
    prefix: string;
    disabled?: boolean;
}

function StylingBonuses({ selectedBonuses, onBonusesChange, title, prefix, disabled }: BonusSelectorProps) {
    const [stylingBonuses, setStylingBonuses] = useState<Bonus[]>();

    useEffect(() => {
        Data();
    }, []);

    async function Data() {
        try {
            const responseBonuses = await fetch('bonuscategory/AllBonuses');

            if (!responseBonuses.ok) {
                throw new Error(`HTTP error! status: ${responseBonuses.status}`);
            }

            const data = await responseBonuses.json();

            if (Array.isArray(data.stylingBonuses)) {
                setStylingBonuses(data.stylingBonuses);
            } else {
                throw new Error("Received data is not an array");
            }
        } catch (error) {
            console.error("Error fetching bonus data:", error);
        }
    }

    const handleBonusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedBonusName = event.target.value;
        const bonus = stylingBonuses?.find(b => b.name === selectedBonusName);

        if (bonus) {
            if (event.target.checked) {
                // Add the bonus if it's checked
                onBonusesChange([...selectedBonuses, bonus]);
            } else {
                // Remove the bonus if it's unchecked
                onBonusesChange(selectedBonuses.filter(b => b.name !== bonus.name));
            }
        }
    };

    return (
        <div>
            <h3>Styling bonuses</h3>
            {stylingBonuses ? stylingBonuses.map((bonus) => (
                <div key={bonus.name} className="bonus-row">
                    <input
                        type="checkbox"
                        className="checkbox"
                        id={`${prefix}-${bonus.name}`}
                        name={title}
                        value={bonus.name}
                        checked={selectedBonuses.some(selected => selected.name === bonus.name)}
                        onChange={handleBonusChange}
                        disabled={disabled}
                    />
                    <label htmlFor={`${prefix}-${bonus.name}`}>{bonus.name}</label><br />
                </div>
            )) : <p>Please refresh the page</p>}
        </div>
    );
}

export default StylingBonuses;