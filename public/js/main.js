const appLogo = document.querySelector("#app-logo");
const searchView = document.querySelector("#search-view");
const factView = document.querySelector("#fact-view");
const quizView = document.querySelector("#quiz-view");
const collectionView = document.querySelector("#collection-view");
const searchNavButton = document.querySelector("#nav-search");
const factNavButton = document.querySelector("#nav-fact");
const quizNavButton = document.querySelector("#nav-quiz");
const collectionNavButton = document.querySelector("#nav-collection");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const autocompleteList = document.querySelector("#autocomplete-list");
const recentSearchPanel = document.querySelector("#recent-search-panel");
const recentSearchList = document.querySelector("#recent-search-list");
const clearRecentSearchesButton = document.querySelector("#clear-recent-searches");
const favoritesSection = document.querySelector("#favorites-section");
const favoritesList = document.querySelector("#favorites-list");
const clearFavoritesButton = document.querySelector("#clear-favorites");
const resultSection = document.querySelector("#result-section");
const resultSummary = document.querySelector("#result-summary");
const resultList = document.querySelector("#result-list");
const quizStartButton = document.querySelector("#quiz-start-button");
const studyModeButton = document.querySelector("#study-mode-button");
const dailyFactContent = document.querySelector("#daily-fact-content");
const newFactButton = document.querySelector("#new-fact-button");
const quizContent = document.querySelector("#quiz-content");
const quizStats = document.querySelector("#quiz-stats");
const quizBestScore = document.querySelector("#quiz-best-score");
const quizRecentScore = document.querySelector("#quiz-recent-score");
const quizRepresentativeBadge = document.querySelector("#quiz-representative-badge");
const ecoLevelPanel = document.querySelector("#eco-level-panel");
const ecoLevelName = document.querySelector("#eco-level-name");
const ecoLevelExp = document.querySelector("#eco-level-exp");
const ecoLevelProgress = document.querySelector("#eco-level-progress");
const collectionCount = document.querySelector("#collection-count");
const collectionPercent = document.querySelector("#collection-percent");
const collectionProgressTrack = document.querySelector("#collection-progress-track");
const collectionProgress = document.querySelector("#collection-progress");
const collectionBadges = document.querySelector("#collection-badges");
const collectionStatus = document.querySelector("#collection-status");
const collectionGrid = document.querySelector("#collection-grid");
const collectionDetail = document.querySelector("#collection-detail");

const RECENT_SEARCH_STORAGE_KEY = "ecosortRecentSearches";
const MAX_RECENT_SEARCHES = 5;
const FAVORITES_STORAGE_KEY = "ecosort-favorites";
const QUIZ_STATS_STORAGE_KEY = "ecosort-quiz-stats";
const ECO_PROGRESS_STORAGE_KEY = "ecosort-eco-progress";
const COLLECTION_STORAGE_KEY = "ecosort-collection";
const QUIZ_QUESTION_COUNT = 10;

let autocompleteSuggestions = [];
let activeSuggestionIndex = -1;
let autocompleteRequest = null;
let quizQuestions = [];
let currentQuizIndex = 0;
let correctQuizAnswers = 0;
let quizAnswerSelected = false;
let quizAnswers = [];
let quizMode = "idle";
let quizResultSaved = false;
let quizSessionId = 0;
let studyItems = [];
let currentStudyIndex = 0;
let learningItemsCache = [];
let learningItemsRequest = null;
let currentFactItemId = null;
const renderedFavoriteButtons = new Map();

const searchTypeLabels = {
    name: "품목명",
    alias: "비슷한 이름",
    tag: "관련 태그",
    group: "관련 품목",
    fuzzy: "유사 검색"
};

const appViews = {
    search: searchView,
    fact: factView,
    quiz: quizView,
    collection: collectionView
};

const appNavButtons = {
    search: searchNavButton,
    fact: factNavButton,
    quiz: quizNavButton,
    collection: collectionNavButton
};

function showAppView(viewName) {
    for (const [name, view] of Object.entries(appViews)) {
        const isActive = name === viewName;
        view.hidden = !isActive;
        view.classList.toggle("is-active", isActive);
        appNavButtons[name].classList.toggle("is-active", isActive);
        appNavButtons[name].setAttribute("aria-selected", String(isActive));
    }

    closeSearchPanels();

    if (viewName === "collection") {
        renderCollection();
    }
}

function requestAppView(viewName) {
    if (quizMode === "quiz" && viewName !== "quiz") {
        if (!confirm("정말 퀴즈를 종료하시겠습니까?")) {
            return;
        }

        resetQuizHome();
    }

    showAppView(viewName);
}

// 문자열을 HTML로 조합하지 않고 DOM 요소로 만들어 API 데이터를 안전하게 출력합니다.
function createTextElement(tagName, className, text) {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    element.textContent = text;
    return element;
}

function formatValue(value) {
    return value === null || value === undefined || value === "" ? "정보 없음" : value;
}

function createBasicInfo(label, value) {
    const wrapper = document.createElement("div");
    wrapper.append(
        createTextElement("dt", "", label),
        createTextElement("dd", "", formatValue(value))
    );
    return wrapper;
}

function createInfoBlock(title, content, className) {
    const block = document.createElement("section");
    block.className = className;
    block.append(
        createTextElement("h3", "", title),
        createTextElement("p", "", formatValue(content))
    );
    return block;
}

function createResultCard(item) {
    const card = document.createElement("article");
    card.className = "result-card";

    const heading = document.createElement("div");
    heading.className = "card-heading";
    heading.append(
        createTextElement("h2", "", formatValue(item.name)),
        createFavoriteToggle(item.name)
    );

    const isRecyclable = Boolean(item.recyclable);
    const recycleInfo = createBasicInfo(
        "재활용 여부",
        isRecyclable ? "재활용 가능" : "재활용 어려움"
    );
    const recycleValue = recycleInfo.querySelector("dd");
    recycleValue.className = `recycle-value${isRecyclable ? "" : " is-not-recyclable"}`;

    const basics = document.createElement("dl");
    basics.className = "item-basics";
    basics.append(
        recycleInfo,
        createBasicInfo("카테고리", item.category),
        createBasicInfo("재질", item.material),
        createBasicInfo("자연 분해 기간", item.decomposition_years)
    );

    const disposalMethod = createInfoBlock(
        "분리배출 방법",
        item.disposal_method,
        "disposal-method"
    );
    const precautions = createInfoBlock(
        "주의사항",
        item.precautions,
        "precaution-block"
    );
    const environmentInfo = createInfoBlock(
        "환경 정보",
        item.environment_info,
        "environment-note"
    );

    card.append(heading, disposalMethod, precautions, basics, environmentInfo);
    return card;
}

