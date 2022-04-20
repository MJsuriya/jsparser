// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }
declare var whiteSpace: any;
declare var logicOperator: any;
declare var genres: any;
declare var operator: any;
declare var genresTypes: any;
declare var subtitles: any;
declare var subtitlesTypes: any;
declare var geo: any;
declare var geoTypes: any;
declare var schedules: any;
declare var schedulesTypes: any;
declare var access: any;
declare var accessTypes: any;

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

interface NearleyToken {
  value: any;
  [key: string]: any;
};

interface NearleyLexer {
  reset: (chunk: string, info: any) => void;
  next: () => NearleyToken | undefined;
  save: () => any;
  formatError: (token: never) => string;
  has: (tokenType: string) => boolean;
};

interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
};

type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
};

const grammar: Grammar = {
  Lexer: lexer,
  ParserRules: [
    {"name": "main", "symbols": ["filter"]},
    {"name": "main", "symbols": ["filter", "query"]},
    {"name": "main$ebnf$1", "symbols": ["query"]},
    {"name": "main$ebnf$1", "symbols": ["main$ebnf$1", "query"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "main", "symbols": ["filter", "main$ebnf$1"], "postprocess": (data)=> { return data.flat()}},
    {"name": "query", "symbols": [(lexer.has("whiteSpace") ? {type: "whiteSpace"} : whiteSpace), (lexer.has("logicOperator") ? {type: "logicOperator"} : logicOperator), (lexer.has("whiteSpace") ? {type: "whiteSpace"} : whiteSpace), "filter"]},
    {"name": "filter", "symbols": ["genres"]},
    {"name": "filter", "symbols": ["subtitile"]},
    {"name": "filter", "symbols": ["geography"]},
    {"name": "filter", "symbols": ["schedule"]},
    {"name": "filter", "symbols": ["access"]},
    {"name": "genres", "symbols": [(lexer.has("genres") ? {type: "genres"} : genres), (lexer.has("whiteSpace") ? {type: "whiteSpace"} : whiteSpace), (lexer.has("operator") ? {type: "operator"} : operator), (lexer.has("whiteSpace") ? {type: "whiteSpace"} : whiteSpace), (lexer.has("genresTypes") ? {type: "genresTypes"} : genresTypes)]},
    {"name": "subtitile", "symbols": [(lexer.has("subtitles") ? {type: "subtitles"} : subtitles), (lexer.has("whiteSpace") ? {type: "whiteSpace"} : whiteSpace), (lexer.has("operator") ? {type: "operator"} : operator), (lexer.has("whiteSpace") ? {type: "whiteSpace"} : whiteSpace), (lexer.has("subtitlesTypes") ? {type: "subtitlesTypes"} : subtitlesTypes)]},
    {"name": "geography", "symbols": [(lexer.has("geo") ? {type: "geo"} : geo), (lexer.has("whiteSpace") ? {type: "whiteSpace"} : whiteSpace), (lexer.has("operator") ? {type: "operator"} : operator), (lexer.has("whiteSpace") ? {type: "whiteSpace"} : whiteSpace), (lexer.has("geoTypes") ? {type: "geoTypes"} : geoTypes)]},
    {"name": "schedule", "symbols": [(lexer.has("schedules") ? {type: "schedules"} : schedules), (lexer.has("whiteSpace") ? {type: "whiteSpace"} : whiteSpace), (lexer.has("operator") ? {type: "operator"} : operator), (lexer.has("whiteSpace") ? {type: "whiteSpace"} : whiteSpace), (lexer.has("schedulesTypes") ? {type: "schedulesTypes"} : schedulesTypes)]},
    {"name": "access", "symbols": [(lexer.has("access") ? {type: "access"} : access), (lexer.has("whiteSpace") ? {type: "whiteSpace"} : whiteSpace), (lexer.has("operator") ? {type: "operator"} : operator), (lexer.has("whiteSpace") ? {type: "whiteSpace"} : whiteSpace), (lexer.has("accessTypes") ? {type: "accessTypes"} : accessTypes)]}
  ],
  ParserStart: "main",
};

export default grammar;
