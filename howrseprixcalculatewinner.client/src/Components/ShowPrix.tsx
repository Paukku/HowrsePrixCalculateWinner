import CrossCountryPrix from '../Components/ClassicPrixes/Crosscountry';
import DressagegPrix from '../Components/ClassicPrixes/Dressage';
import GallopRacingPrix from '../Components/ClassicPrixes/GallopRacing';
import ShowjumpingPrix from '../Components/ClassicPrixes/Showjumping';
import TrotRacingPrix from '../Components/ClassicPrixes/TrotRacing';
import BarrelRacingPrix from '../Components/WesternPrixes/BarrelRacing';
import CuttingPrix from '../Components/WesternPrixes/Cutting';
import ReiningPrix from '../Components/WesternPrixes/Reining';
import TrailPrix from '../Components/WesternPrixes/Trail';
import WesternPleasurePrix from '../Components/WesternPrixes/WesternPleasure';

interface ShowPrixProps {
    selectedPrix: string;
}

function ShowPrix({ selectedPrix }: ShowPrixProps) {
    // Lookup table for mapping selectedPrix to corresponding component
    const prixComponents: Record<string, React.ReactNode> = {
        'Crosscountry': <CrossCountryPrix />,
        'Showjumping': <ShowjumpingPrix />,
        'Trot racing': <TrotRacingPrix />,
        'Gallop racing': <GallopRacingPrix />,
        'Dressage': <DressagegPrix />,
        'Barrel racing': <BarrelRacingPrix />,
        'Cutting': <CuttingPrix />,
        'Reining': <ReiningPrix />,
        'Western pleasure': <WesternPleasurePrix />,
        'Trail': <TrailPrix />,
    };

    // Get the component based on selectedPrix or return a fallback
    const SelectedComponent = prixComponents[selectedPrix] || <div></div>;



    return (
        <div>
            <h2>Selected Prix:</h2>
            {selectedPrix}
            {SelectedComponent}
        </div>
    );
}

export default ShowPrix;