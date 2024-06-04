/*********************
 *      axios        *
 * *******************/
// get
axios('https://jsonplaceholder.typicode.com/posts').then((res) =>
  console.log(res)
)
// post
/*axios('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',body: { name: 'moises', age: 18 },
    headers: { 'Content-type': 'application/json' },
  })
  */
axios
  .post('https://jsonplaceholder.typicode.com/posts', {
    name: 'moises',
    age: 20,
  })
  .then((res) => console.log(res))
