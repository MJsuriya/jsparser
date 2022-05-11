// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }
declare var action: any;
declare var filter: any;
declare var type: any;
declare var info: any;
declare var whiteSpace: any;

	// Moo lexer documention is here:
	// https://github.com/no-context/moo

	const moo = require("moo")
	const lexer =     moo.compile({
		whiteSpace: /[ \t]+/,
		action: ['get'],
		type: ['userinfo', 'firminfo'],
		info: ['count'],
		filter: ['active','internal','external']		
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
    {"name": "main", "symbols": ["action", "whiteSpace", "filter", "whiteSpace", "type"]},
    {"name": "main", "symbols": ["action", "whiteSpace", "type"]},
    {"name": "main", "symbols": ["action", "whiteSpace", "type", "whiteSpace", "info"]},
    {"name": "main", "symbols": ["action", "whiteSpace", "filter", "whiteSpace", "type", "whiteSpace", "info"]},
    {"name": "main", "symbols": ["action", "whiteSpace", "filter", "whiteSpace", "filter", "whiteSpace", "type"]},
    {"name": "main", "symbols": ["action", "whiteSpace", "filter", "whiteSpace", "filter", "whiteSpace", "type", "whiteSpace", "info"]},
    {"name": "action", "symbols": [(lexer.has("action") ? {type: "action"} : action)]},
    {"name": "filter", "symbols": [(lexer.has("filter") ? {type: "filter"} : filter)]},
    {"name": "type", "symbols": [(lexer.has("type") ? {type: "type"} : type)]},
    {"name": "info", "symbols": [(lexer.has("info") ? {type: "info"} : info)]},
    {"name": "whiteSpace", "symbols": [(lexer.has("whiteSpace") ? {type: "whiteSpace"} : whiteSpace)]}
  ],
  ParserStart: "main",
};

export default grammar;
