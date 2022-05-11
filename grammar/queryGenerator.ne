@preprocessor typescript
@{%
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
%}

# Pass your lexer with @lexer:
@lexer lexer

main ->  action whiteSpace filter whiteSpace type | action whiteSpace type | action whiteSpace type whiteSpace info | action whiteSpace filter whiteSpace type whiteSpace info | action whiteSpace filter whiteSpace filter whiteSpace type | action whiteSpace filter whiteSpace filter whiteSpace type whiteSpace info

action ->  %action
filter ->  %filter
type ->  %type
info ->  %info
whiteSpace -> %whiteSpace