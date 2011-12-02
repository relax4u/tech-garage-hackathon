(function(){
	tt.ui.tab1 = {};
	
	tt.ui.tab1.createTab = function() {
		var win1 = Titanium.UI.createWindow({  
			title:'Tab 1',
			backgroundColor:'#fff'
		});
		var tab1 = Titanium.UI.createTab({  
			icon:'KS_nav_views.png',
			title:'Tab 1',
			window:win1
		});
	
		var label1 = Titanium.UI.createLabel({
			color:'#999',
			text:'I am Window 1',
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			width:'auto'
		});
		
		win1.add(label1);
		
		// アプリケーションレベルのイベントの作成例
		Ti.App.addEventListener('app:update.label1', function(){
			label1.text = "label2 clicked!";
		});
		
		return tab1;
	};
})();
