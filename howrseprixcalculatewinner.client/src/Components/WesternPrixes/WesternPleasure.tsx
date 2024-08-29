import SkillForm from '../SkillsFormField';


function WesternPleasurePrix() {
    const labels = {
        skill1: "Trot",
        skill2: "Stamina",
        skill3: "Dressage",
        skill1_gp: "Trot GP",
        skill2_gp: "Stamina GP",
        skill3_gp: "Dressage GP",
        gp: "GP",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default WesternPleasurePrix;