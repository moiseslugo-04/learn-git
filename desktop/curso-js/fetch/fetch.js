/*********************
 *      Fetch        *
 * *******************/
// GET
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    if (res.status !== 200) return
    return res.json()
  })
  .then((data) => console.log(data))
// POST
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({ name: 'moises', age: 18 }),
  headers: { 'Content-type': 'application/json' },
})
  .then((res) => res.json())
  .then((data) => console.log(data))
