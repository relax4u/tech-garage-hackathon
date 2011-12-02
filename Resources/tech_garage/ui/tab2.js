(function(){
	tt.ui.tab2 = {};
	
	tt.ui.tab2.createTab = function() {
		var win2 = Titanium.UI.createWindow({  
			title:'Tab 2',
			backgroundColor:'#fff'
		});
		var tab2 = Titanium.UI.createTab({  
			icon:'KS_nav_ui.png',
			title:'Tab 2',
			window:win2
		});
		
		var label2 = Titanium.UI.createLabel({
			color:'#999',
			text:'I am Window 2',
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			width:'auto',
			height: 'auto'
		});
		win2.add(label2);
		
		// UIコンポーネントに存在するイベントの作成例
		label2.addEventListener('click', function(){
			alert("alert1");
		});
		
		// アプリケーションレベルのイベントの作成例
		label2.addEventListener('click', function(){
			Ti.App.fireEvent("app:update.label1");
		});
		
		// 一回のみ有効なイベントの作成例
		var onetime = function(){
			alert("onetime!");
			label2.removeEventListener('click', onetime);
		};
		label2.addEventListener('click', onetime);
		
		return tab2;
	};
})();
