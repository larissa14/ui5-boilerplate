/**
 * View - Home
 * --------------------
 * This is the home view
 *
 */
sap.ui.jsview('view.home', {

    getControllerName: function () {
        return 'view.home';
    },

    /**
     * Defines the content of the view
     * @param oController
     */
    createContent: function (/*oController*/) {

        var oNavCon = new sap.m.NavContainer( 'navContainerControl', {
            pages: [
                sap.ui.jsview( 'carrier.list' , 'view.carrier.list' ) ,
                sap.ui.jsview( 'carrier.details' , 'view.carrier.details')],
            initialPage: 'carrier.list'
        });

        return oNavCon;


    } } );