
var __cov_bbFNHc3pZHW6u7VQwUd_pw = (Function('return this'))();
if (!__cov_bbFNHc3pZHW6u7VQwUd_pw.__coverage__) { __cov_bbFNHc3pZHW6u7VQwUd_pw.__coverage__ = {}; }
__cov_bbFNHc3pZHW6u7VQwUd_pw = __cov_bbFNHc3pZHW6u7VQwUd_pw.__coverage__;
if (!(__cov_bbFNHc3pZHW6u7VQwUd_pw['/Users/tgermaneri/git/canvas-datagrid/lib/defaults.js'])) {
   __cov_bbFNHc3pZHW6u7VQwUd_pw['/Users/tgermaneri/git/canvas-datagrid/lib/defaults.js'] = {"path":"/Users/tgermaneri/git/canvas-datagrid/lib/defaults.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":3,"loc":{"start":{"line":3,"column":11},"end":{"line":3,"column":23}}},"2":{"name":"(anonymous_2)","line":5,"loc":{"start":{"line":5,"column":11},"end":{"line":5,"column":27}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":233,"column":3}},"2":{"start":{"line":5,"column":4},"end":{"line":232,"column":6}},"3":{"start":{"line":6,"column":8},"end":{"line":231,"column":10}}},"branchMap":{}};
}
__cov_bbFNHc3pZHW6u7VQwUd_pw = __cov_bbFNHc3pZHW6u7VQwUd_pw['/Users/tgermaneri/git/canvas-datagrid/lib/defaults.js'];
__cov_bbFNHc3pZHW6u7VQwUd_pw.s['1']++;define([],function(){'use strict';__cov_bbFNHc3pZHW6u7VQwUd_pw.f['1']++;__cov_bbFNHc3pZHW6u7VQwUd_pw.s['2']++;return function(self){__cov_bbFNHc3pZHW6u7VQwUd_pw.f['2']++;__cov_bbFNHc3pZHW6u7VQwUd_pw.s['3']++;self.defaults={attributes:[['name',''],['tree',false],['showNewRow',false],['treeHorizontalScroll',false],['saveAppearance',true],['selectionFollowsActiveCell',false],['multiLine',false],['editable',true],['allowColumnReordering',true],['allowRowReordering',false],['allowSorting',true],['showFilter',true],['globalRowResize',false],['pageUpDownOverlap',1],['persistantSelectionMode',false],['selectionMode','cell'],['autoResizeColumns',false],['allowRowHeaderResize',true],['allowColumnResize',true],['allowRowResize',true],['allowRowResizeFromCell',false],['allowColumnResizeFromCell',false],['debug',false],['borderResizeZone',10],['showColumnHeaders',true],['showRowNumbers',true],['showRowHeaders',true],['scrollRepeatRate',75],['selectionScrollZone',20],['resizeScrollZone',20],['contextHoverScrollRateMs',5],['contextHoverScrollAmount',2],['selectionScrollIncrement',20],['reorderDeadZone',3],['showClearSettingsOption',true],['showOrderByOption',true],['clearSettingsOptionText','Clear saved settings'],['showOrderByOptionTextAsc','Order by %s ascending'],['showOrderByOptionTextDesc','Order by %s descending'],['removeFilterOptionText','Remove filter on %s'],['filterOptionText','Filter %s'],['filterTextPrefix','(filtered) '],['touchReleaseAnimationDurationMs',2000],['touchReleaseAcceleration',500],['touchDeadZone',3],['touchSelectTimeMs',800],['touchScrollZone',30],['copyText','Copy'],['showCopy',true],['columnHeaderClickBehavior','sort'],['scrollPointerLock',false],['maxAutoCompleteItems',200]],styles:[['activeCellBackgroundColor','rgba(255, 255, 255, 1)'],['activeCellBorderColor','rgba(110, 168, 255, 1)'],['activeCellBorderWidth',0.25],['activeCellColor','rgba(0, 0, 0, 1)'],['activeCellFont','16px sans-serif'],['activeCellHoverBackgroundColor','rgba(255, 255, 255, 1)'],['activeCellHoverColor','rgba(0, 0, 0, 1)'],['activeCellOverlayBorderColor','rgba(66, 133, 244, 1)'],['activeCellOverlayBorderWidth',0.5],['activeCellPaddingBottom',5],['activeCellPaddingLeft',5],['activeCellPaddingRight',7],['activeCellPaddingTop',5],['activeCellSelectedBackgroundColor','rgba(236, 243, 255, 1)'],['activeCellSelectedColor','rgba(0, 0, 0, 1)'],['activeColumnHeaderCellBackgroundColor','rgba(225, 225, 225, 1)'],['activeColumnHeaderCellColor','rgba(0, 0, 0, 1)'],['activeRowHeaderCellBackgroundColor','rgba(225, 225, 225, 1)'],['activeRowHeaderCellColor','rgba(0, 0, 0, 1)'],['autocompleteBottomMargin',60],['autosizeHeaderCellPadding',8],['autosizePadding',5],['backgroundColor','rgba(240, 240, 240, 1)'],['cellAutoResizePadding',13],['cellBackgroundColor','rgba(255, 255, 255, 1)'],['cellBorderColor','rgba(195, 199, 202, 1)'],['cellBorderWidth',0.5],['cellColor','rgba(0, 0, 0, 1)'],['cellFont','16px sans-serif'],['cellGridHeight',250],['cellHeight',24],['cellHeightWithChildGrid',150],['cellHorizontalAlignment','left'],['cellHoverBackgroundColor','rgba(255, 255, 255, 1)'],['cellHoverColor','rgba(0, 0, 0, 1)'],['cellPaddingBottom',5],['cellPaddingLeft',5],['cellPaddingRight',7],['cellPaddingTop',5],['cellSelectedBackgroundColor','rgba(236, 243, 255, 1)'],['cellSelectedColor','rgba(0, 0, 0, 1)'],['cellVerticalAlignment','center'],['cellWidthWithChildGrid',250],['childContextMenuArrowColor','rgba(43, 48, 43, 1)'],['childContextMenuArrowHTML','&#x25BA;'],['childContextMenuMarginLeft',-15],['childContextMenuMarginTop',0],['columnHeaderCellBackgroundColor','rgba(240, 240, 240, 1)'],['columnHeaderCellBorderColor','rgba(152, 152, 152, 1)'],['columnHeaderCellBorderWidth',0.25],['columnHeaderCellColor','rgba(50, 50, 50, 1)'],['columnHeaderCellFont','16px sans-serif'],['columnHeaderCellHeight',25],['columnHeaderCellHorizontalAlignment','left'],['columnHeaderCellHoverBackgroundColor','rgba(235, 235, 235, 1)'],['columnHeaderCellHoverColor','rgba(0, 0, 0, 1)'],['columnHeaderCellPaddingBottom',5],['columnHeaderCellPaddingLeft',5],['columnHeaderCellPaddingRight',7],['columnHeaderCellPaddingTop',5],['columnHeaderCellVerticalAlignment','center'],['columnWidth',250],['contextFilterButtonBorder','solid 1px rgba(158, 163, 169, 1)'],['contextFilterButtonBorderRadius','3px'],['contextFilterButtonHTML','&#x25BC;'],['contextFilterInputBackground','rgba(255,255,255,1)'],['contextFilterInputBorder','solid 1px rgba(158, 163, 169, 1)'],['contextFilterInputBorderRadius','0'],['contextFilterInputColor','rgba(0,0,0,1)'],['contextFilterInputFontFamily','sans-serif'],['contextFilterInputFontSize','14px'],['contextFilterInvalidRegExpBackground','rgba(180, 6, 1, 1)'],['contextFilterInvalidRegExpColor','rgba(255, 255, 255, 1)'],['contextMenuArrowColor','rgba(43, 48, 43, 1)'],['contextMenuArrowDownHTML','&#x25BC;'],['contextMenuArrowUpHTML','&#x25B2;'],['contextMenuBackground','rgba(240, 240, 240, 1)'],['contextMenuBorder','solid 1px rgba(158, 163, 169, 1)'],['contextMenuBorderRadius','3px'],['contextMenuChildArrowFontSize','12px'],['contextMenuColor','rgba(43, 48, 43, 1)'],['contextMenuFilterButtonFontFamily','sans-serif'],['contextMenuFilterButtonFontSize','10px'],['contextMenuFilterInvalidExpresion','rgba(237, 155, 156, 1)'],['contextMenuFontFamily','sans-serif'],['contextMenuFontSize','16px'],['contextMenuHoverBackground','rgba(182, 205, 250, 1)'],['contextMenuHoverColor','rgba(43, 48, 153, 1)'],['contextMenuItemBorderRadius','3px'],['contextMenuItemMargin','2px'],['contextMenuLabelDisplay','inline-block'],['contextMenuLabelMargin','0 3px 0 0'],['contextMenuLabelMaxWidth','700px'],['contextMenuLabelMinWidth','75px'],['contextMenuMarginLeft',3],['contextMenuMarginTop',-3],['contextMenuOpacity','0.98'],['contextMenuPadding','2px'],['contextMenuWindowMargin',6],['cornerCellBackgroundColor','rgba(240, 240, 240, 1)'],['cornerCellBorderColor','rgba(202, 202, 202, 1)'],['editCellBackgroundColor','white'],['editCellBorder','solid 1px rgba(110, 168, 255, 1)'],['editCellBoxShadow','0 2px 5px rgba(0,0,0,0.4)'],['editCellColor','black'],['editCellFontFamily','sans-serif'],['editCellFontSize','16px'],['editCellPaddingLeft',4],['gridBorderColor','rgba(202, 202, 202, 1)'],['gridBorderWidth',1],['columnHeaderOrderByArrowBorderColor','rgba(195, 199, 202, 1)'],['columnHeaderOrderByArrowBorderWidth',1],['columnHeaderOrderByArrowColor','rgba(155, 155, 155, 1)'],['columnHeaderOrderByArrowHeight',8],['columnHeaderOrderByArrowMarginLeft',0],['columnHeaderOrderByArrowMarginRight',5],['columnHeaderOrderByArrowMarginTop',6],['columnHeaderOrderByArrowWidth',13],['minColumnWidth',45],['minHeight',24],['minRowHeight',24],['name','default'],['reorderMarkerBackgroundColor','rgba(0, 0, 0, 0.1)'],['reorderMarkerBorderColor','rgba(0, 0, 0, 0.2)'],['reorderMarkerBorderWidth',1.25],['reorderMarkerIndexBorderColor','rgba(66, 133, 244, 1)'],['reorderMarkerIndexBorderWidth',2.75],['rowHeaderCellBackgroundColor','rgba(240, 240, 240, 1)'],['rowHeaderCellBorderColor','rgba(200, 200, 200, 1)'],['rowHeaderCellBorderWidth',1],['rowHeaderCellColor','rgba(50, 50, 50, 1)'],['rowHeaderCellFont','16px sans-serif'],['rowHeaderCellHeight',25],['rowHeaderCellHorizontalAlignment','left'],['rowHeaderCellHoverBackgroundColor','rgba(235, 235, 235, 1)'],['rowHeaderCellHoverColor','rgba(0, 0, 0, 1)'],['rowHeaderCellPaddingBottom',5],['rowHeaderCellPaddingLeft',5],['rowHeaderCellPaddingRight',5],['rowHeaderCellPaddingTop',5],['rowHeaderCellSelectedBackgroundColor','rgba(217, 217, 217, 1)'],['rowHeaderCellSelectedColor','rgba(50, 50, 50, 1)'],['rowHeaderCellVerticalAlignment','center'],['rowHeaderCellWidth',57],['scrollBarActiveColor','rgba(125, 125, 125, 1)'],['scrollBarBackgroundColor','rgba(240, 240, 240, 1)'],['scrollBarBorderColor','rgba(202, 202, 202, 1)'],['scrollBarBorderWidth',0.5],['scrollBarBoxBorderRadius',4.125],['scrollBarBoxColor','rgba(192, 192, 192, 1)'],['scrollBarBoxMargin',2],['scrollBarBoxMinSize',15],['scrollBarBoxWidth',8],['scrollBarCornerBackgroundColor','rgba(240, 240, 240, 1)'],['scrollBarCornerBorderColor','rgba(202, 202, 202, 1)'],['scrollBarWidth',11],['selectionOverlayBorderColor','rgba(66, 133, 244, 1)'],['selectionOverlayBorderWidth',0.75],['treeArrowBorderColor','rgba(195, 199, 202, 1)'],['treeArrowBorderWidth',1],['treeArrowClickRadius',5],['treeArrowColor','rgba(155, 155, 155, 1)'],['treeArrowHeight',8],['treeArrowMarginLeft',0],['treeArrowMarginRight',5],['treeArrowMarginTop',6],['treeArrowWidth',13],['treeGridHeight',250]]};};});
