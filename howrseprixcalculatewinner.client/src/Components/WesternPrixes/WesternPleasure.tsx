import SkillForm from '../SkillsFormField';


function WesternPleasurePrix() {
    const labels = {
        skill1: "Trot",
        skill2: "Stamina",
        skill3: "Dressage",
        skill1_gp: "Trot GP",
        skill2_gp: "Stamina GP",
        skill3_gp: "Dressage GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        skill1Opponent: "Trot",
        skill2Opponent: "Stamina",
        skill3Opponent: "Dressage",
        skill1_gpOpponent: "Trot GP",
        skill2_gpOpponent: "Stamina GP",
        skill3_gpOpponent: "Dressage GP",
        gpOpponent: "GP",
        cloudsOpponent: "Clouds",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default WesternPleasurePrix;