function showResultSection() {
    resultSection.hidden = false;
}

function renderMessage(message, type = "") {
    showResultSection();
    resultSummary.replaceChildren();
    renderedFavoriteButtons.clear();

    const messageBox = document.createElement("div");
    messageBox.className = `result-message${type ? ` ${type}` : ""}`;
    messageBox.appendChild(createTextElement("strong", "", message));
    resultList.replaceChildren(messageBox);
}

function renderEmptyState() {
    showResultSection();
    resultSummary.replaceChildren();
    renderedFavoriteButtons.clear();

    const messageBox = document.createElement("div");
    messageBox.className = "result-message empty-state";
    messageBox.append(
        createTextElement("strong", "", "검색 결과를 찾을 수 없습니다."),
        createTextElement(
            "p",
            "empty-guide",
            "입력한 품목명을 다시 확인하거나 다른 검색어를 입력해보세요."
        )
    );

    const examples = document.createElement("ul");
    examples.className = "empty-examples";

    for (const example of ["생수병", "플라스틱", "종이컵"]) {
        examples.appendChild(createTextElement("li", "", example));
    }

    messageBox.appendChild(examples);
    resultList.replaceChildren(messageBox);
}

function renderResults(query, searchType, data, suggestion = "") {
    const items = Array.isArray(data) ? data : [data];
    const typeLabel = searchTypeLabels[searchType] || "검색";

    showResultSection();
    resultSummary.replaceChildren();

    if (searchType === "fuzzy") {
        const fuzzyMessage = document.createElement("div");
        fuzzyMessage.className = "fuzzy-message";
        fuzzyMessage.append(
            createTextElement(
                "span",
                "fuzzy-suggestion",
                `혹시 “${suggestion}”을 찾으셨나요?`
            ),
            createTextElement(
                "span",
                "fuzzy-guide",
                "입력한 검색어와 가장 유사한 결과입니다."
            ),
            createTextElement(
                "span",
                "fuzzy-subguide",
                "추천 품목을 보여드립니다."
            )
        );

        resultSummary.append(
            createTextElement("strong", "", `🔍 “${query}” 검색 결과`),
            fuzzyMessage
        );
    } else {
        const queryText = createTextElement("strong", "", `“${query}”`);
        resultSummary.append(
            queryText,
            document.createTextNode(` ${typeLabel} 검색 결과 ${items.length}개`)
        );
    }

    renderedFavoriteButtons.clear();
    resultList.replaceChildren(...items.map(createResultCard));
}

function setLoading(isLoading) {
    searchButton.disabled = isLoading;
    searchButton.textContent = isLoading ? "검색 중..." : "검색";
    resultSection.setAttribute("aria-busy", String(isLoading));
}

function updateSearchPanelState() {
    const isExpanded = !autocompleteList.hidden || !recentSearchPanel.hidden;
    searchInput.setAttribute("aria-expanded", String(isExpanded));
}

function closeAutocomplete() {
    if (autocompleteRequest) {
        autocompleteRequest.abort();
        autocompleteRequest = null;
    }

    autocompleteSuggestions = [];
    activeSuggestionIndex = -1;
    autocompleteList.replaceChildren();
    autocompleteList.hidden = true;
    searchInput.removeAttribute("aria-activedescendant");
    updateSearchPanelState();
}

function closeRecentSearches() {
    recentSearchList.replaceChildren();
    recentSearchPanel.hidden = true;
    updateSearchPanelState();
}

function closeSearchPanels() {
    closeAutocomplete();
    closeRecentSearches();
}

function getRecentSearches() {
    try {
        const storedSearches = JSON.parse(
            localStorage.getItem(RECENT_SEARCH_STORAGE_KEY) || "[]"
        );

        if (!Array.isArray(storedSearches)) {
            return [];
        }

        return storedSearches
            .filter((search) => typeof search === "string" && search.trim())
            .slice(0, MAX_RECENT_SEARCHES);
    } catch (error) {
        console.warn("최근 검색어를 불러오지 못했습니다.", error);
        return [];
    }
}

function saveRecentSearch(query) {
    const recentSearches = getRecentSearches()
        .filter((search) => search !== query);
    const nextRecentSearches = [query, ...recentSearches]
        .slice(0, MAX_RECENT_SEARCHES);

    try {
        localStorage.setItem(
            RECENT_SEARCH_STORAGE_KEY,
            JSON.stringify(nextRecentSearches)
        );
    } catch (error) {
        console.warn("최근 검색어를 저장하지 못했습니다.", error);
    }
}

function getFavorites() {
    try {
        const storedFavorites = JSON.parse(
            localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]"
        );

        if (!Array.isArray(storedFavorites)) {
            return [];
        }

        return Array.from(
            new Set(
                storedFavorites.filter(
                    (favorite) =>
                        typeof favorite === "string" && favorite.trim()
                )
            )
        );
    } catch (error) {
        console.warn("즐겨찾기를 불러오지 못했습니다.", error);
        return [];
    }
}

function saveFavorites(favorites) {
    try {
        localStorage.setItem(
            FAVORITES_STORAGE_KEY,
            JSON.stringify(favorites)
        );
    } catch (error) {
        console.warn("즐겨찾기를 저장하지 못했습니다.", error);
    }
}

