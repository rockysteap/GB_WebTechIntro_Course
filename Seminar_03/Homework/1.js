const temp_c = Number.parseInt(prompt("Введите температуру в градусах по Цельсию "));
const temp_f = (9 / 5) * temp_c + 32
alert(`Цельсий: ${temp_c}, Фаренгейт: ${temp_f.toFixed(1)}`)
