@preprocessor typescript

input -> start | start finish | start finish:+ {%(data) => { return data[0].flat()}%}

start -> exp

finish -> _ logic _ exp

exp -> exp1 | exp2 | exp3 | exp4 | exp5

exp1 ->  category1 _ optr _ value1
exp2 ->  category2 _ optr _ value2
exp3 ->  category3 _ optr _ value3
exp4 ->  category4 _ optr _ value4
exp5 ->  category5 _ optr _ value5

_ -> " "
optr -> "=" | "!="
logic -> "OR"i | "AND"i

category1 -> "Genres"i
category2 -> "Countries/Regions"i 
category3 -> "Subtitles"i
category4 -> "Schedules"i
category5 -> "Access"i

value1 -> "Action"i | "Adventure"i | "Animation"i | "Fantasy"i | "\"Thriller & Suspense\""i 
| "Drama"i | "\"Romantic Comedy\""i | "Reality"i | "Horrer"i | "\"Family & kids\""i

value2 -> "Korea"i | "Japan"i | "China"i | "Thailand"i | "\"United States\""i

value3 -> "English"i | "Korean"i | "Japanese"i | "French"i

value4 -> "\"On Air\""i | "\"comming soon\""i | "Released"i

value5 -> "\"Standard Pass\""i | "\"Watch free\""i