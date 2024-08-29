import SkillForm from '../SkillsFormField';


function CrossCountryPrix() {
    const labels = {
        skill1: "Stamina",
        skill2: "Dressage",
        skill3: "Jumping",
        skill1_gp: "Stamina GP",
        skill2_gp: "Dressage GP",
        skill3_gp: "Jumping GP",
        gp: "GP",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default CrossCountryPrix;
