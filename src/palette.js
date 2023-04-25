const color = require("./color")

const palettes = {
  default: {
    fg: "#b2b8c3",
    bg: "#262a31",
    red: "#e36f71",
    green: "#a4c76f",
    yellow: "#d1cc66",
    blue: "#5d91e3",
    magenta: "#9c7acc",
    cyan: "#82beed",
    teal: "#77c7a7",
    orange: "#e39d5f",
    pink: "#cc89bf",
  },
  midnight: {
    fg: "#dbceb3",
    bg: "#242d2f",
    red: "#e67e80",
    green: "#a4c76f",
    yellow: "#d1cc66",
    blue: "#678dc9",
    magenta: "#a183cc",
    cyan: "#76bfc4",
    teal: "#6fc7a4",
    orange: "#d69760",
    pink: "#c975b9",
  },
}

module.exports = function(style) {
  const palette = palettes[style]
  const { fg, bg } = palette

  const p = {
    accent: palette.green,
    dark: color.darken(bg, 32),
    bg0: color.darken(bg, 16),
    bg2: color.lighten(bg, 4),
    bg3: color.lighten(bg, 8),
    bg4: color.lighten(bg, 12),
    fg0: color.lighten(fg, 56),
    fg2: color.darken(fg, 16),
    fg3: color.darken(fg, 32),
    fg4: color.darken(fg, 48),
    comment: color.lighten(bg, 32),
    black: color.lighten(bg, 18),
    white: color.lighten(fg, 64),
    ...palette,
  }

  const s = {
    syntax: {
      attr: p.yellow, // HTML tag attribues
      bool: p.orange, // Boolean
      bracket: p.fg2, // Brackets and Punctuation
      builtin0: p.red, // Builtin variable
      builtin1: p.yellow, // Builtin type
      builtin2: p.orange, // Builtin const
      builtin3: p.red, // For keywords: return, constructor
      comment: p.comment, // Comment
      conditional: p.pink, // Conditional and loop
      const: p.orange, // Constants, imports and booleans
      constructor: p.red, // Constructor, JSX elements
      dep: p.black, // Deprecated
      field: p.teal, // Field, Property
      func: p.blue, // Functions and Titles
      ident: p.pink, // Identifiers
      keyword: p.magenta, // Keywords
      number: p.orange, // Numbers
      operator: p.magenta, // Operators
      param: p.red, // Params
      preproc: p.magenta, // PreProc
      regex: p.orange, // Regex
      statement: p.magenta, // Statements
      string: p.green, // Strings
      delimiter: p.teal, // Tag delimiter
      type: p.yellow, // Types
      variable: p.fg, // Variables
    },
    diag: {
      error: p.red,
      warn: p.yellow,
      info: p.cyan,
      hint: p.green,
    },
    git: {
      added: p.cyan,
      removed: p.red,
      changed: p.yellow,
      conflict: p.orange,
      ignored: p.comment,
    },
    diff: {
      add: p.green,
      delete: p.red,
      change: p.yellow,
      text: p.cyan,
    },
  }

  return {
    palette: p,
    specs: s,
  }
}
