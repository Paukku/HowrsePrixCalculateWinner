import SkillForm from '../SkillsFormField';


function TrotRacingPrix() {
    const labels = {
        skill1: "Trot",
        skill2: "Speed",
        skill3: "Dressage",
        skill1_gp: "Trot GP",
        skill2_gp: "Speed GP",
        skill3_gp: "Dressage GP",
        gp: "GP",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default TrotRacingPrix;
