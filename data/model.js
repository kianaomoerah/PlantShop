class Plant {
  constructor(
    id,
    name,
    imageUrl,
    price,
    bio,
    sunInstructions,
    waterInstructions,

  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.bio = bio;
    this.sunInstructions = sunInstructions;
    this.waterInstructions = waterInstructions;
  }
}

export default Plant;