import SkillForm from '../SkillsFormField';


function CrossCountryPrix() {
    const labels = {
        skill1: "Stamina",
        skill2: "Dressage",
        skill3: "Jumping",
        skill1_gp: "Stamina GP",
        skill2_gp: "Dressage GP",
        skill3_gp: "Jumping GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        skill1Opponent: "Stamina",
        skill2Opponent: "Dressage",
        skill3Opponent: "Jumping",
        skill1_gpOpponent: "Stamina GP",
        skill2_gpOpponent: "Dressage GP",
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

export default CrossCountryPrix;
