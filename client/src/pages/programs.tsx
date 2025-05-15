import { useEffect, useState } from "react";

type SeriesType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function Series() {
  const [serie, setSerie] = useState<SeriesType[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setSerie(data))
      .catch((error) => console.log("error:", error));
  }, []);

  return (
    <>
      {serie ? (
        serie.map((s) => (
          <article key={s.id}>
            <h1>{s.title}</h1>
            <p>{s.synopsis}</p>
            <img src={s.poster} alt={s.title} />
          </article>
        ))
      ) : (
        <h1>Chargement...</h1>
      )}
    </>
  );
}

export default Series;
