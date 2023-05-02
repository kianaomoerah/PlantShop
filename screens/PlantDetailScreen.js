import { PLANTS } from '../data/plant-data';
import PlantDetails from '../components/PlantDetails';


function PlantDetailScreen({ route }) {

  const plantId = route.params.plantId; 
  const selectedPlant = PLANTS.find((plant) => plant.id === plantId);

  return <PlantDetails selectedPlant={selectedPlant} />

}

export default PlantDetailScreen;