class Person {
  constructor(name, instagram) {
    this.name = name
    this.instagram = instagram
  }
}
const data = [
  ['moises', 'moiseslugo@gmail.com'],
  ['lucas', 'lucaslugo@gmail.com'],
  ['ramon', 'ramonlugo@gmail.com'],
  ['cbum', 'cbumlugo@gmail.com'],
  ['pepe'],
]
const persons = data.map((person) => new Person(person[0], person[1]))
/**************************
 *       callback         *
 * ************************/

function getInfo(id = undefined, callback) {
  if (persons[id] == undefined) {
    callback('there is not found the user')
  } else {
    callback(null, persons[id])
  }
}
getInfo(4, (err, user) => {
  if (err) {
    console.log(err)
  } else {
    const { name, instagram } = user
    console.log(
      `name: ${name ?? 'undefine'},instagram: ${instagram ?? 'undefine'}`
    )
  }
})
/**************************
 *      promises        *
 * ************************/

function getPersonP(id = undefined) {
  const promise = new Promise((resolve, reject) => {
    persons[id] == undefined
      ? reject('there is not found the user')
      : resolve(persons[id])
  })
  return promise
}
const promise = getPersonP()
promise.then((user) => console.log(user)).catch((err) => console.log(err))

/**************************
 *      async await        *
 * ************************/

const info = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(text), Math.random() * 200)
  })
}

async function getInfoAsync() {
  const data1 = await info('one')
  const data2 = await info('two')
  const data3 = await info('three')
  console.log(data1)
  console.log(data2)
  console.log(data3)
}
getInfoAsync()
