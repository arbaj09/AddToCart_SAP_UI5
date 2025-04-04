sap.ui.define([
	'sap/ui/core/UIComponent',
	'sap/ui/model/json/JSONModel',
	'sap/f/library'
], function (UIComponent, JSONModel, fioriLibrary) {
	'use strict';

	return UIComponent.extend('sap.ui.demo.fcl.Component', {

		metadata: {
			manifest: 'json'
		},

		init: function () {
			var oModel,
				oProductsModel,
				oRouter;
			// Initialize Cart Model
			var oCartModel = new sap.ui.model.json.JSONModel({
				cartItems: [],
				cartCount: 0
			});
			this.setModel(oCartModel, "cartModel");

			UIComponent.prototype.init.apply(this, arguments);
			// Component.js or App.controller.js
var oAppViewModel = new sap.ui.model.json.JSONModel({
	layout: "OneColumn",
	smallScreenMode: false
});
this.setModel(oAppViewModel, "appView");

			// create the cart model
			var oCartModel = new JSONModel({
				cartItems: []
			});
			this.setModel(oCartModel, "cartModel");

			oModel = new JSONModel();
			this.setModel(oModel);




			// set products demo model on this sample
			var oData = {
				ProductCollection: [
					{
						id: 1,
						name: "Apple iPhone 15",
						Price: "999",
						CurrencyCode: "USD",

						Supplier: "Sap",
						imgUrl: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					},
					{
						id: 2,
						name: "Samsung Galaxy S23",
						Price: "850",
						CurrencyCode: "USD",
						Supplier: " arbaz ",
						imgUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					},
					{
						id: 3,
						name: "Sony WH-1000XM5 Headphones",
						Price: "350",
						CurrencyCode: "USD",
						Supplier: " TEST ",
						imgUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					},
					{
						id: 4,
						name: "Dell XPS 13 Laptop",
						Price: "1200",
						CurrencyCode: "USD",
						Supplier: " Titanium ",
						imgUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					},
					{
						id: 5,
						name: "Logitech MX Master 3 Mouse",
						Price: "100",
						CurrencyCode: "USD",
						Supplier: " Titanium ",
						imgUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHx8MHx8fDA%3D"
					},
					{
						id: 6,
						name: "Apple MacBook Pro 14",
						Price: "1999",
						CurrencyCode: "USD",
						Supplier: " Titanium ",
						imgUrl: "https://images.unsplash.com/photo-1637607699062-a580726a534a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjJTIwYm9vayUyMHBybyUyMDE0fGVufDB8fDB8fHww"
					},
					{
						id: 7,
						name: "Bose QuietComfort Earbuds",
						Price: "250",
						CurrencyCode: "USD",
						Supplier: " Titanium ",
						imgUrl: "https://media.istockphoto.com/id/1429366887/photo/earphones-and-their-case.webp?a=1&b=1&s=612x612&w=0&k=20&c=YuCGLMSlzL_z5AjV0-uI9hDeqijZtDWoeDzAhrLgYkk="
					},
					{
						id: 8,
						name: "Samsung 4K Smart TV",
						Price: "700",
						CurrencyCode: "USD",
						Supplier: " Titanium ",
						imgUrl: "https://plus.unsplash.com/premium_photo-1669380425564-6e1a281a4d30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
				],
				ProductCollectionStats: {
					Counts: {
						Total: 8
					}
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel, "products");

			oRouter = this.getRouter();
			oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
			oRouter.initialize();


		},

		_onBeforeRouteMatched: function (oEvent) {
			var oModel = this.getModel(),
				sLayout = oEvent.getParameters().arguments.layout;

			// If there is no layout parameter, set a default layout (normally OneColumn)
			if (!sLayout) {
				sLayout = fioriLibrary.LayoutType.OneColumn;
			}

			oModel.setProperty("/layout", sLayout);
		},

	});
});