function updateFavoriteButton(button, itemName, favorites = getFavorites()) {
    const isFavorite = favorites.includes(itemName);
    button.textContent = isFavorite ? "★" : "☆";
    button.classList.toggle("is-favorite", isFavorite);
    button.setAttribute("aria-pressed", String(isFavorite));
    button.setAttribute(
        "aria-label",
        isFavorite
            ? `${itemName} 즐겨찾기 해제`
            : `${itemName} 즐겨찾기 추가`
    );
}

function updateRenderedFavoriteButtons() {
    const favorites = getFavorites();

    for (const [itemName, button] of renderedFavoriteButtons) {
        updateFavoriteButton(button, itemName, favorites);
    }
}

function renderFavorites() {
    const favorites = getFavorites();

    if (favorites.length === 0) {
        favoritesList.replaceChildren();
        favoritesSection.hidden = true;
        return;
    }

    const items = favorites.map((itemName) => {
        const listItem = document.createElement("li");
        const button = createTextElement(
            "button",
            "favorite-search-button",
            itemName
        );
        button.type = "button";
        button.addEventListener("click", () => {
            submitSelectedSearch(itemName);
        });
        listItem.appendChild(button);
        return listItem;
    });

    favoritesList.replaceChildren(...items);
    favoritesSection.hidden = false;
}

function toggleFavorite(itemName) {
    const favorites = getFavorites();
    const nextFavorites = favorites.includes(itemName)
        ? favorites.filter((favorite) => favorite !== itemName)
        : [...favorites, itemName];

    saveFavorites(nextFavorites);
    renderFavorites();
    updateRenderedFavoriteButtons();
}

function createFavoriteToggle(itemName) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "favorite-toggle";
    updateFavoriteButton(button, itemName);
    renderedFavoriteButtons.set(itemName, button);
    button.addEventListener("click", () => {
        toggleFavorite(itemName);
    });
    return button;
}

function getQuizGrade(score) {
    if (score >= 90) {
        return "S";
    }

    if (score >= 80) {
        return "A";
    }

    if (score >= 70) {
        return "B";
    }

    if (score >= 60) {
        return "C";
    }

    return "D";
}

const QUIZ_BADGES = [
    { minimumScore: 90, label: "🏆 환경 지킴이" },
    { minimumScore: 80, label: "🌿 재활용 전문가" },
    { minimumScore: 70, label: "♻️ 분리배출 마스터" },
    { minimumScore: 60, label: "🌱 환경 새싹" },
    { minimumScore: 0, label: "📚 다시 도전!" }
];

const ECO_LEVELS = [
    { level: 1, minimumExp: 0, name: "환경 새싹" },
    { level: 2, minimumExp: 50, name: "분리배출 초보" },
    { level: 3, minimumExp: 120, name: "재활용 실천가" },
    { level: 4, minimumExp: 220, name: "환경 지킴이" },
    { level: 5, minimumExp: 350, name: "Eco Master" }
];

const COLLECTION_BADGE_RULES = [
    { minimumItems: 10, label: "🌱 새싹 수집가" },
    { minimumItems: 20, label: "♻️ 재활용 전문가" },
    { minimumItems: 30, label: "🔬 환경 연구가" }
];

function getQuizBadge(score) {
    return QUIZ_BADGES.find(
        (badge) => score >= badge.minimumScore
    ).label;
}

function getEcoExperience() {
    try {
        const storedProgress = JSON.parse(
            localStorage.getItem(ECO_PROGRESS_STORAGE_KEY) || "null"
        );

        return storedProgress
            && Number.isFinite(storedProgress.exp)
            && storedProgress.exp >= 0
            ? storedProgress.exp
            : 0;
    } catch (error) {
        console.warn("환경 경험치를 불러오지 못했습니다.", error);
        return 0;
    }
}

function getEcoLevel(exp) {
    return [...ECO_LEVELS].reverse().find(
        (level) => exp >= level.minimumExp
    );
}

function renderEcoLevel() {
    const exp = getEcoExperience();
    const level = getEcoLevel(exp);
    const nextLevel = ECO_LEVELS[level.level];
    const isMaxLevel = !nextLevel;
    const progressMinimum = level.minimumExp;
    const progressMaximum = isMaxLevel
        ? level.minimumExp
        : nextLevel.minimumExp;
    const progressValue = isMaxLevel
        ? progressMaximum
        : Math.min(exp, progressMaximum);
    const progressPercent = isMaxLevel
        ? 100
        : ((exp - progressMinimum) / (progressMaximum - progressMinimum)) * 100;
    const progressTrack = ecoLevelProgress.parentElement;

    ecoLevelName.textContent = `Lv.${level.level} ${level.name}`;
    ecoLevelExp.textContent = isMaxLevel
        ? `${exp} EXP · 최고 레벨`
        : `${exp} / ${progressMaximum} EXP`;
    progressTrack.setAttribute("aria-valuemin", String(progressMinimum));
    progressTrack.setAttribute("aria-valuemax", String(progressMaximum));
    progressTrack.setAttribute("aria-valuenow", String(progressValue));

    requestAnimationFrame(() => {
        ecoLevelProgress.style.width = `${Math.max(0, Math.min(progressPercent, 100))}%`;
    });
}

function saveEcoExperience(earnedExp) {
    const nextExp = getEcoExperience() + earnedExp;

    try {
        localStorage.setItem(
            ECO_PROGRESS_STORAGE_KEY,
            JSON.stringify({ exp: nextExp })
        );
    } catch (error) {
        console.warn("환경 경험치를 저장하지 못했습니다.", error);
    }

    renderEcoLevel();
    return nextExp;
}

function getCollectionState() {
    const defaultState = {
        itemIds: [],
        badges: []
    };

    try {
        const storedCollection = JSON.parse(
            localStorage.getItem(COLLECTION_STORAGE_KEY) || "null"
        );

        if (!storedCollection || typeof storedCollection !== "object") {
            return defaultState;
        }

        return {
            itemIds: Array.isArray(storedCollection.itemIds)
                ? Array.from(
                    new Set(
                        storedCollection.itemIds.filter(Number.isFinite)
                    )
                )
                : [],
            badges: Array.isArray(storedCollection.badges)
                ? Array.from(
                    new Set(
                        storedCollection.badges.filter(
                            (badge) => typeof badge === "string"
                        )
                    )
                )
                : []
        };
    } catch (error) {
        console.warn("환경 도감을 불러오지 못했습니다.", error);
        return defaultState;
    }
}

