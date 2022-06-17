import { Token } from './Token'

type Consumer = (input: string) => [Token | null, string]

const useRegExp = (
  regexp: RegExp,
  matchToken: (result: RegExpMatchArray) => Token
): Consumer => (input: string) => {
  const match = regexp.exec(input)

  if (match) {
    const token = matchToken(match)

    return [token, input.slice(match[0].length)]
  }

  return [null, input]
}

const useKeyword = <K extends Token['kind']>(
  keyword: string,
  kind: K
): Consumer => {
  return useRegExp(
    new RegExp(`^${keyword}`),
    (matches) =>
      ({
        kind: kind,
      } as Token)
  )
}

const atoms: Token['kind'][] = [
  'class',
  'constructor',
  'function',
  'method',
  'field',
  'static',
  'var',
  'int',
  'char',
  'boolean',
  'void',
  'true',
  'false',
  'null',
  'this',
  'let',
  'do',
  'if',
  'else',
  'while',
  'return',
  'left_brace',
  'right_brace',
  'left_paren',
  'right_paren',
  'left_bracket',
  'right_bracket',
  'dot',
  'plus',
  'minus',
  'asterisk',
  'slash',
  'and',
  'bar',
  'less_than',
  'greater_than',
  'equals',
  'tilde',
]

const keywords = atoms.map((keyword) => useKeyword(keyword, keyword))

const lex = (input: string) => {
  input = input.replace(/\s+/g, '')

  const tokens: Token[] = []

  while (input.length > 0) {}
}
