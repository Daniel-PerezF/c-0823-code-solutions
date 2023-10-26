select "releaseYear", g."name"
      from "films" as "f"
      join "filmGenre" as "fg" using ("filmId")
      join "genres" as "g" on fg."genreId" = g."genreId"
      where f."title" = 'Boogie Amelie';
