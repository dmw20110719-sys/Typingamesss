import { Region } from "../types";

export const VIETNAM_LIST: Region[] = [
  // -------------------------------------------------------------
  // 6개 중앙직할시 (Central Municipalities)
  // -------------------------------------------------------------
  {
    id: "vn_hanoi",
    name_kr: "하노이",
    name_en: "Hanoi",
    level: "vietnam",
    lat: 21.0285,
    lng: 105.8542,
    region_group: "직할시",
    neighbors: ["vn_haiphong", "vn_ninhbinh", "vn_laocai", "vn_bacninh", "vn_thainguyen", "vn_haiduong", "vn_phutho"],
    description: "베트남의 수도이자 천년 역사의 문화, 학술 및 정치 중심 중앙직할시입니다."
  },
  {
    id: "vn_hochiminh",
    name_kr: "호치민",
    name_en: "Ho Chi Minh City",
    level: "vietnam",
    lat: 10.8231,
    lng: 106.6297,
    region_group: "직할시",
    neighbors: ["vn_cantho", "vn_vungtau", "vn_binhduong", "vn_dongnai", "vn_tayninh", "vn_vinhlong"],
    description: "베트남 최대의 경제 대도시이자 화려한 야경과 사이공의 활력이 넘치는 중앙직할시입니다."
  },
  {
    id: "vn_danang",
    name_kr: "다낭",
    name_en: "Da Nang",
    level: "vietnam",
    lat: 16.0544,
    lng: 108.2022,
    region_group: "직할시",
    neighbors: ["vn_hue", "vn_quangnam"],
    description: "아름다운 미케 비치와 바나힐 골든 브릿지가 빛나는 중부 거점 해양 관광 중앙직할시입니다."
  },
  {
    id: "vn_haiphong",
    name_kr: "하이퐁",
    name_en: "Haiphong",
    level: "vietnam",
    lat: 20.8449,
    lng: 106.6881,
    region_group: "직할시",
    neighbors: ["vn_hanoi", "vn_quangninh", "vn_haiduong", "vn_thaibinh"],
    description: "북부 최대의 항구 도시이자 깟바 섬 국립공원이 숨쉬는 산업 해양 중앙직할시입니다."
  },
  {
    id: "vn_cantho",
    name_kr: "껀터",
    name_en: "Can Tho",
    level: "vietnam",
    lat: 10.0452,
    lng: 105.7469,
    region_group: "직할시",
    neighbors: ["vn_hochiminh", "vn_camau", "vn_kiengiang", "vn_angiang", "vn_vinhlong"],
    description: "풍요로운 메콩강 델타의 수로 네트워크와 까이랑 수상 시장으로 유명한 남부 중앙직할시입니다."
  },
  {
    id: "vn_hue",
    name_kr: "후에",
    name_en: "Hue",
    level: "vietnam",
    lat: 16.4637,
    lng: 107.5909,
    region_group: "직할시",
    neighbors: ["vn_danang", "vn_quangbinh"],
    description: "응우옌 왕조의 황궁과 황릉 유적을 고이 간직한 베트남의 유서 깊은 역사 문화 중앙직할시입니다."
  },

  // -------------------------------------------------------------
  // 28개 성 (Provinces)
  // -------------------------------------------------------------
  {
    id: "vn_nhatrang",
    name_kr: "냐짱",
    name_en: "Nha Trang",
    level: "vietnam",
    lat: 12.2388,
    lng: 109.1967,
    region_group: "중부",
    neighbors: ["vn_dalat", "vn_binhthuan", "vn_daklak", "vn_gialai"],
    description: "동양의 나폴리로 불리는 카인호아 성의 에메랄드빛 해변과 온천 휴양지입니다."
  },
  {
    id: "vn_dalat",
    name_kr: "달랏",
    name_en: "Da Lat",
    level: "vietnam",
    lat: 11.9404,
    lng: 108.4583,
    region_group: "중부",
    neighbors: ["vn_nhatrang", "vn_binhthuan", "vn_daklak"],
    description: "람동 성의 고원지대에 자리하여 사계절 꽃과 소나무 향기가 가득한 영원한 봄의 도시입니다."
  },
  {
    id: "vn_quangninh",
    name_kr: "꽝닌",
    name_en: "Quang Ninh",
    level: "vietnam",
    lat: 21.0069,
    lng: 107.2925,
    region_group: "북부",
    neighbors: ["vn_haiphong", "vn_bacninh"],
    description: "세계자연유산 하롱베이의 3,000여 개 석회암 섬들이 장관을 이루는 동북부 수경 성입니다."
  },
  {
    id: "vn_kiengiang",
    name_kr: "끼엔장",
    name_en: "Kien Giang",
    level: "vietnam",
    lat: 10.0125,
    lng: 105.0809,
    region_group: "남부",
    neighbors: ["vn_cantho", "vn_camau", "vn_angiang"],
    description: "베트남 최대의 환상적인 섬 푸꾸옥을 품고 있는 태국만 해양 관문 성입니다."
  },
  {
    id: "vn_quangnam",
    name_kr: "꽝남",
    name_en: "Quang Nam",
    level: "vietnam",
    lat: 15.5667,
    lng: 108.0000,
    region_group: "중부",
    neighbors: ["vn_danang", "vn_gialai"],
    description: "유네스코 세계유산 등불 마을 호이안과 미선 유적지가 자리한 아늑한 고도 성입니다."
  },
  {
    id: "vn_ninhbinh",
    name_kr: "닌빈",
    name_en: "Ninh Binh",
    level: "vietnam",
    lat: 20.2506,
    lng: 105.9745,
    region_group: "북부",
    neighbors: ["vn_hanoi", "vn_thanhhoa", "vn_thaibinh"],
    description: "육지의 하롱베이 짱안 삼각주와 나룻배 카르스트 비경이 아름다운 고대 수도 성입니다."
  },
  {
    id: "vn_laocai",
    name_kr: "라오까이",
    name_en: "Lao Cai",
    level: "vietnam",
    lat: 22.4856,
    lng: 103.9707,
    region_group: "북부",
    neighbors: ["vn_hanoi", "vn_hagiang", "vn_dienbien"],
    description: "인도차이나 최고봉 판시판 산과 사파 계단식 논이 그림처럼 펼쳐지는 산악 성입니다."
  },
  {
    id: "vn_binhthuan",
    name_kr: "빈투안",
    name_en: "Binh Thuan",
    level: "vietnam",
    lat: 11.0904,
    lng: 108.0722,
    region_group: "남부",
    neighbors: ["vn_nhatrang", "vn_dalat", "vn_vungtau", "vn_dongnai"],
    description: "이국적인 무이네 붉은 사막 언덕과 윈드서핑 해변으로 저명한 해안 성입니다."
  },
  {
    id: "vn_vungtau",
    name_kr: "바리어붕따우",
    name_en: "Ba Ria - Vung Tau",
    level: "vietnam",
    lat: 10.4114,
    lng: 107.1362,
    region_group: "남부",
    neighbors: ["vn_hochiminh", "vn_binhthuan", "vn_dongnai"],
    description: "거대한 예수상과 시원한 바다 바람이 반기는 남부 대표 일일 해변 성입니다."
  },
  {
    id: "vn_tayninh",
    name_kr: "떠이닌",
    name_en: "Tay Ninh",
    level: "vietnam",
    lat: 11.3117,
    lng: 106.0983,
    region_group: "남부",
    neighbors: ["vn_hochiminh", "vn_binhduong"],
    description: "까오다이교 총본산 성당과 남부 최고봉 바덴 산케이블카가 우뚝 선 서부 국경 성입니다."
  },
  {
    id: "vn_dongnai",
    name_kr: "동나이",
    name_en: "Dong Nai",
    level: "vietnam",
    lat: 11.0500,
    lng: 107.0000,
    region_group: "남부",
    neighbors: ["vn_hochiminh", "vn_binhduong", "vn_binhthuan", "vn_vungtau"],
    description: "비엔호아 시를 중심으로 남부 제조업과 물류 인프라의 중심역할을 담당하는 성입니다."
  },
  {
    id: "vn_binhduong",
    name_kr: "빈즈엉",
    name_en: "Binh Duong",
    level: "vietnam",
    lat: 11.1667,
    lng: 106.6667,
    region_group: "남부",
    neighbors: ["vn_hochiminh", "vn_tayninh", "vn_dongnai"],
    description: "첨단 신도시와 해외 글로벌 제조 테크 기업 단지가 밀집한 경제 성장 성입니다."
  },
  {
    id: "vn_nghean",
    name_kr: "응에안",
    name_en: "Nghe An",
    level: "vietnam",
    lat: 19.3333,
    lng: 104.8333,
    region_group: "중부",
    neighbors: ["vn_thanhhoa", "vn_quangbinh"],
    description: "호치민 주석의 태생지 킴련 마을과 큼직한 면적을 자랑하는 북중부 중심 성입니다."
  },
  {
    id: "vn_thanhhoa",
    name_kr: "타인호아",
    name_en: "Thanh Hoa",
    level: "vietnam",
    lat: 19.8075,
    lng: 105.7764,
    region_group: "중부",
    neighbors: ["vn_hanoi", "vn_nghean", "vn_ninhbinh"],
    description: "호 왕조 성채 유적과 삼선 해수욕장이 유구한 역사를 증언하는 풍요로운 성입니다."
  },
  {
    id: "vn_daklak",
    name_kr: "닥락",
    name_en: "Dak Lak",
    level: "vietnam",
    lat: 12.6667,
    lng: 108.0500,
    region_group: "중부",
    neighbors: ["vn_nhatrang", "vn_dalat", "vn_gialai"],
    description: "베트남 고품질 커피의 수도 부온마투옷과 코끼리 생태 문화가 넘치는 중부 고원 성입니다."
  },
  {
    id: "vn_thainguyen",
    name_kr: "타이응우옌",
    name_en: "Thai Nguyen",
    level: "vietnam",
    lat: 21.5928,
    lng: 105.8442,
    region_group: "북부",
    neighbors: ["vn_hanoi", "vn_bacninh", "vn_phutho"],
    description: "은은한 우전 차 차밭 향기와 최첨단 IT 기술 제조 기지가 만나는 차의 고장입니다."
  },
  {
    id: "vn_bacninh",
    name_kr: "박닌",
    name_en: "Bac Ninh",
    level: "vietnam",
    lat: 21.1861,
    lng: 106.0763,
    region_group: "북부",
    neighbors: ["vn_hanoi", "vn_thainguyen", "vn_quangninh", "vn_haiduong"],
    description: "전통 콴호 민요의 감성과 글로벌 첨단 반도체·전자 산업이 숨쉬는 활기찬 성입니다."
  },
  {
    id: "vn_hagiang",
    name_kr: "하장",
    name_en: "Ha Giang",
    level: "vietnam",
    lat: 22.8233,
    lng: 104.9839,
    region_group: "북부",
    neighbors: ["vn_laocai", "vn_thainguyen"],
    description: "베트남 최북단 룽꾸 깃대와 웅장한 마삐렝 협곡 라이딩으로 명성 높은 성입니다."
  },
  {
    id: "vn_camau",
    name_kr: "까마우",
    name_en: "Ca Mau",
    level: "vietnam",
    lat: 9.1769,
    lng: 105.1524,
    region_group: "남부",
    neighbors: ["vn_cantho", "vn_kiengiang"],
    description: "베트남 영토 최남단 곶 표지석과 국립 맹그로브 숲 생태계가 펼쳐지는 곶 성입니다."
  },
  {
    id: "vn_dienbien",
    name_kr: "디엔비엔",
    name_en: "Dien Bien",
    level: "vietnam",
    lat: 21.3860,
    lng: 103.0230,
    region_group: "북부",
    neighbors: ["vn_laocai"],
    description: "디엔비엔푸 전승 기념탑과 소수민족의 고유한 전통 풍속이 보존된 서북부 국경 성입니다."
  },
  {
    id: "vn_quangbinh",
    name_kr: "꽝빈",
    name_en: "Quang Binh",
    level: "vietnam",
    lat: 17.4686,
    lng: 106.6235,
    region_group: "중부",
    neighbors: ["vn_hue", "vn_nghean"],
    description: "세계 최대 동굴 앤동 동굴과 퐁냐께방 국립공원의 지하 탐험 천국 성입니다."
  },
  {
    id: "vn_thaibinh",
    name_kr: "타이빈",
    name_en: "Thai Binh",
    level: "vietnam",
    lat: 20.4464,
    lng: 106.3364,
    region_group: "북부",
    neighbors: ["vn_haiphong", "vn_ninhbinh", "vn_haiduong"],
    description: "홍강 델타 평야의 곡창지대이자 게이오 사찰 등 고즈넉한 북부 농경 성입니다."
  },
  {
    id: "vn_haiduong",
    name_kr: "하이즈엉",
    name_en: "Hai Duong",
    level: "vietnam",
    lat: 20.9380,
    lng: 106.3190,
    region_group: "북부",
    neighbors: ["vn_hanoi", "vn_haiphong", "vn_bacninh", "vn_thaibinh"],
    description: "달콤한 녹두 떡(바인 찌에우)의 본장이자 북부 교통 상업의 중추 성입니다."
  },
  {
    id: "vn_phutho",
    name_kr: "푸토",
    name_en: "Phu Tho",
    level: "vietnam",
    lat: 21.3200,
    lng: 105.2200,
    region_group: "북부",
    neighbors: ["vn_hanoi", "vn_thainguyen"],
    description: "베트남 건국 신화의 웅왕 신전과 웅왕 축제가 개최되는 베트남 민족의 뿌리 성입니다."
  },
  {
    id: "vn_gialai",
    name_kr: "자라이",
    name_en: "Gia Lai",
    level: "vietnam",
    lat: 13.9833,
    lng: 108.0000,
    region_group: "중부",
    neighbors: ["vn_daklak", "vn_nhatrang", "vn_quangnam"],
    description: "플레이쿠 화산호수 똔롱과 울창한 고원 징(Gong) 문화 유산이 숨쉬는 중부 고원 성입니다."
  },
  {
    id: "vn_angiang",
    name_kr: "안장",
    name_en: "An Giang",
    level: "vietnam",
    lat: 10.3833,
    lng: 105.4167,
    region_group: "남부",
    neighbors: ["vn_cantho", "vn_kiengiang", "vn_dongthap"],
    description: "삼산 메콩강 수로와 차짜우 멜라루카 숲 수로 탐험이 유서 깊은 서남부 성입니다."
  },
  {
    id: "vn_dongthap",
    name_kr: "동탑",
    name_en: "Dong Thap",
    level: "vietnam",
    lat: 10.4667,
    lng: 105.6333,
    region_group: "남부",
    neighbors: ["vn_cantho", "vn_angiang", "vn_vinhlong"],
    description: "사덱 연꽃 마을과 화려한 관상용 꽃 농원이 펼쳐지는 메콩 연꽃 성입니다."
  },
  {
    id: "vn_vinhlong",
    name_kr: "빈롱",
    name_en: "Vinh Long",
    level: "vietnam",
    lat: 10.2500,
    lng: 105.9667,
    region_group: "남부",
    neighbors: ["vn_hochiminh", "vn_cantho", "vn_dongthap"],
    description: "티엔강과 하우강 사이에 둘러싸인 과수원 섬과 민속 홈스테이의 고장 성입니다."
  }
];
