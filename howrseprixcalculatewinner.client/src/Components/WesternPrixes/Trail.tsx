import SkillForm from '../SkillsFormField';


function TrailPrix() {
    const labels = {
        skill1: "Dressage",
        skill2: "Trot",
        skill3: "Jumping",
        skill1_gp: "Dressage GP",
        skill2_gp: "Trot GP",
        skill3_gp: "Jumping GP",
        gp: "GP",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default TrailPrix;