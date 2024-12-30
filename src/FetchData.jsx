
const endpoint = `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_danish_api}&number=6`

export async function fetchData () {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw new Error(response.statusText) // Capital 'E' in Error
    }
    const data = await response.json()
    // console.log(data)
    return data // Return data for useLoaderData
  } catch (error) {
    console.error('Error fetching data:', error)
    return { error: error.message } // Return error object
  }
}
