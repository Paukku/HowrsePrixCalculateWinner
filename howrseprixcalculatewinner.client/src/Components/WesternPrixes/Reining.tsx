import SkillForm from '../SkillsFormField';


function ReiningPrix() {
    const labels = {
        skill1: "Gallop",
        skill2: "Dressage",
        skill3: "Stamina",
        skill1_gp: "Gallop GP",
        skil112_gp: "Dressage GP",
        skill3_gp: "Stamina GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        skill1Opponent: "Gallop",
        skill2Opponent: "Dressage",
        skill3Opponent: "Stamina",
        skill1_gpOpponent: "Gallop GP",
        skil112_gpOpponent: "Dressage GP",
        skill3_gpOpponent: "Stamina GP",
        gpOpponent: "GP",
        cloudsOpponent: "Clouds",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default ReiningPrix;