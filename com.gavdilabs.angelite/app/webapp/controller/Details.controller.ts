import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";
import JSONModel from "sap/ui/model/json/JSONModel";
import View from "sap/ui/core/mvc/View";
import GenericTile from "sap/m/GenericTile";
import Dialog from "sap/m/Dialog";
import VBox from "sap/m/VBox";
import Control from "sap/ui/core/Control";
import History from "sap/ui/core/routing/History";

/**
 * @namespace com.gavdilabs.ui5template.controller
 */
export default class Details extends BaseController {
	private formatter = formatter;
	private _oAppConfigModel: JSONModel;
	private _oTaffy: JSONModel;
	private _oView: View;
	private _oDialog: Dialog
	
	public onInit (){
		this._oAppConfigModel = this.getOwnerComponent().getModel("AppConfig") as JSONModel;
		this._oTaffy = this.getOwnerComponent().getModel("Taffy") as JSONModel;
		

		if(!this._oAppConfigModel.getProperty("/Data/Source")){
			this.onNavBack();
			return;
		}

		this._oAppConfigModel.setProperty("/TAFFY/questionId", this._oTaffy.getData().questionId);
		this._oAppConfigModel.setProperty("/TAFFY/Question", this._oTaffy.getData().Question);
		this._oAppConfigModel.setProperty("/TAFFY/answertype", this._oTaffy.getData().answertype);
		this._oAppConfigModel.setProperty("/TAFFY/questionId", this._oTaffy.getData().questionId);
		this._oAppConfigModel.setProperty("/TAFFY/path/", "/");
	}

	public onAfterRendering(){
		this.getRouter().getRoute("details").attachPatternMatched(this._onPatternMatched, this);

		
	}

	public onNavBack() {
		var oHistory = History.getInstance() as History;
          var sPreviousHash = oHistory.getPreviousHash();
          if (sPreviousHash !== undefined) {
            this.getRouter().navTo("main");
            //window.history.go(-1);
          } else {
            this.getRouter().navTo("main");
          }
		  this.onCloseSplitter();
		  this._resetModelData();
		  

	}

	public async onPressContinue(){
		var that = this;
		this._resetView();
		var prePath = this._oAppConfigModel.getProperty("/TAFFY/path/") ? this._oAppConfigModel.getProperty("/TAFFY/path/") : "";
		this._oAppConfigModel.setProperty("/TAFFY/path/", prePath + "/answers/"+ this._oAppConfigModel.getProperty("/Settings/iIndex")+ "/question/");
		var urlString = this._oAppConfigModel.getProperty("/TAFFY/path/").replace('//', '/')
		

		if(urlString.indexOf("question/") > 0 ){
			urlString = urlString.replaceAll("question/", "question/0/")
			urlString = urlString.replaceAll("/0/0/", "/0/");

		}
		this._oAppConfigModel.setProperty("/TAFFY/path/", urlString);
		
		
		await that._getActionData(this._oAppConfigModel.getProperty("/TAFFY/path/"));
		//that._setActionFragment("ActionContainer" , that._oAppConfigModel.getProperty("/Data/Source"));
		that._oAppConfigModel.setProperty("/Settings/showBusyMain", true);
		//await that._getActionData(that._oAppConfigModel.getProperty("/Data/URL"));
		
		
		that._oAppConfigModel.setProperty("/Settings/showBusyMain", false);
		that._oAppConfigModel.setProperty("/Settings>iIndex", 0);
	}

	public async onCloseSplitter() {
		this._oAppConfigModel.setProperty("/Settings/showBusyDetail", true);

		var oDefaultData = new JSONModel();
		await oDefaultData.loadData(this.getResourcePath("model/AppConfig.json"));
		this._oAppConfigModel.setProperty("/NewJobDefault", oDefaultData.getData().NewJobDefault);
		this._oAppConfigModel.setProperty("/Settings/leftPaneSize", oDefaultData.getData().Settings.leftPaneSize);
		this._oAppConfigModel.setProperty("/Settings/detailVisible", oDefaultData.getData().Settings.detailVisible);
		this._oAppConfigModel.setProperty("/Settings/showBusyDetail", oDefaultData.getData().Settings.showBusyDetail);
		this._oAppConfigModel.setProperty("/Settings/isEditMode", oDefaultData.getData().Settings.isEditMode);
		this._oAppConfigModel.setProperty("/Data/SplitterHeaderText", oDefaultData.getData().Data.SplitterHeaderText);
		this._oAppConfigModel.setProperty("/Data/SplitterAction", oDefaultData.getData().Data.SplitterAction);
		
	}

	private _onPatternMatched(){
		var that = this;
		var isReady = false as boolean;
		this._oView = this.getView() as View;
		this._oView.addStyleClass(this.getOwnerComponent().getContentDensityClass());
		
		this._oAppConfigModel.setProperty("/Settings/showBusyMain", true);
		setTimeout( async () => {
			//oUIContainer.setBusyIndicatorDelay(0).setBusy(true);
			if(that._oAppConfigModel.getProperty("/Data/URL") && that._oAppConfigModel.getProperty("/Data/Source")  !== "sfGroupsByUser"){
				that._oAppConfigModel.setProperty("/Settings/showBusyMain", true);
				await that._getActionData(that._oAppConfigModel.getProperty("/Data/URL"));
				that._oAppConfigModel.setProperty("/Settings/showBusyMain", false);
			}
			//const oUIContainer = that._oView.byId("ActionContainer") as VBox;
			isReady = await that._setActionFragment("ActionContainer" , that._oAppConfigModel.getProperty("/Data/Source"));
			if(!isReady){
				MessageBox.error("No Applicable UI could be found. Redirecting to Bifrost main dashboard")
				return;
			}
			//oUIContainer.setBusy(false);
			that._oAppConfigModel.setProperty("/Settings/showBusyMain", false);
		}, 200);
		
		
	}

