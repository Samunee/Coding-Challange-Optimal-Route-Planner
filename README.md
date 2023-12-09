# Optimal Route Planner

Program ini adalah sebuah solusi sederhana yang ditulis menggunakan JavaScript untuk mencari rute optimal yang mengunjungi semua kota tepat sekali dan kembali ke kota awal dengan meminimalkan total jarak yang ditempuh.

## Overview

Program ini menggunakan fungsi `findOptimalRoute(coords)` yang mengambil daftar koordinat kota sebagai argumen dan mencari rute optimal yang melibatkan setiap kota tepat sekali dan kembali ke kota awal.

### Cara Kerja

- Fungsi `findOptimalRoute(coords)` akan menemukan rute terpendek yang mengunjungi setiap kota sekali dan kembali ke kota awal.
- Program menggunakan pendekatan langsung untuk menemukan rute yang optimal, dengan menghitung jarak antara setiap kota berurutan dalam rute dan menghitung jarak kembali ke kota awal.

## Penggunaan

- Program ini memanfaatkan array koordinat kota sebagai input.
- Setelah koordinat kota ditetapkan, program akan mencetak hasil berupa rute optimal dan total jarak yang ditempuh.

## Contoh Input-Output

Input: <br>
`4` <br>
`0 0` <br>
`0 2` <br>
`2 2` <br>
`2 0` <br>

Output: <br>
`Optimal Route: City 1 -> City 2 -> City 3 -> City 4 -> City 1
Total Distance: 8.0 units`
