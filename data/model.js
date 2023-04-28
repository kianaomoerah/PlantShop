class Plant {
  constructor(
    id,
    name,
    image,
    price,
    bio,
    sunInstructions,
    waterInstructions
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.bio = bio;
    this.sunInstructions = sunInstructions;
    this.waterInstructions = waterInstructions;
  }
}

export default Plant;