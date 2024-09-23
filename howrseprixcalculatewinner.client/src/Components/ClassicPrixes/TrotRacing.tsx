import SkillForm from '../SkillsFormField';


function TrotRacingPrix() {
    const labels = {
        trot: "Trot",
        speed: "Speed",
        dressage: "Dressage",
        trot_gp: "Trot GP",
        speed_gp: "Speed GP",
        dressage_gp: "Dressage GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        trotOpponent: "Trot",
        speedOpponent: "Speed",
        dressageOpponent: "Dressage",
        trot_gpOpponent: "Trot GP",
        speed_gpOpponent: "Speed GP",
        dressage_gpOpponent: "Dressage GP",
        gpOpponent: "GP",
        cloudsOpponent: "Clouds",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default TrotRacingPrix;
