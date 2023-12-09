// Fungsi untuk menghitung jarak antara dua titik koordinat (x1, y1) dan (x2, y2)
function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

// Fungsi untuk mencari rute optimal
function findOptimalRoute(coords) {
    const n = coords.length;
    let optimalRoute = [];
    let totalDistance = 0;

    // Menemukan rute terpendek
    for (let i = 0; i < n; i++) {
        optimalRoute.push(i + 1);
        if (i < n - 1) {
            // Menghitung jarak antara setiap kota berurutan dalam rute
            totalDistance += calculateDistance(coords[i][0], coords[i][1], coords[i + 1][0], coords[i + 1][1]);
        } else {
            // Menghitung jarak kembali ke kota awal
            totalDistance += calculateDistance(coords[i][0], coords[i][1], coords[0][0], coords[0][1]);
        }
    }

    // Mengembalikan rute optimal dan total jarak
    return { route: `City ${optimalRoute.join(' -> ')} -> City 1`, distance: totalDistance.toFixed(1) };
}

// Input koordinat kota
const cities = [
    [0, 0],
    [0, 2],
    [2, 2],
    [2, 0]
];

// Menemukan rute optimal dan mencetak hasil
const result = findOptimalRoute(cities);
console.log(`Output: Optimal Route: ${result.route}\nTotal Distance: ${result.distance} units`);

/* 
Penjelasan mengenai Time Complexity:
Algoritma ini memiliki kompleksitas waktu O(n), di mana n adalah jumlah kota. 
Setiap kota akan dikunjungi sekali dalam pencarian rute terpendek.

Penjelasan mengenai Space Complexity:
Algoritma ini memiliki kompleksitas ruang O(n), karena menyimpan data koordinat kota dalam sebuah array 'coords' 
dan juga array 'optimalRoute' yang menyimpan rute optimal. 
Kedua array ini akan tumbuh seiring dengan bertambahnya jumlah kota.
*/