function getCollectionBadges(itemCount, totalItems) {
    const badges = COLLECTION_BADGE_RULES
        .filter((rule) => itemCount >= rule.minimumItems)
        .map((rule) => rule.label);

    if (totalItems > 0 && itemCount === totalItems) {
        badges.push("🏆 EcoSort Master Collector");
    }

    return badges;
}

function saveCollectionState(itemIds, totalItems = learningItemsCache.length) {
    const uniqueItemIds = Array.from(new Set(itemIds));
    const state = {
        itemIds: uniqueItemIds,
        badges: getCollectionBadges(uniqueItemIds.length, totalItems)
    };

    try {
        localStorage.setItem(
            COLLECTION_STORAGE_KEY,
            JSON.stringify(state)
        );
    } catch (error) {
        console.warn("환경 도감을 저장하지 못했습니다.", error);
    }

    return state;
}

function discoverCollectionItem(itemId) {
    if (!Number.isFinite(itemId)) {
        return;
    }

    const state = getCollectionState();

    if (state.itemIds.includes(itemId)) {
        return;
    }

    saveCollectionState([...state.itemIds, itemId]);
}

function getTodayKey() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function getQuizStats() {
    const defaultStats = {
        date: getTodayKey(),
        bestScore: 0,
        recentScore: null,
        badges: [],
        representativeBadge: null
    };

    try {
        const storedStats = JSON.parse(
            localStorage.getItem(QUIZ_STATS_STORAGE_KEY) || "null"
        );

        if (!storedStats || typeof storedStats !== "object") {
            return defaultStats;
        }

        const badges = Array.isArray(storedStats.badges)
            ? Array.from(
                new Set(
                    storedStats.badges.filter(
                        (badge) => typeof badge === "string"
                    )
                )
            )
            : [];
        const isToday = storedStats.date === defaultStats.date;

        return {
            date: defaultStats.date,
            bestScore: isToday && Number.isFinite(storedStats.bestScore)
                ? storedStats.bestScore
                : 0,
            recentScore: Number.isFinite(storedStats.recentScore)
                ? storedStats.recentScore
                : null,
            badges,
            representativeBadge:
                typeof storedStats.representativeBadge === "string"
                    ? storedStats.representativeBadge
                    : null
        };
    } catch (error) {
        console.warn("퀴즈 기록을 불러오지 못했습니다.", error);
        return defaultStats;
    }
}

function renderQuizStats() {
    const stats = getQuizStats();
    quizBestScore.textContent = `${stats.bestScore}점`;
    quizRecentScore.textContent = stats.recentScore === null
        ? "기록 없음"
        : `${stats.recentScore}점`;
    quizRepresentativeBadge.textContent =
        stats.representativeBadge || "아직 없음";
    quizRepresentativeBadge.title = stats.badges.length > 0
        ? `획득한 배지: ${stats.badges.join(", ")}`
        : "획득한 배지가 없습니다.";
}

function saveQuizResult(score) {
    const stats = getQuizStats();
    const earnedBadge = getQuizBadge(score);
    const badges = Array.from(new Set([...stats.badges, earnedBadge]));
    const representativeBadge = QUIZ_BADGES.find((badge) =>
        badges.includes(badge.label)
    ).label;
    const nextStats = {
        date: getTodayKey(),
        bestScore: Math.max(stats.bestScore, score),
        recentScore: score,
        badges,
        representativeBadge
    };

    try {
        localStorage.setItem(
            QUIZ_STATS_STORAGE_KEY,
            JSON.stringify(nextStats)
        );
    } catch (error) {
        console.warn("퀴즈 기록을 저장하지 못했습니다.", error);
    }

    renderQuizStats();
    return earnedBadge;
}

function getQuizEnvironmentalFeedback(score) {
    if (score === 100) {
        return {
            title: "🌍 훌륭합니다!",
            message: "올바른 분리배출은 자원순환과 탄소배출 감소에 큰 도움이 됩니다."
        };
    }

    if (score >= 80) {
        return {
            title: "👍 아주 좋습니다!",
            message: "조금만 더 공부하면 완벽합니다."
        };
    }

    if (score >= 70) {
        return {
            title: "🌿 잘하고 있습니다!",
            message: "헷갈린 품목의 분리배출 방법을 한 번 더 확인해보세요."
        };
    }

    return {
        title: "📚 다시 한 번 도전해보세요.",
        message: "분리배출 방법을 익히면 환경 보호에 큰 도움이 됩니다."
    };
}

function createQuizFeedbackDetail(title, content) {
    const section = document.createElement("section");
    section.append(
        createTextElement("h4", "", title),
        createTextElement("p", "", formatValue(content))
    );
    return section;
}

function renderQuizResult() {
    const score = correctQuizAnswers * 10;
    const earnedExp = correctQuizAnswers * 10;
    const incorrectAnswers = QUIZ_QUESTION_COUNT - correctQuizAnswers;
    const card = document.createElement("div");
    card.className = "quiz-card quiz-result-card";
    const environmentalFeedback = getQuizEnvironmentalFeedback(score);
    const earnedBadge = quizResultSaved
        ? getQuizBadge(score)
        : saveQuizResult(score);

    if (!quizResultSaved) {
        saveEcoExperience(earnedExp);
    }

    quizResultSaved = true;
    quizMode = "result";
    quizStats.hidden = false;
    quizStartButton.hidden = false;
    studyModeButton.hidden = false;

    const summary = document.createElement("dl");
    summary.className = "quiz-result-summary";
    summary.append(
        createBasicInfo("정답", `${correctQuizAnswers}개`),
        createBasicInfo("오답", `${incorrectAnswers}개`)
    );

    const restartButton = createTextElement(
        "button",
        "quiz-restart-button",
        "다시 풀기"
    );
    restartButton.type = "button";
    restartButton.addEventListener("click", startQuiz);

    const feedback = document.createElement("div");
    feedback.className = "quiz-result-feedback";
    feedback.append(
        createTextElement("strong", "", environmentalFeedback.title),
        createTextElement("p", "", environmentalFeedback.message)
    );

    card.append(
        createTextElement("h3", "", "퀴즈 결과"),
        createTextElement("p", "quiz-score", `${score}점 / 100점`),
        createTextElement("p", "quiz-grade", `등급 ${getQuizGrade(score)}`),
        createTextElement(
            "p",
            "quiz-earned-badge",
            `획득 배지: ${earnedBadge}`
        ),
        createTextElement(
            "p",
            "quiz-earned-exp",
            `획득 EXP: +${earnedExp}`
        ),
        feedback,
        summary,
        restartButton
    );

    quizContent.replaceChildren(card);
}

