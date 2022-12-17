// Mostrar todos los usuarios
function getUsers() {
    fetch("http://localhost:9000/api/users")
        .then(response => response.json())
        .then(data => console.log(data))
}

// Mostrar un usuario por ID
function getUserbyId(id) {

    fetch(`http://localhost:9000/api/users/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))

}

// Muestra todos 
getUsers();

// Muestra solo uno ( por ID)
getUserbyId("639d040d72a5b80b8f025f94");