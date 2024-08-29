import SkillForm from '../SkillsFormField';


function GallopRacingPrix() {
    const labels = {
        skill1: "Gallop",
        skill2: "Speed",
        skill3: "Dressage",
        skill1_gp: "Gallop GP",
        skill2_gp: "Speed GP",
        skill3g_gp: "Dressage GP",
        gp: "GP",
    };

    return (
        <div>
            <SkillForm labels={labels} />
        </div>
    )
}

export default GallopRacingPrix;