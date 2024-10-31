import React, { useState } from 'react';
import { CalculateSkills } from './CalculatingSkills';
import './SkillFormFieldStyle.css';
import SkillSections from './SkillSections';
import { Bonus, BonusState } from '../Components/Bonus/Bonus';



interface SkillFormProps {
    labels: { [key: string]: string }; // Dynamic labels definition
    
}

function SkillForm({ labels }: SkillFormProps) {
    const initialSkills = Object.keys(labels).reduce((acc, key) => {
        acc[key] = 0;
        return acc;
    }, {} as { [key: string]: number });

    const [skills] = useState(initialSkills);
    const [totalSkills, setTotalSkills] = useState(0);
    const [isSended, setIsSended] = useState('');
    const allowedCustomBonusesForStyling = ["Iris' Coat, rainbow", "Iris' Coat, other colors", "Vintage Apple"]; // List of allowed custom bonuses

    //console.log(labels)
    // Bonuses for user and opponent
    const [userBonuses, setUserBonuses] = useState<BonusState>({
        customization: {} as Bonus,
        styling: [],
        companion: {} as Bonus,
        saddle: {} as Bonus,
        saddleCloth: {} as Bonus,
        bridle: {} as Bonus,
        earBonnet: {} as Bonus,
        horseShoes: {} as Bonus,
        pack: {} as Bonus,
        poloWrapper: {} as Bonus,
    });
    const [opponentBonuses, setOpponentBonuses] = useState<BonusState>({
        customization: {} as Bonus,
        styling: [],
        companion: {} as Bonus,
        saddle: {} as Bonus,
        saddleCloth: {} as Bonus,
        bridle: {} as Bonus,
        earBonnet: {} as Bonus,
        horseShoes: {} as Bonus,
        pack: {} as Bonus,
        poloWrapper: {} as Bonus,
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