function renderQuizAnswerFeedback(
    question,
    selectedAnswer,
    optionButtons,
    card
) {
    const isCorrect = selectedAnswer === question.answer;
    for (const button of optionButtons) {
        button.disabled = true;

        if (button.textContent === question.answer) {
            button.classList.add("is-correct");
        } else if (button.textContent === selectedAnswer) {
            button.classList.add("is-incorrect");
        }
    }

    const feedback = document.createElement("div");
    feedback.className = `quiz-feedback${isCorrect ? "" : " is-incorrect"}`;

    const details = document.createElement("div");
    details.className = "quiz-feedback-details";
    details.append(
        createQuizFeedbackDetail(
            "자연 분해 기간",
            question.decomposition_years
        ),
        createQuizFeedbackDetail("분리배출 방법", question.disposal_method),
        createQuizFeedbackDetail("주의사항", question.precautions)
    );

    feedback.append(
        createTextElement(
            "strong",
            "",
            isCorrect ? "✅ 정답입니다!" : "❌ 틀렸습니다."
        ),
        createTextElement("p", "quiz-answer", `정답: ${question.answer}`),
        createTextElement(
            "p",
            "quiz-explanation",
            formatValue(question.environment_info)
        ),
        details
    );

    const nextButton = createTextElement(
        "button",
        "quiz-next-button",
        currentQuizIndex === QUIZ_QUESTION_COUNT - 1
            ? "결과 보기"
            : "다음 문제"
    );
    nextButton.type = "button";
    nextButton.addEventListener("click", moveToNextQuizQuestion);

    card.append(feedback, nextButton);
}

function handleQuizAnswer(question, selectedAnswer, optionButtons, card) {
    if (quizAnswers[currentQuizIndex] !== null) {
        return;
    }

    const isCorrect = selectedAnswer === question.answer;
    quizAnswerSelected = true;
    quizAnswers[currentQuizIndex] = {
        selectedAnswer,
        isCorrect
    };

    if (isCorrect) {
        correctQuizAnswers += 1;
        discoverCollectionItem(question.id);
    }

    renderQuizAnswerFeedback(
        question,
        selectedAnswer,
        optionButtons,
        card
    );
}

function moveToNextQuizQuestion() {
    if (!quizAnswers[currentQuizIndex]) {
        return;
    }

    currentQuizIndex += 1;

    if (currentQuizIndex >= QUIZ_QUESTION_COUNT) {
        renderQuizResult();
        return;
    }

    renderQuizQuestion();
}

function moveToPreviousQuizQuestion() {
    if (
        currentQuizIndex === 0
        || !quizAnswers[currentQuizIndex - 1]
    ) {
        return;
    }

    currentQuizIndex -= 1;
    renderQuizQuestion();
}

function resetQuizHome() {
    quizSessionId += 1;
    quizMode = "idle";
    quizQuestions = [];
    quizAnswers = [];
    currentQuizIndex = 0;
    correctQuizAnswers = 0;
    quizAnswerSelected = false;
    quizResultSaved = false;
    quizContent.replaceChildren();
    quizContent.hidden = true;
    quizStats.hidden = false;
    quizStartButton.hidden = false;
    quizStartButton.disabled = false;
    quizStartButton.textContent = "시작하기";
    studyModeButton.hidden = false;
    studyModeButton.disabled = false;
    studyModeButton.textContent = "📖 학습 모드";
    renderQuizStats();
}

function requestQuizExit() {
    if (!confirm("정말 퀴즈를 종료하시겠습니까?")) {
        return;
    }

    resetQuizHome();
}

function renderQuizQuestion() {
    const question = quizQuestions[currentQuizIndex];
    const savedAnswer = quizAnswers[currentQuizIndex];
    quizAnswerSelected = Boolean(savedAnswer);

    const card = document.createElement("div");
    card.className = "quiz-card";
    const cardTop = document.createElement("div");
    cardTop.className = "quiz-question-top";
    const exitButton = createTextElement(
        "button",
        "quiz-exit-button",
        "나가기"
    );
    exitButton.type = "button";
    exitButton.addEventListener("click", requestQuizExit);
    cardTop.append(
        createTextElement(
            "p",
            "quiz-progress",
            `${currentQuizIndex + 1} / ${QUIZ_QUESTION_COUNT}`
        ),
        exitButton
    );

    const options = document.createElement("div");
    options.className = "quiz-options";

    const optionButtons = question.options.map((option) => {
        const button = createTextElement("button", "quiz-option", option);
        button.type = "button";
        button.addEventListener("click", () => {
            handleQuizAnswer(question, option, optionButtons, card);
        });
        return button;
    });

    options.append(...optionButtons);
    card.append(
        cardTop,
        createTextElement(
            "h3",
            "quiz-question",
            `${question.name}는 어디에 버려야 할까요?`
        ),
        options
    );

    quizContent.replaceChildren(card);

    if (savedAnswer) {
        renderQuizAnswerFeedback(
            question,
            savedAnswer.selectedAnswer,
            optionButtons,
            card
        );
    }
}

