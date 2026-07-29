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
  }
];

module.exports = items;