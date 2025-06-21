const elements = document.getElementsByClassName("form-check-input");
const API_BASE = "https://ihatov08.github.io/kimetsu_api/api";
const loadingIndicator = document.getElementById("loading");
const characterList = document.getElementById("character-list");

document.querySelectorAll('input[name="category"]').forEach(radio =>{
    radio.addEventListener('change', async (event)=>{
        await fetchAndRenderCharacters(event);
    })
})
// 初期表示: 全キャラクター
fetchAndRenderCharacters({ target: { value: "all" } });

async function fetchAndRenderCharacters(event) {
    // ローディングを表示
    loadingIndicator.classList.remove("d-none");
    characterList.classList.add("d-none");
    characterList.innerHTML = ""; // 前回のデータをクリア

    try {
        const response = await fetch(`${API_BASE}/${event.target.value}.json`);
        const characters = await response.json();

        if (characters.length === 0) {
            characterList.innerHTML = "<p class='text-center'>データがありません</p>";
        } else {
            characters.forEach(character => {
            characterList.innerHTML += createCharacterCard(character);
            });
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        characterList.innerHTML = "<p class='text-center text-danger'>データの取得に失敗しました</p>";
    } finally {
        // ローディングを非表示
        loadingIndicator.classList.add("d-none");
        characterList.classList.remove("d-none");
    }
}

function createCharacterCard(character) {
    return `
    <div class="col-md-4">
        <div class="card h-100">
            <img src="https://ihatov08.github.io${character.image}" class="card-img-top" alt="${character.name}">
            <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">${character.category}</p>
            </div>
        </div>
    </div>
    `;
}