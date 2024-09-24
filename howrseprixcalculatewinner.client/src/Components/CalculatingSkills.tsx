import { Bonus } from '../Components/Bonus/CustomBonus';

// Helper function for adding bonuses.
const applyBonus = (bonus: Bonus | null, companionBonus: Bonus | null, sortedSkills: [string, number][], skillSet: { first: number, second: number, third: number }) => {
    if (!bonus && !companionBonus) return;

    for (const key in bonus) {
        if (bonus.hasOwnProperty(key)) {
            const bonusValue = bonus[key as keyof Bonus];
            if (typeof bonusValue === 'number') {
                const skillIndex = sortedSkills.findIndex(([skillKey]) => skillKey === key);
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

    for (const key in companionBonus) {
        if (companionBonus.hasOwnProperty(key)) {
            const bonusValue = companionBonus[key as keyof Bonus];
            if (typeof bonusValue === 'number') {
                const skillIndex = sortedSkills.findIndex(([skillKey]) => skillKey === key);
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

export function CalculateSkills(
    event: React.FormEvent<HTMLFormElement>,
    myHorse: { [key: string]: number },
    userBonus: Bonus | null,
    userCompanionBonus: Bonus | null,
    opponentBonus: Bonus | null,
    opponentCompanionBonus: Bonus | null,
    ) {

    event.preventDefault(); // Prevents the page from refreshing
    console.log(userCompanionBonus)
    console.log(opponentCompanionBonus)

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

    applyBonus(userBonus, userCompanionBonus, sortedSkills, myHorseSkills);
    applyBonus(opponentBonus, opponentCompanionBonus, sortedSkills, opponentHorseSkills);

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