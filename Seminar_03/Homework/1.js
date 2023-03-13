const tempC = Number.parseFloat(prompt("Введите температуру в градусах по Цельсию "));
const tempF = (9 / 5) * tempC + 32;
alert(`Цельсий: ${tempC}, Фаренгейт: ${tempF.toFixed(1)}`);
