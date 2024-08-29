import SkillForm from '../SkillsFormField';


function ShowjumpingPrix() {
    const labels = {
        skill1: "Jumping",
        skill2: "Dressage",
        skill3: "Speed",
        skill1_gp: "Jumping GP",
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

export default ShowjumpingPrix;