import SkillForm from '../SkillsFormField';


function TrailPrix() {
    const labels = {
        skill1: "Dressage",
        skill2: "Trot",
        skill3: "Jumping",
        skill1_gp: "Dressage GP",
        skill2_gp: "Trot GP",
        skill3_gp: "Jumping GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        skill1Opponent: "Dressage",
        skill2Opponent: "Trot",
        skill3Opponent: "Jumping",
        skill1_gpOpponent: "Dressage GP",
        skill2_gpOpponent: "Trot GP",
        skill3_gpOpponent: "Jumping GP",
        gpOpponent: "GP",
        cloudsOpponent: "Clouds",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default TrailPrix;