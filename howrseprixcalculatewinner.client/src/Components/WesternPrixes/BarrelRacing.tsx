import SkillForm from '../SkillsFormField';


function BarrelRacingPrix() {
    const labels = {
        skill1: "Speed",
        skill2: "Stamina",
        skill3: "Gallop",
        skill1_gp: "Speed GP",
        skill2_gp: "Stamina GP",
        skill3_gp: "Gallop GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        skill1Opponent: "Speed",
        skill2Opponent: "Stamina",
        skill3Opponent: "Gallop",
        skill1_gpOpponent: "Speed GP",
        skill2_gpOpponent: "Stamina GP",
        skill3_gpOpponent: "Gallop GP",
        gpOpponent: "GP",
        cloudsOpponent: "Clouds",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default BarrelRacingPrix;