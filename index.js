const movies = [
  { title: "Movie 1", description: "Description 1", posterURL: "https://via.placeholder.com/150", trailerLink: "https://www.youtube.com/embed/sample_trailer_1" },
  { title: "Movie 2", description: "Description 2", posterURL: "https://via.placeholder.com/150", trailerLink: "https://www.youtube.com/embed/sample_trailer_2" }
];

function displayMovies() {
  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = ''; // Clear the list

  movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.className = 'movie-card';
      movieCard.innerHTML = `
          <img src="${movie.posterURL}" alt="${movie.title}" />
          <h3>${movie.title}</h3>
          <button onclick="viewDetails('${movie.title}')">View Details</button>
      `;
      movieList.appendChild(movieCard);
  });
}

function viewDetails(title) {
  const movie = movies.find(m => m.title === title);
  document.body.innerHTML = `
      <div>
          <h1>${movie.title}</h1>
          <p>${movie.description}</p>
          <iframe src="${movie.trailerLink}" width="560" height="315" allowfullscreen></iframe>
          <br />
          <button onclick="goBack()">Back to Home</button>
      </div>
  `;
}

function goBack() {
  displayMovies();
}

// Initial display of movies
displayMovies();
