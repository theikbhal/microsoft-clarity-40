const params = new URLSearchParams(window.location.search);
const day = params.get("day");

document.getElementById("dayTitle").innerText = "Day " + day;

const key = "day_" + day;
const noteBox = document.getElementById("note");

// Auto-save note
noteBox.value = localStorage.getItem(key) || "";
noteBox.oninput = () => localStorage.setItem(key, noteBox.value);

// Problems
const list = document.getElementById("problems");

function addProblem() {
    const div = document.createElement("div");
    div.innerHTML = `
    <input placeholder="Problem link (LeetCode / GFG)">
    <select>
      <option>Uncategorized</option>
      <option>Easy</option>
      <option>Medium</option>
      <option>Hard</option>
    </select>
    <input placeholder="Tags (array, tree)">
    <input type="date">
  `;
    list.appendChild(div);
}
