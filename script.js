// Función para actualizar los colores
function updateColor(color, value) {
    let hexColor;
    if (color === 'green') {
        // Convertimos el valor a un factor de intensidad (0-1)
        const intensity = value / 255;
        // Aplicamos el factor a cada componente del color base #006847
        const r = Math.round(0 * intensity).toString(16).padStart(2, '0');
        const g = Math.round(104 * intensity).toString(16).padStart(2, '0');
        const b = Math.round(71 * intensity).toString(16).padStart(2, '0');
        hexColor = `#${r}${g}${b}`;
        document.getElementById('green-hex').textContent = hexColor;
        document.getElementById('green-band').style.backgroundColor = hexColor;
        document.documentElement.style.setProperty('--green-color', hexColor);
    } else if (color === 'red') {
        // Convertimos el valor a un factor de intensidad (0-1)
        const intensity = value / 255;
        // Aplicamos el factor a cada componente del color base #CE1126
        const r = Math.round(206 * intensity).toString(16).padStart(2, '0');
        const g = Math.round(17 * intensity).toString(16).padStart(2, '0');
        const b = Math.round(38 * intensity).toString(16).padStart(2, '0');
        hexColor = `#${r}${g}${b}`;
        document.getElementById('red-hex').textContent = hexColor;
        document.getElementById('red-band').style.backgroundColor = hexColor;
        document.documentElement.style.setProperty('--red-color', hexColor);
    }
}

// Añadir event listeners a los sliders cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    const greenSlider = document.getElementById('green-slider');
    const redSlider = document.getElementById('red-slider');
    
    // Establecer valores iniciales para los colores originales
    // Calculamos el valor del slider necesario para obtener el color original
    // Para el verde (#006847): el componente más alto es 104, por lo que 104/255 ≈ 0.4078
    // Para el rojo (#CE1126): el componente más alto es 206, por lo que 206/255 ≈ 0.8078
    
    // Para obtener el color original, necesitamos que la intensidad sea 1
    // por lo que establecemos los sliders en 255
    greenSlider.value = 255;
    redSlider.value = 255;
    updateColor('green', 255);
    updateColor('red', 255);
    
    greenSlider.addEventListener('input', function() {
        updateColor('green', this.value);
    });
    
    redSlider.addEventListener('input', function() {
        updateColor('red', this.value);
    });
});