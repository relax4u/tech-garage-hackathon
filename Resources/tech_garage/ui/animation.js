(function(){
	tt.ui.animation = {};
	
	tt.ui.animation.createTab = function(){
		var win = Ti.UI.createWindow({
			title: "Animation",
			backgroundColor: "#fff"
		});
		
		var tab = Ti.UI.createTab({
			title: "Animation",
			icon: "KS_nav_ui.png",
			window: win
		});
		
		var view = Ti.UI.createWindow({
			width: 200, height: 200,
			backgroundColor: "#555",
			borderRadius: 10,
			transform: Ti.UI.create2DMatrix().scale(0),
			opacity: 0
		});
		
		// UIコンポーネントに対するカスタムイベントの作成例
		view.addEventListener('popup', function(e){
			// 400msecで大きさを1.1倍にして、不透明にさせる
			e.source.animate({
				duration: 400,
				transform: Ti.UI.create2DMatrix().scale(1.1),
				opacity: 1
			}, function(){
				// 上記アニメーション完了後、今度は40msecで等倍に戻す
				// 重要: アニメーション完了後にアニメーションをする場合は、直後に直ぐにアニメーションするのではなく、
				// setTimeoutで遅らせてアニメーションする
				setTimeout(function(){
					e.source.animate({
						duration: 40,
						transform: Ti.UI.create2DMatrix().scale(1)
					});
				}, 5);
			});
		});
		view.addEventListener('popdown', function(e){
			e.source.animate({
				duration: 40,
				transform: Ti.UI.create2DMatrix().scale(1.1)
			}, function(){
				setTimeout(function(){
					e.source.animate({
						duration: 400,
						transform: Ti.UI.create2DMatrix().scale(0),
						opacity: 0
					});
				}, 5);
			});
		});
		
		var button = Ti.UI.createButton({
			title: "click",
			width: 200,
			height: 50,
			bottom: 10
		});
		
		
		// イベントの切り替え例
		var _popup = function(){
			view.fireEvent("popup");
			button.title = "close";
			button.removeEventListener('click', _popup);
			button.addEventListener('click', _popdown);
		};
		
		var _popdown = function(){
			view.fireEvent("popdown");
			button.title = "open";
			button.removeEventListener('click', _popdown);
			button.addEventListener('click', _popup);
		};
		
		button.addEventListener('click', _popup);
		
		win.add(view);
		win.add(button);
		
		return tab;
	};
})();
