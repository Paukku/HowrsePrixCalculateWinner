export function CalculateSkills(event: React.FormEvent<HTMLFormElement>, myHorse: { [key: string]: number }) {
    event.preventDefault(); // Estää sivun päivityksen
    console.log(myHorse)
    if (myHorse) {
        const sortedSkills = Object.entries(myHorse)
            .sort(([, a], [, b]) => b - a);

        console.log(sortedSkills);



        const totalSkills = sortedSkills[1][1] + 10 + (sortedSkills[1][1] / 5 * 2) + (sortedSkills[1][1] / 5 * 3) + 69.25 + (sortedSkills[0][1] * 0.025)
            + sortedSkills[2][1] + 10 + (sortedSkills[2][1] / 5 * 2) + (sortedSkills[2][1] / 5 * 3) + 69.25
            + sortedSkills[3][1] + 10 + (sortedSkills[3][1] / 5 * 2) + (sortedSkills[3][1] / 5 * 3)
        console.log(totalSkills)
    }

}