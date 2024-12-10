const container = document.getElementById("container")
const types = ["hex", "rgba"]

console.log("Colors:")
fetch("colors.json")
    .then(response => response.json())
    .then(colors => {
        // Usar los datos aquí
        // console.log(colors)
        Object.keys(colors).forEach(colorKey => {
            const colorData = colors[colorKey]

            console.log(colorKey)

            // Contenedor para cada color
            const colorBox = document.createElement("div")
            colorBox.classList.add("color")
            colorBox.style.backgroundColor = colorData.hex

            // Crea los textos con los codigos de color
            types.forEach(type => {
                const code = document.createElement("p")
                code.textContent = `${type.toUpperCase()}: ${colorData[type]}`
                colorBox.appendChild(code)
                if (colorData.text == "light") {
                    code.style.color = "rgba(178, 177, 192, 255)"
                } else {
                    code.style.color = "rgba(61,54,89,255)"
                }
            })

            // Se añade el color al contenedor principal
            container.appendChild(colorBox)
        })

    });
