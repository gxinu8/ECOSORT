const items = [
  {
    name: "페트병",
    category: "플라스틱",
    material: "PET",

    aliases: ["생수병", "PET병", "음료수병"],
    tags: ["플라스틱", "병", "음료", "재활용"],

    recyclable: true,

    disposal_method:
      "내용물을 비우고 라벨과 뚜껑을 제거한 후 압착하여 배출합니다.",

    precautions:
      "이물질이 묻어 있으면 세척 후 배출합니다.",

    decomposition_years: "약 500년",

    environment_info:
      "페트병은 재활용률이 높은 플라스틱입니다."
  },

  {
    name: "종이컵",
    category: "종이",
    material: "종이",

    aliases: ["일회용컵", "커피컵", "음료컵"],
    tags: ["컵", "종이", "일회용"],

    recyclable: false,

    disposal_method:
      "내용물을 비우고 오염이 심하면 일반쓰레기로 배출합니다.",

    precautions:
      "깨끗한 종이컵만 일부 지역에서 재활용 가능합니다.",

    decomposition_years: "약 20년",

    environment_info:
      "종이컵 내부에는 방수 코팅이 되어 있습니다."
  },

  {
    name: "플라스틱 용기",
    category: "플라스틱",
    material: "PP, PE, PET 등",

    aliases: ["플라스틱통", "플라스틱 케이스", "합성수지 용기"],
    tags: ["플라스틱", "용기", "생활용품", "재활용"],

    recyclable: true,

    disposal_method:
      "내용물을 완전히 비우고 물로 헹군 뒤 라벨과 다른 재질의 부속품을 제거하여 플라스틱류로 배출합니다.",

    precautions:
      "재질 표시를 확인하고, 이물질을 제거하기 어렵거나 여러 재질이 분리되지 않으면 종량제봉투로 배출합니다.",

    decomposition_years: "수백 년 이상",

    environment_info:
      "깨끗한 단일 재질 용기는 재활용 원료가 될 수 있지만 오염되거나 혼합된 용기는 선별이 어렵습니다."
  },

  {
    name: "배달용기",
    category: "플라스틱",
    material: "PP, PET 등",

    aliases: ["배달음식통", "포장용기", "음식포장통", "테이크아웃 용기"],
    tags: ["플라스틱", "배달", "음식", "포장", "용기"],

    recyclable: true,

    disposal_method:
      "남은 음식물을 비우고 기름기와 양념을 깨끗이 씻은 뒤 비닐, 뚜껑 등 다른 재질을 분리하여 배출합니다.",

    precautions:
      "씻어도 음식물이나 기름기가 남는 용기, 복합재질 용기는 종량제봉투로 배출합니다.",

    decomposition_years: "수백 년 이상",

    environment_info:
      "배달용기는 깨끗하게 세척하고 재질별로 나눠야 재활용 공정의 오염을 줄일 수 있습니다."
  },

  {
    name: "샴푸통",
    category: "플라스틱",
    material: "HDPE, PET, PP 등",

    aliases: ["샴푸 용기", "샴푸병", "샴푸 플라스틱통"],
    tags: ["플라스틱", "욕실", "샴푸", "세면용품", "용기"],

    recyclable: true,

    disposal_method:
      "남은 샴푸를 모두 사용하고 내부를 물로 헹군 뒤 라벨과 펌프를 분리하여 플라스틱류로 배출합니다.",

    precautions:
      "금속 스프링이 들어 있는 펌프는 재질 분리가 어려우므로 분리해 종량제봉투로 배출합니다.",

    decomposition_years: "약 400~500년",

    environment_info:
      "용기 본체와 복합재질 펌프를 분리하면 플라스틱 선별과 재활용이 쉬워집니다."
  },

  {
    name: "린스통",
    category: "플라스틱",
    material: "HDPE, PET, PP 등",

    aliases: ["린스 용기", "컨디셔너통", "헤어컨디셔너 용기"],
    tags: ["플라스틱", "욕실", "린스", "컨디셔너", "용기"],

    recyclable: true,

    disposal_method:
      "내용물을 모두 사용하고 내부를 충분히 헹군 뒤 라벨과 펌프 등 다른 재질을 떼어 플라스틱류로 배출합니다.",

    precautions:
      "점도가 높은 내용물이 남지 않도록 세척하고, 금속이 섞인 펌프는 본체와 분리합니다.",

    decomposition_years: "약 400~500년",

    environment_info:
      "린스 잔여물은 재활용 원료의 품질을 낮출 수 있어 용기를 깨끗이 비우는 것이 중요합니다."
  },

  {
    name: "세제통",
    category: "플라스틱",
    material: "HDPE, PET, PP 등",

    aliases: ["세제 용기", "세제병", "주방세제통", "세탁세제통"],
    tags: ["플라스틱", "세제", "생활용품", "용기", "재활용"],

    recyclable: true,

    disposal_method:
      "세제를 모두 사용한 후 내부를 물로 헹구고 뚜껑, 라벨, 펌프를 재질별로 분리하여 배출합니다.",

    precautions:
      "세제를 하수구에 한꺼번에 버리지 말고 모두 사용하며, 세척되지 않은 용기는 재활용품에 섞지 않습니다.",

    decomposition_years: "약 400~500년",

    environment_info:
      "HDPE 재질의 세제통은 깨끗하게 배출하면 새 플라스틱 제품의 원료로 활용될 수 있습니다."
  },

  {
    name: "요구르트병",
    category: "플라스틱",
    material: "PS, PP, PE 등",

    aliases: ["요구르트통", "야쿠르트병", "요거트병", "발효유병"],
    tags: ["플라스틱", "요구르트", "음료", "병", "식품용기"],

    recyclable: true,

    disposal_method:
      "내용물을 비우고 내부를 물로 헹군 뒤 알루미늄 포일 뚜껑이나 비닐 라벨을 제거하여 배출합니다.",

    precautions:
      "작은 용기는 다른 재활용품 속에 들어가지 않도록 모아서 배출하고 지역별 수거 기준을 확인합니다.",

    decomposition_years: "약 400~500년",

    environment_info:
      "요구르트병은 크기가 작아 선별 과정에서 빠질 수 있으므로 깨끗이 모아 배출하는 것이 좋습니다."
  },

  {
    name: "아이스크림통",
    category: "플라스틱",
    material: "PP, PE 등",

    aliases: ["아이스크림 용기", "아이스크림 플라스틱통", "빙과 용기"],
    tags: ["플라스틱", "아이스크림", "식품", "용기", "포장"],

    recyclable: true,

    disposal_method:
      "아이스크림과 기름기를 깨끗이 제거하고 씻어 말린 뒤 뚜껑과 용기를 재질에 맞게 배출합니다.",

    precautions:
      "종이 코팅 용기나 복합재질 용기는 플라스틱류가 아니므로 분리배출 표시와 지역 기준을 확인합니다.",

    decomposition_years: "수백 년 이상",

    environment_info:
      "식품 잔여물이 없는 플라스틱 용기는 재활용 가능성이 높아지고 선별 시설의 오염도 줄어듭니다."
  },

  {
    name: "화장품 용기",
    category: "플라스틱",
    material: "PET, PP, PE, OTHER 등",

    aliases: ["화장품통", "로션통", "스킨병", "화장품병"],
    tags: ["플라스틱", "화장품", "뷰티", "용기", "생활용품"],

    recyclable: true,

    disposal_method:
      "내용물을 완전히 비우고 세척한 뒤 뚜껑, 펌프, 거울 등 분리 가능한 다른 재질을 제거하여 배출합니다.",

    precautions:
      "복합재질이나 분해하기 어려운 펌프형 용기는 재활용이 제한될 수 있으므로 분리배출 표시와 지역 기준을 확인합니다.",

    decomposition_years: "수백 년 이상",

    environment_info:
      "화장품 용기는 여러 재질이 결합된 경우가 많아 부속품을 분리해야 재활용 품질을 높일 수 있습니다."
  },

  {
    name: "플라스틱 컵",
    category: "플라스틱",
    material: "PET, PP, PS 등",

    aliases: ["투명 플라스틱컵", "일회용 플라스틱컵", "테이크아웃컵"],
    tags: ["플라스틱", "컵", "음료", "일회용", "카페"],

    recyclable: true,

    disposal_method:
      "음료와 얼음을 비우고 컵을 깨끗이 헹군 뒤 뚜껑, 빨대, 비닐 실링을 분리하여 플라스틱류로 배출합니다.",

    precautions:
      "재질 표시를 확인하고, 오염이 심하거나 여러 재질이 붙어 분리되지 않으면 종량제봉투로 배출합니다.",

    decomposition_years: "약 400~500년",

    environment_info:
      "일회용 플라스틱 컵은 깨끗이 세척하고 부속품을 분리해야 재활용 원료로 활용될 가능성이 높아집니다."
  },

  {
    name: "플라스틱 뚜껑",
    category: "플라스틱",
    material: "PP, HDPE 등",

    aliases: ["플라스틱 캡", "병뚜껑", "페트병 뚜껑", "용기 뚜껑"],
    tags: ["플라스틱", "뚜껑", "캡", "병", "소형플라스틱"],

    recyclable: true,

    disposal_method:
      "내용물이나 이물질을 닦아낸 뒤 용기 본체에서 분리하고, 같은 재질의 작은 뚜껑끼리 모아 배출합니다.",

    precautions:
      "크기가 작아 지역 수거시설에서 선별되지 않을 수 있으므로 공동주택 또는 지자체의 배출 기준을 확인합니다.",

    decomposition_years: "약 400~500년",

    environment_info:
      "작은 플라스틱 뚜껑은 흩어지기 쉬워 모아서 배출하거나 별도 수거 캠페인을 이용하면 회수율을 높일 수 있습니다."
  },

  {
    name: "음료캔",
    category: "캔",
    material: "알루미늄, 철",

    aliases: ["음료수캔", "캔음료 용기", "탄산음료 깡통"],
    tags: ["캔", "금속", "음료", "알루미늄", "재활용"],

    recyclable: true,

    disposal_method:
      "내용물을 완전히 비우고 물로 헹군 뒤 플라스틱 뚜껑이나 빨대 등 다른 재질을 제거하여 캔류로 배출합니다.",

    precautions:
      "담배꽁초나 이물질을 캔 안에 넣지 말고, 지역 기준에 따라 알루미늄캔과 철캔을 구분합니다.",

    decomposition_years: "약 50~500년",

    environment_info:
      "금속캔은 반복 재활용할 수 있으며 새 금속을 생산하는 데 필요한 자원과 에너지를 줄일 수 있습니다."
  },

  {
    name: "콜라캔",
    category: "캔",
    material: "알루미늄",

    aliases: ["콜라 깡통", "코카콜라 캔", "탄산콜라 용기"],
    tags: ["캔", "콜라", "탄산음료", "알루미늄", "음료"],

    recyclable: true,

    disposal_method:
      "콜라를 완전히 비우고 내부를 물로 가볍게 헹군 뒤 캔류 수거함에 배출합니다.",

    precautions:
      "캔 안에 빨대나 휴지 등 다른 쓰레기를 넣지 말고, 플라스틱 부속품이 있으면 제거합니다.",

    decomposition_years: "약 200~500년",

    environment_info:
      "알루미늄캔은 품질 저하가 적어 여러 번 재활용할 수 있는 가치가 높은 금속 자원입니다."
  },

  {
    name: "사이다캔",
    category: "캔",
    material: "알루미늄",

    aliases: ["사이다 깡통", "탄산사이다 캔", "사이다 음료캔"],
    tags: ["캔", "사이다", "탄산음료", "알루미늄", "음료"],

    recyclable: true,

    disposal_method:
      "남은 사이다를 비우고 내부를 물로 헹군 뒤 이물질 없이 캔류로 배출합니다.",

    precautions:
      "날카롭게 찌그러진 부분에 다치지 않도록 주의하고 다른 재질의 부속품은 분리합니다.",

    decomposition_years: "약 200~500년",

    environment_info:
      "알루미늄을 재활용하면 원광석에서 새 알루미늄을 만드는 것보다 자원 소비를 줄일 수 있습니다."
  },

  {
    name: "맥주캔",
    category: "캔",
    material: "알루미늄",

    aliases: ["맥주 깡통", "캔맥주 용기", "알루미늄 맥주캔"],
    tags: ["캔", "맥주", "주류", "알루미늄", "음료"],

    recyclable: true,

    disposal_method:
      "맥주를 완전히 비우고 물로 헹군 뒤 캔류 수거함에 배출합니다.",

    precautions:
      "캔 내부에 담배꽁초나 병뚜껑을 넣지 말고, 이물질과 냄새가 남지 않도록 헹굽니다.",

    decomposition_years: "약 200~500년",

    environment_info:
      "맥주캔의 알루미늄은 회수 가치가 높고 반복해서 새로운 캔이나 금속 제품으로 재활용할 수 있습니다."
  },

  {
    name: "참치캔",
    category: "캔",
    material: "철",

    aliases: ["참치 통조림통", "참치 깡통", "참치통"],
    tags: ["캔", "참치", "통조림", "철", "식품"],

    recyclable: true,

    disposal_method:
      "남은 참치와 기름을 제거하고 세제로 가볍게 씻은 뒤 말려서 캔류로 배출합니다.",

    precautions:
      "뚜껑과 절단면이 매우 날카로우므로 캔 안쪽으로 넣거나 안전하게 접어 다치지 않도록 배출합니다.",

    decomposition_years: "약 50년 이상",

    environment_info:
      "기름과 음식물을 제거한 철제 캔은 고철 원료로 회수하여 새로운 철강 제품에 활용할 수 있습니다."
  },

  {
    name: "커피캔",
    category: "캔",
    material: "알루미늄, 철",

    aliases: ["캔커피 용기", "커피 깡통", "캔커피통"],
    tags: ["캔", "커피", "음료", "금속", "재활용"],

    recyclable: true,

    disposal_method:
      "남은 커피를 비우고 내부를 물로 헹군 뒤 플라스틱 뚜껑이 있으면 분리하여 캔류로 배출합니다.",

    precautions:
      "우유 성분이나 당분이 남지 않도록 헹구고 캔 안에 다른 쓰레기를 넣지 않습니다.",

    decomposition_years: "약 50~500년",

    environment_info:
      "커피캔은 재질에 따라 철 또는 알루미늄 자원으로 회수되며 깨끗할수록 재활용하기 쉽습니다."
  },

  {
    name: "통조림캔",
    category: "캔",
    material: "철, 알루미늄",

    aliases: ["통조림통", "식품캔", "식료품 깡통", "캔통조림 용기"],
    tags: ["캔", "통조림", "식품", "철", "금속"],

    recyclable: true,

    disposal_method:
      "내용물과 기름기를 제거하고 물로 깨끗이 헹군 뒤 라벨과 분리 가능한 다른 재질을 제거하여 캔류로 배출합니다.",

    precautions:
      "캔과 뚜껑의 날카로운 절단면을 안전하게 처리하고 음식물이 남은 상태로 배출하지 않습니다.",

    decomposition_years: "약 50~500년",

    environment_info:
      "통조림캔의 철과 알루미늄은 회수 후 다시 금속 제품의 원료로 사용할 수 있습니다."
  },

  {
    name: "스프레이캔",
    category: "캔",
    material: "철, 알루미늄",

    aliases: ["에어로졸캔", "분사형 캔", "살충제캔", "헤어스프레이통"],
    tags: ["캔", "스프레이", "에어로졸", "가스", "금속"],

    recyclable: true,

    disposal_method:
      "내용물을 모두 사용한 뒤 불꽃이 없는 통풍이 잘되는 곳에서 노즐을 눌러 잔여 내용물과 가스를 완전히 제거하고 캔류로 배출합니다.",

    precautions:
      "가스가 남은 채 배출하거나 불 가까이에서 작업하지 말고, 구멍을 뚫는 방법은 제품 표시와 지자체 안전 지침을 따릅니다.",

    decomposition_years: "약 50~500년",

    environment_info:
      "가스를 완전히 제거한 스프레이캔은 금속 자원으로 재활용할 수 있으며 안전사고 예방을 위해 올바른 배출이 중요합니다."
  },

  {
    name: "알루미늄캔",
    category: "캔",
    material: "알루미늄",

    aliases: ["알루미늄 깡통", "알미늄캔", "비철금속 캔"],
    tags: ["캔", "알루미늄", "비철금속", "금속", "재활용"],

    recyclable: true,

    disposal_method:
      "내용물을 비우고 깨끗이 헹군 뒤 다른 재질을 제거하고 지역 기준에 따라 알루미늄 캔류로 배출합니다.",

    precautions:
      "이물질이 든 캔은 선별과 재활용을 방해하므로 내부를 비우고, 날카롭게 변형된 부분을 주의합니다.",

    decomposition_years: "약 200~500년",

    environment_info:
      "알루미늄은 반복 재활용이 가능하며 회수된 캔은 새로운 캔과 다양한 금속 제품의 원료가 됩니다."
  },

  {
    name: "철캔",
    category: "캔",
    material: "철",

    aliases: ["철제캔", "스틸캔", "철 깡통"],
    tags: ["캔", "철", "스틸", "고철", "금속"],

    recyclable: true,

    disposal_method:
      "내용물을 완전히 비우고 물로 헹군 뒤 플라스틱 등 다른 재질을 제거하여 철 캔류 또는 고철류로 배출합니다.",

    precautions:
      "페인트나 기름 등 유해물질이 남은 캔은 일반 캔류와 섞지 말고 지역의 폐기물 배출 지침을 따릅니다.",

    decomposition_years: "약 50~100년",

    environment_info:
      "철캔은 자석 선별이 가능하며 회수된 철은 새로운 철강 제품의 원료로 재사용할 수 있습니다."
  }
];

module.exports = items;
