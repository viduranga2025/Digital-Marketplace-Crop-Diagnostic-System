// Marketplace Data
const crops = [
    { id: 1, name: 'Carrots', category: 'Vegetables', price: 'Rs. 240/kg', seller: 'Perea (N-Eliya)', img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=200' },
    { id: 2, name: 'Papaya', category: 'Fruits', price: 'Rs. 180/kg', seller: 'Saman (Anuradhapura)', img: 'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=200' },
    { id: 3, name: 'Keeri Samba', category: 'Grains', price: 'Rs. 260/kg', seller: 'Banda (Polonnaruwa)', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=200' },
    { id: 4, name: 'Tomatoes', category: 'Vegetables', price: 'Rs. 320/kg', seller: 'Kamal (Dambulla)', img: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?q=80&w=200' }
];

function displayCrops(items) {
    const grid = document.getElementById('cropGrid');
    grid.innerHTML = items.map(item => `
        <div class="crop-card">
            <img src="${item.img}" alt="${item.name}">
            <div class="crop-info">
                <h4>${item.name}</h4>
                <p class="price">${item.price}</p>
                <p class="seller"><i class="fa-solid fa-location-dot"></i> ${item.seller}</p>
            </div>
        </div>
    `).join('');
}

function filterCrops() {
    const category = document.getElementById('cropFilter').value;
    const filtered = category === 'all' ? crops : crops.filter(c => c.category === category);
    displayCrops(filtered);
}

// Diagnostic Tool Simulation
const dropZone = document.getElementById('dropZone');
dropZone.onclick = () => document.getElementById('fileInput').click();

document.getElementById('fileInput').onchange = function() {
    const resultBox = document.getElementById('diagResult');
    const resultText = document.getElementById('resultText');
    const remedyText = document.getElementById('remedyText');

    resultBox.classList.remove('hidden');
    resultText.innerText = "Analyzing Leaf Pattern...";
    
    setTimeout(() => {
        resultText.innerHTML = "<strong>Result:</strong> Leaf Blast (දිලීර ආසාදනය)";
        remedyText.innerText = "Remedy: Use Mancozeb fungicide and reduce nitrogen fertilizer.";
    }, 2000);
};

// Initial Load
displayCrops(crops);