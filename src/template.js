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
      "foreground": "${syn.builtin1}"
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
    "scrollbar.shadow": "${p.dark}66",
    "badge.background": "${p.fg3}30",
    "badge.foreground": "${p.fg}",
    "icon.foreground": "${p.fg3}",
    "settings.headerForeground": "${p.fg2}",
    "window.activeBorder": "${p.dark}",
    "window.inactiveBorder":"${p.dark}",
    "sash.hoverBorder": "${p.bg2}",

    "toolbar.activeBackground": "${p.bg0}",
    "toolbar.hoverBackground": "${p.bg}",

    "extensionButton.prominentBackground": "${p.bg3}DD",
    "extensionButton.prominentHoverBackground": "${p.bg3}AA",
    "extensionButton.prominentForeground": "${p.fg0}",
    "extensionBadge.remoteBackground": "${p.bg4}",
    "extensionBadge.remoteForeground": "${p.fg0}",

    "button.background": "${p.bg3}dd",
    "button.hoverBackground": "${p.bg3}AA",
    "button.secondaryBackground": "${p.bg2}",
    "button.foreground": "${p.white}",
    "progressBar.background": "${p.bg3}",

    "input.background": "${p.bg0}",
    "input.foreground": "${p.fg}",
    "input.border": "${p.bg2}",
    "input.placeholderForeground": "${p.fg2}8A",
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
    "dropdown.background": "${p.dark}",
    "dropdown.listBackground": "${p.dark}",

    "activityBar.background": "${p.dark}",
    "activityBar.foreground": "${p.fg2}",
    //"activityBar.activeBorder": "${p.dark}",
    //"activityBar.activeBackground": "${p.dark}",
    "activityBar.inactiveForeground": "${p.dark}",
    "activityBar.border": "${p.dark}",
    "activityBarBadge.background": "${p.accent}",
    "activityBarBadge.foreground": "${p.dark}",

    "tree.indentGuidesStroke": "${p.black}",
    "sideBar.foreground": "${p.fg2}",
    "sideBar.background": "${p.bg0}",
    "sideBar.border": "${p.dark}",
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

    "scrollbarSlider.background": "${p.fg3}15",
    "scrollbarSlider.hoverBackground": "${p.fg3}10",
    "scrollbarSlider.activeBackground": "${p.fg3}22",

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
    "editor.wordHighlightBackground": "${p.comment}44",
    "editor.wordHighlightStrongBackground": "${p.comment}55",
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

    "editorBracketMatch.background": "${p.dark}",
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

    "peekView.border": "${p.dark}",
    "peekViewEditor.background": "${p.dark}",
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

    "tab.activeBackground": "${p.bg0}",
    "tab.inactiveBackground": "${p.dark}",
    "tab.activeForeground": "${p.fg}",
    "tab.hoverForeground": "${p.fg}",
    "tab.activeBorder": "${p.bg3}",
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
    "panel.border": "${p.dark}",
    "panelTitle.activeForeground": "${p.fg2}",
    "panelTitle.inactiveForeground": "${p.bg4}",
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
    "terminal.foreground": "${p.fg2}",
    "terminal.selectionBackground": "${p.comment}4d",
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
			"name": "Comment",
			"scope": [
				"comment",
				"punctuation.definition.comment"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": "${syn.comment}"
			}
		},
		{
			"name": "Variables",
			"scope": [
				"variable",
				"string constant.other.placeholder"
			],
			"settings": {
				"foreground": "${syn.variable}"
			}
		},
		{
			"name": "Colors",
			"scope": [
				"constant.other.color"
			],
			"settings": {
				"foreground": "${syn.const}"
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
			"name": "Keyword, Storage",
			"scope": [
				"keyword",
				"storage.type",
				"storage.modifier"
			],
			"settings": {
				"foreground": "${syn.keyword}"
			}
		},
		{
			"name": "Operator, Misc",
			"scope": [
				"keyword.control",
				"constant.other.color",
				"punctuation",
				"meta.tag",
				"punctuation.definition.tag",
				"punctuation.separator.inheritance.php",
				"punctuation.definition.tag.html",
				"punctuation.definition.tag.begin.html",
				"punctuation.definition.tag.end.html",
				"punctuation.section.embedded",
				"keyword.other.template",
				"keyword.other.substitution"
			],
			"settings": {
				"foreground": "${syn.operator}"
			}
		},
		{
			"name": "Tag",
			"scope": [
				"entity.name.tag",
				"meta.tag.sgml",
				"markup.deleted.git_gutter"
			],
			"settings": {
				"foreground": "${git.deleted}"
			}
		},
		{
			"name": "Function, Special Method",
			"scope": [
				"entity.name.function",
				"meta.function-call",
				"variable.function",
				"support.function",
				"keyword.other.special-method"
			],
			"settings": {
				"foreground": "${syn.func}"
			}
		},
		{
			"name": "Block Level Variables",
			"scope": [
				"meta.block variable.other"
			],
			"settings": {
				"foreground": "${syn.builtin1}"
			}
		},
		{
			"name": "Other Variable, String Link",
			"scope": [
				"support.other.variable",
				"string.other.link"
			],
			"settings": {
				"foreground": "${syn.builtin0}"
			}
		},
		{
			"name": "Number, Constant, Function Argument, Tag Attribute, Embedded",
			"scope": [
				"constant.numeric",
				"constant.language",
				"support.constant",
				"constant.character",
				"constant.escape",
				"variable.parameter",
				"keyword.other.unit",
				"keyword.other"
			],
			"settings": {
				"foreground": "${syn.number}"
			}
		},
		{
			"name": "String, Symbols, Inherited Class, Markup Heading",
			"scope": [
				"string",
				"constant.other.symbol",
				"constant.other.key",
				"entity.other.inherited-class",
				"markup.heading",
				"markup.inserted.git_gutter",
				"meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
			],
			"settings": {
				"foreground": "${syn.string}"
			}
		},
		{
			"name": "Class, Support",
			"scope": [
				"entity.name",
				"support.type",
				"support.class",
				"support.other.namespace.use.php",
				"meta.use.php",
				"support.other.namespace.php",
				"markup.changed.git_gutter",
				"support.type.sys-types"
			],
			"settings": {
				"foreground": "${syn.type}"
			}
		},
		{
			"name": "Entity Types",
			"scope": [
				"support.type"
			],
			"settings": {
				"foreground": "${syn.builtin2}"
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
				"source.postcss support.type.property-name"
			],
			"settings": {
				"foreground": "${syn.type}"
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
				"foreground": "${syn.param}"
			}
		},
		{
			"name": "Language methods",
			"scope": [
				"variable.language"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": "${syn.func}"
			}
		},
		{
			"name": "entity.name.method.js",
			"scope": [
				"entity.name.method.js"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": "${syn.func}"
			}
		},
		{
			"name": "meta.method.js",
			"scope": [
				"meta.class-method.js entity.name.function.js",
				"variable.function.constructor"
			],
			"settings": {
				"foreground": "${syn.func}"
			}
		},
		{
			"name": "Attributes",
			"scope": [
				"entity.other.attribute-name"
			],
			"settings": {
				"foreground": "${syn.field}"
			}
		},
		{
			"name": "HTML Attributes",
			"scope": [
				"text.html.basic entity.other.attribute-name.html",
				"text.html.basic entity.other.attribute-name"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": "${syn.attr}"
			}
		},
		{
			"name": "CSS Classes",
			"scope": [
				"entity.other.attribute-name.class"
			],
			"settings": {
				"foreground": "${syn.type}"
			}
		},
		{
			"name": "CSS ID's",
			"scope": [
				"source.sass keyword.control"
			],
			"settings": {
				"foreground": "${syn.ident}"
			}
		},
		{
			"name": "Inserted",
			"scope": [
				"markup.inserted"
			],
			"settings": {
				"foreground": "${syn.string}"
			}
		},
		{
			"name": "Deleted",
			"scope": [
				"markup.deleted"
			],
			"settings": {
				"foreground": "${git.deleted}"
			}
		},
		{
			"name": "Changed",
			"scope": [
				"markup.changed"
			],
			"settings": {
				"foreground": "${git.changed}"
			}
		},
		{
			"name": "Regular Expressions",
			"scope": [
				"string.regexp"
			],
			"settings": {
				"foreground": "${syn.regex}"
			}
		},
		{
			"name": "Escape Characters",
			"scope": [
				"constant.character.escape"
			],
			"settings": {
				"foreground": "${syn.builtin3}"
			}
		},
		{
			"name": "URL",
			"scope": [
				"*url*",
				"*link*",
				"*uri*"
			],
			"settings": {
				"fontStyle": "underline"
			}
		},
		{
			"name": "Decorators",
			"scope": [
				"tag.decorator.js entity.name.tag.js",
				"tag.decorator.js punctuation.definition.tag.js"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": "${syn.preproc}"
			}
		},
		{
			"name": "ES7 Bind Operator",
			"scope": [
				"source.js constant.other.object.key.js string.unquoted.label.js"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": "${syn.operator}"
			}
		},
		{
			"name": "JSON Key - Level 0",
			"scope": [
				"source.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "${syn.field}"
			}
		},
		{
			"name": "JSON Key - Level 1",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "${p.teal}"
			}
		},
		{
			"name": "JSON Key - Level 2",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "${p.red}"
			}
		},
		{
			"name": "JSON Key - Level 3",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "${p.yellow}"
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
				"foreground": "${p.green}"
			}
		},
		{
			"name": "JSON Key - Level 6",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "${p.blue}"
			}
		},
		{
			"name": "JSON Key - Level 7",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "${p.magenta}"
			}
		},
		{
			"name": "JSON Key - Level 8",
			"scope": [
				"source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
			],
			"settings": {
				"foreground": "${p.teal}"
			}
		},
		{
			"name": "Markdown - Plain",
			"scope": [
				"text.html.markdown",
				"punctuation.definition.list_item.markdown"
			],
			"settings": {
				"foreground": "${p.fg}"
			}
		},
		{
			"name": "Markdown - Markup Raw Inline",
			"scope": [
				"text.html.markdown markup.inline.raw.markdown"
			],
			"settings": {
				"foreground": "${syn.operator}"
			}
		},
		{
			"name": "Markdown - Markup Raw Inline Punctuation",
			"scope": [
				"text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
			],
			"settings": {
				"foreground": "${syn.comment}"
			}
		},
		{
			"name": "Markdown - Heading",
			"scope": [
				"markdown.heading",
				"markup.heading | markup.heading entity.name",
				"markup.heading.markdown punctuation.definition.heading.markdown"
			],
			"settings": {
				"foreground": "${p.accent}"
			}
		},
		{
			"name": "Markup - Italic",
			"scope": [
				"markup.italic"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": "${syn.builtin0}"
			}
		},
		{
			"name": "Markup - Bold",
			"scope": [
				"markup.bold",
				"markup.bold string"
			],
			"settings": {
				"fontStyle": "bold",
				"foreground": "${syn.builtin2}"
			}
		},
		{
			"name": "Markup - Bold-Italic",
			"scope": [
				"markup.bold markup.italic",
				"markup.italic markup.bold",
				"markup.quote markup.bold",
				"markup.bold markup.italic string",
				"markup.italic markup.bold string",
				"markup.quote markup.bold string"
			],
			"settings": {
				"fontStyle": "bold",
				"foreground": "${syn.builtin1}"
			}
		},
		{
			"name": "Markup - Underline",
			"scope": [
				"markup.underline"
			],
			"settings": {
				"fontStyle": "underline",
				"foreground": "${syn.conditional}"
			}
		},
		{
			"name": "Markdown - Blockquote",
			"scope": [
				"markup.quote punctuation.definition.blockquote.markdown"
			],
			"settings": {
				"foreground": "${p.fg3}"
			}
		},
		{
			"name": "Markup - Quote",
			"scope": [
				"markup.quote"
			],
			"settings": {
				"fontStyle": "italic"
			}
		},
		{
			"name": "Markdown - Link",
			"scope": [
				"string.other.link.title.markdown"
			],
			"settings": {
				"foreground": "${p.blue}"
			}
		},
		{
			"name": "Markdown - Link Description",
			"scope": [
				"string.other.link.description.title.markdown"
			],
			"settings": {
				"foreground": "${p.magenta}"
			}
		},
		{
			"name": "Markdown - Link Anchor",
			"scope": [
				"constant.other.reference.link.markdown"
			],
			"settings": {
				"foreground": "${p.yellow}"
			}
		},
		{
			"name": "Markup - Raw Block",
			"scope": [
				"markup.raw.block"
			],
			"settings": {
				"foreground": "${p.magenta}"
			}
		},
		{
			"name": "Markdown - Raw Block Fenced",
			"scope": [
				"markup.raw.block.fenced.markdown"
			],
			"settings": {
				"foreground": "${p.dark}50"
			}
		},
		{
			"name": "Markdown - Fenced Bode Block",
			"scope": [
				"punctuation.definition.fenced.markdown"
			],
			"settings": {
				"foreground": "${p.dark}50"
			}
		},
		{
			"name": "Markdown - Fenced Bode Block Variable",
			"scope": [
				"markup.raw.block.fenced.markdown",
				"variable.language.fenced.markdown",
				"punctuation.section.class.end"
			],
			"settings": {
				"foreground": "${p.fg}"
			}
		},
		{
			"name": "Markdown - Fenced Language",
			"scope": [
				"variable.language.fenced.markdown"
			],
			"settings": {
				"foreground": "${syn.comment}"
			}
		},
		{
			"name": "Markdown - Separator",
			"scope": [
				"meta.separator"
			],
			"settings": {
				"fontStyle": "bold",
				"foreground": "${syn.comment}"
			}
		},
		{
			"name": "Markup - Table",
			"scope": [
				"markup.table"
			],
			"settings": {
				"foreground": "${pal.fg}"
			}
		}
	]
}`

  write_json(name, template)
}

module.exports = {
  create_color_theme,
}
