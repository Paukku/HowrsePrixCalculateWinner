import SkillForm from '../SkillsFormField';


function CrossCountryPrix() {
    const labels = {
        stamina: "Stamina",
        dressage: "Dressage",
        jumping: "Jumping",
        stamina_gp: "Stamina GP",
        dressage_gp: "Dressage GP",
        jumping_gp: "Jumping GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        staminaOpponent: "Stamina",
        dressageOpponent: "Dressage",
        jumpingOpponent: "Jumping",
        stamina_gpOpponent: "Stamina GP",
        dressage_gpOpponent: "Dressage GP",
        jumping_gpOpponent: "Jumping GP",
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
