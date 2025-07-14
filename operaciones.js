const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas));
    console.log("Cita registrada con éxito");
};

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log("Citas registradas:");
    citas.forEach((cita, index) => {
        console.log(`${index + 1}. ${cita.nombre}, ${cita.edad}, ${cita.tipo}, ${cita.color}, ${cita.enfermedad}`);
    });
};

module.exports = { registrar, leer };
