export function CalculateSkills(event: React.FormEvent<HTMLFormElement>, myHorse: { [key: string]: number }) {
    event.preventDefault(); // Est‰‰ sivun p‰ivityksen
    if (myHorse) {
        const sortedSkills = Object.entries(myHorse)
        console.log(sortedSkills);



        const myHorseTotalSkills = sortedSkills[0][1] + 10 + (sortedSkills[3][1] / 5 * 2) + (sortedSkills[3][1] / 5 * 3) + 69.25 + sortedSkills[7][1] + (sortedSkills[6][1] * 0.025)
            + sortedSkills[1][1] + 10 + (sortedSkills[4][1] / 5 * 2) + (sortedSkills[4][1] / 5 * 3) + 69.25 + sortedSkills[7][1] 
            + sortedSkills[2][1] + 10 + (sortedSkills[5][1] / 5 * 2) + (sortedSkills[5][1] / 5 * 3)

        console.log(myHorseTotalSkills)

        const opponentHorseTotalSkills = sortedSkills[8][1] + 10 + (sortedSkills[11][1] / 5 * 2) + (sortedSkills[11][1] / 5 * 3) + 69.25 + sortedSkills[15][1] + (sortedSkills[14][1] * 0.025)
            + sortedSkills[9][1] + 10 + (sortedSkills[12][1] / 5 * 2) + (sortedSkills[12][1] / 5 * 3) + 69.25 + sortedSkills[15][1]
            + sortedSkills[10][1] + 10 + (sortedSkills[13][1] / 5 * 2) + (sortedSkills[13][1] / 5 * 3)

        console.log(opponentHorseTotalSkills)

        const totalSkills = myHorseTotalSkills - opponentHorseTotalSkills

        return totalSkills

    }
    
}