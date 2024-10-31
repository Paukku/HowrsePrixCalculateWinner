import SkillForm from '../SkillsFormField';


function CuttingPrix() {
    const labels = {
        stamina: "Stamina",
        dressage: "Dressage",
        speed: "Speed",
        stamina_gp: "Stamina GP",
        dressage_gp: "Dressage GP",
        speed_gp: "Speed GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        staminaOpponent: "Stamina",
        dressageOpponent: "Dressage",
        speedOpponent: "Speed",
        stamina_gpOpponent: "Stamina GP",
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

export default CuttingPrix;