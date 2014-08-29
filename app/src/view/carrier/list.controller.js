/**
 * Created by tzhbala4 on 28.08.2014.
 */
/**
 * Controller - Home
 * --------------------
 * This is the controller for the carrier list view
 *
 */
sap.ui.controller( 'view.carrier.list', {
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
     * Fired when the row selection of the dashboard has changed.
     * @param oEvent
     */
    onRowSelectionChange: function( oEvent ){
        //Get the selected carrier
        var oRowContext = oEvent.getParameter( 'rowContext' );

        if( oRowContext !== undefined || oRowContext !== '' || oRowContext !== null ){
            // Set context for the carrier detail view
            var oCarrierDetailView = sap.ui.getCore().getElementById( 'carrier.details' );
            var oCarrierDetailController = oCarrierDetailView.getController();
            oCarrierDetailController.setBindingContext( oRowContext );

            // Navigate to carrier detail view
            var oNavCon = sap.ui.getCore().byId( 'navContainerControl' );
            oNavCon.to( 'carrier.details' );
        }
    },

    onButtonClick: function( sParam1, sParam2 ){
        alert( sParam1 + ' gugus ' + sParam2 );
    }
} );