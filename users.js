const cars = [
    {
        id: 1,
        name: 'Renault',
        modelo: 'Sandero',
        año: 2017,
        color: 'Rojo',
        gama: 'Full Equipament',
        precio: '$40.000.000'
    },
    {
        id: 2,
        name: 'Chevrolet',
        modelo: 'Sail',
        año: 2018,
        color: 'Gris estrella',
        gama: 'Full Equipament',
        precio: '$43.000.000'
    },
    {
        id: 3,
        name: 'Nissan',
        modelo: 'Versa',
        año: 2017,
        color: 'Negro',
        gama: 'Full Equipament',
        precio: '$57.500.000'
    },
    {
        id: 4,
        name: 'Ford',
        modelo: 'Mustang',
        año: 2020,
        color: 'Azul',
        gama: 'Full Equipament',
        precio: '$170.000.000'
    },
    {
        id: 5,
        name: 'Bmw',
        modelo: 'Z4 M40i',
        año: 2020,
        color: 'Gris raton',
        gama: 'Full Equipament',
        precio: '$225.500.000'
    },
];
let editingUSer = false;

function printUsers() {

    const tableBody = document.getElementById('cars-table-body')
    tableBody.innerHTML = ''
    cars.forEach((user) => {
        const td = `<tr>
                        <td>
                            ${user.name}
                        </td>
                        <td>
                            ${user.modelo}
                        </td>
                        <td>
                            ${user.año}
                        </td>
                        <td>
                            ${user.color}
                        </td>
                        <td>
                            ${user.precio}
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="removeUser(${user.id})">
                                Eliminar
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-success" onclick="editUserButton(${user.id})">
                                Editar
                            </button>
                        </td>
                    </tr>`
        tableBody.innerHTML += td;
    })
}


function submitUser() {
    console.log(editingUSer)
    if(editingUSer) {
        editUser();
    } else {
        addUser();
    }
}
function editUser() {
    const name = document.getElementById('name').value;
    const modelo = document.getElementById('modelo').value;
    const año = document.getElementById('año').value;
    const color = document.getElementById('color').value;
    const precio = document.getElementById('precio').value;
    editingUSer.name = name
    editingUSer.modelo = modelo
    editingUSer.año = año
    editingUSer.color = color
    editingUSer.precio = precio
    printUsers();
    editingUSer = false;
    document.getElementById('name').value = ''
    document.getElementById('modelo').value = ''
    document.getElementById('año').value = ''
    document.getElementById('color').value = ''
    document.getElementById('precio').value = ''
    
}

function editUserButton(id) {
    const user = cars.find((user) => user.id === id);
    // const user = users[position];
    document.getElementById('name').value = user.name;
    document.getElementById('modelo').value = user.modelo;
    document.getElementById('año').value = user.año;
    document.getElementById('color').value = user.color;
    document.getElementById('precio').value = user.precio;
    editingUSer = user;
    // console.log(user);
}

// nuevo usu
function addUser() {
    const name = document.getElementById('name').value;
    const modelo = document.getElementById('modelo').value;
    const año = document.getElementById('año').value;
    const color = document.getElementById('color').value;
    const precio = document.getElementById('precio').value;
    const newUser = {
        id: cars.length + 1,
        name: name,
        modelo: modelo,
        año: año,
        color: color,
        precio: precio,
    }
    cars.push(newUser);
    printUsers();

}


// Eliminar ususarios
function removeUser(id) {
    const position = cars.findIndex((user) => user.id === id);
    cars.splice(position, 1);
    printUsers();
}


//Imprimir ususarios 
printUsers();