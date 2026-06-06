export interface TouristSpot { id: string; name: string; description: string; imageUrl: string; }
export interface CityData { id: string; name: string; description: string; imageUrl: string; spots: TouristSpot[]; }
export interface StateData { id: string; name: string; description: string; imageUrl: string; cities: CityData[]; }

const imgCity = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1000&auto=format&fit=crop";
const imgNature = "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop";
const imgTemple = "https://images.unsplash.com/photo-1600100397608-f010f41cb8eb?q=80&w=1000&auto=format&fit=crop";
const imgBeach = "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop";
const imgFort = "https://images.unsplash.com/photo-1532015243166-7b43c68383a1?q=80&w=1000&auto=format&fit=crop";

export const travelManualData: StateData[] = [
  {
    id: "andhra-pradesh", name: "Andhra Pradesh", description: "Known for its rich cultural heritage and coastline.", imageUrl: imgTemple,
    cities: [
      { id: "visakhapatnam", name: "Visakhapatnam", description: "The Jewel of the East Coast.", imageUrl: imgBeach, spots: [
          { id: "araku", name: "Araku Valley", description: "Famous for its coffee plantations.", imageUrl: imgNature },
          { id: "rk-beach", name: "RK Beach", description: "A popular city beach with a submarine museum.", imageUrl: imgBeach },
          { id: "borra-caves", name: "Borra Caves", description: "Limestone caves with stalactite formations.", imageUrl: imgNature }
      ]},
      { id: "tirupati", name: "Tirupati", description: "The spiritual capital of Andhra.", imageUrl: imgTemple, spots: [
          { id: "venkateswara", name: "Sri Venkateswara Temple", description: "One of the richest temples in the world.", imageUrl: imgTemple },
          { id: "chandragiri", name: "Chandragiri Fort", description: "An historical fort built in the 11th century.", imageUrl: imgFort }
      ]}
    ]
  },
  {
    id: "arunachal-pradesh", name: "Arunachal Pradesh", description: "The land of the dawn-lit mountains.", imageUrl: imgNature,
    cities: [
      { id: "tawang", name: "Tawang", description: "Known for its beautiful monastery.", imageUrl: imgTemple, spots: [
          { id: "tawang-monastery", name: "Tawang Monastery", description: "The largest monastery in India.", imageUrl: imgTemple },
          { id: "sela-pass", name: "Sela Pass", description: "A high-altitude mountain pass.", imageUrl: imgNature },
          { id: "madhuri-lake", name: "Madhuri Lake", description: "A scenic lake nestled in the Himalayas.", imageUrl: imgNature }
      ]},
      { id: "ziro", name: "Ziro", description: "A picturesque valley.", imageUrl: imgNature, spots: [
          { id: "ziro-valley", name: "Ziro Valley", description: "Famous for its pine hills and rice fields.", imageUrl: imgNature }
      ]}
    ]
  },
  {
    id: "assam", name: "Assam", description: "Famous for its tea gardens and wildlife.", imageUrl: imgNature,
    cities: [
      { id: "guwahati", name: "Guwahati", description: "The gateway to North-East India.", imageUrl: imgCity, spots: [
          { id: "kamakhya", name: "Kamakhya Temple", description: "A revered ancient Hindu temple.", imageUrl: imgTemple },
          { id: "umananda", name: "Umananda Island", description: "The smallest river island in the world.", imageUrl: imgNature }
      ]},
      { id: "kaziranga", name: "Kaziranga", description: "Wildlife hotspot.", imageUrl: imgNature, spots: [
          { id: "kaziranga-np", name: "Kaziranga National Park", description: "Home of the one-horned rhino.", imageUrl: imgNature },
          { id: "tea-estates", name: "Assam Tea Estates", description: "Lush green rolling tea gardens.", imageUrl: imgNature }
      ]}
    ]
  },
  {
    id: "bihar", name: "Bihar", description: "The birthplace of Buddhism.", imageUrl: imgTemple,
    cities: [
      { id: "bodh-gaya", name: "Bodh Gaya", description: "The most holy place for Buddhists.", imageUrl: imgTemple, spots: [
          { id: "mahabodhi", name: "Mahabodhi Temple", description: "The site where Buddha attained enlightenment.", imageUrl: imgTemple },
          { id: "great-buddha", name: "Great Buddha Statue", description: "An 80-foot tall statue of Lord Buddha.", imageUrl: imgTemple }
      ]},
      { id: "nalanda", name: "Nalanda", description: "An ancient center of learning.", imageUrl: imgFort, spots: [
          { id: "nalanda-ruins", name: "Nalanda University Ruins", description: "Remains of the ancient university.", imageUrl: imgFort }
      ]}
    ]
  },
  {
    id: "chhattisgarh", name: "Chhattisgarh", description: "Known for rare wildlife and waterfalls.", imageUrl: imgNature,
    cities: [
      { id: "jagdalpur", name: "Jagdalpur", description: "The tourism capital.", imageUrl: imgNature, spots: [
          { id: "chitrakote", name: "Chitrakote Falls", description: "The Niagara Falls of India.", imageUrl: imgNature },
          { id: "tirathgarh", name: "Tirathgarh Falls", description: "A stunning block type waterfall.", imageUrl: imgNature }
      ]},
      { id: "raipur", name: "Raipur", description: "The capital city.", imageUrl: imgCity, spots: [
          { id: "purkhouti", name: "Purkhouti Muktangan", description: "An open-air museum and park.", imageUrl: imgNature }
      ]}
    ]
  },
  {
    id: "goa", name: "Goa", description: "India's pocket-sized paradise.", imageUrl: imgBeach,
    cities: [
      { id: "north-goa", name: "North Goa", description: "Lively beaches and nightlife.", imageUrl: imgBeach, spots: [
          { id: "baga", name: "Baga Beach", description: "Famous for its water sports and shacks.", imageUrl: imgBeach },
          { id: "aguada", name: "Fort Aguada", description: "A 17th-century Portuguese fort.", imageUrl: imgFort },
          { id: "anjuna", name: "Anjuna Beach", description: "Known for its flea market and trance parties.", imageUrl: imgBeach }
      ]},
      { id: "south-goa", name: "South Goa", description: "Serene and quiet beaches.", imageUrl: imgBeach, spots: [
          { id: "palolem", name: "Palolem Beach", description: "A beautiful crescent-shaped beach.", imageUrl: imgBeach },
          { id: "dudhsagar", name: "Dudhsagar Falls", description: "A spectacular four-tiered waterfall.", imageUrl: imgNature }
      ]}
    ]
  },
  {
    id: "gujarat", name: "Gujarat", description: "The land of legends and lions.", imageUrl: imgFort,
    cities: [
      { id: "ahmedabad", name: "Ahmedabad", description: "India's first UNESCO World Heritage City.", imageUrl: imgCity, spots: [
          { id: "sabarmati", name: "Sabarmati Ashram", description: "The residence of Mahatma Gandhi.", imageUrl: imgTemple },
          { id: "kankaria", name: "Kankaria Lake", description: "A large circular lake with an island garden.", imageUrl: imgNature }
      ]},
      { id: "kutch", name: "Kutch", description: "The white desert.", imageUrl: imgNature, spots: [
          { id: "rann", name: "Rann of Kutch", description: "A massive salt marsh in the Thar Desert.", imageUrl: imgNature },
          { id: "dholavira", name: "Dholavira", description: "Ancient Indus Valley Civilization ruins.", imageUrl: imgFort }
      ]},
      { id: "gir", name: "Gir", description: "Wildlife reserve.", imageUrl: imgNature, spots: [
          { id: "gir-np", name: "Gir National Park", description: "The only home to the Asiatic Lion.", imageUrl: imgNature }
      ]}
    ]
  },
  {
    id: "haryana", name: "Haryana", description: "A blend of ancient heritage and modern cities.", imageUrl: imgCity,
    cities: [
      { id: "gurugram", name: "Gurugram", description: "The cyber city.", imageUrl: imgCity, spots: [
          { id: "cyber-hub", name: "Cyber Hub", description: "A premium food and entertainment destination.", imageUrl: imgCity },
          { id: "sultanpur", name: "Sultanpur Bird Sanctuary", description: "A popular bird watching haven.", imageUrl: imgNature }
      ]},
      { id: "kurukshetra", name: "Kurukshetra", description: "The land of the Mahabharata.", imageUrl: imgTemple, spots: [
          { id: "brahma-sarovar", name: "Brahma Sarovar", description: "An ancient water pool sacred to Hinduism.", imageUrl: imgTemple }
      ]}
    ]
  },
  {
    id: "himachal-pradesh", name: "Himachal Pradesh", description: "The Abode of Snow.", imageUrl: imgNature,
    cities: [
      { id: "manali", name: "Manali", description: "A high-altitude Himalayan resort town.", imageUrl: imgNature, spots: [
          { id: "rohtang", name: "Rohtang Pass", description: "A scenic mountain pass.", imageUrl: imgNature },
          { id: "solang", name: "Solang Valley", description: "Famous for adventure sports.", imageUrl: imgNature },
          { id: "hidimba", name: "Hidimba Temple", description: "An ancient cave temple surrounded by cedar forests.", imageUrl: imgTemple }
      ]},
      { id: "shimla", name: "Shimla", description: "The colonial summer capital.", imageUrl: imgCity, spots: [
          { id: "mall-road", name: "The Mall Road", description: "The main shopping street.", imageUrl: imgCity },
          { id: "jakhoo", name: "Jakhoo Temple", description: "An ancient temple dedicated to Lord Hanuman.", imageUrl: imgTemple }
      ]},
      { id: "dharamshala", name: "Dharamshala", description: "Home of the Dalai Lama.", imageUrl: imgTemple, spots: [
          { id: "mcleodganj", name: "McLeod Ganj", description: "Known as Little Lhasa.", imageUrl: imgCity }
      ]}
    ]
  },
  {
    id: "jharkhand", name: "Jharkhand", description: "The land of forests and waterfalls.", imageUrl: imgNature,
    cities: [
      { id: "ranchi", name: "Ranchi", description: "The City of Waterfalls.", imageUrl: imgNature, spots: [
          { id: "hundru", name: "Hundru Falls", description: "One of the highest waterfalls in the state.", imageUrl: imgNature },
          { id: "dassam", name: "Dassam Falls", description: "A stunning waterfall on the Kanchi River.", imageUrl: imgNature },
          { id: "rock-garden", name: "Rock Garden", description: "A beautiful park built from the rocks of Gonda Hill.", imageUrl: imgCity }
      ]},
      { id: "deoghar", name: "Deoghar", description: "A major Hindu pilgrimage center.", imageUrl: imgTemple, spots: [
          { id: "baidyanath", name: "Baidyanath Temple", description: "One of the twelve Jyotirlingas.", imageUrl: imgTemple }
      ]}
    ]
  },
  {
    id: "karnataka", name: "Karnataka", description: "A blend of tech, heritage, and nature.", imageUrl: imgFort,
    cities: [
      { id: "bangalore", name: "Bengaluru", description: "The Silicon Valley of India.", imageUrl: imgCity, spots: [
          { id: "lalbagh", name: "Lalbagh Botanical Garden", description: "A historic garden with a glasshouse.", imageUrl: imgNature },
          { id: "bangalore-palace", name: "Bangalore Palace", description: "A Tudor-style architectural masterpiece.", imageUrl: imgFort }
      ]},
      { id: "mysore", name: "Mysore", description: "The City of Palaces.", imageUrl: imgFort, spots: [
          { id: "mysore-palace", name: "Mysore Palace", description: "An incredibly opulent royal residence.", imageUrl: imgFort },
          { id: "chamundi", name: "Chamundi Hill", description: "A scenic hill with an ancient temple.", imageUrl: imgTemple }
      ]},
      { id: "hampi", name: "Hampi", description: "Ancient ruined village.", imageUrl: imgFort, spots: [
          { id: "virupaksha", name: "Virupaksha Temple", description: "A historic towering temple.", imageUrl: imgTemple },
          { id: "vitthala", name: "Vitthala Temple", description: "Famous for its musical pillars.", imageUrl: imgFort }
      ]},
      { id: "coorg", name: "Coorg", description: "The Scotland of India.", imageUrl: imgNature, spots: [
          { id: "abbey-falls", name: "Abbey Falls", description: "A beautiful waterfall amidst coffee estates.", imageUrl: imgNature },
          { id: "dubare", name: "Dubare Elephant Camp", description: "An elephant training camp.", imageUrl: imgNature }
      ]}
    ]
  },
  {
    id: "kerala", name: "Kerala", description: "God's Own Country, known for beaches and backwaters.", imageUrl: imgNature,
    cities: [
      { id: "munnar", name: "Munnar", description: "A serene hill station.", imageUrl: imgNature, spots: [
          { id: "tea-museum", name: "Tea Museum", description: "Learn about the history of tea plantations.", imageUrl: imgNature },
          { id: "eravikulam", name: "Eravikulam National Park", description: "Home to the endangered Nilgiri Tahr.", imageUrl: imgNature },
          { id: "mattupetty", name: "Mattupetty Dam", description: "A scenic dam offering boat rides.", imageUrl: imgNature }
      ]},
      { id: "alleppey", name: "Alleppey", description: "The Venice of the East.", imageUrl: imgNature, spots: [
          { id: "backwaters", name: "Kerala Backwaters", description: "Romantic houseboat cruises.", imageUrl: imgNature },
          { id: "marari", name: "Marari Beach", description: "A quiet, pristine beach.", imageUrl: imgBeach }
      ]},
      { id: "kochi", name: "Kochi", description: "The Queen of the Arabian Sea.", imageUrl: imgCity, spots: [
          { id: "fort-kochi", name: "Fort Kochi", description: "Known for Chinese fishing nets and colonial architecture.", imageUrl: imgBeach },
          { id: "mattancherry", name: "Mattancherry Palace", description: "A Portuguese palace featuring Kerala murals.", imageUrl: imgFort }
      ]},
      { id: "wayanad", name: "Wayanad", description: "Lush green forests and wildlife.", imageUrl: imgNature, spots: [
          { id: "chembra", name: "Chembra Peak", description: "The highest peak in Wayanad.", imageUrl: imgNature },
          { id: "edakkal", name: "Edakkal Caves", description: "Caves with ancient petroglyphs.", imageUrl: imgFort }
      ]}
    ]
  },
  {
    id: "madhya-pradesh", name: "Madhya Pradesh", description: "The Heart of India.", imageUrl: imgFort,
    cities: [
      { id: "bhopal", name: "Bhopal", description: "The City of Lakes.", imageUrl: imgCity, spots: [
          { id: "upper-lake", name: "Upper Lake", description: "The oldest man-made lake in India.", imageUrl: imgNature },
          { id: "bhimbetka", name: "Bhimbetka Rock Shelters", description: "Ancient prehistoric cave paintings.", imageUrl: imgNature }
      ]},
      { id: "khajuraho", name: "Khajuraho", description: "Known for its stunning temples.", imageUrl: imgTemple, spots: [
          { id: "khajuraho-temples", name: "Group of Monuments", description: "UNESCO site known for intricate sculptures.", imageUrl: imgTemple }
      ]},
      { id: "ujjain", name: "Ujjain", description: "An ancient city on the Shipra River.", imageUrl: imgTemple, spots: [
          { id: "mahakaleshwar", name: "Mahakaleshwar Temple", description: "A highly revered Shiva temple.", imageUrl: imgTemple }
      ]}
    ]
  },
  {
    id: "maharashtra", name: "Maharashtra", description: "Bustling metropolises and coastal forts.", imageUrl: imgCity,
    cities: [
      { id: "mumbai", name: "Mumbai", description: "The City of Dreams.", imageUrl: imgCity, spots: [
          { id: "gateway", name: "Gateway of India", description: "An iconic waterfront monument.", imageUrl: imgCity },
          { id: "marine-drive", name: "Marine Drive", description: "A famous sweeping coastal boulevard.", imageUrl: imgCity },
          { id: "elephanta", name: "Elephanta Caves", description: "Ancient rock-cut temples on an island.", imageUrl: imgTemple }
      ]},
      { id: "pune", name: "Pune", description: "The Oxford of the East.", imageUrl: imgCity, spots: [
          { id: "shaniwar-wada", name: "Shaniwar Wada", description: "A historical fortification.", imageUrl: imgFort },
          { id: "aga-khan", name: "Aga Khan Palace", description: "A majestic palace of historical significance.", imageUrl: imgFort }
      ]},
      { id: "aurangabad", name: "Aurangabad", description: "The Tourism Capital of Maharashtra.", imageUrl: imgFort, spots: [
          { id: "ajanta", name: "Ajanta Caves", description: "Incredible rock-cut Buddhist monuments.", imageUrl: imgTemple },
          { id: "ellora", name: "Ellora Caves", description: "Massive monolithic rock-cut temples.", imageUrl: imgTemple }
      ]},
      { id: "mahabaleshwar", name: "Mahabaleshwar", description: "A forested hill station.", imageUrl: imgNature, spots: [
          { id: "arthurs-seat", name: "Arthur's Seat", description: "A popular viewpoint.", imageUrl: imgNature },
          { id: "venna-lake", name: "Venna Lake", description: "A scenic lake offering boat rides.", imageUrl: imgNature }
      ]}
    ]
  },
  {
    id: "manipur", name: "Manipur", description: "The Jeweled Land of the Northeast.", imageUrl: imgNature,
    cities: [
      { id: "imphal", name: "Imphal", description: "The capital city.", imageUrl: imgCity, spots: [
          { id: "loktak", name: "Loktak Lake", description: "The largest freshwater lake in Northeast India.", imageUrl: imgNature },
          { id: "kangla", name: "Kangla Fort", description: "The ancient seat of Manipuri rulers.", imageUrl: imgFort }
      ]}
    ]
  },
  {
    id: "meghalaya", name: "Meghalaya", description: "The Abode of Clouds.", imageUrl: imgNature,
    cities: [
      { id: "shillong", name: "Shillong", description: "The Scotland of the East.", imageUrl: imgNature, spots: [
          { id: "umiam", name: "Umiam Lake", description: "A mesmerizing man-made reservoir.", imageUrl: imgNature },
          { id: "elephant-falls", name: "Elephant Falls", description: "A tiered waterfall set in a fern-covered valley.", imageUrl: imgNature }
      ]},
      { id: "cherrapunji", name: "Cherrapunji", description: "One of the wettest places on Earth.", imageUrl: imgNature, spots: [
          { id: "living-root", name: "Living Root Bridges", description: "Bridges naturally made from tree roots.", imageUrl: imgNature },
          { id: "nohkalikai", name: "Nohkalikai Falls", description: "The tallest plunge waterfall in India.", imageUrl: imgNature }
      ]}
    ]
  },
  {
    id: "mizoram", name: "Mizoram", description: "The land of the hill people.", imageUrl: imgNature,
    cities: [
      { id: "aizawl", name: "Aizawl", description: "A peaceful capital built on a ridge.", imageUrl: imgCity, spots: [
          { id: "reiek", name: "Reiek Tlang", description: "A scenic mountain offering panoramic views.", imageUrl: imgNature },
          { id: "solomon", name: "Solomon's Temple", description: "A massive, beautiful church.", imageUrl: imgTemple }
      ]}
    ]
  },
  {
    id: "nagaland", name: "Nagaland", description: "Famous for its tribal culture.", imageUrl: imgNature,
    cities: [
      { id: "kohima", name: "Kohima", description: "A historic and cultural center.", imageUrl: imgCity, spots: [
          { id: "dzukou", name: "Dzukou Valley", description: "A breathtaking valley famous for seasonal flowers.", imageUrl: imgNature },
          { id: "naga-heritage", name: "Naga Heritage Village", description: "The site of the famous Hornbill Festival.", imageUrl: imgCity }
      ]},
      { id: "dimapur", name: "Dimapur", description: "The gateway to Nagaland.", imageUrl: imgCity, spots: [
          { id: "kachari", name: "Kachari Ruins", description: "Ancient monolithic ruins.", imageUrl: imgFort }
      ]}
    ]
  },
  {
    id: "odisha", name: "Odisha", description: "The soul of Incredible India.", imageUrl: imgTemple,
    cities: [
      { id: "puri", name: "Puri", description: "A major pilgrimage center.", imageUrl: imgTemple, spots: [
          { id: "jagannath", name: "Jagannath Temple", description: "A famous ancient Hindu temple.", imageUrl: imgTemple },
          { id: "puri-beach", name: "Puri Beach", description: "A sacred and bustling beach.", imageUrl: imgBeach },
          { id: "konark", name: "Konark Sun Temple", description: "A 13th-century Sun Temple shaped like a chariot.", imageUrl: imgTemple }
      ]},
      { id: "bhubaneswar", name: "Bhubaneswar", description: "The Temple City of India.", imageUrl: imgTemple, spots: [
          { id: "lingaraj", name: "Lingaraj Temple", description: "An ancient temple dedicated to Harihara.", imageUrl: imgTemple },
          { id: "udayagiri", name: "Udayagiri and Khandagiri Caves", description: "Ancient rock-cut caves.", imageUrl: imgFort }
      ]}
    ]
  },
  {
    id: "punjab", name: "Punjab", description: "The land of five rivers.", imageUrl: imgTemple,
    cities: [
      { id: "amritsar", name: "Amritsar", description: "The spiritual center of the Sikh religion.", imageUrl: imgTemple, spots: [
          { id: "golden-temple", name: "Golden Temple", description: "The holiest Gurdwara of Sikhism.", imageUrl: imgTemple },
          { id: "jallianwala", name: "Jallianwala Bagh", description: "A historic public garden.", imageUrl: imgFort },
          { id: "wagah", name: "Wagah Border", description: "Famous for the daily beating retreat ceremony.", imageUrl: imgCity }
      ]},
      { id: "chandigarh", name: "Chandigarh", description: "The first planned city of India.", imageUrl: imgCity, spots: [
          { id: "rock-garden", name: "Rock Garden", description: "A sculpture garden made of recycled materials.", imageUrl: imgNature },
          { id: "sukhna", name: "Sukhna Lake", description: "A serene reservoir at the foothills of the Himalayas.", imageUrl: imgNature }
      ]}
    ]
  },
  {
    id: "rajasthan", name: "Rajasthan", description: "The Land of Kings.", imageUrl: imgFort,
    cities: [
      { id: "jaipur", name: "Jaipur", description: "The Pink City.", imageUrl: imgFort, spots: [
          { id: "amer-fort", name: "Amer Fort", description: "A majestic red sandstone fort.", imageUrl: imgFort },
          { id: "hawa-mahal", name: "Hawa Mahal", description: "The Palace of Winds.", imageUrl: imgFort },
          { id: "city-palace-jaipur", name: "City Palace", description: "A beautiful fusion of Mughal and Rajput architecture.", imageUrl: imgFort },
          { id: "jantar-mantar", name: "Jantar Mantar", description: "An ancient astronomical observatory.", imageUrl: imgFort }
      ]},
      { id: "udaipur", name: "Udaipur", description: "The City of Lakes.", imageUrl: imgFort, spots: [
          { id: "city-palace-udaipur", name: "City Palace", description: "A massive palace complex on Lake Pichola.", imageUrl: imgFort },
          { id: "lake-pichola", name: "Lake Pichola", description: "An artificial fresh water lake housing island palaces.", imageUrl: imgNature },
          { id: "fateh-sagar", name: "Fateh Sagar Lake", description: "A scenic lake offering boat rides.", imageUrl: imgNature }
      ]},
      { id: "jodhpur", name: "Jodhpur", description: "The Blue City.", imageUrl: imgCity, spots: [
          { id: "mehrangarh", name: "Mehrangarh Fort", description: "One of the largest forts in India.", imageUrl: imgFort },
          { id: "umaid-bhawan", name: "Umaid Bhawan Palace", description: "A magnificent royal residence.", imageUrl: imgFort }
      ]},
      { id: "jaisalmer", name: "Jaisalmer", description: "The Golden City.", imageUrl: imgNature, spots: [
          { id: "jaisalmer-fort", name: "Jaisalmer Fort", description: "A living fort in the Thar Desert.", imageUrl: imgFort },
          { id: "sam-sand-dunes", name: "Sam Sand Dunes", description: "Experience desert safaris and camping.", imageUrl: imgNature }
      ]}
    ]
  },
  {
    id: "sikkim", name: "Sikkim", description: "A small Himalayan state.", imageUrl: imgNature,
    cities: [
      { id: "gangtok", name: "Gangtok", description: "A vibrant capital city in the clouds.", imageUrl: imgNature, spots: [
          { id: "tsomgo", name: "Tsomgo Lake", description: "A stunning glacial lake.", imageUrl: imgNature },
          { id: "nathula", name: "Nathu La Pass", description: "A high altitude mountain pass connecting India and Tibet.", imageUrl: imgNature },
          { id: "rumtek", name: "Rumtek Monastery", description: "One of the largest and most significant monasteries in Sikkim.", imageUrl: imgTemple }
      ]},
      { id: "pelling", name: "Pelling", description: "Known for its magnificent views of Kanchenjunga.", imageUrl: imgNature, spots: [
          { id: "pemayangtse", name: "Pemayangtse Monastery", description: "One of the oldest monasteries in Sikkim.", imageUrl: imgTemple }
      ]}
    ]
  },
  {
    id: "tamil-nadu", name: "Tamil Nadu", description: "Famous for its Dravidian-style Hindu temples.", imageUrl: imgTemple,
    cities: [
      { id: "chennai", name: "Chennai", description: "The cultural capital of South India.", imageUrl: imgCity, spots: [
          { id: "marina", name: "Marina Beach", description: "The longest natural urban beach in India.", imageUrl: imgBeach },
          { id: "kapaleeshwarar", name: "Kapaleeshwarar Temple", description: "A magnificent ancient Shiva temple.", imageUrl: imgTemple }
      ]},
      { id: "madurai", name: "Madurai", description: "An ancient city centered around a massive temple.", imageUrl: imgTemple, spots: [
          { id: "meenakshi", name: "Meenakshi Temple", description: "A historic Hindu temple with colorful gopurams.", imageUrl: imgTemple },
          { id: "thirumalai", name: "Thirumalai Nayakkar Mahal", description: "A grand 17th-century palace.", imageUrl: imgFort }
      ]},
      { id: "ooty", name: "Ooty", description: "The Queen of Hill Stations.", imageUrl: imgNature, spots: [
          { id: "ooty-lake", name: "Ooty Lake", description: "A scenic artificial lake.", imageUrl: imgNature },
          { id: "botanical-garden", name: "Government Botanical Garden", description: "Lush gardens featuring thousands of plant species.", imageUrl: imgNature }
      ]}
    ]
  },
  {
    id: "telangana", name: "Telangana", description: "A blend of history and modern IT culture.", imageUrl: imgFort,
    cities: [
      { id: "hyderabad", name: "Hyderabad", description: "The City of Pearls.", imageUrl: imgCity, spots: [
          { id: "charminar", name: "Charminar", description: "An iconic mosque and monument.", imageUrl: imgFort },
          { id: "golconda", name: "Golconda Fort", description: "A massive, ancient citadel complex.", imageUrl: imgFort },
          { id: "hussain-sagar", name: "Hussain Sagar Lake", description: "A necklace-shaped lake with a Buddha statue.", imageUrl: imgNature },
          { id: "ramoji", name: "Ramoji Film City", description: "The largest integrated film city in the world.", imageUrl: imgCity }
      ]},
      { id: "warangal", name: "Warangal", description: "Known for its Kakatiya dynasty heritage.", imageUrl: imgFort, spots: [
          { id: "thousand-pillar", name: "Thousand Pillar Temple", description: "An ancient temple known for its intricately carved pillars.", imageUrl: imgTemple },
          { id: "warangal-fort", name: "Warangal Fort", description: "Remains of an ancient Kakatiya fortress.", imageUrl: imgFort }
      ]}
    ]
  },
  {
    id: "tripura", name: "Tripura", description: "Known for its palaces and tribal culture.", imageUrl: imgFort,
    cities: [
      { id: "agartala", name: "Agartala", description: "The capital city.", imageUrl: imgCity, spots: [
          { id: "ujjayanta", name: "Ujjayanta Palace", description: "A stunning former royal palace.", imageUrl: imgFort },
          { id: "neermahal", name: "Neermahal", description: "A beautiful water palace situated in the middle of Rudrasagar Lake.", imageUrl: imgFort }
      ]}
    ]
  },
  {
    id: "uttar-pradesh", name: "Uttar Pradesh", description: "The heartland of India.", imageUrl: imgFort,
    cities: [
      { id: "agra", name: "Agra", description: "Home to iconic Mughal architecture.", imageUrl: imgFort, spots: [
          { id: "taj-mahal", name: "Taj Mahal", description: "A white marble mausoleum and World Heritage Site.", imageUrl: imgFort },
          { id: "agra-fort", name: "Agra Fort", description: "A historical fort and former royal residence.", imageUrl: imgFort },
          { id: "fatehpur-sikri", name: "Fatehpur Sikri", description: "An ancient fortified city.", imageUrl: imgFort }
      ]},
      { id: "varanasi", name: "Varanasi", description: "The spiritual capital of India.", imageUrl: imgTemple, spots: [
          { id: "ghats", name: "Varanasi Ghats", description: "Riverfront steps leading to the banks of the Ganges.", imageUrl: imgTemple },
          { id: "kashi-vishwanath", name: "Kashi Vishwanath Temple", description: "One of the most famous Hindu temples dedicated to Shiva.", imageUrl: imgTemple },
          { id: "sarnath", name: "Sarnath", description: "The place where Gautama Buddha first taught the Dharma.", imageUrl: imgTemple }
      ]},
      { id: "lucknow", name: "Lucknow", description: "The City of Nawabs.", imageUrl: imgCity, spots: [
          { id: "bara-imambara", name: "Bara Imambara", description: "A grand shrine complex known for its labyrinth.", imageUrl: imgFort },
          { id: "rumi-darwaza", name: "Rumi Darwaza", description: "An imposing, ornate gateway.", imageUrl: imgFort }
      ]}
    ]
  },
  {
    id: "uttarakhand", name: "Uttarakhand", description: "The Land of the Gods.", imageUrl: imgNature,
    cities: [
      { id: "rishikesh", name: "Rishikesh", description: "The Yoga Capital of the World.", imageUrl: imgNature, spots: [
          { id: "lakshman-jhula", name: "Lakshman Jhula", description: "An iconic suspension bridge across the Ganges.", imageUrl: imgNature },
          { id: "triveni-ghat", name: "Triveni Ghat", description: "A sacred bathing ghat on the Ganges.", imageUrl: imgTemple }
      ]},
      { id: "nainital", name: "Nainital", description: "A popular hill station built around a lake.", imageUrl: imgNature, spots: [
          { id: "naini-lake", name: "Naini Lake", description: "A beautiful, natural freshwater body.", imageUrl: imgNature },
          { id: "snow-view", name: "Snow View Point", description: "Offers majestic views of the Himalayas.", imageUrl: imgNature }
      ]},
      { id: "mussoorie", name: "Mussoorie", description: "The Queen of the Hills.", imageUrl: imgNature, spots: [
          { id: "kempty-falls", name: "Kempty Falls", description: "A popular cascading waterfall.", imageUrl: imgNature },
          { id: "mall-road-mussoorie", name: "The Mall Road", description: "A scenic promenade for shopping and dining.", imageUrl: imgCity }
      ]}
    ]
  },
  {
    id: "west-bengal", name: "West Bengal", description: "Famous for its literature and the Sundarbans.", imageUrl: imgCity,
    cities: [
      { id: "kolkata", name: "Kolkata", description: "The Cultural Capital of India.", imageUrl: imgCity, spots: [
          { id: "victoria", name: "Victoria Memorial", description: "A large marble building dedicated to Queen Victoria.", imageUrl: imgFort },
          { id: "howrah", name: "Howrah Bridge", description: "A massive, iconic cantilever bridge.", imageUrl: imgCity },
          { id: "dakshineswar", name: "Dakshineswar Kali Temple", description: "A historic Hindu temple on the Hooghly River.", imageUrl: imgTemple }
      ]},
      { id: "darjeeling", name: "Darjeeling", description: "A scenic town in the Himalayan foothills.", imageUrl: imgNature, spots: [
          { id: "tiger-hill", name: "Tiger Hill", description: "Famous for spectacular sunrise views over Kanchenjunga.", imageUrl: imgNature },
          { id: "batasia", name: "Batasia Loop", description: "A spiral railway created to lower the gradient of ascent.", imageUrl: imgNature },
          { id: "tea-gardens", name: "Happy Valley Tea Estate", description: "One of the oldest tea gardens in Darjeeling.", imageUrl: imgNature }
      ]},
      { id: "sundarbans", name: "Sundarbans", description: "The largest mangrove forest.", imageUrl: imgNature, spots: [
          { id: "sundarbans-np", name: "Sundarbans National Park", description: "Home of the Royal Bengal Tiger.", imageUrl: imgNature }
      ]}
    ]
  },
  {
    id: "delhi", name: "Delhi (UT)", description: "The capital territory.", imageUrl: imgFort,
    cities: [
      { id: "new-delhi", name: "New Delhi", description: "The political and administrative heart.", imageUrl: imgCity, spots: [
          { id: "red-fort", name: "Red Fort", description: "A historic fort built by Mughal Emperor Shah Jahan.", imageUrl: imgFort },
          { id: "qutub-minar", name: "Qutub Minar", description: "A towering 73-meter tall victory tower.", imageUrl: imgFort },
          { id: "india-gate", name: "India Gate", description: "A massive war memorial arch.", imageUrl: imgFort },
          { id: "humayun", name: "Humayun's Tomb", description: "A stunning Mughal garden tomb.", imageUrl: imgFort },
          { id: "lotus-temple", name: "Lotus Temple", description: "A Bahá'í House of Worship noted for its flowerlike shape.", imageUrl: imgTemple }
      ]}
    ]
  },
  {
    id: "andaman", name: "Andaman & Nicobar Islands (UT)", description: "An archipelago with pristine beaches.", imageUrl: imgBeach,
    cities: [
      { id: "port-blair", name: "Port Blair", description: "The capital city and gateway to the islands.", imageUrl: imgCity, spots: [
          { id: "cellular-jail", name: "Cellular Jail", description: "A historic colonial prison.", imageUrl: imgFort },
          { id: "ross-island", name: "Ross Island", description: "Ruins of the former British administrative headquarters.", imageUrl: imgFort }
      ]},
      { id: "havelock", name: "Swaraj Dweep (Havelock)", description: "Known for its dive sites and beaches.", imageUrl: imgBeach, spots: [
          { id: "radhanagar", name: "Radhanagar Beach", description: "Often ranked as one of the best beaches in Asia.", imageUrl: imgBeach },
          { id: "elephant-beach", name: "Elephant Beach", description: "Famous for snorkeling and coral reefs.", imageUrl: imgBeach }
      ]}
    ]
  }
];
