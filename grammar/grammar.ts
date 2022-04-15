// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }

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
  Lexer: undefined,
  ParserRules: [
    {"name": "filter", "symbols": ["input"]},
    {"name": "filter$ebnf$1", "symbols": ["input"]},
    {"name": "filter$ebnf$1", "symbols": ["filter$ebnf$1", "input"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "filter", "symbols": ["filter$ebnf$1"]},
    {"name": "input", "symbols": ["exp"]},
    {"name": "input", "symbols": ["exp", "_", "logic", "_", "exp"]},
    {"name": "input", "symbols": ["input", "_", "logic", "_", "input"]},
    {"name": "exp", "symbols": ["exp1"]},
    {"name": "exp", "symbols": ["exp2"]},
    {"name": "exp", "symbols": ["exp3"]},
    {"name": "exp", "symbols": ["exp4"]},
    {"name": "exp", "symbols": ["exp5"]},
    {"name": "exp1", "symbols": ["category1", "_", "optr", "_", "value1"]},
    {"name": "exp2", "symbols": ["category2", "_", "optr", "_", "value2"]},
    {"name": "exp3", "symbols": ["category3", "_", "optr", "_", "value3"]},
    {"name": "exp4", "symbols": ["category4", "_", "optr", "_", "value4"]},
    {"name": "exp5", "symbols": ["category5", "_", "optr", "_", "value5"]},
    {"name": "_", "symbols": [{"literal":" "}]},
    {"name": "optr", "symbols": [{"literal":"="}]},
    {"name": "optr$string$1", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": (d) => d.join('')},
    {"name": "optr", "symbols": ["optr$string$1"]},
    {"name": "logic$subexpression$1", "symbols": [/[oO]/, /[rR]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "logic", "symbols": ["logic$subexpression$1"]},
    {"name": "logic$subexpression$2", "symbols": [/[aA]/, /[nN]/, /[dD]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "logic", "symbols": ["logic$subexpression$2"]},
    {"name": "category1$subexpression$1", "symbols": [/[gG]/, /[eE]/, /[nN]/, /[rR]/, /[eE]/, /[sS]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "category1", "symbols": ["category1$subexpression$1"]},
    {"name": "category2$subexpression$1", "symbols": [/[cC]/, /[oO]/, /[uU]/, /[nN]/, /[tT]/, /[rR]/, /[iI]/, /[eE]/, /[sS]/, {"literal":"/"}, /[rR]/, /[eE]/, /[gG]/, /[iI]/, /[oO]/, /[nN]/, /[sS]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "category2", "symbols": ["category2$subexpression$1"]},
    {"name": "category3$subexpression$1", "symbols": [/[sS]/, /[uU]/, /[bB]/, /[tT]/, /[iI]/, /[tT]/, /[lL]/, /[eE]/, /[sS]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "category3", "symbols": ["category3$subexpression$1"]},
    {"name": "category4$subexpression$1", "symbols": [/[sS]/, /[cC]/, /[hH]/, /[eE]/, /[dD]/, /[uU]/, /[lL]/, /[eE]/, /[sS]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "category4", "symbols": ["category4$subexpression$1"]},
    {"name": "category5$subexpression$1", "symbols": [/[aA]/, /[cC]/, /[cC]/, /[eE]/, /[sS]/, /[sS]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "category5", "symbols": ["category5$subexpression$1"]},
    {"name": "value1$subexpression$1", "symbols": [/[aA]/, /[cC]/, /[tT]/, /[iI]/, /[oO]/, /[nN]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value1", "symbols": ["value1$subexpression$1"]},
    {"name": "value1$subexpression$2", "symbols": [/[aA]/, /[dD]/, /[vV]/, /[eE]/, /[nN]/, /[tT]/, /[uU]/, /[rR]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value1", "symbols": ["value1$subexpression$2"]},
    {"name": "value1$subexpression$3", "symbols": [/[aA]/, /[nN]/, /[iI]/, /[mM]/, /[aA]/, /[tT]/, /[iI]/, /[oO]/, /[nN]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value1", "symbols": ["value1$subexpression$3"]},
    {"name": "value1$subexpression$4", "symbols": [/[fF]/, /[aA]/, /[nN]/, /[tT]/, /[aA]/, /[sS]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value1", "symbols": ["value1$subexpression$4"]},
    {"name": "value1$subexpression$5", "symbols": [{"literal":"\""}, /[tT]/, /[hH]/, /[rR]/, /[iI]/, /[lL]/, /[lL]/, /[eE]/, /[rR]/, {"literal":" "}, {"literal":"&"}, {"literal":" "}, /[sS]/, /[uU]/, /[sS]/, /[pP]/, /[eE]/, /[nN]/, /[sS]/, /[eE]/, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "value1", "symbols": ["value1$subexpression$5"]},
    {"name": "value1$subexpression$6", "symbols": [/[dD]/, /[rR]/, /[aA]/, /[mM]/, /[aA]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value1", "symbols": ["value1$subexpression$6"]},
    {"name": "value1$subexpression$7", "symbols": [{"literal":"\""}, /[rR]/, /[oO]/, /[mM]/, /[aA]/, /[nN]/, /[tT]/, /[iI]/, /[cC]/, {"literal":" "}, /[cC]/, /[oO]/, /[mM]/, /[eE]/, /[dD]/, /[yY]/, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "value1", "symbols": ["value1$subexpression$7"]},
    {"name": "value1$subexpression$8", "symbols": [/[rR]/, /[eE]/, /[aA]/, /[lL]/, /[iI]/, /[tT]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value1", "symbols": ["value1$subexpression$8"]},
    {"name": "value1$subexpression$9", "symbols": [/[hH]/, /[oO]/, /[rR]/, /[rR]/, /[eE]/, /[rR]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value1", "symbols": ["value1$subexpression$9"]},
    {"name": "value1$subexpression$10", "symbols": [{"literal":"\""}, /[fF]/, /[aA]/, /[mM]/, /[iI]/, /[lL]/, /[yY]/, {"literal":" "}, {"literal":"&"}, {"literal":" "}, /[kK]/, /[iI]/, /[dD]/, /[sS]/, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "value1", "symbols": ["value1$subexpression$10"]},
    {"name": "value2$subexpression$1", "symbols": [/[kK]/, /[oO]/, /[rR]/, /[eE]/, /[aA]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value2", "symbols": ["value2$subexpression$1"]},
    {"name": "value2$subexpression$2", "symbols": [/[jJ]/, /[aA]/, /[pP]/, /[aA]/, /[nN]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value2", "symbols": ["value2$subexpression$2"]},
    {"name": "value2$subexpression$3", "symbols": [/[cC]/, /[hH]/, /[iI]/, /[nN]/, /[aA]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value2", "symbols": ["value2$subexpression$3"]},
    {"name": "value2$subexpression$4", "symbols": [/[tT]/, /[hH]/, /[aA]/, /[iI]/, /[lL]/, /[aA]/, /[nN]/, /[dD]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value2", "symbols": ["value2$subexpression$4"]},
    {"name": "value2$subexpression$5", "symbols": [{"literal":"\""}, /[uU]/, /[nN]/, /[iI]/, /[tT]/, /[eE]/, /[dD]/, {"literal":" "}, /[sS]/, /[tT]/, /[aA]/, /[tT]/, /[eE]/, /[sS]/, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "value2", "symbols": ["value2$subexpression$5"]},
    {"name": "value3$subexpression$1", "symbols": [/[eE]/, /[nN]/, /[gG]/, /[lL]/, /[iI]/, /[sS]/, /[hH]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value3", "symbols": ["value3$subexpression$1"]},
    {"name": "value3$subexpression$2", "symbols": [/[kK]/, /[oO]/, /[rR]/, /[eE]/, /[aA]/, /[nN]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value3", "symbols": ["value3$subexpression$2"]},
    {"name": "value3$subexpression$3", "symbols": [/[jJ]/, /[aA]/, /[pP]/, /[aA]/, /[nN]/, /[eE]/, /[sS]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value3", "symbols": ["value3$subexpression$3"]},
    {"name": "value3$subexpression$4", "symbols": [/[fF]/, /[rR]/, /[eE]/, /[nN]/, /[cC]/, /[hH]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value3", "symbols": ["value3$subexpression$4"]},
    {"name": "value4$subexpression$1", "symbols": [{"literal":"\""}, /[oO]/, /[nN]/, {"literal":" "}, /[aA]/, /[iI]/, /[rR]/, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "value4", "symbols": ["value4$subexpression$1"]},
    {"name": "value4$subexpression$2", "symbols": [{"literal":"\""}, /[cC]/, /[oO]/, /[mM]/, /[mM]/, /[iI]/, /[nN]/, /[gG]/, {"literal":" "}, /[sS]/, /[oO]/, /[oO]/, /[nN]/, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "value4", "symbols": ["value4$subexpression$2"]},
    {"name": "value4$subexpression$3", "symbols": [/[rR]/, /[eE]/, /[lL]/, /[eE]/, /[aA]/, /[sS]/, /[eE]/, /[dD]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "value4", "symbols": ["value4$subexpression$3"]},
    {"name": "value5$subexpression$1", "symbols": [{"literal":"\""}, /[sS]/, /[tT]/, /[aA]/, /[nN]/, /[dD]/, /[aA]/, /[rR]/, /[dD]/, {"literal":" "}, /[pP]/, /[aA]/, /[sS]/, /[sS]/, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "value5", "symbols": ["value5$subexpression$1"]},
    {"name": "value5$subexpression$2", "symbols": [{"literal":"\""}, /[wW]/, /[aA]/, /[tT]/, /[cC]/, /[hH]/, {"literal":" "}, /[fF]/, /[rR]/, /[eE]/, /[eE]/, {"literal":"\""}], "postprocess": function(d) {return d.join(""); }},
    {"name": "value5", "symbols": ["value5$subexpression$2"]}
  ],
  ParserStart: "filter",
};

export default grammar;
