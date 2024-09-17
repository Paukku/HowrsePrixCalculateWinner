import SkillForm from '../SkillsFormField';


function DressagegPrix() {
    const labels = {
        skill1: "Dressage",
        skill2: "Trot",
        skill3: "Gallop",
        skill1_gp: "Dressage GP",
        skill2_gp: "Trot GP",
        skill3_gp: "Gallop GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        skill1Opponent: "Dressage",
        skill2Opponent: "Trot",
        skill3Opponent: "Gallop",
        skill1_gpOpponent: "Dressage GP",
        skill2_gpOpponent: "Trot GP",
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

export default DressagegPrix;