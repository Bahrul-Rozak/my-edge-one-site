document.getElementById('myButton').addEventListener('click', function() {
    const displayElement = document.getElementById('displayText');
    displayElement.textContent = 'Tombol telah diklik! Website ini berjalan dengan baik!';
    displayElement.style.color = 'green';
});