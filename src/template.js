const fs = require('fs')
const path = require('path')
const palette = require('./palette')
const slugify = require('slugify')
const color = require('./color')

function write_json(name, content) {
  fs.writeFileSync(path.resolve(process.cwd(), 'themes', `${name}-color-theme.json`), content)
}

function create_color_theme(name, style) {
  const pal = palette(style)
  const p = pal.palette
  const syn = pal.specs.syntax
  const git = pal.specs.git
  const diff = pal.specs.diff
  const diag = pal.specs.diag

  const template = `{
	"name": "${name}",
  "author": "Dang Minh Ngo",
  "maintainers": ["Dang Minh Ngo <dangminhngo.dev@gmail.com>"],
  "type": "dark",
  "semanticTokenColors": {
    "parameter.declaration": {
      "foreground": "${syn.param}"
    },
    "parameter": {
      "foreground": "${syn.variable}"
    },
    "property.declaration": {
      "foreground": "${syn.field}"
    },
    "property.defaultLibrary": {
      "foreground": "${syn.field}"
    },
    "*.defaultLibrary": {
      "foreground": "${syn.preproc}"
    },
    "variable.defaultLibrary": {
      "foreground": "${syn.builtin0}"
    },
    "variable.declaration": {
      "foreground": "${syn.keyword}"
    },
    "variable": {
      "foreground": "${p.fg}"
    }
  },
  "semanticClass": "${slugify(name, { lower: true })}",
	"colors": {
    "foreground": "${p.fg}",
    "descriptionForeground": "${p.fg3}",
    "focusBorder": "${syn.comment}33",
    "errorForeground": "${syn.comment}",
    "widget.shadow": "#${p.white}00",
    "badge.background": "${p.bg}66",
    "badge.foreground": "${p.fg}",
    "icon.foreground": "${p.fg3}",
    "settings.headerForeground": "${p.fg2}",
    "window.activeBorder": "${p.dark}",
    "window.inactiveBorder":"${p.dark}",
    "sash.hoverBorder": "${p.bg2}",

    "toolbar.activeBackground": "${p.bg0}",
    "toolbar.hoverBackground": "${p.bg}",

    "extensionButton.prominentBackground": "${p.bg3}dd",
    "extensionButton.prominentHoverBackground": "${p.bg3}aa",
    "extensionButton.prominentForeground": "${p.fg0}",
    "extensionBadge.remoteBackground": "${p.bg4}",
    "extensionBadge.remoteForeground": "${p.fg0}",

    "button.background": "${p.accent}dd",
    "button.hoverBackground": "${p.accent}",
    "button.secondaryBackground": "${p.bg2}",
    "button.foreground": "${p.bg0}",
    "progressBar.background": "${p.bg3}",

    "input.background": "${p.bg0}",
    "input.foreground": "${p.fg}",
    "input.border": "${p.bg4}",
    "input.placeholderForeground": "${p.fg2}8a",
    "inputOption.activeForeground": "${p.fg0}",
    "inputOption.activeBackground": "${p.bg3}44",

    "inputValidation.infoForeground": "${p.bg}",
    "inputValidation.infoBackground": "${diag.info}",
    "inputValidation.infoBorder": "${color.lighten(diag.info, 32)}",
    "inputValidation.warningForeground": "${p.bg}",
    "inputValidation.warningBackground": "${diag.warn}",
    "inputValidation.warningBorder": "${color.lighten(diag.warn, 32)}",
    "inputValidation.errorForeground": "${p.bg}",
    "inputValidation.errorBackground": "${diag.error}",
    "inputValidation.errorBorder": "${color.darken(diag.error, 32)}",

    "dropdown.foreground": "${p.fg2}",
    "dropdown.background": "${p.bg0}",
    "dropdown.listBackground": "${p.dark}",

    "activityBar.background": "${color.darken(p.bg0, 16)}",
    "activityBar.foreground": "${p.fg}",
    //"activityBar.activeBorder": "${p.dark}",
    //"activityBar.activeBackground": "${p.dark}",
    "activityBar.inactiveForeground": "${p.black}",
    "activityBar.border": "${color.darken(p.bg0, 16)}",
    "activityBarBadge.background": "${p.accent}",
    "activityBarBadge.foreground": "${p.dark}",

    "tree.indentGuidesStroke": "${p.black}",
    "sideBar.foreground": "${p.fg2}",
    "sideBar.background": "${p.bg0}",
    "sideBar.border": "${p.bg0}",
    "sideBarTitle.foreground": "${p.fg2}",
    "sideBarSectionHeader.background": "${color.darken(p.bg0, 24)}",
    "sideBarSectionHeader.foreground": "${p.accent}",
    "sideBarSectionHeader.border": "${p.dark}00",
    "sideBar.dropBackground": "${p.bg}",

    "list.dropBackground": "${p.bg}",
    "list.deemphasizedForeground":"${p.fg2}",
    "list.activeSelectionBackground": "${p.bg2}",

    "list.activeSelectionForeground": "${p.fg}",
    "list.inactiveSelectionBackground": "${p.bg0}",
    "list.inactiveSelectionForeground": "${p.fg}",
    "list.focusBackground": "${p.bg2}",
    "list.focusForeground": "${p.fg}",
    "list.hoverBackground": "${p.bg3}",
    "list.hoverForeground": "${p.fg}",

    "list.highlightForeground": "${p.accent}",
    "list.invalidItemForeground": "${p.orange}",
    "list.errorForeground": "${diag.error}",
    "list.warningForeground": "${diag.warn}",

    "listFilterWidget.background": "${p.dark}",
    "listFilterWidget.outline": "${p.bg3}",
    "listFilterWidget.noMatchesOutline": "${p.red}",

    "pickerGroup.foreground": "${p.fg}",
    "pickerGroup.border": "${p.dark}",

    "scrollbar.shadow": "${p.dark}66",
    "scrollbarSlider.background": "${p.fg2}22",
    "scrollbarSlider.hoverBackground": "${p.fg2}44",
    "scrollbarSlider.activeBackground": "${p.accent}22",

    "editorBracketHighlight.foreground1": "${p.red}",
    "editorBracketHighlight.foreground2": "${p.orange}",
    "editorBracketHighlight.foreground3": "${p.yellow}",
    "editorBracketHighlight.foreground4": "${p.green}",
    "editorBracketHighlight.foreground5": "${p.blue}",
    "editorBracketHighlight.foreground6": "${p.cyan}",
    "editorBracketHighlight.unexpectedBracket.foreground": "${p.fg2}",

    "editorBracketPairGuide.activeBackground1": "${p.red}",
    "editorBracketPairGuide.activeBackground2": "${p.orange}",
    "editorBracketPairGuide.activeBackground3": "${p.yellow}",
    "editorBracketPairGuide.activeBackground4": "${p.green}",
    "editorBracketPairGuide.activeBackground5": "${p.blue}",
    "editorBracketPairGuide.activeBackground6": "${p.cyan}",

    "selection.background": "#${p.accent}40",
    "editor.background": "${p.bg}",
    "editor.foreground": "${p.fg0}",
    "editor.foldBackground": "#${p.dark}4a",
    "editorLink.activeForeground": "${p.fg0}",

    "editor.selectionBackground": "${p.comment}4d",
    "editor.inactiveSelectionBackground": "${p.comment}25",

    "editor.findMatchBackground": "${p.bg3}66",
    "editor.findMatchBorder": "${p.yellow}",
    "editor.findMatchHighlightBackground": "${p.bg3}66",

    "editor.findRangeHighlightBackground": "${p.comment}33",
    "editor.rangeHighlightBackground": "${p.comment}20",
    "editor.wordHighlightBackground": "${p.bg3}",
    "editor.wordHighlightStrongBackground": "${p.bg4}",
    "editor.selectionHighlightBackground": "${p.comment}44",

    "editorCursor.foreground": "${p.fg0}",
    "editorIndentGuide.background": "${p.bg2}",
    "editorIndentGuide.activeBackground": "${p.accent}",
    "editorLineNumber.foreground": "${p.bg4}",
    "editorLineNumber.activeForeground": "${p.accent}",
    "editor.lineHighlightBackground": "${p.bg2}",
    "editorWhitespace.foreground": "${p.bg3}",

    "editorMarkerNavigation.background": "${p.dark}",
    "editorHoverWidget.background": "${p.dark}",
    "editorHoverWidget.border": "${p.dark}",

    "editorBracketMatch.background": "${p.bg4}",
    "editorBracketMatch.border": "${p.bg4}",

    "editorOverviewRuler.border": "${p.dark}",
    "editorOverviewRuler.errorForeground": "${diag.error}",
    "editorOverviewRuler.warningForeground": "${diag.warn}",
    "editorOverviewRuler.infoForeground": "${diag.info}",
    "editorOverviewRuler.bracketMatchForeground": "${p.bg4}",
    "editorOverviewRuler.findMatchForeground": "${p.fg}44",
    "editorOverviewRuler.rangeHighlightForeground": "${p.fg}44",
    "editorOverviewRuler.selectionHighlightForeground": "${p.fg}22",
    "editorOverviewRuler.wordHighlightForeground": "${p.accent}55",
    "editorOverviewRuler.wordHighlightStrongForeground": "${p.accent}66",
    "editorOverviewRuler.modifiedForeground": "${p.bg4}",
    "editorOverviewRuler.addedForeground": "${color.darken(git.added, 64)}",
    "editorOverviewRuler.deletedForeground": "${color.darken(git.removed, 64)}",

    "editorRuler.foreground": "${p.dark}",
    "editorError.foreground": "${p.red}",
    "editorWarning.foreground": "${p.yellow}",
    "editorInfo.foreground": "${diag.info}",
    "editorHint.foreground": "${diag.info}",

    "editorGutter.modifiedBackground": "${p.bg4}",
    "editorGutter.addedBackground": "${color.darken(git.added, 64)}",
    "editorGutter.deletedBackground": "${color.darken(git.removed, 64)}",

    "editorGhostText.foreground": "${p.bg4}",

    "minimapGutter.modifiedBackground": "${p.bg4}",
    "minimapGutter.addedBackground": "${color.darken(git.added, 64)}",
    "minimapGutter.deletedBackground": "${color.darken(git.removed, 64)}",

    "editorGroup.border": "${p.dark}",
    "editorGroup.dropBackground": "${p.dark}",
    "editorGroupHeader.tabsBorder": "${p.dark}",
    "editorGroupHeader.tabsBackground": "${p.dark}",
    "editorGroupHeader.noTabsBackground": "${p.dark}",
    "editorGroupHeader.border": "${p.dark}",

    "editorPane.background": "${p.dark}",

    "editorWidget.foreground": "${p.fg2}",
    "editorWidget.background": "${p.dark}",
    "editorWidget.resizeBorder": "${p.black}33",

    "editorSuggestWidget.background": "${p.dark}",
    "editorSuggestWidget.border": "${p.bg0}",
    "editorSuggestWidget.selectedBackground": "${p.bg}",
    "editorSuggestWidget.highlightForeground": "${p.fg3}",

    "editorCodeLens.foreground": "${p.comment}",
    "editorLightBulb.foreground": "${p.yellow}",
    "editorLightBulbAutoFix.foreground": "${p.yellow}",

    "peekView.border": "${p.bg0}",
    "peekViewEditor.background": "${p.bg0}",
    "peekViewEditor.matchHighlightBackground": "${p.bg3}66",
    "peekViewTitle.background": "${p.dark}",
    "peekViewTitleLabel.foreground": "${p.fg}",
    "peekViewTitleDescription.foreground": "${p.fg2}",
    "peekViewResult.background": "${p.dark}",
    "peekViewResult.selectionForeground": "${p.fg}",
    "peekViewResult.selectionBackground": "${p.bg3}33",
    "peekViewResult.lineForeground": "${p.fg}",
    "peekViewResult.fileForeground": "${p.fg2}",
    "peekViewResult.matchHighlightBackground": "${p.bg3}66",

    "diffEditor.insertedTextBackground": "${p.teal}20",
    "diffEditor.removedTextBackground": "${p.red}22",
    "diffEditor.insertedLineBackground": "${p.teal}20",
    "diffEditor.removedLineBackground": "${p.red}22",
    "diffEditorGutter.insertedLineBackground": "${p.teal}25",
    "diffEditorGutter.removedLineBackground": "${p.red}22",
    "diffEditorOverview.insertedForeground": "${p.teal}25",
    "diffEditorOverview.removedForeground": "${p.red}22",
    "diffEditor.diagonalFill": "${p.bg3}",

    "breadcrumb.background": "${color.darken(p.bg0, 16)}",
    "breadcrumbPicker.background": "${p.dark}",
    "breadcrumb.foreground": "${p.comment}",
    "breadcrumb.focusForeground": "${p.fg}",
    "breadcrumb.activeSelectionForeground": "${p.fg}",

    "tab.activeBackground": "${p.bg}",
    "tab.inactiveBackground": "${p.bg0}",
    "tab.activeForeground": "${p.fg}",
    "tab.hoverForeground": "${p.fg}",
    "tab.activeBorder": "${p.bg}",
    "tab.inactiveForeground": "${p.fg2}",
    "tab.border": "${p.dark}",
    "tab.unfocusedActiveForeground": "${p.fg}",
    "tab.unfocusedInactiveForeground": "${p.fg2}",
    "tab.unfocusedHoverForeground": "${p.fg}",
    "tab.activeModifiedBorder": "${p.dark}",
    "tab.inactiveModifiedBorder": "${p.dark}",
    "tab.unfocusedActiveBorder": "${p.dark}",
    "tab.lastPinnedBorder": "${p.bg0}",

    "panel.background": "${p.dark}",
    "panel.border": "${p.bg0}",
    "panelTitle.activeForeground": "${p.fg}",
    "panelTitle.inactiveForeground": "${p.comment}",
    "panelTitle.activeBorder": "${p.dark}",
    "panelInput.border": "${p.dark}",

    "statusBar.foreground": "${p.fg2}",
    "statusBar.background": "${p.dark}",
    "statusBar.border": "${p.dark}",
    "statusBar.noFolderBackground": "${p.dark}",
    "statusBar.debuggingBackground": "${p.dark}",
    "statusBar.debuggingForeground": "${p.fg2}",

    "statusBarItem.activeBackground": "${p.dark}",
    "statusBarItem.hoverBackground": "${p.bg0}",
    "statusBarItem.prominentBackground": "${p.dark}",
    "statusBarItem.prominentHoverBackground": "${p.bg0}",

    "titleBar.activeForeground": "${p.fg2}",
    "titleBar.inactiveForeground": "${p.fg2}",
    "titleBar.activeBackground": "${p.dark}",
    "titleBar.inactiveBackground": "${p.dark}",
    "titleBar.border": "${p.dark}",

    "walkThrough.embeddedEditorBackground": "${p.dark}",
    "textLink.foreground": "${p.comment}",
    "textLink.activeForeground": "${p.fg}",
    "textPreformat.foreground": "${p.fg0}",
    "textBlockQuote.background": "${p.dark}",
    "textCodeBlock.background": "${p.dark}",
    "textSeparator.foreground": "${p.bg3}",

    "debugExceptionWidget.border": "${color.darken(diag.error, 32)}",
    "debugExceptionWidget.background": "${p.dark}",
    "debugToolBar.background": "${p.dark}",

    "debugConsole.infoForeground": "${p.fg2}",
    "debugConsole.errorForeground": "${diag.error}",
    "debugConsole.sourceForeground": "${p.fg2}",
    "debugConsole.warningForeground": "${diag.warn}",
    "debugConsoleInputIcon.foreground":"${p.accent}",

    "editor.stackFrameHighlightBackground":"${p.orange}20",
    "editor.focusedStackFrameHighlightBackground":"${p.teal}20",
    "debugView.stateLabelForeground":"${p.fg2}",
    "debugView.stateLabelBackground": "${p.dark}",
    "debugView.valueChangedHighlight": "${p.bg3}aa",
    "debugTokenExpression.name": "${p.teal}",
    "debugTokenExpression.value":"${p.fg2}",
    "debugTokenExpression.string":"${syn.string}",
    "debugTokenExpression.boolean":"${syn.boolean}",
    "debugTokenExpression.number":"${syn.number}",
    "debugTokenExpression.error":"${diag.error}",

    "debugIcon.breakpointForeground": "${p.red}",
    "debugIcon.breakpointDisabledForeground": "${p.bg4}",
    "debugIcon.breakpointUnverifiedForeground": "${p.red}",

    "terminal.background": "${p.dark}",
    "terminal.foreground": "${p.fg}",
    "terminal.border": "${p.dark}",
    "terminal.selectionBackground": "${p.bg}",
    // "terminalCursor.background": "",
    // "terminalCursor.foreground": "",

    "terminal.ansiBlack": "${p.black}",
    "terminal.ansiRed": "${p.red}",
    "terminal.ansiGreen": "${p.green}",
    "terminal.ansiYellow": "${p.yellow}",
    "terminal.ansiBlue": "${p.blue}",
    "terminal.ansiMagenta": "${p.magenta}",
    "terminal.ansiCyan": "${p.cyan}",
    "terminal.ansiWhite": "${p.white}",
    "terminal.ansiBrightBlack": "${p.black}",
    "terminal.ansiBrightRed": "${p.red}",
    "terminal.ansiBrightGreen": "${p.green}",
    "terminal.ansiBrightYellow": "${p.yellow}",
    "terminal.ansiBrightBlue": "${p.blue}",
    "terminal.ansiBrightMagenta": "${p.magenta}",
    "terminal.ansiBrightCyan": "${p.cyan}",
    "terminal.ansiBrightWhite": "${p.white}",

    "gitDecoration.modifiedResourceForeground": "${p.cyan}",
    "gitDecoration.ignoredResourceForeground": "${git.ignored}",
    "gitDecoration.deletedResourceForeground": "${git.removed}",
    "gitDecoration.renamedResourceForeground": "${p.teal}",
    "gitDecoration.addedResourceForeground": "${git.added}",
    "gitDecoration.untrackedResourceForeground": "${p.magenta}",
    "gitDecoration.conflictingResourceForeground": "${p.yellow}cc",
    "gitDecoration.stageDeletedResourceForeground": "${git.removed}",
    "gitDecoration.stageModifiedResourceForeground": "${p.accent}",

    "notebook.editorBackground": "${p.dark}",
    "notebook.cellEditorBackground": "${p.dark}",
    "notebook.cellBorderColor": "${p.bg0}",
    "notebook.focusedCellBorder": "${p.bg2}",
    "notebook.cellStatusBarItemHoverBackground": "${p.dark}",

    "charts.red": "${p.red}",
    "charts.blue": "${p.blue}",
    "charts.yellow": "${p.yellow}",
    "charts.orange": "${p.orange}",
    "charts.green": "${p.teal}",
    "charts.purple": "${p.magenta}",
    "charts.foreground": "${p.fg2}",
    "charts.lines": "${p.dark}",

    "merge.currentHeaderBackground": "${p.teal}25",
    "merge.currentContentBackground": "${p.teal}44",
    "merge.incomingHeaderBackground": "${p.bg3}aa",
    "merge.incomingContentBackground": "${p.bg3}44",
    "mergeEditor.change.background": "${p.teal}25",
    "mergeEditor.change.word.background": "${p.teal}40",
    "mergeEditor.conflict.unhandledUnfocused.border": "${p.yellow}88",
    "mergeEditor.conflict.unhandledFocused.border": "${p.yellow}b0",
    "mergeEditor.conflict.handledUnfocused.border": "${p.teal}25",
    "mergeEditor.conflict.handledFocused.border": "${p.teal}65",
    "mergeEditor.conflict.handled.minimapOverViewRuler": "${p.accent}",
    "mergeEditor.conflict.unhandled.minimapOverViewRuler": "${p.yellow}",

    "gitlens.trailingLineForegroundColor": "${p.fg2}",
    "gitlens.gutterUncommittedForegroundColor": "${p.magenta}",
    "gitlens.gutterForegroundColor": "${p.fg}",
    "gitlens.gutterBackgroundColor": "${p.dark}",

    "notificationCenterHeader.background": "${p.dark}",
    "notifications.background": "${p.dark}",
    "notificationLink.foreground": "${p.blue}",
    "notificationsErrorIcon.foreground": "${diag.error}",
    "notificationsWarningIcon.foreground": "${diag.warn}",
    "notificationsInfoIcon.foreground": "${diag.info}",

    "menubar.selectionForeground":"${p.fg}",
    "menubar.selectionBackground":"${color.lighten(p.dark, 48)}",
    "menubar.selectionBorder":"${p.bg0}",
    "menu.foreground":"${p.fg}",
    "menu.background":"${color.lighten(p.dark, 32)}",
    "menu.selectionForeground":"${p.fg}",
    "menu.selectionBackground":"${p.dark}",
    "menu.separatorBackground":"${p.dark}",
    "menu.border":"${p.dark}"
	},
	"tokenColors": [
    {
        "name": "Italics - Comments, Storage, Keyword Flow, Vue attributes, Decorators",
        "scope": [
            "comment",
            "meta.var.expr storage.type",
            "keyword.control.flow",
            "keyword.control.return",
            "meta.directive.vue punctuation.separator.key-value.html",
            "meta.directive.vue entity.other.attribute-name.html",
            "tag.decorator.js entity.name.tag.js",
            "tag.decorator.js punctuation.definition.tag.js",
            "storage.modifier"
        ],
        "settings": {
            "fontStyle": "italic"
        }
    },
    {
    "name": "Fix YAML block scalar",
        "scope": "keyword.control.flow.block-scalar.literal",
        "settings": {
            "fontStyle": ""
        }
    },
		{
			"name": "Comment",
			"scope": [
                "comment",
                "comment.block.documentation",
				"punctuation.definition.comment",
                "comment.block.documentation punctuation"
			],
			"settings": {
				"foreground": "${syn.comment}"
			}
    },
    {
        "name": "Comment Doc",
        "scope": [
            "keyword.operator.assignment.jsdoc",
            "comment.block.documentation variable",
            "comment.block.documentation storage",
            "comment.block.documentation keyword",
            "comment.block.documentation support",
            "comment.block.documentation markup",
            "comment.block.documentation markup.inline.raw.string.markdown",
            "meta.other.type.phpdoc.php keyword.other.type.php",
            "meta.other.type.phpdoc.php support.other.namespace.php",
            "meta.other.type.phpdoc.php punctuation.separator.inheritance.php",
            "meta.other.type.phpdoc.php support.class",
    "keyword.other.phpdoc.php",
            "log.date"
        ],
        "settings": {
            "foreground": "${syn.comment}"
        }
    },
    {
        "name": "Comment Doc Emphasized",
        "scope": [
            "meta.other.type.phpdoc.php support.class",
            "comment.block.documentation storage.type",
            "comment.block.documentation punctuation.definition.block.tag",
            "comment.block.documentation entity.name.type.instance"
        ],
        "settings": {
            "foreground": "${syn.comment}"
        }
    },
    {
        "name": "Number, Boolean, Undefined, Null",
        "scope": [
            "variable.other.constant",
            "punctuation.definition.constant",
            "constant.language",
            "constant.numeric",
            "support.constant"
            // "constant.language.null",
            // "constant.language.undefined",
            // "constant.language.go",
            // "constant.language.boolean",
            // "constant.language.json",
            // "constant.language.infinity",
            // "constant.language.nan"
        ],
        "settings": {
            "foreground": "${syn.const}"
        }
    },
    {
        "name": "String, Symbols",
        "scope": [
            "string",
            "constant.other.symbol",
            "constant.other.key",
            "meta.attribute-selector"
        ],
        "settings": {
            "fontStyle": "",
            "foreground": "${syn.string}"
        }
    },
    {
        "name": "Colors",
        "scope": [
            "constant.other.color",
            "constant.other.color.rgb-value.hex punctuation.definition.constant"
        ],
        "settings": {
            "foreground": "${syn.builtin3}"
        }
    },
    {
        "name": "Invalid",
        "scope": [
            "invalid",
            "invalid.illegal"
        ],
        "settings": {
            "foreground": "${diag.error}"
        }
    },
    {
        "name": "Invalid deprecated",
        "scope": "invalid.deprecated",
        "settings": {
            "foreground": "${p.magenta}"
        }
    },
    {
        "name": "Storage Type",
        "scope": "storage.type",
        "settings": {
            "foreground": "${syn.builtin2}"
        }
    },
    {
        "name": "Storage - modifier, var, const, let",
        "scope": [
            "meta.var.expr storage.type",
            "storage.modifier"
        ],
        "settings": {
            "foreground": "${syn.builtin2}"
        }
    },
    {
        "name": "Interpolation, PHP tags, Smarty tags",
        "scope": [
            "punctuation.definition.template-expression",
            "punctuation.section.embedded",
            "meta.embedded.line.tag.smarty",
            "support.constant.handlebars",
            "punctuation.section.tag.twig",
        ],
        "settings": {
            "foreground": "${syn.delimiter}"
        }
    },
    {
        "name": "Blade, Twig, Smarty Handlebars keywords",
        "scope": [
            "keyword.control.smarty",
            "keyword.control.twig",
            "support.constant.handlebars keyword.control",
            "keyword.operator.comparison.twig",
            "keyword.blade",
            "entity.name.function.blade"
        ],
        "settings": {
            "foreground": "${p.blue}"
        }
    },
    {
        "name": "Spread",
        "scope": [
            "keyword.operator.spread",
            "keyword.operator.rest"
        ],
        "settings": {
            "foreground": "${p.red}",
            "fontStyle": "bold"
        }
    },
    {
        "name": "Operator, Misc",
        "scope": [
            "keyword.operator",
            "keyword.control.as",
            "keyword.other",
            "keyword.operator.bitwise.shift",
            "punctuation",
            "expression.embbeded.vue punctuation.definition.tag",
            "text.html.twig meta.tag.inline.any.html",
            "meta.tag.template.value.twig meta.function.arguments.twig",
            "meta.directive.vue punctuation.separator.key-value.html",
            "punctuation.definition.constant.markdown",
            "punctuation.definition.string",
            "punctuation.support.type.property-name",
            "text.html.vue-html meta.tag",
            "meta.attribute.directive",
            "punctuation.definition.keyword",
            "punctuation.terminator.rule",
            "punctuation.definition.entity",
            "punctuation.separator.inheritance.php",
            "keyword.other.template",
            "keyword.other.substitution",
            "entity.name.operator",
            "meta.property-list punctuation.separator.key-value",
            "meta.at-rule.mixin punctuation.separator.key-value",
            "meta.at-rule.function variable.parameter.url"
        ],
        "settings": {
            "foreground": "${syn.operator}"
        }
    },
    {
        "name": "Import, Export, From, Default",
        "scope": [
            "keyword.control.import",
            "keyword.control.export",
            "keyword.control.from",
            "keyword.control.default",
            "meta.import keyword.other"
        ],
        "settings": {
            "foreground":  "${syn.ident}"
        }
    },
    {
        "name": "Keyword",
        "scope": [
            "keyword",
            "keyword.control",
            "keyword.other.important"
        ],
        "settings": {
            "foreground": "${syn.keyword}"
        }
    },
    {
        "name": "Keyword SQL",
        "scope": "keyword.other.DML",
        "settings": {
            "foreground": "${p.blue}"
        }
    },
    {
        "name": "Keyword Operator Logical, Arrow, Ternary, Comparison",
        "scope": [
            "keyword.operator.logical",
            "storage.type.function",
            "keyword.operator.bitwise",
            "keyword.operator.ternary",
            "keyword.operator.comparison",
            "keyword.operator.relational",
            "keyword.operator.or.regexp"
        ],
        "settings": {
            "foreground":  "${syn.keyword}"
        }
    },
    {
        "name": "Tag",
        "scope": "entity.name.tag",
        "settings": {
            "foreground": "${syn.builtin0}"
        }
    },
    {
        "name": "Tag - Custom",
        "scope": [
            "entity.name.tag support.class.component",
            "meta.tag.custom entity.name.tag",
              "meta.tag"
        ],
        "settings": {
            "foreground": "${syn.builtin2}"
        }
    },
    {
        "name": "Tag Punctuation",
        "scope": "punctuation.definition.tag",
        "settings": {
            "foreground": "${syn.delimiter}"
        }
    },
    {
        "name": "Globals, PHP Constants, etc",
        "scope": [
            "constant.other.php",
            "variable.other.global.safer",
            "variable.other.global.safer punctuation.definition.variable",
            "variable.other.global",
            "variable.other.global punctuation.definition.variable",
            "constant.other"
        ],
        "settings": {
            "foreground": "${syn.const}"
        }
    },
    {
        "name": "Variables",
        "scope": [
            "variable",
            "support.variable",
            "string constant.other.placeholder",
            "variable.parameter.handlebars",
            "variable.other.object"
        ],
        "settings": {
            "foreground": "${syn.variable}"
        }
    },
    {
        "name": "Variable Array Key",
        "scope": "meta.array.literal variable",
        "settings": {
            "foreground": "${syn.field}"
        }
    },
    {
        "name": "Object Key",
        "scope": [
            "meta.object-literal.key",
            "entity.name.type.hcl",
            "string.alias.graphql",
            "string.unquoted.graphql",
            "string.unquoted.alias.graphql",
            "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
            "meta.field.declaration.ts variable.object.property",
            "meta.block entity.name.label"
        ],
        "settings": {
            "foreground": "${syn.field}"
        }
    },
    {
        "name": "Object Property",
        "scope": [
            "variable.other.property",
            "support.variable.property",
            "support.variable.property.dom",
            "meta.function-call variable.other.object.property"
        ],
        "settings": {
            "foreground": "${syn.field}"
        }
    },
    {
        "name": "Object Property",
        "scope": "variable.other.object.property",
        "settings": {
            "foreground": "${syn.field}"
        }
    },
    {
        "name": "Object Literal Member lvl 3 (Vue Prop Validation)",
        "scope": "meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.object-literal.key",
        "settings": {
            "foreground": "${p.blue}"
        }
    },
    {
        "name": "C-related Block Level Variables",
        "scope": "source.cpp meta.block variable.other",
        "settings": {
            "foreground": "${syn.builtin3}"
        }
    },
    {
        "name": "Other Variable",
        "scope": "support.other.variable",
        "settings": {
            "foreground": "${syn.builtin3}"
        }
    },
    {
        "name": "Methods",
        "scope": [
            "meta.class-method.js entity.name.function.js",
            "entity.name.method.js",
            "variable.function.constructor",
            "keyword.other.special-method",
            "storage.type.cs"
        ],
        "settings": {
            "foreground": "${syn.func}"
        }
    },
    {
        "name": "Function Definition",
        "scope": [
            "entity.name.function",
            "variable.other.enummember",
            "meta.function-call",
            "meta.function-call entity.name.function",
            "variable.function",
            "meta.definition.method entity.name.function",
            "meta.object-literal entity.name.function"
        ],
        "settings": {
            "foreground": "${syn.func}"
        }
    },
    {
        "name": "Function Argument",
        "scope": [
            "variable.parameter.function.language.special",
            "variable.parameter",
            "meta.function.parameters punctuation.definition.variable",
            "meta.function.parameter variable"
        ],
        "settings": {
            "foreground": "${syn.param}"
        }
    },
    {
        "name": "Constant, Tag Attribute",
        "scope": [
            "keyword.other.type.php",
            "storage.type.php",
            "constant.character",
            "constant.escape",
            "keyword.other.unit"
        ],
        "settings": {
            "foreground": "${syn.attr}"
        }
    },
    {
        "name": "Variable Definition",
        "scope": [
            "meta.definition.variable variable.other.constant",
            "meta.definition.variable variable.other.readwrite",
            "variable.declaration.hcl variable.other.readwrite.hcl",
            "meta.mapping.key.hcl variable.other.readwrite.hcl",
            "variable.other.declaration"
        ],
        "settings": {
            "foreground": "${syn.variable}"
        }
    },
    {
        "name": "Inherited Class",
        "scope": "entity.other.inherited-class",
        "settings": {
            "fontStyle": "",
            "foreground": "${syn.builtin2}"
        }
    },
    {
        "name": "Class, Support, DOM, etc",
        "scope": [
            "support.class",
            "support.type",
            "variable.other.readwrite.alias",
            "support.orther.namespace.use.php",
            "meta.use.php",
            "support.other.namespace.php",
            "support.type.sys-types",
            "support.variable.dom",
            "support.constant.math",
            "support.type.object.module",
            "support.constant.json",
            "entity.name.namespace",
            "meta.import.qualifier",
            "variable.other.constant.object"
        ],
        "settings": {
            "foreground": "${syn.type}"
        }
    },
    {
        "name": "Class Name",
        "scope": "entity.name",
        "settings": {
            "foreground": "${syn.variable}"
        }
    },
    {
        "name": "Support Function",
        "scope": "support.function",
        "settings": {
            "foreground": "${p.cyan}"
        }
    },
    {
        "name": "CSS Class and Support",
        "scope": [
            "source.css support.type.property-name",
            "source.sass support.type.property-name",
            "source.scss support.type.property-name",
            "source.less support.type.property-name",
            "source.stylus support.type.property-name",
            "source.postcss support.type.property-name",
            "support.type.property-name.css",
            "support.type.vendored.property-name",
            "support.type.map.key"
        ],
        "settings": {
            "foreground": "${syn.type}"
        }
    },
    {
        "name": "CSS Font",
        "scope": [
            "support.constant.font-name",
            "meta.definition.variable"
        ],
        "settings": {
            "foreground": "${syn.string}"
        }
    },
    {
        "name": "CSS Class",
        "scope": [
            "entity.other.attribute-name.class",
            "meta.at-rule.mixin.scss entity.name.function.scss"
        ],
        "settings": {
            "foreground": "${syn.builtin2}"
        }
    },
    {
        "name": "CSS ID",
        "scope": "entity.other.attribute-name.id",
        "settings": {
            "foreground": "${syn.builtin3}"
        }
    },
    {
        "name": "CSS Tag",
        "scope": "entity.name.tag.css",
        "settings": {
            "foreground": "${syn.delimiter}"
        }
    },
    {
        "name": "CSS Tag Reference, Pseudo & Class Punctuation",
        "scope": [
            "entity.other.attribute-name.pseudo-class punctuation.definition.entity",
            "entity.other.attribute-name.pseudo-element punctuation.definition.entity",
            "entity.other.attribute-name.class punctuation.definition.entity",
            "entity.name.tag.reference"
        ],
        "settings": {
            "foreground": "${syn.builtin1}"
        }
    },
    {
        "name": "CSS Punctuation",
        "scope": "meta.property-list",
        "settings": {
            "foreground": "${syn.operator}"
        }
    },
    {
        "name": "CSS at-rule fix",
        "scope": [
            "meta.property-list meta.at-rule.if",
            "meta.at-rule.return variable.parameter.url",
            "meta.property-list meta.at-rule.else"
        ],
        "settings": {
            "foreground": "${syn.statement}"
        }
    },
    {
        "name": "CSS Parent Selector Entity",
        "scope": [
            "entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity.css"
        ],
        "settings": {
            "foreground": "${syn.field}"
        }
    },
    {
        "name": "CSS Punctuation comma fix",
        "scope":
            "meta.property-list meta.property-list",
        "settings": {
            "foreground": "${syn.variable}"
        }
    },
    {
        "name": "SCSS @",
        "scope": [
            "meta.at-rule.mixin keyword.control.at-rule.mixin",
            "meta.at-rule.include entity.name.function.scss",
            "meta.at-rule.include keyword.control.at-rule.include"
        ],
        "settings": {
            "foreground": "${syn.keyword}"
        }
    },
    {
        "name": "SCSS Mixins, Extends, Include Keyword",
        "scope": [
            "keyword.control.at-rule.include punctuation.definition.keyword",
            "keyword.control.at-rule.mixin punctuation.definition.keyword",
            "meta.at-rule.include keyword.control.at-rule.include",
            "keyword.control.at-rule.extend punctuation.definition.keyword",
            "meta.at-rule.extend keyword.control.at-rule.extend",
            "entity.other.attribute-name.placeholder.css punctuation.definition.entity.css",
            "meta.at-rule.media keyword.control.at-rule.media",
            "meta.at-rule.mixin keyword.control.at-rule.mixin",
            "meta.at-rule.function keyword.control.at-rule.function",
            "keyword.control punctuation.definition.keyword"
        ],
        "settings": {
            "foreground": "${syn.keyword}"
        }
    },
    {
        "name": "SCSS Include Mixin Argument",
        "scope": "meta.property-list meta.at-rule.include",
        "settings": {
            "foreground": "${syn.variable}"
        }
    },
    {
        "name": "CSS value",
        "scope": "support.constant.property-value",
        "settings": {
            "foreground": "${syn.const}"
        }
    },
    {
        "name": "Sub-methods",
        "scope": [
            "entity.name.module.js",
            "variable.import.parameter.js",
            "variable.other.class.js"
        ],
        "settings": {
            "foreground": "${syn.variable}"
        }
    },
    {
        "name": "Language methods",
        "scope": "variable.language",
        "settings": {
            "foreground": "${syn.builtin3}"
        }
    },
    {
        "name": "Variable punctuation",
        "scope": "variable.other punctuation.definition.variable",
        "settings": {
            "foreground": "${syn.variable}"
        }
    },
    {
        "name": "Keyword this with Punctuation, ES7 Bind Operator",
        "scope": [
            "source.js constant.other.object.key.js string.unquoted.label.js",
            "variable.language.this punctuation.definition.variable",
            "keyword.other.this"
        ],
        "settings": {
            "foreground": "${syn.builtin0}"
        }
    },
    {
        "name": "HTML Attributes",
        "scope": [
            "entity.other.attribute-name",
            "text.html.basic entity.other.attribute-name.html",
            "text.html.basic entity.other.attribute-name"
        ],
        "settings": {
            "foreground": "${syn.attr}"
        }
    },
    {
        "name": "HTML Character Entity",
        "scope": "text.html constant.character.entity",
        "settings": {
            "foreground": "${syn.delimiter}"
        }
    },
    {
        "name": "Vue (Vetur / deprecated) Template attributes",
        "scope": [
            "entity.other.attribute-name.id.html",
            "meta.directive.vue entity.other.attribute-name.html"
        ],
        "settings": {
            "foreground": "${syn.keyword}"
        }
    },
    {
        "name": "CSS ID's",
        "scope": "source.sass keyword.control",
        "settings": {
            "foreground": "${syn.func}"
        }
    },
    {
        "name": "CSS psuedo selectors",
        "scope": [
            "entity.other.attribute-name.pseudo-class",
            "entity.other.attribute-name.pseudo-element",
            "entity.other.attribute-name.placeholder",
            "meta.property-list meta.property-value"
        ],
        "settings": {
            "foreground": "${syn.keyword}"
        }
    },
    {
        "name": "Inserted",
        "scope": "markup.inserted",
        "settings": {
            "foreground": "${syn.field}"
        }
    },
    {
        "name": "Deleted",
        "scope":"markup.deleted",
        "settings": {
            "foreground": "${color.darken(git.removed, 48)}"
        }
    },
    {
        "name": "Changed",
        "scope": "markup.changed",
        "settings": {
            "foreground": "${git.changed}"
        }
    },
    {
        "name": "Regular Expressions",
        "scope": "string.regexp",
        "settings": {
            "foreground": "${syn.regex}"
        }
    },
    {
        "name": "Regular Expressions - Punctuation",
        "scope": "punctuation.definition.group",
        "settings": {
            "foreground": "${syn.builtin0}"
        }
    },
    {
        "name": "Regular Expressions - Character Class",
        "scope": [
            "constant.other.character-class.regexp"
        ],
        "settings": {
            "foreground": "${syn.keyword}"
        }
    },
    {
        "name": "Regular Expressions - Character Class Set",
        "scope": [
            "constant.other.character-class.set.regexp",
            "punctuation.definition.character-class.regexp"
        ],
        "settings": {
            "foreground": "${syn.builtin2}"
        }
    },
    {
        "name": "Regular Expressions - Quantifier",
        "scope": "keyword.operator.quantifier.regexp",
        "settings": {
            "foreground": "${p.cyan}"
        }
    },
    {
        "name": "Regular Expressions - Backslash",
        "scope": "constant.character.escape.backslash",
        "settings": {
            "foreground": "${syn.builtin0}"
        }
    },
    {
        "name": "Escape Characters",
        "scope": "constant.character.escape",
        "settings": {
            "foreground": "${syn.builtin0}"
        }
    },
    {
        "name": "Decorators",
        "scope": [
            "tag.decorator.js entity.name.tag.js",
            "tag.decorator.js punctuation.definition.tag.js"
        ],
        "settings": {
            "foreground": "${syn.func}"
        }
    },
    {
        "name": "CSS Units",
        "scope": "keyword.other.unit",
        "settings": {
            "foreground": "${syn.const}"
        }
    },
    {
        "name": "JSON Key - Level 0",
        "scope": [
            "source.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": "${p.teal}"
        }
    },
    {
        "name": "JSON Key - Level 1",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": "${p.blue}"
        }
    },
    {
        "name": "JSON Key - Level 2",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": "${p.magenta}"
        }
    },
    {
        "name": "JSON Key - Level 3",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": "${p.cyan}"
        }
    },
    {
        "name": "JSON Key - Level 4",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": "${p.orange}"
        }
    },
    {
        "name": "JSON Key - Level 5",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": "${p.red}"
        }
    },
    {
        "name": "JSON Key - Level 6",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": "${p.pink}"
        }
    },
    {
        "name": "JSON Key - Level 7",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": "${p.yellow}"
        }
    },
    {
        "name": "JSON Key - Level 8",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": "${p.green}"
        }
    },
    {
        "name": "Plain Punctuation",
        "scope": "punctuation.definition.list_item.markdown",
        "settings": {
            "foreground": "${p.fg3}"
        }
    },
    {
        "name": "Block Punctuation",
        "scope": [
            "meta.block",
            "meta.brace",
            "punctuation.definition.block",
            "punctuation.definition.use",
            "punctuation.definition.class",
            "punctuation.definition.begin.bracket",
            "punctuation.definition.end.bracket",
            "punctuation.definition.switch-expression.begin.bracket",
            "punctuation.definition.switch-expression.end.bracket",
            "punctuation.definition.section.switch-block.begin.bracket",
            "punctuation.definition.section.switch-block.end.bracket",
            "punctuation.definition.group.shell",
            "punctuation.definition.parameters",
            "punctuation.definition.arguments",
            "punctuation.definition.dictionary",
            "punctuation.definition.array",
            "punctuation.section"
        ],
        "settings": {
            "foreground": "${p.fg3}"
        }
    },
    {
        "name": "Markdown - Plain",
        "scope": [
            "meta.jsx.children",
            "meta.embedded.block"
        ],
        "settings": {
            "foreground": "${p.fg}"
        }
    },
    {
        "name": "HTML text",
        "scope": [
            "text.html",
            "text.log"
        ],
        "settings": {
            "foreground": "${p.fg3}"
        }
    },
    {
        "name": "Markdown - Markup Raw Inline",
        "scope": "text.html.markdown markup.inline.raw.markdown",
        "settings": {
            "foreground": "${p.magenta}"
        }
    },
    {
        "name": "Markdown - Markup Raw Inline Punctuation",
        "scope": "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
        "settings": {
            "foreground": "${syn.comment}"
        }
    },
    {
        "name":  "Markdown - Heading 1",
        "scope": [
            "heading.1.markdown entity.name",
            "heading.1.markdown punctuation.definition.heading.markdown"
        ],
        "settings": {
            "fontStyle": "bold",
            "foreground": "${p.green}"
        }
    },
    {
        "name":  "Markdown - Heading 2",
        "scope": [
            "heading.2.markdown entity.name",
            "heading.2.markdown punctuation.definition.heading.markdown"
        ],
        "settings": {
            "fontStyle": "bold",
            "foreground": "${p.orange}"
        }
    },
    {
        "name":  "Markdown - Heading 3",
        "scope": [
            "heading.3.markdown entity.name",
            "heading.3.markdown punctuation.definition.heading.markdown"
        ],
        "settings": {
            "fontStyle": "bold",
            "foreground": "${p.yellow}"
        }
    },
    {
        "name": "Markdown - Heading 4",
        "scope": [
            "heading.4.markdown entity.name",
            "heading.4.markdown punctuation.definition.heading.markdown"
        ],
        "settings": {
            "fontStyle": "bold",
            "foreground": "${p.blue}"
        }
    },
    {
        "name":  "Markdown - Heading 5",
        "scope": [
            "heading.5.markdown entity.name",
            "heading.5.markdown punctuation.definition.heading.markdown"
        ],
        "settings": {
            "fontStyle": "bold",
            "foreground": "${p.cyan}"
        }
    },
    {
        "name":  "Markdown - Heading 6",
        "scope": [
            "heading.6.markdown entity.name",
            "heading.6.markdown punctuation.definition.heading.markdown"
        ],
        "settings": {
            "fontStyle": "bold",
            "foreground": "${p.pink}"
        }
    },
    {
        "name": "Markup - Italic",
        "scope": [
            "markup.italic",
            "markup.italic punctuation"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": "${p.fg}"
        }
    },
    {
        "name": "Markup - Bold",
        "scope": [
            "markup.bold",
            "markup.bold punctuation"

        ],
        "settings": {
            "fontStyle": "bold",
            "foreground": "${p.fg}"
        }
    },
    {
        "name": "Markup - Bold-Italic",
        "scope": [
            "markup.bold markup.italic",
            "markup.bold markup.italic punctuation"
        ],
        "settings": {
            "fontStyle": "bold italic",
            "foreground": "${p.fg}"
        }
    },
    {
        "name": "Markup - Underline",
        "scope": [
            "markup.underline",
            "markup.underline punctuation"
        ],
        "settings": {
            "fontStyle": "underline"
        }
    },
    {
        "name": "Markdown - Blockquote",
        "scope": "markup.quote punctuation.definition.blockquote.markdown",
        "settings": {
            "foreground": "${syn.comment}"
        }
    },
    {
        "name": "Markup - Quote",
        "scope": "markup.quote",
        "settings": {
            "fontStyle": "italic"
        }
    },
    {
        "name": "Markdown - Link",
        "scope": [
            "string.other.link",
            "markup.underline.link",
            "constant.other.reference.link.markdown",
            "string.other.link.description.title.markdown"
        ],
        "settings": {
            "foreground": "${p.blue}"
        }
    },
    {
        "name": "Markdown - Fenced Code Block",
        "scope": [
            "markup.fenced_code.block.markdown",
            "markup.inline.raw.string.markdown",
            "variable.language.fenced.markdown"
        ],
        "settings": {
            "foreground": "${p.green}"
        }
    },
    {
        "name": "Markdown - Separator",
        "scope": "meta.separator",
        "settings": {
            "fontStyle": "bold",
            "foreground": "${p.comment}"
        }
    },
    {
        "name": "Markup - Table",
        "scope": "markup.table",
        "settings": {
            "foreground": "${p.fg}"
        }
    },
    {
        "name": "Token - Info",
        "scope": "token.info-token",
        "settings": {
            "foreground": "${diag.info}"
        }
    },
    {
        "name": "Token - Warn",
        "scope": "token.warn-token",
        "settings": {
            "foreground": "${diag.warn}"
        }
    },
    {
        "name": "Token - Error",
        "scope": "token.error-token",
        "settings": {
            "foreground": "${diag.error}"
        }
    },
    {
        "name": "Token - Debug",
        "scope": "token.debug-token",
        "settings": {
            "foreground": "${p.magenta}"
        }
    },
    {
        "name": "Apache Tag",
        "scope": "entity.tag.apacheconf",
        "settings": {
            "foreground": "${syn.builtin0}"
        }
    },
    {
        "name": "Preprocessor",
        "scope": [
            "meta.preprocessor"
        ],
        "settings": {
            "foreground": "${syn.preproc}"
        }
    },
    {
        "name": "ENV value",
        "scope": "source.env",
        "settings": {
            "foreground": "${syn.const}"
        }
    }
	]
}`

  write_json(name, template)
}

module.exports = {
  create_color_theme,
}
