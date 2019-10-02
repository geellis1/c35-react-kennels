/* You're going to eliminate the possibility of duplicate code by making a module
whose sole responsibility is to interact with the API.*/

const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/locations/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newLocation) {
    return fetch(`${remoteURL}/locations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLocation)
    }).then(data => data.json())
}
}