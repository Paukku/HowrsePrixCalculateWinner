import BonusSelector from './BonusSelector';
import { BonusSelectorProps } from "./Bonus";
import '../SkillFormFieldStyle.css';



function BridleBonuses({ selectedBonus, onBonusChange, title, prefix }: BonusSelectorProps) {
    return (
        <BonusSelector
            selectedBonus={selectedBonus}
            onBonusChange={onBonusChange}
            title={title}
            prefix={prefix}
            bonusType="bridleBonuses"
            fetchUrl="bonuscategory/AllBonuses"
        />
    );
}

export default BridleBonuses;