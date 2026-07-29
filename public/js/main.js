const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const resultSection = document.querySelector("#result-section");
const resultSummary = document.querySelector("#result-summary");
const resultList = document.querySelector("#result-list");

const searchTypeLabels = {
    name: "품목명",
    alias: "비슷한 이름",
    tag: "관련 태그",
    fuzzy: "유사 검색"
};

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
    heading.appendChild(createTextElement("h2", "", formatValue(item.name)));

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

    const messageBox = document.createElement("div");
    messageBox.className = `result-message${type ? ` ${type}` : ""}`;
    messageBox.appendChild(createTextElement("strong", "", message));
    resultList.replaceChildren(messageBox);
}

function renderEmptyState() {
    showResultSection();
    resultSummary.replaceChildren();

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

    resultList.replaceChildren(...items.map(createResultCard));
}

function setLoading(isLoading) {
    searchButton.disabled = isLoading;
    searchButton.textContent = isLoading ? "검색 중..." : "검색";
    resultSection.setAttribute("aria-busy", String(isLoading));
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
}

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

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
