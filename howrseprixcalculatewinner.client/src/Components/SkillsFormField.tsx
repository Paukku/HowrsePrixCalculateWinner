import React, { useState } from 'react';
import { CalculateSkills } from './CalculatingSkills';

interface SkillFormProps {
    labels: { [key: string]: string }; // Määrittele dynaamiset labelit
}

function SkillForm({ labels }: SkillFormProps) {
    const initialSkills = Object.keys(labels).reduce((acc, key) => {
        acc[key] = 0;
        return acc;
    }, {} as { [key: string]: number });

    const [skills, setSkills] = useState(initialSkills);

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = parseFloat(event.target.value);
        setSkills((prevSkills) => ({
            ...prevSkills,
            [field]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        CalculateSkills(event, skills);
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(labels).map((key) => (
                <div key={key}>
                    <label>
                        {labels[key]}:
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={skills[key]}
                            onChange={(e) => handleSkillChange(e, key)}
                        />
                    </label>
                    <br />
                </div>
            ))}
            <button type="submit">Calculate</button>
        </form>
    );
}

export default SkillForm;