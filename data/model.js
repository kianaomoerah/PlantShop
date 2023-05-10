class Plant {
  constructor(
    id,
    name,
    image,
    price,
    bio,
    sunInstructions,
    waterInstructions,
    petFriendly = false
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.bio = bio;
    this.sunInstructions = sunInstructions;
    this.waterInstructions = waterInstructions;
    this.petFriendly = petFriendly;
  }
}

export default Plant;