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

const jack = new Tiger('Jack')
console.log(jack)
console.log(jack.feedCat())

const kek = new angryTiger('Kek')
console.log(kek)
console.log(kek.throwDart())