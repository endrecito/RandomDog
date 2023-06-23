//Random dog generator

const randomDog = () =>{
dogBreed = ["Brother Crollie", "German Shepherd", "Chihuahua", "Mutt", "Border Collie", "Dalmatian", "akita", "Bulldog","Beagle", "Bernese", "Boxer", "Golden Retreiever", "Dachshund", "Labrador", "Samoyed","Husky" ]
return dogBreed[Math.floor(Math.random() * dogBreed.length)]
}
const dogWeight = () => Math.floor(Math.random() * 60)

const randomPersonality = () => {
dogPersonality = ["crazy", "energetic", "relaxed", "calm", "anxious", "sleepy" ]
return dogPersonality[Math.floor(Math.random() * dogPersonality.length)]
}

console.log("You have rescued a dog.")
console.log('By the looks of it it seems to be a ' + randomDog() + ".")
console.log("He or she weighs about " + dogWeight() + "kg.")
console.log("he or she is acting a bit " + randomPersonality()+".")