async function startQuiz() {
    const sessionId = quizSessionId + 1;
    quizSessionId = sessionId;
    quizMode = "quiz";
    quizStartButton.disabled = true;
    studyModeButton.disabled = true;
    quizStartButton.textContent = "문제 준비 중...";
    quizContent.hidden = false;
    quizStats.hidden = true;
    quizContent.replaceChildren(
        createTextElement("p", "quiz-progress", "문제를 준비하고 있습니다.")
    );

    try {
        const response = await fetch("/api/quiz", {
            headers: {
                Accept: "application/json"
            }
        });
        const result = await response.json();

        if (sessionId !== quizSessionId) {
            return;
        }

        if (
            !response.ok
            || !Array.isArray(result.data)
            || result.data.length !== QUIZ_QUESTION_COUNT
        ) {
            throw new Error(result.message || "퀴즈를 불러오지 못했습니다.");
        }

        quizQuestions = result.data;
        currentQuizIndex = 0;
        correctQuizAnswers = 0;
        quizAnswerSelected = false;
        quizAnswers = Array(QUIZ_QUESTION_COUNT).fill(null);
        quizResultSaved = false;
        quizStartButton.hidden = true;
        studyModeButton.hidden = false;
        renderQuizQuestion();
    } catch (error) {
        if (sessionId !== quizSessionId) {
            return;
        }

        console.error(error);
        quizContent.replaceChildren(
            createTextElement(
                "p",
                "quiz-error",
                "퀴즈를 불러오지 못했습니다. 잠시 후 다시 시도해주세요."
            )
        );
        quizStartButton.hidden = false;
        quizStats.hidden = false;
        quizMode = "idle";
    } finally {
        if (sessionId === quizSessionId) {
            quizStartButton.disabled = false;
            studyModeButton.disabled = false;
            quizStartButton.textContent = "시작하기";
        }
    }
}

function renderStudyItem() {
    const item = studyItems[currentStudyIndex];
    const card = document.createElement("div");
    card.className = "quiz-card study-card";

    const header = document.createElement("div");
    header.className = "study-card-header";
    header.append(
        createTextElement("h3", "", item.name),
        createTextElement("span", "study-category", item.category)
    );

    const details = document.createElement("div");
    details.className = "study-details";
    details.append(
        createQuizFeedbackDetail("분리배출 방법", item.disposal_method),
        createQuizFeedbackDetail("주의사항", item.precautions),
        createQuizFeedbackDetail("환경 정보", item.environment_info),
        createQuizFeedbackDetail("자연 분해 기간", item.decomposition_years)
    );

    const navigation = document.createElement("div");
    navigation.className = "study-navigation";

    const previousButton = createTextElement(
        "button",
        "study-nav-button",
        "이전"
    );
    previousButton.type = "button";
    previousButton.disabled = currentStudyIndex === 0;
    previousButton.addEventListener("click", () => {
        currentStudyIndex -= 1;
        renderStudyItem();
    });

    const nextButton = createTextElement(
        "button",
        "study-nav-button",
        "다음"
    );
    nextButton.type = "button";
    nextButton.disabled = currentStudyIndex === studyItems.length - 1;
    nextButton.addEventListener("click", () => {
        currentStudyIndex += 1;
        renderStudyItem();
    });

    navigation.append(previousButton, nextButton);
    card.append(
        createTextElement(
            "p",
            "quiz-progress",
            `학습 ${currentStudyIndex + 1} / ${studyItems.length}`
        ),
        header,
        details,
        navigation
    );
    quizContent.replaceChildren(card);
}

async function startStudyMode() {
    quizMode = "study";
    studyModeButton.disabled = true;
    quizStartButton.disabled = true;
    studyModeButton.textContent = "불러오는 중...";
    quizContent.hidden = false;
    quizStats.hidden = true;
    quizContent.replaceChildren(
        createTextElement("p", "quiz-progress", "학습 자료를 준비하고 있습니다.")
    );

    try {
        studyItems = await getLearningItems();
        currentStudyIndex = 0;
        quizStartButton.hidden = false;
        renderStudyItem();
    } catch (error) {
        console.error(error);
        quizContent.replaceChildren(
            createTextElement(
                "p",
                "quiz-error",
                "학습 자료를 불러오지 못했습니다. 잠시 후 다시 시도해주세요."
            )
        );
        quizMode = "idle";
        quizStats.hidden = false;
    } finally {
        studyModeButton.disabled = false;
        quizStartButton.disabled = false;
        studyModeButton.textContent = "📖 학습 모드";
    }
}

function requestStudyMode() {
    if (quizMode === "quiz") {
        if (!confirm("정말 퀴즈를 종료하시겠습니까?")) {
            return;
        }

        resetQuizHome();
    }

    startStudyMode();
}

async function getLearningItems() {
    if (learningItemsCache.length > 0) {
        return learningItemsCache;
    }

    if (!learningItemsRequest) {
        learningItemsRequest = fetch("/api/study", {
            headers: {
                Accept: "application/json"
            }
        }).then(async (response) => {
            const result = await response.json();

            if (
                !response.ok
                || !Array.isArray(result.data)
                || result.data.length === 0
            ) {
                throw new Error(
                    result.message || "학습 자료를 불러오지 못했습니다."
                );
            }

            learningItemsCache = result.data;
            return learningItemsCache;
        }).finally(() => {
            learningItemsRequest = null;
        });
    }

    return learningItemsRequest;
}

function createCollectionCard(item, isDiscovered) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `collection-card${isDiscovered ? " is-discovered" : " is-locked"}`;

    if (!isDiscovered) {
        card.disabled = true;
        card.setAttribute("aria-label", "아직 발견하지 못한 품목");
        card.append(
            createTextElement("strong", "", "????"),
            createTextElement("span", "", "아직 발견하지 못했어요")
        );
        return card;
    }

    card.append(
        createTextElement("strong", "", item.name),
        createTextElement("span", "", item.category)
    );
    card.addEventListener("click", () => {
        renderCollectionDetail(item);
    });
    return card;
}

