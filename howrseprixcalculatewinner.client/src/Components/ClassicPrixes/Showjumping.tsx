import SkillForm from '../SkillsFormField';


function ShowjumpingPrix() {
    const labels = {
        skill1: "Jumping",
        skill2: "Dressage",
        skill3: "Speed",
        skill1_gp: "Jumping GP",
        skill2_gp: "Dressage GP",
        skill3_gp: "Speed GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        skill1Opponent: "Jumping",
        skill2Opponent: "Dressage",
        skill3Opponent: "Speed",
        skill1_gpOpponent: "Jumping GP",
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

export default ShowjumpingPrix;