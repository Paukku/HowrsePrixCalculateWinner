import React, { useState, useEffect } from 'react';
import { CalculateSkills } from './CalculatingSkills';
import './SkillFormFieldStyle.css';
import SkillSections from './SkillSections';

interface Bonus {
    name: string;
    stamina: number;
    speed: number;
    dressage: number;
    gallop: number;
    trot: number;
    jumping: number;
}

interface BonusState {
    customization: Bonus;
    styling: Bonus[];
    companion: Bonus;
    extra: Bonus;
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
    const allowedCustomBonusesForStyling = ["Iris' Coat, rainbow", "Iris' Coat, other colors", "Vintage Apple"]; // List of allowed custom bonuses

    console.log(labels)
    // Bonuses for user and opponent
    const [userBonuses, setUserBonuses] = useState<BonusState>({
        customization: {} as Bonus,
        styling: [],
        companion: {} as Bonus,
        extra: {} as Bonus,
    });
    const [opponentBonuses, setOpponentBonuses] = useState<BonusState>({
        customization: {} as Bonus,
        styling: [],
        companion: {} as Bonus,
        extra: {} as Bonus,
    });

    // Separate user and opponent skill labels
    const isOpponent = (key: string) => key.includes('Opponent');
    const isClouds = (key: string) => key.includes('clouds');

    const userLabels = Object.keys(labels).filter(key => !isOpponent(key) && !isClouds(key));
    const opponentLabels = Object.keys(labels).filter(key => isOpponent(key) && !isClouds(key));
    const userClouds = Object.keys(labels).filter(key => isClouds(key) && !isOpponent(key));
    const opponentClouds = Object.keys(labels).filter(key => isClouds(key) && isOpponent(key));

    console.log(userLabels)
    console.log(opponentLabels)

  
    const isStylingEnabled = allowedCustomBonusesForStyling.includes(userBonuses.customization?.name ?? "");

    // Use effect to clear styling bonuses when a non-allowed custom bonus is selected
    useEffect(() => {
        console.log(allowedCustomBonusesForStyling)
        if (!isStylingEnabled) {
            console.log(isStylingEnabled)
            setUserBonuses((prevBonuses) => ({
                ...prevBonuses,
                styling: [] // Clear styling bonuses if not allowed
            }));
        }
    }, [isStylingEnabled, userBonuses.styling.length]);

    

    

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

    return (
        <>
            <form onSubmit={handleSubmit} className="skill-form">
                <div className="skill-sections">
                    {/* Your Horse's Skills */}
                    <div className="skill-column">
                        <SkillSections
                            labels={userLabels}
                            clouds={userClouds}
                            bonuses={userBonuses}
                            setBonuses={setUserBonuses}
                            allowedCustomBonusesForStyling={allowedCustomBonusesForStyling}
                            titlePrefix="User"
                        />
                    </div>

                    {/* Opponent's Skills */}
                    <div className="skill-column">
                        <SkillSections
                            labels={opponentLabels}
                            clouds={opponentClouds}
                            bonuses={opponentBonuses}
                            setBonuses={setOpponentBonuses}
                            allowedCustomBonusesForStyling={allowedCustomBonusesForStyling}
                            titlePrefix="Opponent"
                        />
                    </div>
                </div>

                <button type="submit">Calculate</button>
            </form>
            {isSended === '' ? "Please, add skills and bonuses " : isSended + totalSkills + " points"}
        </>
    );
}

export default SkillForm;