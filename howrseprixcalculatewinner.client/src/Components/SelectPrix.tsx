import { useState } from 'react';

interface SelectPrixProps {
    onSelectChange: (selected: string) => void;
}

function SelectPrix({ onSelectChange }: SelectPrixProps) {
    const [selectedPrix, setSelectedPrix] = useState("");

    const handleRadioChange = (value: string) => {
        setSelectedPrix(value);
        onSelectChange(value);  // Kutsutaan callback-funktiota valinnan muuttuessa
    };

    const options = [
        { id: "option1", label: "Crosscountry" },
        { id: "option2", label: "Showjumping" },
        { id: "option3", label: "Trot racing" },
        { id: "option4", label: "Gallop racing" },
        { id: "option5", label: "Dressage" },
        { id: "option6", label: "Western pleasure" },
        { id: "option7", label: "Reining" },
        { id: "option8", label: "Barrel racing" },
        { id: "option9", label: "Cutting" },
        { id: "option10", label: "Trail" },
    ];

    return (
        <div>
            {options.map((option) => (
                <div key={option.id}>
                    <input
                        type="radio"
                        id={option.id}
                        value={option.label}
                        checked={selectedPrix === option.label}
                        onChange={() => handleRadioChange(option.label)}
                    />
                    <label htmlFor={option.id}>
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default SelectPrix;