import React, { useState } from 'react';
import { CalculateSkills } from './CalculatingSkills';
import './SkillFormFieldStyle.css';

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

    // Separate user and opponent skill labels
    const isOpponent = (key: string) => key.includes('Opponent');
    const isClouds = (key: string) => key.includes('clouds');

    const userLabels = Object.keys(labels).filter(key => !isOpponent(key) && !isClouds(key));
    const opponentLabels = Object.keys(labels).filter(key => isOpponent(key) && !isClouds(key));
    const clouds = Object.keys(labels).filter(key => isClouds(key) && !isOpponent(key));
    const cloudsOpponent = Object.keys(labels).filter(key => isClouds(key) && isOpponent(key));

    

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = parseFloat(event.target.value);
        setSkills((prevSkills) => ({
            ...prevSkills,
            [field]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const tSkill = CalculateSkills(event, skills);

        if (tSkill) setTotalSkills(tSkill);

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
                        value={skills[key]}
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
                    </div>

                    {/* Opponent's Skills */}
                    <div className="skill-column">
                        <h3>Opponent's horse</h3>
                        {renderFields(opponentLabels)}
                        {renderFields(cloudsOpponent)}
                    </div>
                </div>

                <button type="submit">Calculate</button>
            </form>
            {totalSkills ? "Your horse's skills: " + totalSkills : <div></div>}
        </>
    );
}

export default SkillForm;