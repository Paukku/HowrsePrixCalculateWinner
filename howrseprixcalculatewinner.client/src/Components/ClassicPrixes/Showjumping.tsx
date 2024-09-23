import SkillForm from '../SkillsFormField';


function ShowjumpingPrix() {
    const labels = {
        jumping: "Jumping",
        dressage: "Dressage",
        speed: "Speed",
        jumping_gp: "Jumping GP",
        dressage_gp: "Dressage GP",
        speed_gp: "Speed GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        jumpingOpponent: "Jumping",
        dressageOpponent: "Dressage",
        speedOpponent: "Speed",
        jumping_gpOpponent: "Jumping GP",
        dressage_gpOpponent: "Dressage GP",
        speed_gpOpponent: "Speed GP",
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