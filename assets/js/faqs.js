const faqContent = document.querySelector(".faq-content");
const limitedFAQContent = document.querySelector(".limited-faq-content");
const tabList = document.querySelector(".sidebar__cat-list-two .list-wrap"); // sidebar ul

let faqs = {};

// Category display names — key = faqs.json key, value = button label
const CATEGORY_LABELS = {
  "Equity":        "Equity",
  "Demat":         "Demat",
  "NPS":           "NPS",
  "NPS Vatsalya":  "NPS Vatsalya",
  "Insurance":     "Insurance",
  "Financial":     "Financial",
  "Mutual Fund":   "Mutual Fund",
  "GIP Strategy":  "GIP Strategy",
  "Fixed Deposit": "Fixed Deposit",
  "MTF":           "MTF",
  "Commodities":   "Commodities",
  "Gold ETF/Bond": "Gold ETF/Bond",
  "IPO":           "IPO",
  "Bonds":         "Bond",
  "GlobalAccess":  "India INX GA/Gift City",
};

let fetchPromise = null;
async function fetchFAQs() {
  if (fetchPromise) return fetchPromise; // already fetch thayu hoy to wait karo
  fetchPromise = (async () => {
    try {
      const response = await fetch("assets/js/faqs.json");
      if (!response.ok) throw new Error("Failed to fetch FAQs");
      faqs = await response.json();
    } catch (error) {
      console.error("Error loading FAQs:", error);
    }
  })();
  return fetchPromise;
}

// ✅ Dynamic tabs generate karo — selected category FIRST aave
function buildTabs(selectedCategory = "Equity") {
  if (!tabList) return;
  tabList.innerHTML = "";

  const allEntries = Object.entries(CATEGORY_LABELS);

  // Selected category ne first mukho, baki same order ma
  const sorted = [
    ...allEntries.filter(([key]) => key === selectedCategory),
    ...allEntries.filter(([key]) => key !== selectedCategory),
  ];

  sorted.forEach(([key, label]) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "tab faq-tab";
    btn.dataset.category = key;
    btn.innerHTML = `${label} <i class="flaticon-arrow-button"></i>`;
    btn.addEventListener("click", () => {
      setActiveTab(key);
      loadFAQs(key);
    });
    li.appendChild(btn);
    tabList.appendChild(li);
  });
}

function setActiveTab(category) {
  document.querySelectorAll(".tab.faq-active").forEach(t => t.classList.remove("faq-active"));
  const targetTab = document.querySelector(`.tab[data-category="${category}"]`);
  if (targetTab) {
    targetTab.classList.add("faq-active");
    // ✅ Sidebar scroll — tab visible range ma aave
    const sidebar = tabList.closest(".sidebar__cat-list-two") || tabList.parentElement;
    if (sidebar) {
      const tabTop = targetTab.offsetTop;
      const tabHeight = targetTab.offsetHeight;
      const sidebarHeight = sidebar.offsetHeight;
      sidebar.scrollTo({
        top: tabTop - sidebarHeight / 2 + tabHeight / 2,
        behavior: "smooth"
      });
    }
  }
}

function createTable(tableData) {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  Object.keys(tableData[0]).forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);
  tableData.slice(1).forEach((rowData) => {
    const row = document.createElement("tr");
    Object.values(rowData).forEach((cellData) => {
      const td = document.createElement("td");
      td.textContent = cellData;
      row.appendChild(td);
    });
    table.appendChild(row);
  });
  return table;
}

