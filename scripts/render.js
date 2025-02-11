document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("content");

  async function loadMarkdown(file) {
    const response = await fetch(`data/${file}`);
    const text = await response.text();
    return marked.parse(text);
  }

  async function loadJSON(file) {
    const response = await fetch(`data/${file}`);
    const json = await response.json();
    return `<pre>${JSON.stringify(json, null, 2)}</pre>`;
  }

  async function renderContent() {
    let html = `<h1>Experiment Details</h1>`;

    html += `<section><h2>Aim</h2>${await loadMarkdown("aim.md")}</section>`;
    html += `<section><h2>Theory</h2>${await loadMarkdown(
      "theory.md"
    )}</section>`;
    html += `<section><h2>Procedure</h2>${await loadMarkdown(
      "procedure.md"
    )}</section>`;
    html += `<section><h2>Pre-Test</h2>${await loadJSON(
      "pretest.json"
    )}</section>`;
    html += `<section><h2>Post-Test</h2>${await loadJSON(
      "posttest.json"
    )}</section>`;

    container.innerHTML = html;
  }

  await renderContent();
});