	private async _setActionFragment(Container : string,  DataSource : string) {
		var oActionContainer = this._oView.byId(Container) as VBox;
		var oContent : Control;
		if(oActionContainer.getItems().length > 0){
			oContent = oActionContainer.getItems()[0];
            oContent.destroy();
            oContent = null;
		}
		var step = this._oAppConfigModel.getProperty("/TAFFY/answertype");
		//DataSource = 
		switch (step) {
			case "checkbox":
				oContent = await this.loadFragment({
					name: "com.gavdilabs.ui5template.view.data.checkbox"
				});
				break;
			case "admin":
				oContent = await this.loadFragment({
					name: "com.gavdilabs.ui5template.view.fragments.stepAdmin"
				});
				break;
			case "radio":
				oContent = await this.loadFragment({
					name: "com.gavdilabs.ui5template.view.data.radio"
				});
				break;
			case "sfGroupsByUser":
				oContent = await this.loadFragment({
					name: "com.gavdilabs.ui5template.view.fragments.SfGroupsByUser"
				});
				break;

			default:
				break;
		}
		
		oActionContainer.addItem(oContent);
		if(oActionContainer.getItems().length > 0){
			//(oActionContainer.getParent() as Panel).setExpanded(true) 		
			return true;
		} else {
			return false;
		}
		
	}

	private _getActionData(urlString : string){
		if(urlString && urlString !== "/0"){
			const that = this;
			const prePath = this.getResourcePath("") as string;
			
			var oData = this._oTaffy.getProperty(urlString);
			
			if(oData && (oData?.questionId || oData[0].questionId )){
				oData = oData.questionId ? oData : oData[0]
				this._oAppConfigModel.setProperty("/TAFFY/questionId", oData.questionId);
				this._oAppConfigModel.setProperty("/TAFFY/Question", oData.Question);
				this._oAppConfigModel.setProperty("/TAFFY/answertype", oData.answertype);
				this._oAppConfigModel.setProperty("/TAFFY/questionId", oData.questionId);
			} else {
				var oData = this._oTaffy.getProperty(urlString.slice(0,-11))
				if(oData){
					oData = oData.final ? oData : oData[0];
					this._oAppConfigModel.setProperty("/TAFFY/finalAnswer", oData.final.answer);
					this._oAppConfigModel.setProperty("/TAFFY/finalLink", oData.final.link);
					this._oAppConfigModel.setProperty("/Settings/detailVisible", true);
					this._oAppConfigModel.setProperty("/Settings/leftPaneSize", "0%");
				}
			}
			

			
		} else {
			var oData = this._oTaffy.getProperty("/");
			this._oAppConfigModel.setProperty("/TAFFY/questionId", oData.questionId);
			this._oAppConfigModel.setProperty("/TAFFY/Question", oData.Question);
			this._oAppConfigModel.setProperty("/TAFFY/answertype", oData.answertype);
			this._oAppConfigModel.setProperty("/TAFFY/questionId", oData.questionId);
		}
		//this._oAppConfigModel.setProperty("/TAFFY/answertype", oData.answertype);
		var step = this._oAppConfigModel.getProperty("/TAFFY/questionId")


		switch (step) {
			case "1.1":
				if(this._oTaffy.getData().answers.length > 0){
					var  currAnswers = [];
					for (var i = 0; i < this._oTaffy.getData().answers.length; i++) {
						currAnswers.push({
							"id" : this._oTaffy.getData().answers[i].answerId,
							"text" :  this._oTaffy.getData().answers[i].answer
						})

					}
					this._oAppConfigModel.setProperty("/TAFFY/answers", currAnswers);	
				}
				break;

			default:
				if(oData.answers.length > 0){
					var  currAnswers = [];
					for (var i = 0; i < oData.answers.length; i++) {
						currAnswers.push({
							"id" : oData.answers[i].answerId,
							"text" :  oData.answers[i].answer
						})

					}
					this._oAppConfigModel.setProperty("/TAFFY/answers", currAnswers);	
				}
				break;
		}
	}

	private _resetView(SourceID: string, DisplayText : string, URL: string){
		this._oAppConfigModel.setProperty("/Data/Source", SourceID);
		this._oAppConfigModel.setProperty("/Data/DisplayText", DisplayText);
		this._oAppConfigModel.setProperty("/Data/URL", URL);

		this._onPatternMatched();

	}

	private async _resetModelData(){
		var oDefaultData = new JSONModel();
		await oDefaultData.loadData(this.getResourcePath("model/AppConfig.json"));
		this._oAppConfigModel.setProperty("/Data", oDefaultData.getData().Data);
		this._oAppConfigModel.setProperty("/TAFFY", oDefaultData.getData().TAFFY);

	}

}
