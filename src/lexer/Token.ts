export type TokenBase<T extends string> = {
  kind: T
}

export type ClassKeyword = TokenBase<'class'>
export type ConstructorKeyword = TokenBase<'constructor'>
export type FunctionKeyword = TokenBase<'function'>
export type MethodKeyword = TokenBase<'method'>
export type FieldKeyword = TokenBase<'field'>
export type StaticKeyword = TokenBase<'static'>
export type VarKeyword = TokenBase<'var'>
export type IntKeyword = TokenBase<'int'>
export type CharKeyword = TokenBase<'char'>
export type BooleanKeyword = TokenBase<'boolean'>
export type VoidKeyword = TokenBase<'void'>
export type TrueKeyword = TokenBase<'true'>
export type FalseKeyword = TokenBase<'false'>
export type NullKeyword = TokenBase<'null'>
export type ThisKeyword = TokenBase<'this'>
export type LetKeyword = TokenBase<'let'>
export type DoKeyword = TokenBase<'do'>
export type IfKeyword = TokenBase<'if'>
export type ElseKeyword = TokenBase<'else'>
export type WhileKeyword = TokenBase<'while'>
export type ReturnKeyword = TokenBase<'return'>

export type LeftBrace = TokenBase<'left_brace'>
export type RightBrace = TokenBase<'right_brace'>
export type LeftParen = TokenBase<'left_paren'>
export type RightParen = TokenBase<'right_paren'>
export type LeftBracket = TokenBase<'left_bracket'>
export type RightBracket = TokenBase<'right_bracket'>

export type Dot = TokenBase<'dot'>
export type Plus = TokenBase<'plus'>
export type Minus = TokenBase<'minus'>
export type Asterisk = TokenBase<'asterisk'>
export type Slash = TokenBase<'slash'>
export type And = TokenBase<'and'>
export type Bar = TokenBase<'bar'>
export type LessThan = TokenBase<'less_than'>
export type GreaterThan = TokenBase<'greater_than'>
export type Equals = TokenBase<'equals'>
export type Tilde = TokenBase<'tilde'>

export type Int = TokenBase<'int'> & {
  value: number
}

export type Str = TokenBase<'str'> & {
  vaue: string
}

export type Identifier = TokenBase<'identifier'> & {
  identifier: string
}

export type Token =
  | ClassKeyword
  | ConstructorKeyword
  | FunctionKeyword
  | MethodKeyword
  | FieldKeyword
  | StaticKeyword
  | VarKeyword
  | IntKeyword
  | CharKeyword
  | BooleanKeyword
  | VoidKeyword
  | TrueKeyword
  | FalseKeyword
  | NullKeyword
  | ThisKeyword
  | LetKeyword
  | DoKeyword
  | IfKeyword
  | ElseKeyword
  | WhileKeyword
  | ReturnKeyword
  | LeftBrace
  | RightBrace
  | LeftParen
  | RightParen
  | LeftBracket
  | RightBracket
  | Dot
  | Plus
  | Minus
  | Asterisk
  | Slash
  | And
  | Bar
  | LessThan
  | GreaterThan
  | Equals
  | Tilde
  | Int
  | Str
  | Identifier
