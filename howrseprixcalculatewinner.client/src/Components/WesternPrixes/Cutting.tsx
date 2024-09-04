import SkillForm from '../SkillsFormField';


function CuttingPrix() {
    const labels = {
        skill1: "Stamina",
        skill2: "Dressage",
        skill3: "Speed",
        skill1_gp: "Stamina GP",
        skill2_gp: "Dressage GP",
        skill3_gp: "Speed GP",
        gp: "GP",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default CuttingPrix;