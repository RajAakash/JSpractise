function Human(gene, species) {
  this.gene = gene
  this.species = species
}
function Person(gene, species) {
  Human.call(this, gene, species)
  this.name = 'Ram'
}

const ram1 = new Person('Homo', 'Sapiens')
console.log(ram1.gene, ram1.species, ram1.name)
