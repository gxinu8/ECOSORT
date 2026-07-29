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
  }
];

module.exports = items;
