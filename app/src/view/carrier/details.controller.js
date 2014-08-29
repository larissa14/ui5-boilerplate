/**
 * Controller - Home
 * --------------------
 * This is the controller for the carrier detail view
 *
 */
sap.ui.controller( 'view.carrier.details', {
    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     */
    onInit: function(){
    },

    /**
     * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
     */
    onExit: function(){
    },

    /**
     * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
     * This hook is the same one that SAPUI5 controls get after being rendered.
     */
    onAfterRendering: function(){
    },

    /**
     * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
     * (NOT before the first rendering! onInit() is used for that one!).
     */
    onBeforeRendering: function(){
    },

    /**
     * Set context binding.
     * @param oContext
     */
    setBindingContext: function( oContext ){
        // Get carrier detail form
        var oSimpleForm = sap.ui.getCore().byId( 'carrier.details.form' );

        // Set binding context
        oSimpleForm.setBindingContext( oContext );
    },

    /**
     * Navigate back to the carrier overview.
     */
    navigateToOverview: function() {
        // Navigate back to the carrier overview
        var oNavCon = sap.ui.getCore().byId( 'navContainerControl' );
        oNavCon.back();
    }
} );