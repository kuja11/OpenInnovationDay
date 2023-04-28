import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";
import JSONModel from "sap/ui/model/json/JSONModel";
import View from "sap/ui/core/mvc/View";
import Event from "sap/ui/base/Event";
import GenericTile from "sap/m/GenericTile";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace com.gavdilabs.ui5template.controller
 */
export default class Main extends BaseController {
	private formatter = formatter;
	private _oAppConfigModel: JSONModel;
	private _oView: View;

	public onInit (){
		this._oAppConfigModel = this.getOwnerComponent().getModel("AppConfig") as JSONModel;
		this._oView = this.getView() as View;
		this._oView.addStyleClass(this.getOwnerComponent().getContentDensityClass());
	}

	onAfterRendering(){
		//this._oView.byId("idMainInfo").focus();
	}

	public async onPressTile(oEvent : Event){
		const oTile = oEvent.getSource() as GenericTile;
		var sId = oTile.getId() as String;
		sId = sId.indexOf("__component0---main") === 0 ? sId.split("__component0---main--")[1] : sId.split(this.getView()._sOwnerId)[1]?.split('---main--')[1] ? sId.split(this.getView()._sOwnerId)[1]?.split('---main--')[1] : sId;

		switch (sId) {
			case "taffy":
					this._oAppConfigModel.setProperty("/Data/Source", sId);
					this._oAppConfigModel.setProperty("/Data/DisplayText", "TAFFY");
					this._oAppConfigModel.setProperty("/Data/URL", "/0");
					this.getOwnerComponent().getRouter().navTo("details");
				break;
			case "admin":
					this._oAppConfigModel.setProperty("/Data/Source", sId);
					this._oAppConfigModel.setProperty("/Data/DisplayText", "Admin");
					this._oAppConfigModel.setProperty("/Data/URL", "/admin");
					this.getOwnerComponent().getRouter().navTo("details");
				break;	
			default:
				MessageToast.show("Not implemented yet! Try another one");
				break;
		}
	}

}
