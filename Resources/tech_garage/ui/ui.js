(function(){
	tt.ui = {};
	
	tt.ui.createApplicationTabGroup = function(){
		var tabGroup = Ti.UI.createTabGroup();
		
		tabGroup.addTab(tt.ui.tab1.createTab());
		tabGroup.addTab(tt.ui.tab2.createTab());
		tabGroup.addTab(tt.ui.design.createTab());
		//tabGroup.addTab(tt.ui.design.createTab2());
		//tabGroup.addTab(tt.ui.design.createTab3());
		tabGroup.addTab(tt.ui.animation.createTab());
		
		return tabGroup;
	};
})();

Ti.include(
	"/tech_garage/ui/tab1.js",
	"/tech_garage/ui/tab2.js",
	"/tech_garage/ui/design.js",
	"/tech_garage/ui/animation.js"
);
