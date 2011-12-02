// アプリケーション独自の名前空間をきる
var tt = {};

// アプリケーション関連のファイルを読み込む
Ti.include("tech_garage/app.js");

var tabGroup = tt.ui.createApplicationTabGroup();
tabGroup.open();

Ti.API.debug("welcome to tech_garage.")
