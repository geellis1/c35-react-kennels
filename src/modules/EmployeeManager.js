/* You're going to eliminate the possibility of duplicate code by making a module
whose sole responsibility is to interact with the API.*/

const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/employees/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newEmployee) {
    return fetch(`${remoteURL}/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    }).then(data => data.json())
},
getWithAnimals(id) {
  return fetch(`${remoteURL}/employees/${id}?_embed=animals`)
          .then(result => result.json())
}
}