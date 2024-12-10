interface Color {
  id: number
  value: string
}

export const colors: Color[] = [
  { id: 1, value: 'linear-gradient(to right, #ff9a9e, #fad0c4)' },
  { id: 2, value: 'linear-gradient(to right, #a18cd1, #fbc2eb)' },
  { id: 3, value: 'linear-gradient(to right, #ffecd2, #fcb69f)' },
  { id: 4, value: 'linear-gradient(to right, #84fab0, #8fd3f4)' },
  { id: 5, value: 'linear-gradient(to right, #a6c0fe, #f68084)' },
  { id: 6, value: 'linear-gradient(to right, #d4fc79, #96e6a1)' },
  { id: 8, value: 'linear-gradient(to right, #667eea, #764ba2)' },
  { id: 9, value: 'linear-gradient(to right, #ff758c, #ff7eb3)' },
  { id: 10, value: 'linear-gradient(to right, #6a11cb, #2575fc)' },
  { id: 11, value: 'linear-gradient(to right, #37ecba, #72afd3)' },
  { id: 12, value: 'linear-gradient(to right, #ebbba7, #cfc7f8)' },
  { id: 13, value: 'linear-gradient(to right, #f6d365, #fda085)' },
  { id: 14, value: 'linear-gradient(to right, #00dbde, #fc00ff)' },
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
  { id: 30, value: 'linear-gradient(to right, #2af598, #009efd)' },
  { id: 31, value: 'linear-gradient(to right, #ff6e7f, #bfe9ff)' },
  { id: 32, value: 'linear-gradient(to right, #b465da, #cf6cc9)' },
  { id: 33, value: 'linear-gradient(to right, #ee9ca7, #ffdde1)' },
  { id: 34, value: 'linear-gradient(to right, #06beb6, #48b1bf)' },
  { id: 35, value: 'linear-gradient(to right, #eb3349, #f45c43)' },
  { id: 36, value: 'linear-gradient(to right, #dd5e89, #f7bb97)' },
  { id: 37, value: 'linear-gradient(to right, #56ab2f, #a8e063)' },
  { id: 38, value: 'linear-gradient(to right, #614385, #516395)' },
]

interface Wallpaper {
  id: number
  url: string
}

interface WallpaperCategory {
  id: number
  name: string
  slug: string
  description: string
  wallpapers: Wallpaper[]
}

export const wallpaperCategories: WallpaperCategory[] = [
  {
    id: 1,
    name: 'Abstract',
    slug: 'abstract',
    description: 'Colorful gradients and artistic patterns',
    wallpapers: [
      { id: 1, url: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 2, url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 3, url: 'https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 4, url: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 5, url: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 6, url: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 7, url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 8, url: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    ],
  },
  {
    id: 2,
    name: 'Nature',
    slug: 'nature',
    description: 'Beautiful landscapes and natural scenery',
    wallpapers: [
      { id: 1, url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 2, url: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 3, url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 4, url: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 5, url: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 6, url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 7, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 8, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    ],
  },
  {
    id: 3,
    name: 'City',
    slug: 'city',
    description: 'Urban landscapes and cityscapes',
    wallpapers: [
      { id: 1, url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 2, url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 3, url: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 4, url: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 5, url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 6, url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 7, url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 8, url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    ],
  },
  {
    id: 4,
    name: 'Space',
    slug: 'space',
    description: 'Cosmic and astronomical scenes',
    wallpapers: [
      { id: 1, url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 2, url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 3, url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 4, url: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 5, url: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 6, url: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 7, url: 'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 8, url: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    ],
  },
  {
    id: 5,
    name: 'Minimal',
    slug: 'minimal',
    description: 'Clean and simple compositions',
    wallpapers: [
      { id: 1, url: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 2, url: 'https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 3, url: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 4, url: 'https://images.unsplash.com/photo-1486551937199-baf066858de7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 5, url: 'https://images.unsplash.com/photo-1629197680383-78c8a8028086?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 6, url: 'https://images.unsplash.com/photo-1495476479092-6ece1898a101?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 7, url: 'https://images.unsplash.com/photo-1487260211189-670c54da558d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 8, url: 'https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    ],
  },
  {
    id: 6,
    name: 'Ocean',
    slug: 'ocean',
    description: 'Underwater scenes and seascapes',
    wallpapers: [
      { id: 1, url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 2, url: 'https://images.unsplash.com/photo-1513553404607-988bf2703777?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 3, url: 'https://images.unsplash.com/photo-1534766438357-2b270dbd1b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 4, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 5, url: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 6, url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 7, url: 'https://images.unsplash.com/photo-1498811008858-d95a0f5e1fca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 8, url: 'https://images.unsplash.com/photo-1514999037859-b486988734f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    ],
  },
  {
    id: 7,
    name: 'Desert',
    slug: 'desert',
    description: 'Arid landscapes and sand dunes',
    wallpapers: [
      { id: 1, url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 2, url: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 3, url: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 4, url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 5, url: 'https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 6, url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 7, url: 'https://images.unsplash.com/photo-1503022932596-30e96f1e2f2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 8, url: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    ],
  },
  {
    id: 8,
    name: 'Forest',
    slug: 'forest',
    description: 'Lush forests and woodland scenes',
    wallpapers: [
      { id: 1, url: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 2, url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 3, url: 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 4, url: 'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 5, url: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 6, url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 7, url: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 8, url: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    ],
  },
  {
    id: 9,
    name: 'Aerial',
    slug: 'aerial',
    description: "Bird's eye views and drone photography",
    wallpapers: [
      { id: 1, url: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 2, url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 3, url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 4, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 5, url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 6, url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 7, url: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 8, url: 'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    ],
  },
  {
    id: 10,
    name: 'Sunset',
    slug: 'sunset',
    description: 'Beautiful sunset and sunrise moments',
    wallpapers: [
      { id: 1, url: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 2, url: 'https://images.unsplash.com/photo-1464660439080-b79116909ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 3, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 4, url: 'https://images.unsplash.com/photo-1498081959737-f3ba1af08103?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 5, url: 'https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 6, url: 'https://images.unsplash.com/photo-1506815444479-bfdb1e96c566?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 7, url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
      { id: 8, url: 'https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    ],
  },
]
