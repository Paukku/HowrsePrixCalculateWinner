import SkillForm from '../SkillsFormField';


function BarrelRacingPrix() {
    const labels = {
        speed: "Speed",
        stamina: "Stamina",
        gallop: "Gallop",
        speed_gp: "Speed GP",
        stamina_gp: "Stamina GP",
        gallop_gp: "Gallop GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        speedOpponent: "Speed",
        staminaOpponent: "Stamina",
        gallopOpponent: "Gallop",
        speed_gpOpponent: "Speed GP",
        stamina_gpOpponent: "Stamina GP",
        gallop_gpOpponent: "Gallop GP",
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