async function renderCollectionDetail(item) {
    const heading = document.createElement("div");
    heading.className = "collection-detail-heading";

    const backButton = createTextElement(
        "button",
        "collection-back-button",
        "← 도감으로 돌아가기"
    );
    backButton.type = "button";
    backButton.addEventListener("click", () => {
        collectionDetail.hidden = true;
        collectionGrid.hidden = false;
        collectionStatus.hidden = true;
    });

    heading.append(
        createTextElement("h2", "", "발견한 품목"),
        backButton
    );
    collectionDetail.replaceChildren(
        heading,
        createTextElement(
            "p",
            "collection-detail-loading",
            "품목 정보를 불러오고 있습니다."
        )
    );
    collectionGrid.hidden = true;
    collectionStatus.hidden = true;
    collectionDetail.hidden = false;

    try {
        // 기존 정확 검색 API를 재사용해 도감 상세에 필요한 전체 컬럼을 가져옵니다.
        const response = await fetch(
            `/api/search?q=${encodeURIComponent(item.name)}`,
            {
                headers: {
                    Accept: "application/json"
                }
            }
        );
        const result = await response.json();

        if (!response.ok || result.searchType !== "name" || !result.data) {
            throw new Error(result.message || "품목 정보를 불러오지 못했습니다.");
        }

        collectionDetail.replaceChildren(
            heading,
            createResultCard(result.data)
        );
    } catch (error) {
        console.error(error);
        collectionDetail.replaceChildren(
            heading,
            createTextElement(
                "p",
                "collection-detail-error",
                "품목 정보를 불러오지 못했습니다. 잠시 후 다시 시도해주세요."
            )
        );
    }
}

async function renderCollection() {
    collectionDetail.hidden = true;
    collectionGrid.hidden = true;
    collectionStatus.hidden = false;
    collectionStatus.textContent = "도감을 불러오고 있습니다.";

    try {
        const items = await getLearningItems();
        const availableIds = new Set(items.map((item) => item.id));
        const storedState = getCollectionState();
        const discoveredIds = storedState.itemIds.filter(
            (itemId) => availableIds.has(itemId)
        );
        const state = saveCollectionState(discoveredIds, items.length);
        const discoveredIdSet = new Set(state.itemIds);
        const discoveredCount = discoveredIdSet.size;
        const progressPercent = items.length > 0
            ? (discoveredCount / items.length) * 100
            : 0;

        collectionCount.textContent =
            `${discoveredCount} / ${items.length} 수집`;
        collectionPercent.textContent = `${Math.round(progressPercent)}%`;
        collectionProgressTrack.setAttribute(
            "aria-valuemax",
            String(items.length)
        );
        collectionProgressTrack.setAttribute(
            "aria-valuenow",
            String(discoveredCount)
        );
        collectionBadges.textContent = state.badges.length > 0
            ? state.badges.join(" · ")
            : "아직 없음";
        collectionGrid.replaceChildren(
            ...items.map((item) =>
                createCollectionCard(item, discoveredIdSet.has(item.id))
            )
        );
        collectionStatus.hidden = true;
        collectionGrid.hidden = false;

        requestAnimationFrame(() => {
            collectionProgress.style.width =
                `${Math.max(0, Math.min(progressPercent, 100))}%`;
        });
    } catch (error) {
        console.error(error);
        collectionStatus.textContent =
            "환경 도감을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.";
    }
}

async function loadEnvironmentFact() {
    newFactButton.disabled = true;

    try {
        const items = await getLearningItems();
        const candidates = items.length > 1
            ? items.filter((item) => item.id !== currentFactItemId)
            : items;
        const item = candidates[
            Math.floor(Math.random() * candidates.length)
        ];
        currentFactItemId = item.id;

        dailyFactContent.replaceChildren(
            createTextElement("strong", "", item.name),
            createTextElement("p", "", item.environment_info),
            createTextElement(
                "p",
                "fact-decomposition",
                `자연 분해 기간: ${formatValue(item.decomposition_years)}`
            )
        );
    } catch (error) {
        console.error(error);
        dailyFactContent.replaceChildren(
            createTextElement(
                "p",
                "",
                "환경 상식을 불러오지 못했습니다."
            )
        );
    } finally {
        newFactButton.disabled = false;
    }
}

function submitSelectedSearch(query) {
    searchInput.value = query;
    closeSearchPanels();
    searchForm.requestSubmit();
}

function renderRecentSearches() {
    if (searchInput.value.trim()) {
        closeRecentSearches();
        return;
    }

    const recentSearches = getRecentSearches();

    if (recentSearches.length === 0) {
        closeRecentSearches();
        return;
    }

    closeAutocomplete();

    const items = recentSearches.map((search) => {
        const listItem = document.createElement("li");
        const button = createTextElement(
            "button",
            "recent-search-item",
            search
        );
        button.type = "button";
        button.addEventListener("click", () => {
            submitSelectedSearch(search);
        });
        listItem.appendChild(button);
        return listItem;
    });

    recentSearchList.replaceChildren(...items);
    recentSearchPanel.hidden = false;
    updateSearchPanelState();
}

function updateActiveSuggestion(nextIndex) {
    const options = Array.from(autocompleteList.children);

    if (options.length === 0) {
        return;
    }

    activeSuggestionIndex = nextIndex;

    options.forEach((option, index) => {
        const isActive = index === activeSuggestionIndex;
        option.classList.toggle("is-active", isActive);
        option.setAttribute("aria-selected", String(isActive));

        if (isActive) {
            searchInput.setAttribute("aria-activedescendant", option.id);
            option.scrollIntoView({ block: "nearest" });
        }
    });
}

function selectSuggestion(suggestion) {
    submitSelectedSearch(suggestion);
}

// 실제 입력 문자열과 일치하는 앞부분만 안전한 DOM 노드로 나누어 강조합니다.
function appendHighlightedSuggestion(option, suggestion, query) {
    if (!query || !suggestion.startsWith(query)) {
        option.textContent = suggestion;
        return;
    }

    const matchedText = document.createElement("strong");
    matchedText.className = "autocomplete-match";
    matchedText.textContent = suggestion.slice(0, query.length);

    option.append(
        matchedText,
        document.createTextNode(suggestion.slice(query.length))
    );
}

