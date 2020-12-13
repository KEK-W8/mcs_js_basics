class Tiger {
  constructor(name) {
    this.name = name; 
  }
  feedCat() {
    return 'Purrrrrr'
  }
}

class angryTiger extends Tiger {
  throwDart() {
    return 'ZzZzzZzZz'
  }
}

const kisya = new Tiger('Jack')
console.log(kisya)
console.log(kisya.feedCat())

const kot = new angryTiger('Kek')
console.log(kot)
console.log(kot.throwDart())