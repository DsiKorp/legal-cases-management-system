let getFecha = () => {
    let hoy = new Date();
    //'2019-07-04 00:00:00.000'

    let fecha = `${hoy.getFullYear()}-${hoy.getMonth() + 1}-${hoy.getDate()}`;
    let hora = `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`;
    let fechaHora = `${fecha} ${hora}`;

    console.log(`getFecha: ${fechaHora}`);

    return fechaHora;
};


module.exports = {
    getFecha
}