// import React, { useEffect, useState } from "react";
// import { fetchData } from "../../API/Api";
// import Card from "../Card/Card";

// const Listed = ({ title, param }) => {
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     fetchData(param)
//       .then((res) => setList(res.data.results))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [param]);

//   return (
//     <div>
//       <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
//       <div className="flex flex-wrap space-x-4">
//         {list && list.length > 0 ? (
//           list.map((item) => (
//             <Card
//               key={item.id}
//               title={item.title}
//               content={item.overview}
//               imageUrl={`https://image.tmdb.org/t/p/original${item.poster_path}`}
//             />
//           ))
//         ) : (
//           <p className="text-white">No data available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Listed;


import React, { Component } from 'react';
import Card from '../Card/Card';

export default class Listed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: null,
    };
  }

  async componentDidMount() {
    try {
      const url = "https://api.themoviedb.org/3/movie/157336?api_key=8a59ca73e9a058c7066807a5c02483b8";
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({ movieData: parsedData });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    const { movieData } = this.state;

    return (
      <div className="container">
        {movieData && movieData.results  ? (
          movieData.results.map(movie => (
            <Card
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              posterPath={movie.poster_path}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
        <Card/>
      </div>
    );
  }
}
