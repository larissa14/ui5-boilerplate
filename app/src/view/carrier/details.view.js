/**
 * View - Home
 * --------------------
 * This is the carrier detail view
 *
 */
sap.ui.jsview( 'view.carrier.details', {

    getControllerName: function(){
        return 'view.carrier.details';
    },

    /**
     * Defines the content of the view
     * @param oController
     */
    createContent: function( oController ){
        var oSimpleForm = new sap.ui.layout.form.SimpleForm( 'carrier.details.form', {
            maxContainerCols: 1,
            content: [
                new sap.ui.commons.Label( {text: '{i18n>CARRIER_DETAIL_CARRID_LABEL}'} ),
                new sap.ui.commons.TextView( {
                    text: {
                        path: 'Carrid'
                    }
                } ),
                new sap.ui.commons.Label( {text: '{i18n>CARRIER_DETAIL_CARRNAME_LABEL}'} ),
                new sap.ui.commons.TextView( {
                    text: {
                        path: 'Carrname'
                    }
                } ),
                new sap.ui.commons.Label( {text: '{i18n>CARRIER_DETAIL_CURRCODE_LABEL}'} ),
                new sap.ui.commons.TextView( {
                    text: {
                        path: 'Currcode'
                    }
                } ),
                new sap.ui.commons.Label( {text: '{i18n>CARRIER_DETAIL_URL_LABEL}'} ),
                new sap.ui.commons.TextView( {
                    text: {
                        path: 'Url'
                    }
                } )
            ]
        } );

        // Set model
        var oModel = sap.ui.getCore().getModel( 'sflight' );
        oSimpleForm.setModel( oModel );

        var oPage = new sap.m.Page({
            title: '{i18n>CARRIER_DETAIL_TITLE}',
            showNavButton: true,
            navButtonTap: function(){
                oController.navigateToOverview();
            },
            content: [
                oSimpleForm
            ]
        });

        return oPage;
    }
} );