function createFAQItem({ question, answer, subFAQs = [], tableData }) {
  const faqItem = document.createElement("div");
  faqItem.classList.add("faq-item");

  let formattedAnswer = "";
  if (Array.isArray(answer)) {
    const hasIntro = answer[0].trim().endsWith(":");
    let startIndex = 0;
    if (hasIntro) {
      formattedAnswer = `<p style="margin-bottom: 10px;">${answer[0]}</p>`;
      startIndex = 1;
    }
    formattedAnswer += `<ul style="list-style-type: disc; margin-left: 25px;">`;
    for (let i = startIndex; i < answer.length; i++) {
      const item = answer[i];
      if (typeof item === "string") {
        formattedAnswer += `<li style="margin-bottom: 8px;">${item}</li>`;
      } else if (item.subPoints) {
        formattedAnswer += `<li style="list-style: none; margin-bottom: 8px;">${item.title}`;
        formattedAnswer += `<ul style="list-style-type: circle; margin-left: 25px; margin-top: 5px;">`;
        formattedAnswer += item.subPoints.map((sub) => `<li style="margin-bottom: 5px;">${sub}</li>`).join("");
        formattedAnswer += `</ul></li>`;
      }
    }
    formattedAnswer += `</ul>`;
  } else {
    formattedAnswer = answer.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #007bff; text-decoration: underline;">$1</a>'
    );
  }

  faqItem.innerHTML = `
    <div class="question" aria-expanded="false" aria-controls="answer-${question}">
      ${question}
      <svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="#1d3557" d="M12 15.5L4.5 8h15z"/>
      </svg>
    </div>
    <div class="answer" id="answer-${question}">${formattedAnswer}</div>
    <div class="sub-faqs"></div>
    <div class="table-container faq-table"></div>
  `;

  const answerElement = faqItem.querySelector(".answer");
  const subFAQsContainer = faqItem.querySelector(".sub-faqs");
  const tableContainer = faqItem.querySelector(".table-container");
  const toggleIcon = faqItem.querySelector(".toggle-icon");
  const questionElement = faqItem.querySelector(".question");

  if (subFAQs.length > 0) {
    subFAQs.forEach((subFAQ) => {
      const subFAQItem = document.createElement("div");
      subFAQItem.classList.add("sub-faq-item");
      subFAQItem.innerHTML = `
        <div class="sub-question" style="font-weight: bold; cursor: pointer;">
          ${subFAQ.question}
          <svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 12px; height: 12px;">
            <path fill="#1d3557" d="M12 15.5L4.5 8h15z"/>
          </svg>
        </div>
        <div class="sub-answer" style="display: none; margin-left: 20px;">${subFAQ.answer}</div>
      `;
      const subAnswerElement = subFAQItem.querySelector(".sub-answer");
      const subToggleIcon = subFAQItem.querySelector(".toggle-icon");
      subFAQItem.querySelector(".sub-question").addEventListener("click", () => {
        const isOpen = subAnswerElement.style.display === "block";
        subAnswerElement.style.display = isOpen ? "none" : "block";
        subToggleIcon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
      });
      subFAQsContainer.appendChild(subFAQItem);
    });
  }

  if (tableData) {
    const table = createTable(tableData);
    tableContainer.appendChild(table);
  }

  questionElement.addEventListener("click", () => {
    const isOpen = faqItem.classList.toggle("open");
    answerElement.style.display = isOpen ? "block" : "none";
    subFAQsContainer.style.display = isOpen ? "block" : "none";
    tableContainer.style.display = isOpen ? "block" : "none";
    toggleIcon.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
    questionElement.setAttribute("aria-expanded", isOpen);
  });

  return faqItem;
}

function loadFAQs(category) {
  if (!faqContent || !faqs[category]) return;
  faqContent.innerHTML = "";
  faqs[category].forEach((faq) => {
    faqContent.appendChild(createFAQItem(faq));
  });
}

function loadLimitedFAQs(category, limit = 4) {
  if (!limitedFAQContent || !faqs[category]) return;
  limitedFAQContent.innerHTML = "";
  faqs[category].slice(0, limit).forEach((faq) => {
    limitedFAQContent.appendChild(createFAQItem(faq));
  });
}

// ✅ DOMContentLoaded hamesha register thay
// faqContent check andar kariye — tyare DOM ready hoy chhe
document.addEventListener("DOMContentLoaded", async () => {
  const faqPage = document.querySelector(".faq-content");

  await fetchFAQs();

  if (faqPage) {
    // FAQ page — sessionStorage thi category load karo
    const selectedCategory = sessionStorage.getItem("selectedCategory") || "Equity";
    sessionStorage.removeItem("selectedCategory");
    buildTabs(selectedCategory);
    loadFAQs(selectedCategory);
    setActiveTab(selectedCategory);
  }
  // Bija pages par inline script fetchFAQs().then() use kare chhe — te automatically kaam kare
});