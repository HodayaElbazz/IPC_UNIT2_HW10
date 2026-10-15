const genreSelect = document.getElementById("genre");
const sortSelect  = document.getElementById("sort");
const grid        = document.getElementById("book-grid");
const countText   = document.getElementById("count");

// Fill the genre button with every genre that exists in the books list
const genres = [...new Set(books.map(b => b.genre))].sort();
genres.forEach(g => {
  const option = document.createElement("option");
  option.value = g;
  option.textContent = g;
  genreSelect.appendChild(option);
});

function showBooks() {
  const genre = genreSelect.value;
  const sort  = sortSelect.value;

  // 1. Filter by genre
  let list = genre === "all" ? [...books] : books.filter(b => b.genre === genre);

  // 2. Sort
  if (sort === "az")     list.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "za")     list.sort((a, b) => b.title.localeCompare(a.title));
  if (sort === "newest") list.sort((a, b) => b.year - a.year);
  if (sort === "oldest") list.sort((a, b) => a.year - b.year);
  if (sort === "author") list.sort((a, b) => a.author.localeCompare(b.author));

  // 3. Draw the cards
  countText.textContent = `Showing ${list.length} book${list.length === 1 ? "" : "s"}`;

  if (list.length === 0) {
    grid.innerHTML = `<p class="empty">No books found.</p>`;
    return;
  }

  grid.innerHTML = list.map(book => `
    <div class="book-card">
      <div class="cover" style="background:${book.color}">${book.title}</div>
      <div class="book-info">
        <h3>${book.title}</h3>
        <span class="author">${book.author}</span>
        <div class="meta">
          <span class="tag">${book.genre}</span>
          <span>${book.year}</span>
        </div>
      </div>
    </div>
  `).join("");
}

genreSelect.addEventListener("change", showBooks);
sortSelect.addEventListener("change", showBooks);
showBooks();
