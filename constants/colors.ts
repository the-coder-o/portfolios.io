interface Color {
  id: number
  value: string
}

interface Wallpaper {
  id: number
  url: string
}

export const colors: Color[] = [
  { id: 1, value: 'linear-gradient(to right, #ff9a9e, #fad0c4)' },
  { id: 2, value: 'linear-gradient(to right, #a18cd1, #fbc2eb)' },
  { id: 3, value: 'linear-gradient(to right, #ffecd2, #fcb69f)' },
  { id: 4, value: 'linear-gradient(to right, #84fab0, #8fd3f4)' },
  { id: 5, value: 'linear-gradient(to right, #a6c0fe, #f68084)' },
  { id: 6, value: 'linear-gradient(to right, #d4fc79, #96e6a1)' },
  { id: 7, value: 'linear-gradient(to right, #fa709a, #fee140)' },
  { id: 8, value: 'linear-gradient(to right, #667eea, #764ba2)' },
  { id: 9, value: 'linear-gradient(to right, #ff758c, #ff7eb3)' },
  { id: 10, value: 'linear-gradient(to right, #6a11cb, #2575fc)' },
  { id: 11, value: 'linear-gradient(to right, #37ecba, #72afd3)' },
  { id: 12, value: 'linear-gradient(to right, #ebbba7, #cfc7f8)' },
  { id: 13, value: 'linear-gradient(to right, #f6d365, #fda085)' },
  { id: 14, value: 'linear-gradient(to right, #00dbde, #fc00ff)' },
  { id: 15, value: 'linear-gradient(to right, #f093fb, #f5576c)' },
  { id: 16, value: 'linear-gradient(to right, #4facfe, #00f2fe)' },
  { id: 17, value: 'linear-gradient(to right, #43e97b, #38f9d7)' },
  { id: 18, value: 'linear-gradient(to right, #fa709a, #fee140)' },
  { id: 19, value: 'linear-gradient(to right, #30cfd0, #330867)' },
  { id: 20, value: 'linear-gradient(to right, #a8edea, #fed6e3)' },
  { id: 21, value: 'linear-gradient(to right, #5ee7df, #b490ca)' },
  { id: 22, value: 'linear-gradient(to right, #d299c2, #fef9d7)' },
  { id: 23, value: 'linear-gradient(to right, #f5f7fa, #c3cfe2)' },
  { id: 24, value: 'linear-gradient(to right, #e0c3fc, #8ec5fc)' },
  { id: 25, value: 'linear-gradient(to right, #f093fb, #f5576c)' },
  { id: 26, value: 'linear-gradient(to right, #fdfbfb, #ebedee)' },
  { id: 27, value: 'linear-gradient(to right, #4481eb, #04befe)' },
  { id: 28, value: 'linear-gradient(to right, #dad4ec, #f3e7e9)' },
  { id: 29, value: 'linear-gradient(to right, #874da2, #c43a30)' },
]

export const wallpapers: Wallpaper[] = [
  // Abstract Wallpapers
  { id: 1, url: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 2, url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 3, url: 'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 4, url: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 5, url: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },

  // Nature Wallpapers
  { id: 6, url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 7, url: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 8, url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 9, url: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 10, url: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },

  // City Wallpapers
  { id: 11, url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 12, url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 13, url: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 14, url: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 15, url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },

  // Space Wallpapers
  { id: 16, url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 17, url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 18, url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 19, url: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 20, url: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },

  // Minimal Wallpapers
  { id: 21, url: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 22, url: 'https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 23, url: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 24, url: 'https://images.unsplash.com/photo-1486551937199-baf066858de7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },

  // Ocean Wallpapers
  { id: 25, url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 26, url: 'https://images.unsplash.com/photo-1513553404607-988bf2703777?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 27, url: 'https://images.unsplash.com/photo-1502085671122-2d218cd434e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 28, url: 'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 29, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },

  // Desert Wallpapers
  { id: 30, url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 32, url: 'https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 33, url: 'https://images.unsplash.com/photo-1682686580950-960d1d513532?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 34, url: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },

  // Aerial Wallpapers
  { id: 35, url: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 36, url: 'https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 37, url: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 38, url: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },

  // Winter Wallpapers
  { id: 40, url: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 41, url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 42, url: 'https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 43, url: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 44, url: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },

  // Autumn Wallpapers
  { id: 45, url: 'https://images.unsplash.com/photo-1507783548227-544c3b8fc065?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 46, url: 'https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 47, url: 'https://images.unsplash.com/photo-1507484467459-0c01be16726e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
  { id: 48, url: 'https://images.unsplash.com/photo-1506543277633-99deabfcd722?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
]
