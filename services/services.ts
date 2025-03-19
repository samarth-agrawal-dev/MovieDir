const CLIENT_ID = process.env.EXPO_PUBLIC_CLIENT_ID || ""
const OMDB_KEY = process.env.EXPO_PUBLIC_OMDB_KEY || ""
export const searchMovie = async (query: string, searchField:string) => {
    const url = `https://www.omdbapi.com/?${searchField}=${encodeURIComponent(query)}&apikey=${OMDB_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'False') {
            // console.error(`No movies found for ${query}:`, data.Error);
            return "not found";
        }
        if (searchField=="s") return data.Search;
        if (searchField=="t") return data;
    } catch (error) {
        console.error('Error searching movies:', error);
        return "not found";
    }
};

export const getTrendingMovies = async (quantity:number) => {
    const url = `https://api.trakt.tv/movies/trending?page=1&limit=${quantity}`;

    const headers = {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': CLIENT_ID,
    };

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const movies = await response.json();
        const updatedMovies = []
        for (let movie of movies) {
            const movieData = await searchMovie(movie.movie.title,"t");
            if (movieData!=="not found"){
                updatedMovies.push(movieData)
            }
        }
        return updatedMovies;
    } catch (error) {
        console.error('Error fetching trending movies:', error);
    }
}