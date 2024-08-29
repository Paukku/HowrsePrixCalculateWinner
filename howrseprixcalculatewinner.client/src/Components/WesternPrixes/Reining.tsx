import SkillForm from '../SkillsFormField';


function ReiningPrix() {
    const labels = {
        skill1: "Gallop",
        skill2: "Dressage",
        skill3: "Stamina",
        skill1_gp: "Gallop GP",
        skil112_gp: "Dressage GP",
        skill3_gp: "Stamina GP",
        gp: "GP",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default ReiningPrix;