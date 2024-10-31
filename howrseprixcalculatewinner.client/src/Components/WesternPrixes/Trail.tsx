import SkillForm from '../SkillsFormField';


function TrailPrix() {
    const labels = {
        dressage: "Dressage",
        trot: "Trot",
        jumping: "Jumping",
        dressage_gp: "Dressage GP",
        trot_gp: "Trot GP",
        jumping_gp: "Jumping GP",
        gp: "GP",
        cloudsMyHorse: "Clouds",
        dressageOpponent: "Dressage",
        trotOpponent: "Trot",
        jumpingOpponent: "Jumping",
        dressage_gpOpponent: "Dressage GP",
        trot_gpOpponent: "Trot GP",
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

export default TrailPrix;