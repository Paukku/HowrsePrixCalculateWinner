import SkillForm from '../SkillsFormField';


function GallopRacingPrix() {
    const labels = {
        gallop: "Gallop",
        speed: "Speed",
        dressage: "Dressage",
        gallop_gp: "Gallop GP",
        speed_gp: "Speed GP",
        dressage_gp: "Dressage GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        gallopOpponent: "Gallop",
        speedOpponent: "Speed",
        dressageOpponent: "Dressage",
        gallop_gpOpponent: "Gallop GP",
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

export default GallopRacingPrix;