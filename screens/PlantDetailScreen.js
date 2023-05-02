import { PLANTS } from '../data/plant-data';
import PlantDetails from '../components/PlantDetails';


function PlantDetailScreen({ route, navigation}) {

  const plantId = route.params.plantId; 
  const selectedPlant = PLANTS.find((plant) => plant.id === plantId);



    // useLayoutEffect(() => [
  //   navigation.setOptions({
  //     headerRight: () => {
  //       return (
  //         <IconButton 
  //           icon={'cart'}
  //           color={'#5CA904'}
  //         />
  //       )
  //     }
  //   })
  // ])

  return <PlantDetails selectedPlant={selectedPlant} />

    // todo: header will feature cart icon (lead to cart page) and back button, and name of plant as title
    // add details component that this screen will render
}

export default PlantDetailScreen;