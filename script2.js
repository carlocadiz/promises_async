// Aysc - Await
//promise
movePlayer(100, 'left')
  .then(() => movePlayer(400, 'left'))
  .then(() => movePlayer(10, 'right'))
  .then(() => movePlayer(330, 'left'))

  //Aync - Await
  async function playerStart(){
    const firstMove = await movePlayer(100, 'left');
    await movePlayer(400, 'left');
    await movePlayer(10, 'left');
    await movePlayer(330, 'left');
  }

//Promises
  fetch('https://jsonplaceholder.typecode.com/uesrs')
    .then(resp => resp.json())
    .then(console.log)


// Async - Await
  async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typecode.com/uesrs')
    const data = await response.json();
    console.log(data);
  }


  const urls = [
  'https://jsonplaceholde.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
  ];
//Promise
  Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
  })).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
  }).catch(() => console.log('error detected'))

//Aync - Await
const getData = aysnc function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      return fetch(url).then(response => response.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch (err){
    console.log('oops', err)
  }
}

// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

async function fetchShip() {
  const response = await fetch('https://swapi.co/api/starships/9/')
  const data = await response.json()
  console.log(data);
}


// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
      const response = await fetch(url);
      return response.json();
  }));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'

const getData = async function() {
  try{
  const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
      const response = await fetch(url);
      return response.json();
  }));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
} catch (err){
  console.log('something wrong', err)
}
}


