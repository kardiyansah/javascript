document.addEventListener('click', async function(e) {

    if (e.target.classList.contains('button-search')) {
        try {
            const keyword = document.querySelector('.input-search').value;
            const movies = await getMovies(keyword);
            updateUI(movies);
        } catch (err) {
            alert(err);
        }
    }

    if (e.target.classList.contains('detail-movies')) {
        const movieId = e.target.dataset.movieid;
        const movieDetail = await getMovieDetail(movieId);
        updateUIDetail(movieDetail);
    }

});


function getMovies(keyword) {
    return fetch('http://omdbapi.com/?apikey=938aed99&s=' + keyword)
     .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
     })
     .then(result => {
        if (result.Response === "False") {
            throw new Error(result.Error);
        }

        return result.Search;
     });
}


function updateUI(movies) {
    let cards = '';
    movies.forEach(movie => cards += showCard(movie));

    const movieContainer = document.querySelector('.movies-list');
    movieContainer.innerHTML = cards;
}


function getMovieDetail(movieId) {
    return fetch('http://omdbapi.com/?apikey=938aed99&i=' + movieId)
     .then(response => response.json())
     .then(movieDetail => movieDetail);
}


function updateUIDetail(movieDetail) {
    const detail = showMovieDetail(movieDetail);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = detail;
}



function showCard(movie) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                    <a href="#" class="btn btn-primary detail-movies" data-movieid="${movie.imdbID}" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Detail</a>
                    </div>
                </div>
            </div>`;
}



function showMovieDetail(movie) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${movie.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md-8">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${movie.Title}</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${movie.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${movie.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong> <br> ${movie.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}