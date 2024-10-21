import { Bonus } from './Bonus/Bonus';

// Helper function for adding bonuses.
const applyBonus = (
    bonus: {
        customization: Bonus | null;
        companion: Bonus | null;
        saddle: Bonus | null;
        saddleCloth: Bonus | null;
        bridle: Bonus | null;
        earBonnet: Bonus | null;
        horseShoes: Bonus | null;
        pack: Bonus | null;
        poloWrapper: Bonus | null;
        styling: Bonus[];
    },
    sortedSkills: [string, number][],
    skillSet: { first: number; second: number; third: number }
) => {

    if (!bonus) return;

    // Helper function to apply bonus values to the skillSet
    const applyBonusToSkills = (bonusObject: Bonus) => {
        for (const key in bonusObject) {
            if (bonusObject.hasOwnProperty(key)) {
                const bonusValue = bonusObject[key as keyof Bonus];

                // Ensure the bonus value is a number
                if (typeof bonusValue === 'number') {
                    // Find the skill in the sortedSkills array
                    const skillIndex = sortedSkills.findIndex(([skillKey]) => skillKey === key);

                    // Apply the bonus to the corresponding skill in skillSet
                    if (skillIndex === 0) {
                        skillSet.first += bonusValue;
                    } else if (skillIndex === 1) {
                        skillSet.second += bonusValue;
                    } else if (skillIndex === 2) {
                        skillSet.third += bonusValue;
                    }
                }
            }
        }
    };

    // Loop through each bonus category (customization, companion, extra)
    for (const bonusCategory in bonus) {
        if (bonus.hasOwnProperty(bonusCategory)) {
            const bonusObject = bonus[bonusCategory as keyof typeof bonus];

            // Check if it's an array (styling), apply bonuses individually
            if (Array.isArray(bonusObject)) {
                bonusObject.forEach(stylingBonus => applyBonusToSkills(stylingBonus));
            } else if (bonusObject) {
                // Apply the individual bonus (customization, companion, extra)
                applyBonusToSkills(bonusObject as Bonus);
            }
        }
    }
};

export function CalculateSkills(
    event: React.FormEvent<HTMLFormElement>,
    myHorse: { [key: string]: number },
    userBonus: {
        customization: Bonus | null;
        companion: Bonus | null;
        saddle: Bonus | null;
        saddleCloth: Bonus | null;
        bridle: Bonus | null;
        earBonnet: Bonus | null;
        horseShoes: Bonus | null;
        pack: Bonus | null;
        poloWrapper: Bonus | null;
        styling: Bonus[];
    },
    opponentBonus: {
        customization: Bonus | null;
        companion: Bonus | null;
        saddle: Bonus | null;
        saddleCloth: Bonus | null;
        bridle: Bonus | null;
        earBonnet: Bonus | null;
        horseShoes: Bonus | null;
        pack: Bonus | null;
        poloWrapper: Bonus | null;
        styling: Bonus[];
    },
    
    ) {

    event.preventDefault(); // Prevents the page from refreshing
    console.log(userBonus)
    console.log(opponentBonus)

    if (!myHorse) return 0;

    const sortedSkills = Object.entries(myHorse)

    let myHorseFirstSkill = sortedSkills[0][1] + 10 + (sortedSkills[3][1] / 5 * 2) + (sortedSkills[3][1] / 5 * 3) + 69.25 + sortedSkills[7][1] + (sortedSkills[6][1] * 0.025);
    let myHorseSecondSkill = sortedSkills[1][1] + 10 + (sortedSkills[4][1] / 5 * 2) + (sortedSkills[4][1] / 5 * 3) + 69.25 + sortedSkills[7][1];
    let myHorseThirdSkill = sortedSkills[2][1] + 10 + (sortedSkills[5][1] / 5 * 2) + (sortedSkills[5][1] / 5 * 3);


    let opponentHorseFirstSkill = sortedSkills[8][1] + 10 + (sortedSkills[11][1] / 5 * 2) + (sortedSkills[11][1] / 5 * 3) + 69.25 + sortedSkills[15][1] + (sortedSkills[14][1] * 0.025)
    let opponentHorseSecondSkill =  sortedSkills[9][1] + 10 + (sortedSkills[12][1] / 5 * 2) + (sortedSkills[12][1] / 5 * 3) + 69.25 + sortedSkills[15][1]
    let opponentHorseThirdSkill =  sortedSkills[10][1] + 10 + (sortedSkills[13][1] / 5 * 2) + (sortedSkills[13][1] / 5 * 3)


    //Add bonuses
    let myHorseSkills = {
        first: myHorseFirstSkill,
        second: myHorseSecondSkill,
        third: myHorseThirdSkill,
    };

    let opponentHorseSkills = {
        first: opponentHorseFirstSkill,
        second: opponentHorseSecondSkill,
        third: opponentHorseThirdSkill,
    };

    applyBonus(userBonus, sortedSkills, myHorseSkills);
    applyBonus(opponentBonus, sortedSkills, opponentHorseSkills);

    myHorseFirstSkill = myHorseSkills.first;
    myHorseSecondSkill = myHorseSkills.second;
    myHorseThirdSkill = myHorseSkills.third;

    opponentHorseFirstSkill = opponentHorseSkills.first;
    opponentHorseSecondSkill = opponentHorseSkills.second;
    opponentHorseThirdSkill = opponentHorseSkills.third;


    const myHorseTotalSkills = myHorseFirstSkill * 0.45 + myHorseSecondSkill * 0.3 + myHorseThirdSkill * 0.25;
    const opponentHorseTotalSkills = opponentHorseFirstSkill * 0.45 + opponentHorseSecondSkill * 0.3 + opponentHorseThirdSkill * 0.25;

    console.log(`Final total skills for my horse: ${myHorseTotalSkills}`);
    console.log(`Final total skills for opponent's horse: ${opponentHorseTotalSkills}`);

    const totalSkills = myHorseTotalSkills - opponentHorseTotalSkills

    return totalSkills

    
    
}