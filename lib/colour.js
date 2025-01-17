const colors = ['#a6e22e', '#ae81ff', '#f92672', '#e2e22e', '#56adbc', '#86b42b', '#8c6bc8', '#c4265e', '#ac6218'];

export function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}