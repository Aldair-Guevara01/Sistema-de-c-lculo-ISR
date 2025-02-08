function calcularSueldo() {
    let salarioBruto = parseFloat(document.getElementById('salario').value) || 0;
    let afp = salarioBruto * 0.0725;
    let isss = Math.min(salarioBruto * 0.03, 30);
    let ingresoNeto = salarioBruto - afp - isss;
    
    let isr = 0;
    if (ingresoNeto > 2038.10) {
        isr = (ingresoNeto - 2038.10) * 0.30 + 288.57;
    } else if (ingresoNeto > 895.24) {
        isr = (ingresoNeto - 895.24) * 0.20 + 60.00;
    } else if (ingresoNeto > 472.00) {
        isr = (ingresoNeto - 472.00) * 0.10 + 17.67;
    }
    
    let sueldoLiquido = salarioBruto - afp - isss - isr;
    
    document.getElementById('ingresoMensual').textContent = `$${salarioBruto.toFixed(2)}`;
    document.getElementById('afp').textContent = `$${afp.toFixed(2)}`;
    document.getElementById('isss').textContent = `$${isss.toFixed(2)}`;
    document.getElementById('isr').textContent = `$${isr.toFixed(2)}`;
    document.getElementById('liquido').textContent = `$${sueldoLiquido.toFixed(2)}`;
}

function borrarDatos() {
    document.getElementById('salario').value = '';
    document.getElementById('ingresoMensual').textContent = '$0.00';
    document.getElementById('afp').textContent = '$0.00';
    document.getElementById('isss').textContent = '$0.00';
    document.getElementById('isr').textContent = '$0.00';
    document.getElementById('liquido').textContent = '$0.00';
}