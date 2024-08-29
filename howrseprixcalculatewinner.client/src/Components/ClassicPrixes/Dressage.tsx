import SkillForm from '../SkillsFormField';


function DressagegPrix() {
    const labels = {
        skill1: "Dressage",
        skill2: "Trot",
        skill3: "Gallop",
        skill1_gp: "Dressage GP",
        skill2_gp: "Trot GP",
        skill3_gp: "Gallop GP",
        gp: "GP",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default DressagegPrix;