# Optimal Route Planner

Ini adalah sebuah program sederhana yang dibuat dengan JavaScript untuk menemukan rute optimal yang mengunjungi semua kota tepat sekali dan kembali ke kota awal, dengan meminimalkan total jarak yang ditempuh.

## Overview

Program ini menggunakan fungsi `findOptimalRoute(coords)` yang mengambil daftar koordinat kota sebagai argumen dan mencari rute optimal yang mengunjungi semua kota sekali dan kembali ke kota awal.

### Cara Kerja

- Fungsi `findOptimalRoute(coords)` menemukan rute terpendek dengan menghitung jarak antara setiap kota berurutan dalam rute.
- Jarak dari setiap kota ke kota berikutnya dan kembali ke kota awal dihitung menggunakan fungsi `calculateDistance(x1, y1, x2, y2)`.

## Penggunaan

- Program ini menggunakan koordinat kota yang disimpan dalam bentuk array.
- Setelah program dijalankan, akan menampilkan hasil rute optimal dan total jarak yang ditempuh.

## Contoh Input-Output

Input: <br>
`4` <br>
`0` `0` <br>
`0` `2` <br>
`2` `2` <br>
`2` `0` <br>

Output: <br>
`Output: Optimal Route: City 1 -> City 2 -> City 3 -> City 4 -> City 1` <br>
`Total Distance: 8.0 units` <br>

Penjelasan: Rute optimal dalam kasus ini adalah persegi, mengunjungi setiap kota sekali dan kembali ke kota awal, dengan total jarak `8 units`.

## Time Complexity dan Space Complexity

Algoritma solusi yang diimplementasikan memiliki kompleksitas waktu O(n) dan kompleksitas ruang O(n), di mana n adalah jumlah kota yang diberikan sebagai input.
