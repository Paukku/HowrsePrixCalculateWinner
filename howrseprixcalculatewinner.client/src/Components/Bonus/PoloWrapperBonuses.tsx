import BonusSelector from '../Bonus/BonusSelector';
import { BonusSelectorProps } from "../Bonus/Bonus";
import '../SkillFormFieldStyle.css';



function PoloWrapperBonuses({ selectedBonus, onBonusChange, title, prefix }: BonusSelectorProps) {
    return (
        <BonusSelector
            selectedBonus={selectedBonus}
            onBonusChange={onBonusChange}
            title={title}
            prefix={prefix}
            bonusType="poloWrapperBonuses"
            fetchUrl="bonuscategory/AllBonuses"
        />
    );
}

export default PoloWrapperBonuses;