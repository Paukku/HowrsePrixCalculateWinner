import SkillForm from '../SkillsFormField';


function WesternPleasurePrix() {
    const labels = {
        trot: "Trot",
        stamina: "Stamina",
        dressage: "Dressage",
        trot_gp: "Trot GP",
        stamina_gp: "Stamina GP",
        dressage_gp: "Dressage GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        trotOpponent: "Trot",
        staminaOpponent: "Stamina",
        dressageOpponent: "Dressage",
        trot_gpOpponent: "Trot GP",
        stamina_gpOpponent: "Stamina GP",
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

export default WesternPleasurePrix;