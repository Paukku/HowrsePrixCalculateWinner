import SkillForm from '../SkillsFormField';


function ReiningPrix() {
    const labels = {
        gallop: "Gallop",
        dressage: "Dressage",
        stamina: "Stamina",
        gallop_gp: "Gallop GP",
        dressage_gp: "Dressage GP",
        stamina_gp: "Stamina GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        gallopOpponent: "Gallop",
        dressageOpponent: "Dressage",
        staminaOpponent: "Stamina",
        gallop_gpOpponent: "Gallop GP",
        dressage_gpOpponent: "Dressage GP",
        stamina_gpOpponent: "Stamina GP",
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