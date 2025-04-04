sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sap.ui.demo.fcl.controller.Cart", {
        onInit: function () {
            var oModel = this.getOwnerComponent().getModel("cartModel");

            // Check if the model is set
            if (!oModel) {
                console.error("cartModel is missing. Please check Component.js");
            } else {
                console.log("cartModel Loaded: ", oModel.getData());
            }

            this.getView().setModel(oModel, "cartModel");
        }
    });
});
