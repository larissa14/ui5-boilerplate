
/**
 * View - Home
 * --------------------
 * This is the carrier list view
 *
 */
sap.ui.jsview( 'view.carrier.list', {

    getControllerName: function(){
        return 'view.carrier.list';
    },

    /**
     * Defines the content of the view
     * @param oController
     */
    createContent: function( oController ){
        // Carrier list table
        var oTable = new sap.ui.table.Table( {
            selectionMode: sap.ui.table.SelectionMode.Single,
            selectionBehavior: sap.ui.table.SelectionBehavior.Row,
            toolbar: new sap.ui.commons.Toolbar( {items: [
                new sap.ui.commons.Button( {text: "Button in the Toolbar", press: function(){
                    alert( "Button pressed!" );
                }} )
            ]} ),
            columns: [
                new sap.ui.table.Column( {
                    label: new sap.ui.commons.Label( {
                        text: '{i18n>CARRIER_TABLE_CARRID_LABEL}'
                    } ),
                    template: new sap.ui.commons.TextView().bindProperty( 'text', 'Carrid' ),
                    sortProperty: 'Carrid',
                    filterProperty: 'Carrid'
                } ),
                new sap.ui.table.Column( {
                    label: new sap.ui.commons.Label( {
                        text: '{i18n>CARRIER_TABLE_CARRNAME_LABEL}'
                    } ),
                    template: new sap.ui.commons.TextView().bindProperty( 'text', 'Carrname' ),
                    sortProperty: 'Carrname',
                    filterProperty: "Carrname"
                } ),
                new sap.ui.table.Column( {
                    label: new sap.ui.commons.Label( {
                        text: '{i18n>CARRIER_TABLE_CURRCODE_LABEL}'
                    } ),
                    template: new sap.ui.commons.TextView().bindProperty( 'text', 'Currcode' ),
                    sortProperty: 'Currcode',
                    filterProperty: 'Currcode'
                } ),
                new sap.ui.table.Column( {
                    label: new sap.ui.commons.Label( {
                        text: '{i18n>CARRIER_TABLE_URL_LABEL}'
                    } ),
                    template: new sap.ui.commons.TextView().bindProperty( 'text', 'Url' ),
                    sortProperty: "Url",
                    filterProperty: "Url"
                } )
            ],
            rowSelectionChange: function( oEvent ){
                oController.onRowSelectionChange( oEvent );
            }
        } );

        // Set carrier model
        var oModel = sap.ui.getCore().getModel( 'sflight' );
        oTable.setModel( oModel );

        // Bind rows
        oTable.bindRows( {
            path: '/Carriers'
        } );

        var oPage = new sap.m.Page( {
            title: '{i18n>CARRIER_TABLE_TITLE}',
            content: [
                oTable
            ]
        } );

        return oPage;
    }
} );