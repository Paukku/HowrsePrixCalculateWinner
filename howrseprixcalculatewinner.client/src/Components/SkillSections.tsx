import React, { useEffect, useState } from "react";
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

interface SkillSectionProps {
    labels: string[] ;
    clouds: string[] ;
    bonuses: BonusState;
    setBonuses: React.Dispatch<React.SetStateAction<BonusState>>;
    allowedCustomBonusesForStyling: string[];
    titlePrefix: string;
}

interface BonusState {
    customization: Bonus;
    styling: Bonus[];
    companion: Bonus;
    extra: Bonus;
}



const SkillSections: React.FC<SkillSectionProps> = ({
    labels,
    clouds,
    bonuses,
    setBonuses,
    allowedCustomBonusesForStyling,
    titlePrefix
}) => {
    const initialSkills = Object.keys(labels).reduce((acc, key) => {
        acc[key] = 0;
        return acc;
    }, {} as { [key: string]: number });

    const [skills, setSkills] = useState(initialSkills);
    const isStylingEnabled = allowedCustomBonusesForStyling.includes(bonuses.customization?.name ?? "");

    // Clear styling bonuses when a non-allowed custom bonus is selected
    useEffect(() => {
        if (!isStylingEnabled && bonuses.styling.length > 0) {
            setBonuses((prevBonuses) => ({
                ...prevBonuses,  // Spread the previous state to maintain customization and companion
                styling: []      // Only update the styling bonuses
            }));
        }
    }, [isStylingEnabled, bonuses.styling.length]);

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = event.target.value === '' ? 0 : parseFloat(event.target.value);
        setSkills((prevSkills) => ({
            ...prevSkills,
            [field]: value,
        }));
    };

    const renderFields = (keys: string[]) => (

        keys.map((key) => (
            <div key={key}>
                <label>
                    {labels[key]}:  {/* Use labels object to get the display name */}
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
        <div className="skill-sections">
            <div className="skill-column">
                <h3>{titlePrefix} Horse</h3>
                {renderFields(labels)}
                {renderFields(clouds)}

                {/* Custom Bonus Selection */}
                <CustomBonuses
                    selectedBonus={bonuses.customization}
                    onBonusChange={(bonus: Bonus) => setBonuses({ ...bonuses, customization: bonus })}
                    title={`${titlePrefix}HorseCustomizationBonus`}
                    prefix={titlePrefix.toLowerCase()}
                />

                {/* Styling Bonuses - Enabled/Disabled based on customization */}
                <div className={`styling-bonuses-wrapper ${!isStylingEnabled ? "disabled-section" : ""}`}>
                    <StylingBonuses
                        selectedBonuses={bonuses.styling}
                        onBonusesChange={(newStylingBonuses: Bonus[]) => setBonuses((prevBonuses) => ({
                            ...prevBonuses, // Spread the previous state to maintain other fields (customization, companion)
                            styling: newStylingBonuses // Only update the styling bonuses
                        }))}
                        title={`${titlePrefix}HorseStylingBonus`}
                        prefix={titlePrefix.toLowerCase()}
                        disabled={!isStylingEnabled}
                    />
                </div>

                {/* Companion Bonuses */}
                <CompanionBonuses
                    selectedBonus={bonuses.companion}
                    onBonusChange={(bonus: Bonus) => setBonuses({ ...bonuses, companion: bonus })}
                    title={`${titlePrefix}HorseCompanionBonus`}
                    prefix={titlePrefix.toLowerCase()}
                />
            </div>
        </div>
    );
};

export default SkillSections;