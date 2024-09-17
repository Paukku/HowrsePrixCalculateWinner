import SkillForm from '../SkillsFormField';


function CuttingPrix() {
    const labels = {
        skill1: "Stamina",
        skill2: "Dressage",
        skill3: "Speed",
        skill1_gp: "Stamina GP",
        skill2_gp: "Dressage GP",
        skill3_gp: "Speed GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        skill1Opponent: "Stamina",
        skill2Opponent: "Dressage",
        skill3Opponent: "Speed",
        skill1_gpOpponent: "Stamina GP",
        skill2_gpOpponent: "Dressage GP",
        skill3_gpOpponent: "Speed GP",
        gpOpponent: "GP",
        cloudsOpponent: "Clouds",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default CuttingPrix;