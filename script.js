document.getElementById('greetForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Mencegah reload halaman

    const nameInput = document.getElementById('nameInput').value;
    const responseDiv = document.getElementById('apiResponse');

    try {
        // Kirim POST request ke Edge Function kita
        const response = await fetch('/api/greet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: nameInput })
        });

        const data = await response.json();
        responseDiv.innerHTML = `
            <p><strong>Pesan:</strong> ${data.message}</p>
            <p><small>Waktu: ${new Date(data.timestamp).toLocaleTimeString('id-ID')}</small></p>
        `;
        responseDiv.style.color = 'blue';
    } catch (error) {
        responseDiv.textContent = 'Terjadi kesalahan saat memanggil API.';
        responseDiv.style.color = 'red';
        console.error('Error:', error);
    }
});
