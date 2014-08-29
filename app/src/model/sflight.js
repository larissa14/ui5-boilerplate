jQuery.sap.declare( 'model.sflight' );

model.sflight = {
getModel: function() {
    var oModel = new sap.ui.model.odata.ODataModel( 'http://localhost/proxy/sap/opu/odata/sap/zsflight_tgdvosta_srv', true, '', '', '', true, false );
    return oModel;
}};
