const fs = require('fs');

const projects = [
  // Logos
  ...Array.from({length: 6}, (_, i) => ({ id: `logo-${i+1}`, title: `Logo Design ${i+1}`, category: "Logo Design", heroImage: `/images/portfolio/Logos/L${i+1}.jpg` })),
  // Expo Invite
  ...Array.from({length: 6}, (_, i) => ({ id: `expo-${i+1}`, title: `Expo Invite ${i+1}`, category: "Expo Invite", heroImage: `/images/portfolio/expo-invite/expo${i+1}.jpg` })),
  // Standee Design
  ...Array.from({length: 9}, (_, i) => ({ id: `standee-${i+1}`, title: `Standee Design ${i+1}`, category: "Standee Design", heroImage: `/images/portfolio/standee-designs/standee${i+1}.jpg` })),
  // Banners (the numbers in HTML are somewhat random, but I'll list the ones from HTML: B2, B5, B6, B7, B8, B22, B9, B10, B11, B12, B17, B13, B14, B15, B16, B18, B19, B20, B21, B4)
  ...['B2','B5','B6','B7','B8','B22','B9','B10','B11','B12','B17','B13','B14','B15','B16','B18','B19','B20','B21','B4'].map((b, i) => ({ id: `banner-${i+1}`, title: `Banner ${i+1}`, category: "Banners", heroImage: `/images/portfolio/banners/${b}.jpg` })),
  // News Paper
  ...Array.from({length: 6}, (_, i) => ({ id: `news-${i+1}`, title: `News Paper ${i+1}`, category: "News Paper", heroImage: `/images/portfolio/news-paper/N${i+1}.png` })),
];

console.log(JSON.stringify(projects, null, 2));
