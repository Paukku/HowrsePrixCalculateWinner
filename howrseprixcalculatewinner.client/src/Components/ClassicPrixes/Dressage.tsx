import SkillForm from '../SkillsFormField';


function DressagegPrix() {
    const labels = {
        dressage: "Dressage",
        trot: "Trot",
        gallop: "Gallop",
        dressage_gp: "Dressage GP",
        trot_gp: "Trot GP",
        gallop_gp: "Gallop GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        dressageOpponent: "Dressage",
        trotOpponent: "Trot",
        gallopOpponent: "Gallop",
        dressage_gpOpponent: "Dressage GP",
        trot_gpOpponent: "Trot GP",
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

export default DressagegPrix;