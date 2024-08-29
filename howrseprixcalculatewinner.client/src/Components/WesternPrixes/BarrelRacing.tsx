import SkillForm from '../SkillsFormField';


function BarrelRacingPrix() {
    const labels = {
        skill1: "Speed",
        skill2: "Stamina",
        skill3: "Gallop",
        skill1_gp: "Speed GP",
        skill2_gp: "Stamina GP",
        skill3_gp: "Gallop GP",
        gp: "GP",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default BarrelRacingPrix;