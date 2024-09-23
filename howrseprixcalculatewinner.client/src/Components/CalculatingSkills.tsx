import { Bonus } from '../Components/Bonus/CustomBonus';

export function CalculateSkills(
    event: React.FormEvent<HTMLFormElement>,
    myHorse: { [key: string]: number },
    userBonus: Bonus | null,
    opponentBonus: Bonus | null
    ) {

    event.preventDefault(); // Estää sivun päivityksen

    console.log(userBonus);
    console.log(opponentBonus);

    if (!myHorse) return 0;

    const sortedSkills = Object.entries(myHorse)
    console.log(sortedSkills);

    let myHorseTotalSkills = sortedSkills[0][1] + 10 + (sortedSkills[3][1] / 5 * 2) + (sortedSkills[3][1] / 5 * 3) + 69.25 + sortedSkills[7][1] + (sortedSkills[6][1] * 0.025)
        + sortedSkills[1][1] + 10 + (sortedSkills[4][1] / 5 * 2) + (sortedSkills[4][1] / 5 * 3) + 69.25 + sortedSkills[7][1] 
        + sortedSkills[2][1] + 10 + (sortedSkills[5][1] / 5 * 2) + (sortedSkills[5][1] / 5 * 3)

    console.log(myHorseTotalSkills)

    let opponentHorseTotalSkills = sortedSkills[8][1] + 10 + (sortedSkills[11][1] / 5 * 2) + (sortedSkills[11][1] / 5 * 3) + 69.25 + sortedSkills[15][1] + (sortedSkills[14][1] * 0.025)
        + sortedSkills[9][1] + 10 + (sortedSkills[12][1] / 5 * 2) + (sortedSkills[12][1] / 5 * 3) + 69.25 + sortedSkills[15][1]
        + sortedSkills[10][1] + 10 + (sortedSkills[13][1] / 5 * 2) + (sortedSkills[13][1] / 5 * 3)

    console.log(opponentHorseTotalSkills)

    //Add bonuses
    for (const key in userBonus) {
        if (userBonus.hasOwnProperty(key)) {
            const hasSkill = sortedSkills.find(([skillKey, _]) => skillKey === key && !key.includes('opponent'));

            if (hasSkill) {
                console.log(`Array contains ${key} for my horse`);
                const bonusValue = userBonus[key as keyof Bonus];

                if (typeof bonusValue === 'number') {
                    myHorseTotalSkills += bonusValue;
                    console.log(`${key} updated value: ${bonusValue}`);
                }
            }
        }
    }

    for (const key in opponentBonus) {
        if (opponentBonus.hasOwnProperty(key)) {
            const hasOpponentSkill = sortedSkills.find(([skillKey, _]) => skillKey === key );

            if (hasOpponentSkill) {
                console.log(`Array contains ${key} for opponent's horse`);
                const opponentBonusValue = opponentBonus[key as keyof Bonus];

                if (typeof opponentBonusValue === 'number') {
                    opponentHorseTotalSkills += opponentBonusValue;
                    console.log(`${key} updated value for opponent: ${opponentBonusValue}`);
                }
            }
        }
    }

    console.log(`Final total skills for my horse: ${myHorseTotalSkills}`);
    console.log(`Final total skills for opponent's horse: ${opponentHorseTotalSkills}`);

    const totalSkills = myHorseTotalSkills - opponentHorseTotalSkills

    return totalSkills

    
    
}