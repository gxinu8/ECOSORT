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
  },

  {
    name: "신문지",
    category: "종이",
    material: "신문용지",

    aliases: ["신문", "헌신문", "신문용지"],
    tags: ["종이", "신문", "폐지", "인쇄물", "재활용"],

    recyclable: true,

    disposal_method:
      "신문지만 반듯하게 펴서 물기에 젖지 않도록 모은 뒤 끈으로 묶거나 종이류 수거함에 배출합니다.",

    precautions:
      "비닐봉투, 코팅 전단지, 테이프 등 종이가 아닌 재질이 섞이지 않도록 제거합니다.",

    decomposition_years: "약 2~6주",

    environment_info:
      "신문지는 재생지의 주요 원료로 사용되며 깨끗하게 분리할수록 종이 섬유를 효율적으로 회수할 수 있습니다."
  },

  {
    name: "잡지",
    category: "종이",
    material: "인쇄용지, 코팅지",

    aliases: ["매거진", "월간지", "주간지", "헌잡지"],
    tags: ["종이", "잡지", "책자", "인쇄물", "폐지"],

    recyclable: true,

    disposal_method:
      "비닐 포장과 부록을 제거하고 종이 잡지를 한데 모아 종이류로 배출합니다.",

    precautions:
      "비닐 코팅된 표지, 플라스틱 부록, 금속 스테이플 등 분리 가능한 다른 재질은 제거합니다.",

    decomposition_years: "약 2~5개월",

    environment_info:
      "잡지는 잉크와 코팅이 포함될 수 있어 다른 재질을 제거하면 폐지 선별과 재생지 생산에 도움이 됩니다."
  },

  {
    name: "택배박스",
    category: "종이",
    material: "골판지",

    aliases: ["박스", "골판지박스", "택배상자", "종이상자"],
    tags: ["종이", "박스", "골판지", "택배", "포장", "재활용"],

    recyclable: true,

    disposal_method:
      "운송장, 테이프, 철핀 등 다른 재질을 모두 제거하고 상자를 펼쳐 납작하게 접은 뒤 골판지류로 배출합니다.",

    precautions:
      "기름이나 음식물에 심하게 오염되거나 방수 코팅된 부분은 종이류로 배출하지 않습니다.",

    decomposition_years: "약 2~3개월",

    environment_info:
      "골판지는 여러 번 재활용할 수 있지만 테이프와 오염물은 재생지의 품질을 떨어뜨립니다."
  },

  {
    name: "우유팩",
    category: "종이",
    material: "종이팩, 폴리에틸렌 코팅",

    aliases: ["우유곽", "우유팩용기", "우유 종이팩", "살균팩"],
    tags: ["종이", "종이팩", "우유", "음료용기", "팩", "재활용"],

    recyclable: true,

    disposal_method:
      "내용물을 비우고 물로 헹군 뒤 펼쳐서 완전히 말리고, 일반 종이와 구분해 종이팩 전용 수거함에 배출합니다.",

    precautions:
      "빨대와 비닐 마개 등 다른 재질을 제거하고, 전용 수거함이 없는 경우 지자체 배출 기준을 확인합니다.",

    decomposition_years: "약 5년",

    environment_info:
      "우유팩은 품질이 좋은 천연 펄프로 만들어져 일반 폐지와 분리하면 화장지 등의 원료로 활용할 수 있습니다."
  },

  {
    name: "종이봉투",
    category: "종이",
    material: "종이, 크라프트지",

    aliases: ["종이봉지", "크라프트 봉투", "서류봉투"],
    tags: ["종이", "봉투", "봉지", "포장", "생활용품"],

    recyclable: true,

    disposal_method:
      "내용물을 비우고 테이프, 스티커, 비닐 창 등 다른 재질을 제거한 뒤 펼쳐서 종이류로 배출합니다.",

    precautions:
      "비닐 코팅되거나 음식물과 기름에 오염된 종이봉투는 종량제봉투로 배출합니다.",

    decomposition_years: "약 1~2개월",

    environment_info:
      "깨끗한 종이봉투는 폐지 원료로 활용할 수 있으며 여러 번 다시 사용하면 폐기물 발생도 줄일 수 있습니다."
  },

  {
    name: "노트",
    category: "종이",
    material: "종이",

    aliases: ["공책", "스프링노트", "필기노트", "헌공책"],
    tags: ["종이", "노트", "공책", "문구", "책자", "재활용"],

    recyclable: true,

    disposal_method:
      "비닐 표지, 금속 스프링, 플라스틱 제본 등 종이가 아닌 부분을 제거한 뒤 종이류로 배출합니다.",

    precautions:
      "코팅된 표지와 스프링을 종이와 함께 배출하지 말고 재질에 맞게 따로 처리합니다.",

    decomposition_years: "약 2~6개월",

    environment_info:
      "노트의 종이 부분은 재생지 원료가 되며 제본 부속품을 분리하면 선별 효율이 높아집니다."
  },

  {
    name: "책",
    category: "종이",
    material: "인쇄용지",

    aliases: ["도서", "헌책", "서적", "책자"],
    tags: ["종이", "책", "도서", "인쇄물", "폐지", "재활용"],

    recyclable: true,

    disposal_method:
      "비닐 커버와 플라스틱·금속 부속품을 제거하고 책끼리 모아 묶어서 종이류로 배출합니다.",

    precautions:
      "젖거나 곰팡이가 핀 책, 비닐 코팅이 분리되지 않는 표지는 지역 기준에 따라 종량제봉투로 배출합니다.",

    decomposition_years: "약 2~6개월",

    environment_info:
      "읽을 수 있는 책은 기부하거나 교환하고, 훼손된 책의 종이는 분리배출하면 재생지로 활용할 수 있습니다."
  },

  {
    name: "전단지",
    category: "종이",
    material: "인쇄용지",

    aliases: ["광고지", "홍보전단", "광고전단지", "찌라시"],
    tags: ["종이", "전단지", "광고", "인쇄물", "홍보물"],

    recyclable: true,

    disposal_method:
      "비닐 코팅이 없는 깨끗한 전단지만 다른 종이와 함께 종이류로 배출합니다.",

    precautions:
      "찢었을 때 비닐막이 보이는 코팅 전단지, 감열지, 오염된 전단지는 종량제봉투로 배출합니다.",

    decomposition_years: "약 2~6주",

    environment_info:
      "코팅되지 않은 전단지는 재활용할 수 있지만 합성수지 코팅은 종이 섬유의 분리를 방해합니다."
  },

  {
    name: "달력",
    category: "종이",
    material: "인쇄용지",

    aliases: ["캘린더", "벽걸이달력", "탁상달력", "헌달력"],
    tags: ["종이", "달력", "캘린더", "인쇄물", "생활용품"],

    recyclable: true,

    disposal_method:
      "금속 스프링, 플라스틱 받침, 비닐 코팅 부분을 제거하고 종이 부분만 종이류로 배출합니다.",

    precautions:
      "탁상달력의 두꺼운 받침이 코팅되었거나 여러 재질로 결합돼 분리되지 않으면 종량제봉투로 배출합니다.",

    decomposition_years: "약 2~6개월",

    environment_info:
      "달력에서 금속과 플라스틱을 분리하면 종이는 재생지로, 금속은 별도 자원으로 회수할 수 있습니다."
  },

  {
    name: "종이 쇼핑백",
    category: "종이",
    material: "종이, 크라프트지",

    aliases: ["종이 쇼핑가방", "종이가방", "쇼핑용 종이백"],
    tags: ["종이", "쇼핑백", "가방", "포장", "재사용", "재활용"],

    recyclable: true,

    disposal_method:
      "끈 손잡이, 금속 장식, 비닐 코팅 등 다른 재질을 제거하고 납작하게 접어 종이류로 배출합니다.",

    precautions:
      "방수·비닐 코팅된 쇼핑백이나 오염된 쇼핑백은 종이류 재활용이 어려우므로 종량제봉투로 배출합니다.",

    decomposition_years: "약 1~3개월",

    environment_info:
      "종이 쇼핑백은 버리기 전에 반복해서 사용하고, 깨끗한 종이 부분만 분리하면 자원 사용을 줄일 수 있습니다."
  },

  {
    name: "비닐봉투",
    category: "비닐",
    material: "PE, PP 등",

    aliases: ["봉투", "쇼핑봉투", "비닐", "비닐봉지"],
    tags: ["비닐", "봉투", "봉지", "포장", "플라스틱", "재활용"],

    recyclable: true,

    disposal_method:
      "내용물을 비우고 음식물과 이물질을 깨끗이 제거한 뒤 흩날리지 않도록 투명 봉투에 모아 비닐류로 배출합니다.",

    precautions:
      "테이프와 스티커를 제거하고, 씻어도 오염이 남는 비닐봉투는 종량제봉투로 배출합니다.",

    decomposition_years: "약 10~20년 이상",

    environment_info:
      "비닐봉투는 가볍지만 자연에서 오래 남을 수 있어 재사용하고 깨끗하게 분리배출하는 것이 중요합니다."
  },

  {
    name: "과자봉지",
    category: "비닐",
    material: "복합 필름, PP, PE 등",

    aliases: ["과자봉투", "스낵봉지", "과자 포장지", "과자 비닐"],
    tags: ["비닐", "과자", "식품포장", "봉지", "포장재", "재활용"],

    recyclable: true,

    disposal_method:
      "과자 부스러기와 기름기를 제거하고 물로 헹군 뒤 완전히 말려 접지 않은 상태로 비닐류에 배출합니다.",

    precautions:
      "이물질이나 기름기를 제거할 수 없는 봉지는 종량제봉투로 배출하고 지역별 비닐 수거 기준을 확인합니다.",

    decomposition_years: "수십~수백 년",

    environment_info:
      "깨끗한 과자봉지는 비닐류로 회수할 수 있지만 오염된 식품 포장재는 다른 비닐의 재활용까지 방해합니다."
  },

  {
    name: "라면봉지",
    category: "비닐",
    material: "복합 필름, PP, PE 등",

    aliases: ["라면봉투", "라면 포장지", "라면 비닐", "인스턴트면 봉지"],
    tags: ["비닐", "라면", "식품포장", "봉지", "포장재", "재활용"],

    recyclable: true,

    disposal_method:
      "스프와 기름 등 내용물을 비우고 이물질을 물로 헹군 뒤 잘 말려 접지 않고 비닐류로 배출합니다.",

    precautions:
      "스프나 기름이 남아 세척하기 어려운 경우 종량제봉투로 배출하고 작은 스프 봉지도 같은 기준을 적용합니다.",

    decomposition_years: "수십~수백 년",

    environment_info:
      "라면봉지는 깨끗한 상태로 배출해야 재활용 공정에서 연료나 재생 원료로 활용될 수 있습니다."
  },

  {
    name: "지퍼백",
    category: "비닐",
    material: "PE",

    aliases: ["지퍼봉투", "밀폐 비닐백", "위생 지퍼백"],
    tags: ["비닐", "지퍼백", "밀폐", "주방", "보관", "봉투"],

    recyclable: true,

    disposal_method:
      "내용물과 이물질을 깨끗이 씻어 말린 뒤 비닐류로 배출합니다.",

    precautions:
      "슬라이딩 방식의 플라스틱 손잡이는 떼어 종량제봉투로 배출하고, 오염이 남으면 지퍼백 전체를 종량제봉투에 버립니다.",

    decomposition_years: "약 10~20년 이상",

    environment_info:
      "지퍼백은 세척해 여러 번 사용하면 일회용 비닐 사용량을 줄일 수 있습니다."
  },

  {
    name: "랩",
    category: "비닐",
    material: "PVC, PE 등",

    aliases: ["비닐랩", "음식랩", "주방랩", "포장랩"],
    tags: ["랩", "비닐", "주방", "식품포장", "PVC", "일반쓰레기"],

    recyclable: false,

    disposal_method:
      "사용한 랩은 음식물과 물기를 제거한 뒤 종량제봉투에 일반쓰레기로 배출합니다.",

    precautions:
      "가정용 랩은 PVC 등 재활용이 어려운 재질이 많으므로 비닐류 수거함에 넣지 말고 제품의 재질 표시를 확인합니다.",

    decomposition_years: "수십~수백 년",

    environment_info:
      "랩은 얇고 오염되기 쉬워 재활용이 어렵기 때문에 필요한 만큼만 사용하고 다회용 덮개를 이용하는 것이 좋습니다."
  },

  {
    name: "택배 비닐",
    category: "비닐",
    material: "PE",

    aliases: ["택배봉투", "배송 비닐", "택배 포장봉투", "폴리메일러"],
    tags: ["비닐", "택배", "배송", "포장", "봉투", "재활용"],

    recyclable: true,

    disposal_method:
      "내용물을 비우고 운송장, 테이프, 접착 부분을 잘라낸 뒤 깨끗한 비닐만 비닐류로 배출합니다.",

    precautions:
      "종이 완충재와 다른 포장재를 분리하고 접착제나 오염물이 남은 부분은 종량제봉투로 배출합니다.",

    decomposition_years: "약 10~20년 이상",

    environment_info:
      "택배 비닐에서 송장과 접착부를 제거하면 재생 비닐 원료의 오염을 줄일 수 있습니다."
  },

  {
    name: "에어캡",
    category: "비닐",
    material: "PE",

    aliases: ["뽁뽁이", "버블랩", "에어쿠션 비닐", "완충 비닐"],
    tags: ["비닐", "에어캡", "완충재", "택배", "포장재", "재활용"],

    recyclable: true,

    disposal_method:
      "테이프와 운송장 등 부착물을 제거하고 깨끗한 상태로 부피를 줄여 비닐류로 배출합니다.",

    precautions:
      "다른 재질과 결합된 에어캡이나 오염된 부분은 분리하고, 재사용할 수 있으면 포장 완충재로 다시 사용합니다.",

    decomposition_years: "약 10~20년 이상",

    environment_info:
      "에어캡은 깨끗하면 비닐류로 재활용할 수 있으며 반복 사용하면 포장 폐기물을 줄일 수 있습니다."
  },

  {
    name: "비닐장갑",
    category: "비닐",
    material: "PE",

    aliases: ["위생장갑", "일회용 비닐장갑", "폴리에틸렌 장갑"],
    tags: ["비닐", "장갑", "위생용품", "주방", "일회용", "재활용"],

    recyclable: true,

    disposal_method:
      "음식물과 기름 등 이물질이 없는 깨끗한 비닐장갑은 비닐류로 배출합니다.",

    precautions:
      "오염된 장갑은 종량제봉투로 배출하며 고무장갑이나 라텍스·니트릴 장갑은 비닐류에 넣지 않습니다.",

    decomposition_years: "약 10~20년 이상",

    environment_info:
      "위생장갑은 재질과 오염 여부를 확인해야 하며 사용량을 줄이면 일회용 플라스틱 폐기물을 줄일 수 있습니다."
  },

  {
    name: "비닐 포장재",
    category: "비닐",
    material: "PE, PP, 복합 필름 등",

    aliases: ["비닐포장", "포장비닐", "필름 포장재", "상품 포장비닐"],
    tags: ["비닐", "포장재", "필름", "플라스틱", "포장", "재활용"],

    recyclable: true,

    disposal_method:
      "내용물을 비우고 스티커, 캡, 접착 부분을 제거한 뒤 깨끗한 비닐만 비닐류로 배출합니다.",

    precautions:
      "여러 재질이 분리되지 않거나 이물질을 제거하기 어려운 포장재는 종량제봉투로 배출합니다.",

    decomposition_years: "수십~수백 년",

    environment_info:
      "비닐 포장재는 종류가 다양하므로 분리배출 표시를 확인하고 다른 재질을 제거하는 것이 중요합니다."
  },

  {
    name: "김 봉투",
    category: "비닐",
    material: "복합 필름, PP, PE 등",

    aliases: ["김 포장지", "조미김 봉지", "김 비닐", "김 포장봉투"],
    tags: ["비닐", "김", "식품포장", "봉지", "포장재", "재활용"],

    recyclable: true,

    disposal_method:
      "김 부스러기와 기름기를 완전히 제거하고 물로 헹군 뒤 말려서 비닐류로 배출합니다.",

    precautions:
      "기름기와 이물질을 제거하기 어렵거나 비닐류 분리배출 표시가 없는 복합 포장재는 종량제봉투로 배출합니다.",

    decomposition_years: "수십~수백 년",

    environment_info:
      "김 봉투처럼 여러 층으로 된 식품 포장재는 깨끗하게 배출해야 다른 비닐류의 재활용을 방해하지 않습니다."
  },

  {
    name: "유리병",
    category: "유리",
    material: "유리",

    aliases: ["병", "유리", "빈병", "유리 빈병"],
    tags: ["유리", "병", "빈병", "용기", "재활용"],

    recyclable: true,

    disposal_method:
      "내용물을 완전히 비우고 물로 헹군 뒤 금속이나 플라스틱 뚜껑을 분리하여 유리병류 수거함에 배출합니다.",

    precautions:
      "담배꽁초 등 이물질을 넣지 말고 깨지지 않도록 배출하며, 내열유리와 유리 식기는 유리병류에 넣지 않습니다.",

    decomposition_years: "자연 분해되지 않음",

    environment_info:
      "유리병은 색상별로 선별해 새로운 유리 제품의 원료로 반복 활용할 수 있습니다."
  },

  {
    name: "소주병",
    category: "유리",
    material: "유리",

    aliases: ["소주 빈병", "초록 소주병", "소주 유리병"],
    tags: ["유리", "병", "소주", "주류", "빈용기", "재사용"],

    recyclable: true,

    disposal_method:
      "내용물을 비우고 병을 깨끗이 헹군 뒤 소매점의 빈용기 보증금 반환처에 돌려주거나 유리병류로 배출합니다.",

    precautions:
      "재사용할 수 있도록 병을 깨뜨리지 말고 뚜껑과 이물질을 제거하여 배출합니다.",

    decomposition_years: "자연 분해되지 않음",

    environment_info:
      "보증금 대상 소주병은 세척 후 여러 번 재사용할 수 있어 새 병 생산에 필요한 자원과 에너지를 줄입니다."
  },

  {
    name: "맥주병",
    category: "유리",
    material: "유리",

    aliases: ["병맥주", "맥주 빈병", "갈색 맥주병", "맥주 유리병"],
    tags: ["유리", "병", "맥주", "주류", "빈용기", "재사용"],

    recyclable: true,

    disposal_method:
      "맥주를 완전히 비우고 내부를 헹군 뒤 빈용기 보증금 반환처에 돌려주거나 유리병류로 배출합니다.",

    precautions:
      "병 안에 담배꽁초나 다른 쓰레기를 넣지 말고 재사용할 수 있도록 깨뜨리지 않습니다.",

    decomposition_years: "자연 분해되지 않음",

    environment_info:
      "재사용 가능한 맥주병을 반환하면 병을 세척해 다시 사용하므로 유리 폐기물 발생을 줄일 수 있습니다."
  },

  {
    name: "와인병",
    category: "유리",
    material: "유리",

    aliases: ["포도주병", "와인 빈병", "와인 유리병"],
    tags: ["유리", "병", "와인", "주류", "용기", "재활용"],

    recyclable: true,

    disposal_method:
      "남은 와인을 비우고 병 내부를 헹군 뒤 코르크와 금속 캡슐을 제거하여 유리병류로 배출합니다.",

    precautions:
      "코르크 마개와 금속·플라스틱 부속품은 병과 분리하고 병이 깨지지 않도록 주의합니다.",

    decomposition_years: "자연 분해되지 않음",

    environment_info:
      "색유리 와인병도 깨끗하게 배출하면 유리 원료나 건축용 골재 등으로 활용할 수 있습니다."
  },

  {
    name: "잼병",
    category: "유리",
    material: "유리",

    aliases: ["잼 유리병", "잼 빈병", "유리 잼통"],
    tags: ["유리", "병", "잼", "식품용기", "용기", "재활용"],

    recyclable: true,

    disposal_method:
      "잼과 끈적한 내용물을 완전히 제거하고 병을 물로 헹군 뒤 금속 뚜껑을 분리하여 유리병류로 배출합니다.",

    precautions:
      "음식물이 남지 않도록 충분히 세척하고 깨진 잼병은 일반 유리병과 분리해 안전하게 처리합니다.",

    decomposition_years: "자연 분해되지 않음",

    environment_info:
      "깨끗한 잼병은 다시 사용하거나 유리 원료로 재활용할 수 있어 일회용 포장재 사용을 줄이는 데 도움이 됩니다."
  },

  {
    name: "유리컵",
    category: "유리",
    material: "일반유리, 강화유리, 내열유리 등",

    aliases: ["유리잔", "글라스컵", "유리 식기", "깨진 유리컵"],
    tags: ["유리", "컵", "잔", "식기", "생활용품", "일반쓰레기"],

    recyclable: false,

    disposal_method:
      "깨지지 않은 유리컵도 유리병류와 섞지 말고 신문지나 두꺼운 종이로 감싼 뒤 지자체가 정한 종량제봉투 또는 불연성 폐기물 봉투로 배출합니다.",

    precautions:
      "유리 재질과 지역에 따라 배출 봉투가 다를 수 있으므로 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "자연 분해되지 않음",

    environment_info:
      "유리컵은 유리병과 녹는 온도와 성분이 달라 유리병 재활용 공정에 섞으면 품질 문제를 일으킬 수 있습니다."
  },

  {
    name: "유리 화장품병",
    category: "유리",
    material: "유리",

    aliases: ["화장품 유리병", "향수 유리병", "스킨 유리병", "유리 화장품 용기"],
    tags: ["유리", "병", "화장품", "뷰티", "용기", "재활용"],

    recyclable: true,

    disposal_method:
      "내용물을 완전히 비우고 병을 세척한 뒤 펌프, 스포이트, 뚜껑 등 다른 재질을 제거하여 유리병류로 배출합니다.",

    precautions:
      "불투명 코팅이나 장식이 심한 용기, 내용물을 제거할 수 없는 용기는 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "자연 분해되지 않음",

    environment_info:
      "화장품병은 펌프와 장식 부품을 분리해야 유리 원료의 오염을 줄이고 재활용 가능성을 높일 수 있습니다."
  },

  {
    name: "유리 용기",
    category: "유리",
    material: "포장용 유리",

    aliases: ["유리통", "유리 저장용기", "유리 케이스"],
    tags: ["유리", "용기", "보관", "생활용품", "포장", "재활용"],

    recyclable: true,

    disposal_method:
      "포장용 유리 용기는 내용물을 비우고 헹군 뒤 뚜껑과 패킹을 제거하여 유리병류로 배출합니다.",

    precautions:
      "내열유리 밀폐용기나 유리 식기는 포장용 유리병과 재질이 다를 수 있으므로 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "자연 분해되지 않음",

    environment_info:
      "포장용 유리는 재활용할 수 있지만 내열유리와 강화유리가 섞이면 재생 유리의 품질을 떨어뜨릴 수 있습니다."
  },

  {
    name: "깨진 유리",
    category: "유리",
    material: "유리",

    aliases: ["유리조각", "깨진병", "파손 유리", "유리 파편"],
    tags: ["유리", "깨진유리", "파편", "안전", "일반쓰레기", "불연성"],

    recyclable: false,

    disposal_method:
      "유리 조각을 신문지나 두꺼운 종이로 여러 겹 감싸 단단한 용기에 담고 겉면에 위험 표시를 한 뒤 지정 봉투로 배출합니다.",

    precautions:
      "수거 작업자가 다치지 않도록 날카로운 부분이 밖으로 나오지 않게 포장하고 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "자연 분해되지 않음",

    environment_info:
      "깨진 유리는 일반 유리병 선별 과정에서 안전사고와 오염을 유발할 수 있어 별도로 안전하게 배출해야 합니다."
  },

  {
    name: "깨진 거울",
    category: "유리",
    material: "유리, 금속 코팅",

    aliases: ["거울", "거울조각", "파손 거울", "깨진 전신거울"],
    tags: ["유리", "거울", "파편", "안전", "불연성", "일반쓰레기"],

    recyclable: false,

    disposal_method:
      "작은 거울 조각은 두꺼운 종이로 감싸 단단한 용기에 담아 지정 봉투로 배출하고, 큰 거울은 대형폐기물 기준에 따라 신고합니다.",

    precautions:
      "거울은 유리병류로 재활용할 수 없으며 크기와 지역에 따라 처리 방법이 다르므로 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "자연 분해되지 않음",

    environment_info:
      "거울은 유리에 금속 코팅 등이 결합되어 있어 일반 유리병 재활용 공정에 투입하기 어렵습니다."
  },

  {
    name: "스티로폼 박스",
    category: "스티로폼",
    material: "EPS(발포 폴리스티렌)",

    aliases: ["스티로폼 상자", "EPS 박스", "발포수지 박스"],
    tags: ["스티로폼", "박스", "EPS", "포장", "완충재", "재활용"],

    recyclable: true,

    disposal_method:
      "내용물을 비우고 테이프, 운송장, 상표를 완전히 제거한 뒤 깨끗이 씻어 말려 스티로폼류로 배출합니다.",

    precautions:
      "색상이 있거나 코팅된 제품, 이물질과 냄새를 제거할 수 없는 박스는 종량제봉투로 배출하며 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "약 500년 이상",

    environment_info:
      "깨끗한 흰색 EPS 박스는 분쇄와 재가공을 거쳐 단열재나 재생 플라스틱 원료로 활용할 수 있습니다."
  },

  {
    name: "스티로폼 용기",
    category: "스티로폼",
    material: "EPS, PSP 등",

    aliases: ["스티로폼 음식용기", "발포 용기", "일회용 스티로폼통"],
    tags: ["스티로폼", "용기", "음식", "포장", "EPS", "재활용"],

    recyclable: true,

    disposal_method:
      "음식물과 기름기를 완전히 제거하고 물로 씻어 말린 뒤 깨끗한 흰색 용기만 스티로폼류로 배출합니다.",

    precautions:
      "씻어도 색이나 냄새가 남거나 코팅된 용기는 종량제봉투로 배출하며 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "약 500년 이상",

    environment_info:
      "식품용 스티로폼은 오염 여부가 재활용 가능성을 좌우하므로 사용 직후 깨끗이 세척하는 것이 중요합니다."
  },

  {
    name: "스티로폼 컵",
    category: "스티로폼",
    material: "EPS, PSP 등",

    aliases: ["발포 컵", "스티로폼 음료컵", "스티로폼 일회용컵"],
    tags: ["스티로폼", "컵", "일회용", "음료", "EPS", "포장"],

    recyclable: true,

    disposal_method:
      "내용물을 비우고 깨끗이 씻어 말린 흰색 컵은 스티로폼류로 배출합니다.",

    precautions:
      "색상이 있거나 코팅된 컵, 국물과 기름이 배어 세척되지 않는 컵은 종량제봉투로 배출하며 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "약 500년 이상",

    environment_info:
      "스티로폼 컵은 가볍고 오염되기 쉬워 깨끗한 흰색 제품만 분리해야 재활용 품질을 유지할 수 있습니다."
  },

  {
    name: "과일 스티로폼",
    category: "스티로폼",
    material: "발포 PE, 발포 합성수지",

    aliases: ["과일망", "과일 포장망", "과일 완충망", "과일 그물망"],
    tags: ["스티로폼", "과일", "과일망", "완충재", "포장", "일반쓰레기"],

    recyclable: false,

    disposal_method:
      "과일을 감싼 그물 모양 완충재는 내용물을 제거한 뒤 종량제봉투에 일반쓰레기로 배출합니다.",

    precautions:
      "흰색 박스형 스티로폼과 재질과 형태가 달라 스티로폼 수거함에 넣지 말고 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "약 500년 이상",

    environment_info:
      "과일망은 작고 형태가 불규칙해 선별과 재활용이 어려우므로 사용을 줄이거나 재사용하는 것이 좋습니다."
  },

  {
    name: "생선 스티로폼 박스",
    category: "스티로폼",
    material: "EPS(발포 폴리스티렌)",

    aliases: ["생선박스", "수산물 스티로폼", "횟집 스티로폼 상자"],
    tags: ["스티로폼", "생선", "수산물", "박스", "포장", "EPS"],

    recyclable: true,

    disposal_method:
      "생선과 얼음 등 내용물을 비우고 테이프와 상표를 제거한 뒤 세제로 깨끗이 씻어 완전히 말려 배출합니다.",

    precautions:
      "비린내, 기름, 핏물 등 이물질을 제거할 수 없으면 종량제봉투로 배출하며 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "약 500년 이상",

    environment_info:
      "수산물 박스는 깨끗하게 세척해야 다른 스티로폼을 오염시키지 않고 재생 원료로 활용할 수 있습니다."
  },

  {
    name: "계란 스티로폼",
    category: "스티로폼",
    material: "EPS, PSP 등",

    aliases: ["계란판 스티로폼", "달걀 스티로폼", "계란 포장용기"],
    tags: ["스티로폼", "계란", "달걀", "트레이", "포장", "EPS"],

    recyclable: true,

    disposal_method:
      "계란 껍데기와 이물질을 제거하고 깨끗한 흰색 발포 용기만 스티로폼류로 배출합니다.",

    precautions:
      "종이 펄프 계란판은 종이류 기준을 따르고, 색상·코팅 제품이나 오염된 용기는 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "약 500년 이상",

    environment_info:
      "계란 포장재는 종이와 발포 플라스틱 제품이 있으므로 재질을 구분해야 올바르게 재활용할 수 있습니다."
  },

  {
    name: "스티로폼 트레이",
    category: "스티로폼",
    material: "PSP, EPS 등",

    aliases: ["스티로폼 접시", "발포 트레이", "식품 스티로폼 받침"],
    tags: ["스티로폼", "트레이", "식품", "받침", "포장", "일회용"],

    recyclable: true,

    disposal_method:
      "랩과 흡수패드를 제거하고 음식물과 기름기를 깨끗이 씻어 말린 흰색 트레이만 스티로폼류로 배출합니다.",

    precautions:
      "색상이 있거나 코팅된 트레이, 씻어도 오염이 남는 제품은 종량제봉투로 배출하며 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "약 500년 이상",

    environment_info:
      "깨끗한 흰색 트레이는 재생할 수 있지만 랩과 흡수패드가 섞이면 선별과 재활용을 방해합니다."
  },

  {
    name: "완충재",
    category: "스티로폼",
    material: "EPS(발포 폴리스티렌)",

    aliases: ["뽁뽁이 대체재", "포장재", "가전제품 완충재", "성형 스티로폼"],
    tags: ["스티로폼", "완충재", "포장", "택배", "EPS", "보호재"],

    recyclable: true,

    disposal_method:
      "제품을 감싼 흰색 성형 스티로폼에서 테이프와 비닐을 제거하고 깨끗한 상태로 스티로폼류에 배출합니다.",

    precautions:
      "에어캡이나 종이 완충재와 구분하고, 색상·코팅 제품은 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "약 500년 이상",

    environment_info:
      "성형 스티로폼 완충재는 재사용하거나 깨끗하게 분리배출하면 포장 폐기물과 원료 사용을 줄일 수 있습니다."
  },

  {
    name: "아이스박스 스티로폼",
    category: "스티로폼",
    material: "EPS(발포 폴리스티렌)",

    aliases: ["아이스박스", "스티로폼 아이스박스", "보냉박스", "보냉용 스티로폼"],
    tags: ["스티로폼", "아이스박스", "보냉", "박스", "포장", "EPS"],

    recyclable: true,

    disposal_method:
      "내용물과 냉매를 분리하고 테이프, 운송장, 비닐을 제거한 뒤 깨끗이 씻어 말려 스티로폼류로 배출합니다.",

    precautions:
      "플라스틱 코팅 보냉 상자나 이물질과 냄새가 남는 제품은 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "약 500년 이상",

    environment_info:
      "깨끗한 EPS 아이스박스는 재사용하거나 재생 원료로 회수할 수 있지만 복합재질 보냉 상자는 별도 확인이 필요합니다."
  },

  {
    name: "포장용 스티로폼",
    category: "스티로폼",
    material: "EPS(발포 폴리스티렌)",

    aliases: ["포장 스티로폼", "제품 포장 스티로폼", "EPS 포장재"],
    tags: ["스티로폼", "포장", "포장재", "EPS", "완충", "재활용"],

    recyclable: true,

    disposal_method:
      "상표, 테이프, 비닐 등 다른 재질을 제거하고 오염되지 않은 흰색 스티로폼만 모아 배출합니다.",

    precautions:
      "건축용 단열재, 색상·코팅 제품, 오염된 포장재는 일반 포장 스티로폼과 처리 방법이 다르므로 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "약 500년 이상",

    environment_info:
      "포장용 EPS는 부피가 커서 가능한 재사용하고, 깨끗하게 분리하면 재생 플라스틱으로 활용할 수 있습니다."
  },

  {
    name: "사과",
    category: "음식물",
    material: "과일, 유기물",

    aliases: ["사과껍질", "먹다 남은 사과", "사과조각"],
    tags: ["음식물", "음식물쓰레기", "과일", "껍질", "유기물", "주방"],

    recyclable: true,

    disposal_method:
      "스티커와 포장재를 제거하고 물기를 뺀 사과 과육과 껍질을 음식물쓰레기 전용 수거함에 배출합니다.",

    precautions:
      "비닐, 스티커, 이쑤시개 등 음식물이 아닌 물질을 제거하고 지역별 음식물 분리배출 기준을 확인하세요.",

    decomposition_years: "약 1~2개월",

    environment_info:
      "사과 부산물은 적절히 분리하면 사료, 퇴비 또는 바이오가스 생산을 위한 유기성 자원으로 활용할 수 있습니다."
  },

  {
    name: "바나나껍질",
    category: "음식물",
    material: "과일 껍질, 유기물",

    aliases: ["바나나", "바나나 껍질", "먹고 남은 바나나"],
    tags: ["음식물", "음식물쓰레기", "과일", "껍질", "바나나", "유기물"],

    recyclable: true,

    disposal_method:
      "바나나에 붙은 스티커를 제거하고 껍질과 남은 과육의 물기를 뺀 뒤 음식물쓰레기로 배출합니다.",

    precautions:
      "바나나 꼭지와 껍질은 일반적으로 음식물류에 해당하지만 지역별 음식물 분리배출 기준을 확인하세요.",

    decomposition_years: "약 2~5주",

    environment_info:
      "바나나껍질은 수분과 유기물이 많아 음식물류 처리시설에서 퇴비나 에너지 자원으로 활용할 수 있습니다."
  },

  {
    name: "귤껍질",
    category: "음식물",
    material: "과일 껍질, 유기물",

    aliases: ["귤", "귤 껍질", "감귤껍질", "오렌지껍질"],
    tags: ["음식물", "음식물쓰레기", "과일", "껍질", "감귤", "유기물"],

    recyclable: true,

    disposal_method:
      "스티커와 포장재를 제거하고 귤껍질의 물기를 뺀 뒤 음식물쓰레기로 배출합니다.",

    precautions:
      "귤껍질은 부드러워 일반적으로 음식물류에 해당하며, 말린 껍질의 분류는 지역별 음식물 분리배출 기준을 확인하세요.",

    decomposition_years: "약 2~6개월",

    environment_info:
      "감귤 껍질은 유기성 자원으로 처리할 수 있으며 일반쓰레기와 섞지 않으면 음식물 재활용에 도움이 됩니다."
  },

  {
    name: "수박껍질",
    category: "음식물",
    material: "과일 껍질, 유기물",

    aliases: ["수박", "수박 껍질", "수박껍데기"],
    tags: ["음식물", "음식물쓰레기", "과일", "껍질", "수박", "유기물"],

    recyclable: true,

    disposal_method:
      "수박껍질의 물기를 빼고 수거와 처리가 쉽도록 작은 크기로 잘라 음식물쓰레기로 배출합니다.",

    precautions:
      "두꺼운 껍질의 분류와 배출 크기는 지자체마다 다를 수 있으므로 지역별 음식물 분리배출 기준을 확인하세요.",

    decomposition_years: "약 2~6개월",

    environment_info:
      "수박껍질은 수분이 많아 물기를 줄여 배출하면 운반 과정의 악취와 침출수 발생을 줄일 수 있습니다."
  },

  {
    name: "감자껍질",
    category: "음식물",
    material: "채소 껍질, 유기물",

    aliases: ["감자 껍질", "감자", "감자껍데기"],
    tags: ["음식물", "음식물쓰레기", "채소", "껍질", "감자", "유기물"],

    recyclable: true,

    disposal_method:
      "흙과 이물질을 털어내고 감자껍질의 물기를 뺀 뒤 음식물쓰레기로 배출합니다.",

    precautions:
      "흙은 음식물류에 섞지 말고 싹이나 심하게 썩은 부분의 처리는 지역별 음식물 분리배출 기준을 확인하세요.",

    decomposition_years: "약 2~5주",

    environment_info:
      "깨끗한 감자껍질은 유기성 폐기물로 재활용할 수 있지만 흙과 포장재가 섞이면 처리 품질이 낮아집니다."
  },

  {
    name: "양배추",
    category: "음식물",
    material: "채소, 유기물",

    aliases: ["양배추잎", "남은 양배추", "양배추 심"],
    tags: ["음식물", "음식물쓰레기", "채소", "잎채소", "양배추", "유기물"],

    recyclable: true,

    disposal_method:
      "비닐과 고무줄 등 포장재를 제거하고 먹지 않는 잎과 심의 물기를 빼 음식물쓰레기로 배출합니다.",

    precautions:
      "흙이 많이 묻은 겉잎은 흙을 털어내고 단단한 뿌리 부분은 지역별 음식물 분리배출 기준을 확인하세요.",

    decomposition_years: "약 2~5주",

    environment_info:
      "양배추 잎과 심은 잘게 분해되는 유기물로 음식물류 처리시설에서 자원화할 수 있습니다."
  },

  {
    name: "상추",
    category: "음식물",
    material: "채소, 유기물",

    aliases: ["상추잎", "남은 상추", "시든 상추"],
    tags: ["음식물", "음식물쓰레기", "채소", "잎채소", "상추", "유기물"],

    recyclable: true,

    disposal_method:
      "비닐, 고무줄, 흙을 제거하고 상추의 물기를 충분히 뺀 뒤 음식물쓰레기로 배출합니다.",

    precautions:
      "쌈장과 기름 등 양념이 과하게 묻었다면 이물질을 제거하고 지역별 음식물 분리배출 기준을 확인하세요.",

    decomposition_years: "약 1~3주",

    environment_info:
      "상추와 같은 잎채소는 수분이 많으므로 물기를 줄여 배출하면 음식물쓰레기의 부피와 악취를 줄일 수 있습니다."
  },

  {
    name: "밥",
    category: "음식물",
    material: "곡물, 유기물",

    aliases: ["남은밥", "찬밥", "쌀밥", "먹다 남은 밥"],
    tags: ["음식물", "음식물쓰레기", "밥", "쌀", "곡물", "주방"],

    recyclable: true,

    disposal_method:
      "비닐과 일회용 수저 등 이물질을 제거하고 국물과 물기를 뺀 남은 밥을 음식물쓰레기로 배출합니다.",

    precautions:
      "국물째 버리지 말고 이쑤시개, 뼈, 조개껍데기 같은 음식물류가 아닌 물질을 반드시 분리합니다.",

    decomposition_years: "약 1~4주",

    environment_info:
      "먹을 만큼만 조리해 밥 폐기량을 줄이고 남은 밥을 올바르게 분리하면 유기성 자원으로 활용할 수 있습니다."
  },

  {
    name: "빵",
    category: "음식물",
    material: "곡물 가공식품, 유기물",

    aliases: ["남은빵", "식빵", "빵조각", "먹다 남은 빵"],
    tags: ["음식물", "음식물쓰레기", "빵", "곡물", "간식", "유기물"],

    recyclable: true,

    disposal_method:
      "비닐, 종이 포장과 장식용 이쑤시개를 제거하고 먹지 못하는 빵을 음식물쓰레기로 배출합니다.",

    precautions:
      "곰팡이가 심하거나 크림 포장재가 섞인 경우 이물질을 분리하고 지역별 음식물 분리배출 기준을 확인하세요.",

    decomposition_years: "약 2~4주",

    environment_info:
      "빵은 필요한 양만 구매하고 남은 빵을 보관하거나 활용하면 음식물 폐기와 식품 생산 자원의 낭비를 줄일 수 있습니다."
  },

  {
    name: "달걀흰자",
    category: "음식물",
    material: "단백질, 유기물",

    aliases: ["계란흰자", "남은 흰자", "삶은 달걀흰자", "계란 흰자"],
    tags: ["음식물", "음식물쓰레기", "달걀", "계란", "흰자", "단백질"],

    recyclable: true,

    disposal_method:
      "남은 달걀흰자의 물기를 최대한 제거한 뒤 음식물쓰레기로 배출합니다.",

    precautions:
      "달걀껍데기는 사료화하기 어려운 일반쓰레기이므로 흰자와 분리하고 지역별 음식물 분리배출 기준을 확인하세요.",

    decomposition_years: "약 1~2주",

    environment_info:
      "달걀흰자는 유기물이지만 껍데기는 음식물류가 아니므로 두 재질을 구분해 배출해야 합니다."
  },

  {
    name: "칫솔",
    category: "일반쓰레기",
    material: "플라스틱, 나일론, 고무 등 복합재질",

    aliases: ["일반칫솔", "전동칫솔", "칫솔모", "사용한 칫솔"],
    tags: ["일반쓰레기", "칫솔", "욕실", "생활용품", "위생용품", "복합재질"],

    recyclable: false,

    disposal_method:
      "일반 칫솔과 교체형 전동칫솔모는 종량제봉투에 일반쓰레기로 배출합니다.",

    precautions:
      "전동칫솔 본체는 배터리를 분리하고 소형 폐가전 수거 기준을 따라야 하므로 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "약 400년 이상",

    environment_info:
      "칫솔은 작은 크기에 여러 재질이 단단히 결합되어 있어 재질별 분리와 기계 선별이 어렵습니다."
  },

  {
    name: "치약튜브",
    category: "일반쓰레기",
    material: "복합 플라스틱, 알루미늄 등",

    aliases: ["치약", "치약용기", "치약 튜브", "다 쓴 치약"],
    tags: ["일반쓰레기", "치약", "욕실", "용기", "복합재질", "생활용품"],

    recyclable: false,

    disposal_method:
      "치약을 최대한 모두 사용하고 남은 내용물이 새지 않도록 뚜껑을 닫아 종량제봉투에 배출합니다.",

    precautions:
      "내부를 헹굴 수 없거나 여러 재질이 결합된 치약튜브는 플라스틱류로 배출하지 않습니다.",

    decomposition_years: "약 400~500년",

    environment_info:
      "치약튜브는 여러 층의 복합재질로 만들어지는 경우가 많아 재활용이 어려우므로 끝까지 사용하는 것이 중요합니다."
  },

  {
    name: "휴지",
    category: "일반쓰레기",
    material: "짧은 종이 섬유",

    aliases: ["화장지", "사용한휴지", "코푼휴지", "미용티슈"],
    tags: ["일반쓰레기", "휴지", "종이", "위생용품", "생활폐기물"],

    recyclable: false,

    disposal_method:
      "사용한 휴지는 종이류 수거함에 넣지 말고 종량제봉투에 일반쓰레기로 배출합니다.",

    precautions:
      "오염된 휴지는 재활용할 수 없으며 변기에 버릴 수 있는 제품인지 확인하지 않은 채 하수구에 흘려보내지 않습니다.",

    decomposition_years: "약 2~4주",

    environment_info:
      "휴지는 섬유가 짧고 사용 과정에서 오염되므로 일반 폐지와 함께 재활용하기 어렵습니다."
  },

  {
    name: "물티슈",
    category: "일반쓰레기",
    material: "부직포, 합성섬유",

    aliases: ["물티슈휴지", "습식티슈", "아기물티슈", "일회용 물티슈"],
    tags: ["일반쓰레기", "물티슈", "부직포", "위생용품", "플라스틱", "생활폐기물"],

    recyclable: false,

    disposal_method:
      "사용한 물티슈는 수분을 줄인 뒤 종량제봉투에 일반쓰레기로 배출합니다.",

    precautions:
      "물티슈는 종이가 아닌 합성섬유가 포함된 부직포 제품이므로 종이류로 배출하거나 변기에 버리지 않습니다.",

    decomposition_years: "약 100년 이상",

    environment_info:
      "합성섬유 물티슈는 자연에서 쉽게 분해되지 않으므로 가능한 행주나 손수건으로 대체하는 것이 좋습니다."
  },

  {
    name: "기저귀",
    category: "일반쓰레기",
    material: "펄프, 부직포, 고흡수성수지, 플라스틱",

    aliases: ["일회용기저귀", "아기기저귀", "성인용기저귀", "사용한 기저귀"],
    tags: ["일반쓰레기", "기저귀", "위생용품", "육아", "생활폐기물", "일회용"],

    recyclable: false,

    disposal_method:
      "대변 등 내용물을 변기에 따로 처리하고 기저귀를 잘 말아 밀봉한 뒤 종량제봉투에 배출합니다.",

    precautions:
      "기저귀는 여러 재질과 오염물이 섞인 위생폐기물이므로 재활용품이나 음식물쓰레기에 넣지 않습니다.",

    decomposition_years: "약 400~500년",

    environment_info:
      "일회용 기저귀는 복합재질과 흡수재로 구성되어 분해와 재활용이 어려워 폐기물 부피가 큽니다."
  },

  {
    name: "마스크",
    category: "일반쓰레기",
    material: "부직포, 플라스틱, 금속",

    aliases: ["일회용마스크", "보건용마스크", "KF94 마스크", "사용한 마스크"],
    tags: ["일반쓰레기", "마스크", "위생용품", "부직포", "생활폐기물", "일회용"],

    recyclable: false,

    disposal_method:
      "사용한 마스크의 겉면이 안쪽으로 가도록 접고 끈으로 묶어 종량제봉투에 배출합니다.",

    precautions:
      "마스크는 여러 재질이 결합되고 오염될 수 있어 재활용품으로 배출하지 않으며 사용 후 손을 씻습니다.",

    decomposition_years: "약 400~450년",

    environment_info:
      "합성섬유 마스크는 자연에서 오래 남고 미세플라스틱이 될 수 있어 꼭 필요한 경우에 알맞게 사용해야 합니다."
  },

  {
    name: "담배꽁초",
    category: "일반쓰레기",
    material: "셀룰로오스 아세테이트, 종이, 담배 잔재",

    aliases: ["담배필터", "꽁초", "피우고 남은 담배"],
    tags: ["일반쓰레기", "담배", "꽁초", "필터", "유해물질", "생활폐기물"],

    recyclable: false,

    disposal_method:
      "불씨를 물로 완전히 끄고 물기를 제거한 뒤 재떨이에 모아 종량제봉투로 배출합니다.",

    precautions:
      "불씨가 남은 채 버리지 말고 하수구, 화단, 길거리에 투기하지 않습니다.",

    decomposition_years: "약 10~15년",

    environment_info:
      "담배 필터는 플라스틱 계열 섬유와 유해물질을 포함해 토양과 물을 오염시킬 수 있습니다."
  },

  {
    name: "깨진 도자기",
    category: "일반쓰레기",
    material: "도자기, 세라믹",

    aliases: ["도자기조각", "깨진그릇", "깨진 사기그릇", "사기조각"],
    tags: ["일반쓰레기", "도자기", "그릇", "파편", "불연성", "안전"],

    recyclable: false,

    disposal_method:
      "조각을 신문지나 두꺼운 종이로 감싸 단단한 용기에 담고 불연성 폐기물 전용 봉투 또는 마대에 배출합니다.",

    precautions:
      "날카로운 부분이 밖으로 나오지 않게 포장하고 봉투 종류가 지역마다 다르므로 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "자연 분해되지 않음",

    environment_info:
      "도자기는 유리병이나 캔과 함께 녹여 재활용할 수 없으며 일반 소각에도 적합하지 않은 불연성 폐기물입니다."
  },

  {
    name: "고무장갑",
    category: "일반쓰레기",
    material: "천연고무, 합성고무",

    aliases: ["주방고무장갑", "라텍스장갑", "설거지장갑", "고무 글러브"],
    tags: ["일반쓰레기", "고무", "장갑", "주방", "생활용품", "복합재질"],

    recyclable: false,

    disposal_method:
      "물기와 음식물 등 이물질을 제거한 뒤 종량제봉투에 일반쓰레기로 배출합니다.",

    precautions:
      "고무장갑은 비닐류가 아니므로 비닐 수거함에 넣지 말고 지역별 분리배출 기준을 확인하세요.",

    decomposition_years: "약 50~80년",

    environment_info:
      "고무장갑은 첨가제와 여러 재질이 섞여 재활용이 어려우므로 찢어질 때까지 오래 사용하는 것이 좋습니다."
  },

  {
    name: "고무줄",
    category: "일반쓰레기",
    material: "천연고무, 합성고무",

    aliases: ["고무밴드", "노란고무줄", "머리 고무줄", "밴드고무"],
    tags: ["일반쓰레기", "고무", "고무줄", "생활용품", "소형폐기물"],

    recyclable: false,

    disposal_method:
      "사용할 수 없는 고무줄은 흩어지지 않도록 모아 종량제봉투에 일반쓰레기로 배출합니다.",

    precautions:
      "금속 장식이 큰 머리끈은 분리 가능한 금속을 제거하고 작은 고무줄은 재활용품에 섞지 않습니다.",

    decomposition_years: "약 50년 이상",

    environment_info:
      "작은 고무줄은 선별이 어렵고 야생동물이 삼킬 수 있으므로 바닥에 떨어뜨리지 말고 안전하게 버려야 합니다."
  }
];

module.exports = items;
