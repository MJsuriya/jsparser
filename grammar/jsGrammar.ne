@preprocessor typescript
@{%
	const moo = require("moo")
	const lexer =     moo.compile({
		whiteSpace: /[ \t]+/,
		logicOperator: ['and','or'],
		operator: /=|!=/,
		connector:  /,/,
		genres: ['genres'],
		genresTypes: ['action', 'adventure', 'animation', 'fantasy', 'reality'],
		subtitles: ['subtitles'],
		subtitlesTypes: ['english','korean'],
		geo: ['countries'],
		geoTypes: ['korea','japan','china','thailand','united states'],
		schedules: ['schedules'],
		schedulesTypes: ['on air','comming soon','released'],
		access: ['access'],
		accessTypes: ['standard pass','watch free']
		
    })
%}


@lexer lexer

main -> filter | filter query | filter query:+ {%(data)=> { return data.flat()}%}

query ->  %whiteSpace %logicOperator %whiteSpace filter

filter -> genres | subtitile | geography | schedule | access

genres -> %genres %whiteSpace %operator %whiteSpace %genresTypes

subtitile -> %subtitles %whiteSpace %operator %whiteSpace %subtitlesTypes

geography -> %geo %whiteSpace %operator %whiteSpace %geoTypes

schedule -> %schedules %whiteSpace %operator %whiteSpace %schedulesTypes

access -> %access %whiteSpace %operator %whiteSpace %accessTypes