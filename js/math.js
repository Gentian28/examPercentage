function calculatePercentage() {
    let all = document.getElementById('all').value;
    let ca = document.getElementById('ca').value;

    let percentage = ((all - ca) / all) * 100;

    return percentage;
}

export function getPercentage() {
    document.getElementById('result').innerHTML = calculatePercentage() + "%";
}