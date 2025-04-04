sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.fcl.controller.Detail", {
		onInit: function () {
			var oOwnerComponent = this.getOwnerComponent();

			this.oRouter = oOwnerComponent.getRouter();
			this.oModel = oOwnerComponent.getModel();

			this.oRouter.getRoute("list").attachPatternMatched(this._onProductMatched, this);
			this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
		},

		_onProductMatched: function (oEvent) {
			this._product = oEvent.getParameter("arguments").product || this._product || "0";
			this.getView().bindElement({
				path: "/ProductCollection/" + this._product,
				model: "products"
			});
		},

		onEditToggleButtonPress: function() {
			var oObjectPage = this.getView().byId("ObjectPageLayout"),
				bCurrentShowFooterState = oObjectPage.getShowFooter();

			oObjectPage.setShowFooter(!bCurrentShowFooterState);
		},

		onExit: function () {
			this.oRouter.getRoute("list").detachPatternMatched(this._onProductMatched, this);
			this.oRouter.getRoute("detail").detachPatternMatched(this._onProductMatched, this);
		},
		
		/**
		 * Adds the selected product to the cart.
		 */
		onAddToCart: function () {
			var oCartModel = this.getOwnerComponent().getModel("cartModel");
			var aCartItems = oCartModel.getProperty("/cartItems") || [];
		
			// Get Selected Product from the "products" model binding context.
			var oProduct = this.getView().getBindingContext("products").getObject();
		
			// Check if the product is already in the cart.
			var oExistingProduct = aCartItems.find(function(item) {
				return item.id === oProduct.id;
			});
		
			if (oExistingProduct) {
				// Increase quantity if already added.
				oExistingProduct.quantity += 1;
			} else {
				// Otherwise, add the product with quantity 1.
				oProduct.quantity = 1;
				aCartItems.push(oProduct);
			}
		
			// Update cart model properties.
			oCartModel.setProperty("/cartItems", aCartItems);
			oCartModel.setProperty("/cartCount", aCartItems.length);
			
			// Recalculate and update the total price.
			this._updateCartTotal(oCartModel);
		
			// Show a confirmation message.
			sap.m.MessageToast.show("Product added to cart");
		},
		
		/**
		 * Helper function to update the total price in the cart model.
		 * It calculates the sum of (Price * quantity) for all items.
		 */
		_updateCartTotal: function (oCartModel) {
			var aCartItems = oCartModel.getProperty("/cartItems") || [];
			var fTotal = aCartItems.reduce(function (sum, item) {
				// Parse Price as a float and multiply by the item's quantity.
				return sum + (parseFloat(item.Price) * (item.quantity || 1));
			}, 0);
			// Update the totalPrice property in the cart model.
			oCartModel.setProperty("/totalPrice", fTotal.toFixed(2));
		},

		/**
		 * Navigates to the cart view.
		 */
		onOpenCart: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			var oAppModel = this.getView().getModel("appView");
		
			if (oAppModel) {
				oAppModel.setProperty("/layout", "ThreeColumnsEndExpanded");
			}
		
			oRouter.navTo("cart", {
				layout: "ThreeColumnsEndExpanded"
			});
		}
	});
});





// sap.ui.define([
// 	"sap/ui/core/mvc/Controller"
// ], function (Controller) {
// 	"use strict";

// 	return Controller.extend("sap.ui.demo.fcl.controller.Detail", {
// 		onInit: function () {
// 			var oOwnerComponent = this.getOwnerComponent();

// 			this.oRouter = oOwnerComponent.getRouter();
// 			this.oModel = oOwnerComponent.getModel();

// 			this.oRouter.getRoute("list").attachPatternMatched(this._onProductMatched, this);
// 			this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
// 		},

// 		_onProductMatched: function (oEvent) {
// 			this._product = oEvent.getParameter("arguments").product || this._product || "0";
// 			this.getView().bindElement({
// 				path: "/ProductCollection/" + this._product,
// 				model: "products"
// 			});
// 		},

// 		onEditToggleButtonPress: function() {
// 			var oObjectPage = this.getView().byId("ObjectPageLayout"),
// 				bCurrentShowFooterState = oObjectPage.getShowFooter();

// 			oObjectPage.setShowFooter(!bCurrentShowFooterState);
// 		},

// 		onExit: function () {
// 			this.oRouter.getRoute("list").detachPatternMatched(this._onProductMatched, this);
// 			this.oRouter.getRoute("detail").detachPatternMatched(this._onProductMatched, this);
// 		},
		
//         onAddToCart(){
//             var oCartModel = this.getOwnerComponent().getModel("cartModel");
//             var aCartItems = oCartModel.getProperty("/cartItems") || [];
        
//             // Get Selected Product
//             var oProduct = this.getView().getBindingContext("products").getObject();
        
//             // Check if the product is already in the cart
//             var oExistingProduct = aCartItems.find(item => item.id === oProduct.id);
        
//             if (oExistingProduct) {
//                 // Increase Quantity
//                 oExistingProduct.quantity += 1;
//             } else {
//                 // Add New Product with Quantity 1
//                 oProduct.quantity = 1;
//                 aCartItems.push(oProduct);
//             }
        
//             // Update Model
//             oCartModel.setProperty("/cartItems", aCartItems);
//             oCartModel.setProperty("/cartCount", aCartItems.length);
        
//             // Show Toast Message
//             sap.m.MessageToast.show("Product added to cart");
//         },
// 		onOpenCart: function () {
// 			var oRouter = this.getOwnerComponent().getRouter();
// 			var oModel = this.getView().getModel("appView");
		
// 			if (oModel) {
// 				oModel.setProperty("/layout", "ThreeColumnsEndExpanded");
// 			}
		
// 			oRouter.navTo("cart", {
// 				layout: "ThreeColumnsEndExpanded"
// 			});
// 		}
		
		
		

// 	});
// });
