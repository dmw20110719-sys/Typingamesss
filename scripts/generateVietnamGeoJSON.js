import fs from 'fs';

const VIETNAM_REGIONS = [
  { id: "vn_hanoi", name_kr: "하노이", name_en: "Hanoi", lat: 21.0285, lng: 105.8542 },
  { id: "vn_hochiminh", name_kr: "호치민", name_en: "Ho Chi Minh City", lat: 10.8231, lng: 106.6297 },
  { id: "vn_danang", name_kr: "다낭", name_en: "Da Nang", lat: 16.0544, lng: 108.2022 },
  { id: "vn_haiphong", name_kr: "하이퐁", name_en: "Haiphong", lat: 20.8449, lng: 106.6881 },
  { id: "vn_cantho", name_kr: "껀터", name_en: "Can Tho", lat: 10.0452, lng: 105.7469 },
  { id: "vn_hue", name_kr: "후에", name_en: "Hue", lat: 16.4637, lng: 107.5909 },
  { id: "vn_nhatrang", name_kr: "냐짱", name_en: "Nha Trang", lat: 12.2388, lng: 109.1967 },
  { id: "vn_dalat", name_kr: "달랏", name_en: "Da Lat", lat: 11.9404, lng: 108.4583 },
  { id: "vn_quangninh", name_kr: "꽝닌", name_en: "Quang Ninh", lat: 21.0069, lng: 107.2925 },
  { id: "vn_kiengiang", name_kr: "끼엔장", name_en: "Kien Giang", lat: 10.0125, lng: 105.0809 },
  { id: "vn_quangnam", name_kr: "꽝남", name_en: "Quang Nam", lat: 15.5667, lng: 108.0000 },
  { id: "vn_ninhbinh", name_kr: "닌빈", name_en: "Ninh Binh", lat: 20.2506, lng: 105.9745 },
  { id: "vn_laocai", name_kr: "라오까이", name_en: "Lao Cai", lat: 22.4856, lng: 103.9707 },
  { id: "vn_binhthuan", name_kr: "빈투안", name_en: "Binh Thuan", lat: 11.0904, lng: 108.0722 },
  { id: "vn_vungtau", name_kr: "바리어붕따우", name_en: "Ba Ria - Vung Tau", lat: 10.4114, lng: 107.1362 },
  { id: "vn_tayninh", name_kr: "떠이닌", name_en: "Tay Ninh", lat: 11.3117, lng: 106.0983 },
  { id: "vn_dongnai", name_kr: "동나이", name_en: "Dong Nai", lat: 11.0500, lng: 107.0000 },
  { id: "vn_binhduong", name_kr: "빈즈엉", name_en: "Binh Duong", lat: 11.1667, lng: 106.6667 },
  { id: "vn_nghean", name_kr: "응에안", name_en: "Nghe An", lat: 19.3333, lng: 104.8333 },
  { id: "vn_thanhhoa", name_kr: "타인호아", name_en: "Thanh Hoa", lat: 19.8075, lng: 105.7764 },
  { id: "vn_daklak", name_kr: "닥락", name_en: "Dak Lak", lat: 12.6667, lng: 108.0500 },
  { id: "vn_thainguyen", name_kr: "타이응우옌", name_en: "Thai Nguyen", lat: 21.5928, lng: 105.8442 },
  { id: "vn_bacninh", name_kr: "박닌", name_en: "Bac Ninh", lat: 21.1861, lng: 106.0763 },
  { id: "vn_hagiang", name_kr: "하장", name_en: "Ha Giang", lat: 22.8233, lng: 104.9839 },
  { id: "vn_camau", name_kr: "까마우", name_en: "Ca Mau", lat: 9.1769, lng: 105.1524 },
  { id: "vn_dienbien", name_kr: "디엔비엔", name_en: "Dien Bien", lat: 21.3860, lng: 103.0230 },
  { id: "vn_quangbinh", name_kr: "꽝빈", name_en: "Quang Binh", lat: 17.4686, lng: 106.6235 },
  { id: "vn_thaibinh", name_kr: "타이빈", name_en: "Thai Binh", lat: 20.4464, lng: 106.3364 },
  { id: "vn_haiduong", name_kr: "하이즈엉", name_en: "Hai Duong", lat: 20.9380, lng: 106.3190 },
  { id: "vn_phutho", name_kr: "푸토", name_en: "Phu Tho", lat: 21.3200, lng: 105.2200 },
  { id: "vn_gialai", name_kr: "자라이", name_en: "Gia Lai", lat: 13.9833, lng: 108.0000 },
  { id: "vn_angiang", name_kr: "안장", name_en: "An Giang", lat: 10.3833, lng: 105.4167 },
  { id: "vn_dongthap", name_kr: "동탑", name_en: "Dong Thap", lat: 10.4667, lng: 105.6333 },
  { id: "vn_vinhlong", name_kr: "빈롱", name_en: "Vinh Long", lat: 10.2500, lng: 105.9667 }
];

// Helper to compute Voronoi cells in grid lat/lng
const points = VIETNAM_REGIONS.map(r => ({ ...r, x: r.lng, y: r.lat }));

// Generate a smooth rounded polygon for each region using Voronoi-like cell boundaries
const features = points.map((p) => {
  const numSides = 16;
  // Compute distance to nearest other point to determine adaptive radius
  let minDist = Infinity;
  points.forEach((other) => {
    if (other.id === p.id) return;
    const d = Math.hypot(other.x - p.x, other.y - p.y);
    if (d < minDist) minDist = d;
  });

  const radius = Math.max(0.22, Math.min(0.65, minDist * 0.58));
  
  // Calculate Voronoi-like directional boundaries by pushing vertices towards midpoints with neighbors
  const ring = [];
  for (let i = 0; i <= numSides; i++) {
    const angle = (i / numSides) * 2 * Math.PI;
    let dx = Math.cos(angle) * radius;
    let dy = Math.sin(angle) * radius;

    // Adjust dx/dy if it encroaches too close to another point
    const targetX = p.x + dx;
    const targetY = p.y + dy;

    let closestDist = Math.hypot(dx, dy);
    points.forEach((other) => {
      if (other.id === p.id) return;
      // Distance from point p to other
      const ox = other.x - p.x;
      const oy = other.y - p.y;
      const oDist = Math.hypot(ox, oy);
      // Projection of (dx,dy) onto direction to other
      const dot = (dx * ox + dy * oy) / oDist;
      if (dot > 0 && dot > oDist * 0.48) {
        const factor = (oDist * 0.48) / dot;
        if (factor < 1) {
          dx *= factor;
          dy *= factor;
        }
      }
    });

    ring.push([Number((p.x + dx).toFixed(4)), Number((p.y + dy).toFixed(4))]);
  }

  return {
    type: "Feature",
    properties: {
      id: p.id,
      name: p.name_en,
      name_kr: p.name_kr,
      level: "vietnam"
    },
    geometry: {
      type: "Polygon",
      coordinates: [ring]
    }
  };
});

const geojson = {
  type: "FeatureCollection",
  features
};

fs.writeFileSync('./public/geojson/vietnam-provinces.json', JSON.stringify(geojson, null, 2));
console.log('Successfully generated /public/geojson/vietnam-provinces.json with', features.length, 'features');
