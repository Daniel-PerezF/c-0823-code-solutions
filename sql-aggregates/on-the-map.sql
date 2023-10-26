select "countries" as "countries",
count(*) as "cities"
from "countries"
join "cities" using ("countryId")
group by "countryId"
