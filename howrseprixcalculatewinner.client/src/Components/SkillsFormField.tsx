import React, { useState } from 'react';
import { CalculateSkills } from './CalculatingSkills';
import './SkillFormFieldStyle.css';
import CustomBonuses from './Bonus/CustomBonuses';
import CompanionBonuses from './Bonus/CompanionBonuses';
import StylingBonuses from './Bonus/StylingBonuses';

interface Bonus {
    name: string;
    stamina: number;
    speed: number;
    dressage: number;
    gallop: number;
    trot: number;
    jumping: number;
}

interface SkillFormProps {
    labels: { [key: string]: string }; // Dynamic labels definition
    
}

function SkillForm({ labels }: SkillFormProps) {
    const initialSkills = Object.keys(labels).reduce((acc, key) => {
        acc[key] = 0;
        return acc;
    }, {} as { [key: string]: number });

    const [skills, setSkills] = useState(initialSkills);
    const [totalSkills, setTotalSkills] = useState(0);
    const [isSended, setIsSended] = useState('');

    // Bonuses for user and opponent
    const [userBonuses, setUserBonuses] = useState<{
        customization: Bonus | null;
        companion: Bonus | null;
        extra: Bonus | null;
        styling: Bonus[];
    }>({
        customization:null,
        companion: null,
        extra: null,
        styling: [],
    });  
    const [opponentBonuses, setOpponentBonuses] = useState<{
        customization: Bonus | null;
        companion: Bonus | null;
        extra: Bonus | null;
        styling: Bonus[];
    }>({
        customization: null,
        companion: null,
        extra: null,
        styling: [],
    });  

    // Separate user and opponent skill labels
    const isOpponent = (key: string) => key.includes('Opponent');
    const isClouds = (key: string) => key.includes('clouds');

    const userLabels = Object.keys(labels).filter(key => !isOpponent(key) && !isClouds(key));
    const opponentLabels = Object.keys(labels).filter(key => isOpponent(key) && !isClouds(key));
    const clouds = Object.keys(labels).filter(key => isClouds(key) && !isOpponent(key));
    const cloudsOpponent = Object.keys(labels).filter(key => isClouds(key) && isOpponent(key));

    

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = event.target.value === '' ? 0 : parseFloat(event.target.value);
        setSkills((prevSkills) => ({
            ...prevSkills,
            [field]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const tSkill = CalculateSkills(event, skills, userBonuses, opponentBonuses);

        if (tSkill <= 0) {
            setIsSended("Your horse lose: ")
        } else {
            setIsSended("Your horse win: ")
        }
        
        setTotalSkills(tSkill);

    };

    const renderFields = (keys: string[]) => (
        keys.map((key) => (
            <div key={key}>
                <label>
                    {labels[key]}:
                    <input
                        type="number"
                        step={key.includes('clouds') ? 1 : 0.01}
                        min="0"
                        max={key.includes('clouds') ? 20 : undefined}
                        value={skills[key] !== undefined ? skills[key] : 0}
                        onChange={(e) => handleSkillChange(e, key)}
                    />
                </label>
                
            </div>
        ))
    );



    return (
        <>
            <form onSubmit={handleSubmit} className="skill-form">
                <div className="skill-sections">
                    {/* Your Horse's Skills */}
                    <div className="skill-column">
                        <h3>Your Horse</h3>
                        {renderFields(userLabels)}
                        {renderFields(clouds)}
                        <CustomBonuses selectedBonus={userBonuses.customization}
                            onBonusChange={(bonus: Bonus) => setUserBonuses({ ...userBonuses, customization: bonus })}
                            title="userHorseCustomizationBonus"
                            prefix="user" />
                        <StylingBonuses
                            selectedBonuses={userBonuses.styling ? userBonuses.styling : []}  // Ensure it's an array
                            onBonusesChange={(bonuses: Bonus[]) => setUserBonuses({ ...userBonuses, styling: bonuses })}  // Handle multiple bonuses
                            title="userHorseStylingBonus"
                            prefix="user"
                        />
                        <CompanionBonuses selectedBonus={userBonuses.companion}
                            onBonusChange={(bonus: Bonus) => setUserBonuses({ ...userBonuses, companion: bonus })}
                            title="userHorseCompanionBonus"
                            prefix="user" />


                    </div>

                    {/* Opponent's Skills */}
                    <div className="skill-column">
                        <h3>Opponent's horse</h3>
                        {renderFields(opponentLabels)}
                        {renderFields(cloudsOpponent)}
                        <CustomBonuses selectedBonus={opponentBonuses.customization}
                            onBonusChange={(bonus: Bonus) => setOpponentBonuses({ ...opponentBonuses, customization: bonus })}
                            title="opponentHorseCustomizationBonus"
                            prefix="opponent" />
                        <StylingBonuses selectedBonuses={opponentBonuses.styling}
                            onBonusesChange={(bonuses: Bonus[]) => setOpponentBonuses({ ...opponentBonuses, styling: bonuses })}
                            title="opponentHorseStylingnBonus"
                            prefix="opponent" />
                        <CompanionBonuses selectedBonus={opponentBonuses.companion}
                            onBonusChange={(bonus: Bonus) => setOpponentBonuses({ ...opponentBonuses, companion: bonus })}
                            title="opponentHorseCompanionBonus"
                            prefix="opponent" />

                    </div>
                </div>

                <button type="submit">Calculate</button>
            </form>
            {isSended === '' ? "Please, add skills and bonuses " : isSended + totalSkills + " points"}
        </>
    );
}

export default SkillForm;