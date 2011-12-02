(function(){
	tt.ui.design = {};
	
	tt.ui.design.createTab = function(){
		// Absolute
		// 水平方向に並べるパターン
		var win = Ti.UI.createWindow({
			title: "Design",
			backgroundColor: "#fff"
		});
		
		var tab = Ti.UI.createTab({
			title: "Design",
			icon: "KS_nav_views.png",
			window: win
		});
		
		var box1 = Ti.UI.createView({
			width: 50, height: 50,
			backgroundColor: "#f00",
			top: 10, left: 10
		});
		
		var box2 = Ti.UI.createView({
			width: 50, height: 50,
			backgroundColor: "#0f0",
			bottom: 10, right: 10
		});
		
		var box3 = Ti.UI.createView({
			width: 50, height: 50,
			backgroundColor: "#00f",
			center: {x: 160, y: 200}
		});
		
		win.add(box1);
		win.add(box2);
		win.add(box3);
		
		return tab;
	};
	
	tt.ui.design.createTab2 = function() {
		// Vertical
		// 垂直方向に並べるパターン
		var win = Ti.UI.createWindow({
			title: "Design",
			backgroundColor: "#fff",
			layout: 'vertical'
		});
		
		var tab = Ti.UI.createTab({
			title: "Design",
			icon: "KS_nav_views.png",
			window: win
		});
		
		var box1 = Ti.UI.createView({
			width: 50, height: 50,
			backgroundColor: "#f00",
			top: 10
		});
		
		var box2 = Ti.UI.createView({
			width: 50, height: 50,
			backgroundColor: "#0f0",
			top: 10
		});
		
		var box3 = Ti.UI.createView({
			width: 50, height: 50,
			backgroundColor: "#00f",
			top: 10
		});
		
		win.add(box1);
		win.add(box2);
		win.add(box3);
		
		return tab;
	};
	
	tt.ui.design.createTab3 = function() {
		// Horizontal
		// 水平方向に並べるパターン
		var win = Ti.UI.createWindow({
			title: "Design",
			backgroundColor: "#fff",
			layout: 'horizontal'
		});
		
		var tab = Ti.UI.createTab({
			title: "Design",
			icon: "KS_nav_views.png",
			window: win
		});
		
		var box1 = Ti.UI.createView({
			width: 50, height: 50,
			backgroundColor: "#f00",
			top: 10, left: 10
		});
		
		var box2 = Ti.UI.createView({
			width: 50, height: 50,
			backgroundColor: "#0f0",
			top: 10, left: 10
		});
		
		var box3 = Ti.UI.createView({
			width: 50, height: 50,
			backgroundColor: "#00f",
			top: 10, left: 10
		});
		
		win.add(box1);
		win.add(box2);
		win.add(box3);
		
		return tab;
	};
})();