function renderAutocomplete(suggestions, query) {
    if (suggestions.length === 0) {
        closeAutocomplete();
        return;
    }

    autocompleteSuggestions = suggestions;
    activeSuggestionIndex = -1;

    const options = suggestions.map((suggestion, index) => {
        const option = document.createElement("li");
        option.className = "autocomplete-option";
        option.id = `autocomplete-option-${index}`;
        option.setAttribute("role", "option");
        option.setAttribute("aria-selected", "false");
        appendHighlightedSuggestion(option, suggestion, query);

        option.addEventListener("mouseenter", () => {
            updateActiveSuggestion(index);
        });
        option.addEventListener("click", () => {
            selectSuggestion(suggestion);
        });

        return option;
    });

    autocompleteList.replaceChildren(...options);
    closeRecentSearches();
    autocompleteList.hidden = false;
    updateSearchPanelState();
}

async function fetchAutocomplete(query) {
    if (autocompleteRequest) {
        autocompleteRequest.abort();
    }

    autocompleteRequest = new AbortController();

    try {
        const response = await fetch(
            `/api/autocomplete?q=${encodeURIComponent(query)}`,
            {
                headers: {
                    Accept: "application/json"
                },
                signal: autocompleteRequest.signal
            }
        );
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "자동완성 요청에 실패했습니다.");
        }

        // 이전 요청이 늦게 도착해 현재 입력값과 다른 목록을 표시하지 않도록 합니다.
        if (searchInput.value.trim() === query) {
            renderAutocomplete(result.data, query);
        }
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error(error);
            closeAutocomplete();
        }
    }
}

async function searchItems(query) {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {
        headers: {
            Accept: "application/json"
        }
    });

    const result = await response.json();

    if (response.status === 404) {
        renderEmptyState();
        return;
    }

    if (!response.ok) {
        throw new Error(result.message || "검색 요청에 실패했습니다.");
    }

    renderResults(query, result.searchType, result.data, result.suggestion);
    saveRecentSearch(query);
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();

    if (!query) {
        if (autocompleteRequest) {
            autocompleteRequest.abort();
        }
        closeAutocomplete();
        renderRecentSearches();
        return;
    }

    closeRecentSearches();
    fetchAutocomplete(query);
});

searchInput.addEventListener("focus", () => {
    if (!searchInput.value.trim()) {
        renderRecentSearches();
    }
});

searchInput.addEventListener("click", () => {
    if (!searchInput.value.trim()) {
        renderRecentSearches();
    }
});

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        event.preventDefault();
        closeSearchPanels();
        return;
    }

    if (autocompleteSuggestions.length === 0) {
        return;
    }

    if (event.key === "ArrowDown") {
        event.preventDefault();
        const nextIndex = (activeSuggestionIndex + 1) % autocompleteSuggestions.length;
        updateActiveSuggestion(nextIndex);
    } else if (event.key === "ArrowUp") {
        event.preventDefault();
        const nextIndex =
            (activeSuggestionIndex - 1 + autocompleteSuggestions.length)
            % autocompleteSuggestions.length;
        updateActiveSuggestion(nextIndex);
    } else if (event.key === "Enter" && activeSuggestionIndex >= 0) {
        event.preventDefault();
        selectSuggestion(autocompleteSuggestions[activeSuggestionIndex]);
    }
});

document.addEventListener("click", (event) => {
    if (!searchForm.contains(event.target)) {
        closeSearchPanels();
    }
});

document.addEventListener("keydown", (event) => {
    if (quizMode !== "quiz") {
        return;
    }

    if (event.key === "Escape") {
        event.preventDefault();
        requestQuizExit();
    } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveToPreviousQuizQuestion();
    } else if (event.key === "ArrowRight" || event.key === "Enter") {
        if (!quizAnswers[currentQuizIndex]) {
            return;
        }

        event.preventDefault();
        moveToNextQuizQuestion();
    }
});

clearRecentSearchesButton.addEventListener("click", () => {
    if (!confirm("정말 삭제하시겠습니까?")) {
        return;
    }

    try {
        localStorage.removeItem(RECENT_SEARCH_STORAGE_KEY);
    } catch (error) {
        console.warn("최근 검색어를 삭제하지 못했습니다.", error);
    }

    closeRecentSearches();
    searchInput.focus();
});

clearFavoritesButton.addEventListener("click", () => {
    if (!confirm("즐겨찾기를 모두 삭제하시겠습니까?")) {
        return;
    }

    try {
        localStorage.removeItem(FAVORITES_STORAGE_KEY);
    } catch (error) {
        console.warn("즐겨찾기를 삭제하지 못했습니다.", error);
    }

    renderFavorites();
    updateRenderedFavoriteButtons();
});

quizStartButton.addEventListener("click", startQuiz);
studyModeButton.addEventListener("click", requestStudyMode);
newFactButton.addEventListener("click", loadEnvironmentFact);
appLogo.addEventListener("click", () => requestAppView("search"));
searchNavButton.addEventListener("click", () => requestAppView("search"));
factNavButton.addEventListener("click", () => requestAppView("fact"));
quizNavButton.addEventListener("click", () => requestAppView("quiz"));
collectionNavButton.addEventListener(
    "click",
    () => requestAppView("collection")
);

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    closeSearchPanels();

    const query = searchInput.value.trim();
    if (!query) {
        renderMessage("검색어를 입력해주세요.");
        searchInput.focus();
        return;
    }

    setLoading(true);
    renderMessage("검색 중입니다.");

    try {
        await searchItems(query);
    } catch (error) {
        console.error(error);
        renderMessage("검색 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.", "error");
    } finally {
        setLoading(false);
        searchInput.focus();
    }
});

// 새로고침 후에도 localStorage에 저장된 즐겨찾기를 바로 표시합니다.
renderFavorites();
renderQuizStats();
renderEcoLevel();
showAppView("search");
loadEnvironmentFact();
