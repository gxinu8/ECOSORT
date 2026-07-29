# EcoSort Project Specification

## 프로젝트 개요

EcoSort는 올바른 분리배출 방법을 쉽고 빠르게 검색할 수 있도록 도와주는 웹서비스이다.

통합과학2 「환경과 에너지 - 지구 환경 변화와 인간 생활」 단원과 연계하여 제작하며, JavaScript와 SQLite를 활용하여 실제 생활 속 환경 문제를 해결하는 것을 목표로 한다.

---

# 개발 목표

- 올바른 분리배출 방법 제공
- 다양한 검색어 지원
- 동의어(Alias) 검색
- 태그(Tag) 검색
- 오타 보정(Fuzzy Search)
- 환경 정보 제공
- 최근 검색
- 즐겨찾기
- 분리배출 퀴즈

---

# 기술 스택

Frontend

- HTML5
- CSS3
- Vanilla JavaScript

Backend

- Node.js
- Express

Database

- SQLite3

배포

- GitHub
- Render

---

# 프로젝트 구조

EcoSort

database

- data.js
- seed.js
- ecosort.db

server

- server.js
- db.js

public

- index.html
- css
- js

---

# 데이터베이스 설계

## items

- id
- name
- category
- material
- recyclable
- disposal_method
- precautions
- decomposition_years
- environment_info

## aliases

- id
- item_id
- alias

## tags

- id
- item_id
- tag

---

# 검색 알고리즘

검색 순서는 반드시 다음 순서를 따른다.

1. 품목명(name) 정확 검색
2. Alias 검색
3. Tag 검색
4. Fuzzy Search

---

# Alias

예시

생수병 → 페트병

PET병 → 페트병

커피컵 → 종이컵

---

# Tag

예시

페트병

태그

- 플라스틱
- 병
- 음료
- 재활용

검색어가 태그와 일치하면 해당 품목을 반환한다.

---

# Fuzzy Search

사용자가 오타를 입력하면 문자열 유사도를 계산하여 가장 가까운 품목을 추천한다.

예)

페트벙

↓

혹시 "페트병"을 찾으셨나요?

---

# UI

메인 화면

- 검색창
- 검색 버튼
- 카테고리 버튼

검색 결과

- 품목명
- 분리배출 방법
- 재질
- 재활용 여부
- 주의사항
- 자연 분해 기간
- 환경 정보

---

# 개발 원칙

- 기존 프로젝트 구조 유지
- 새로운 폴더 생성 금지
- React 사용 금지
- Vue 사용 금지
- TypeScript 사용 금지
- Vanilla JavaScript 사용
- SQLite3 사용
- 유지보수가 쉬운 코드 작성
- 코드에 적절한 주석 작성