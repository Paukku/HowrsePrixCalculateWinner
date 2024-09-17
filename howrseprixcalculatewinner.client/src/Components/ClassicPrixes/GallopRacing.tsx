import SkillForm from '../SkillsFormField';


function GallopRacingPrix() {
    const labels = {
        skill1: "Gallop",
        skill2: "Speed",
        skill3: "Dressage",
        skill1_gp: "Gallop GP",
        skill2_gp: "Speed GP",
        skill3g_gp: "Dressage GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        skill1Opponent: "Gallop",
        skill2Opponent: "Speed",
        skill3Opponent: "Dressage",
        skill1_gpOpponent: "Gallop GP",
        skill2_gpOpponent: "Speed GP",
        skill3g_gpOpponent: "Dressage GP",
        gpOpponent: "GP",
        cloudsOpponent: "Clouds",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default GallopRacingPrix;