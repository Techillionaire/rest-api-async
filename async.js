async function fetchData(){
    try {
         // Async operations go here 
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    console.log(data)
    return data
    } catch (error) {
        throw new Error("Error fetching data: " + error)
    }
   
}

fetchData();

// const fetchSomething = async () => {
//     // Async operations go here
//     const someThing = await fetch("https://jsonplaceholder.typicode.com/todos")
// }

