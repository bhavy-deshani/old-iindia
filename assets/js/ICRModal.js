/*
Samples
--------------------------------------------------------------------------------------
ICRConfirm("Are you sure want to submit the details<br>Please say \"Yes\" or \"No\"");
ICRAlert("Invalid Inputs");
ICRModalLoader("Please wait loading in progress...<br/> ");
--------------------------------------------------------------------------------------
*/
var ICRMCOT="";
ICRMCOT+="<style>";
ICRMCOT+=".ICRmodal {display: none;position: fixed;  z-index: 10000;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.4); }";
//ICRMCOT+=".ICRmodal {display: none;position: fixed;  z-index: 10000;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0); opacity:1; }";
ICRMCOT+=".ICRmodal-content {background-color: #fefefe;margin: 0% auto;   padding: 0px;border: 1px solid #888;width: 100%; border-radius:10px; position:relative; -webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}";
ICRMCOT+=".ICRModalTitle{background-color: #d9d9d9;background-image: linear-gradient(0deg, #d9d9d9 0%, #f6f2f2 74%); border-top-left-radius:5px;border-top-right-radius:5px; min-height:25px; font-family:calibri;}";
ICRMCOT+=".ICRclose {color: #aaa;font-size: 28px;font-weight: bold;}";
ICRMCOT+=".ICRclose:hover,.close:focus{color: black;text-decoration: none;cursor: pointer;}";
ICRMCOT+=".ICRMessageTitle{font-size:23px; font-family:calibri; text-align:center;  font-weight:bold; overflow:auto; border-bottom:1px solid #EEEEEE; padding:5px;}";
ICRMCOT+=".ICRMessageContent{font-size:18px;font-family:calibri; text-align:center; line-height:22px; overflow:auto; border:0px solid #000000; padding:5px;}";
ICRMCOT+=".ICRModalCloseButton{cursor:pointer; min-width:100px; color: #FFFFFF !important;font-size: 14px;text-shadow: 1px 1px 0px #7CACDE;box-shadow: 1px 1px 1px #BEE2F9;padding: 10px 25px;border-radius: 10px;border: 1px solid #3866A3;background:#106FFF;}";
ICRMCOT+=".ICRModalOkButton{cursor:pointer; min-width:100px;  color: #FFFFFF !important;font-size: 14px;text-shadow: 1px 1px 0px #7CACDE;box-shadow: 1px 1px 1px #BEE2F9;padding: 10px 25px;border-radius: 10px;border: 1px solid #3866A3;background:#106FFF;}";
ICRMCOT+=".ICRModalCancelButton{cursor:pointer; min-width:100px; color: #FFFFFF !important;font-size: 14px;text-shadow: 1px 1px 0px #7CACDE;box-shadow: 1px 1px 1px #BEE2F9;padding: 10px 25px;border-radius: 10px;border: 1px solid #3866A3;background:#106FFF; margin-right:100px;}";
ICRMCOT+=".icrmessagemodal-ellipsis {display: inline-block;position: relative;width: 80px;height: 80px;}";
ICRMCOT+=".icrmessagemodal-ellipsis div {position: absolute;top: 33px;width: 13px;height: 13px;border-radius: 50%;background: #106FFF;animation-timing-function: cubic-bezier(0, 1, 1, 0);}";
ICRMCOT+=".icrmessagemodal-ellipsis div:nth-child(1) {left: 8px;animation: icrmessagemodal-ellipsis1 0.6s infinite;}";
ICRMCOT+=".icrmessagemodal-ellipsis div:nth-child(2) {left: 8px;animation: icrmessagemodal-ellipsis2 0.6s infinite;}";
ICRMCOT+=".icrmessagemodal-ellipsis div:nth-child(3) {left: 32px;animation: icrmessagemodal-ellipsis2 0.6s infinite;}";
ICRMCOT+=".icrmessagemodal-ellipsis div:nth-child(4) {left: 56px;animation: icrmessagemodal-ellipsis3 0.6s infinite;}";
ICRMCOT+="@keyframes icrmessagemodal-ellipsis1 {0% {transform: scale(0);}100% {transform: scale(1);}}";
ICRMCOT+="@keyframes icrmessagemodal-ellipsis3 {0% {transform: scale(1);}100% {transform: scale(0);}}";
ICRMCOT+="@keyframes icrmessagemodal-ellipsis2 {0% {transform: translate(0, 0);}100% {transform: translate(24px, 0);}}";
ICRMCOT+=".ICRModalScroll::-webkit-scrollbar-track{-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);border-radius: 10px;background-color: #F5F5F5;}";
ICRMCOT+=".ICRModalScroll::-webkit-scrollbar{width: 12px;background-color: #F5F5F5;}";
ICRMCOT+=".ICRModalScroll::-webkit-scrollbar-thumb{border-radius: 10px;-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);background-color: #555;}";
ICRMCOT+="</style>";
ICRMCOT+="<div id=\"ICRMessageModal\" class=\"ICRmodal\">";
ICRMCOT+="<div class=\"ICRmodal-content\">";
//ICRMCOT+="<div class=\"ICRModalTitle\"><span style='padding-left:10px; line-height:25px;'>INTEGRATED</span><span style='padding-right:10px; float:right; line-height:25px;'>X</div>";
ICRMCOT+="<div id=\"ICRMessageTitle\" class=\"ICRMessageTitle\">INTEGRATED</div>";
ICRMCOT+="<div id=\"ICRMessageContent\" class=\"ICRMessageContent ICRModalScroll\"></div>";
ICRMCOT+="<div class=\"ICRButtonHolder\" style=\"width:90%; border:0PX SOLID #999999\">";
ICRMCOT+="<div class=\"ICRModalOK\" style='text-align:center; position:absolute; bottom:0px; border:0px solid #000000; width:100%; margin-bottom:10px;'><input type=\"button\" value=\"Close\" class='ICRModalCloseButton' runat=\"server\" id=\"ICRMessageCloseButton\" style=\"display:none\" /></div>";
ICRMCOT+="<div class=\"ICRModalOKCAN\" style='text-align:center; position:absolute; bottom:0px; border:0px solid #000000; width:100%; margin-bottom:10px;'>"
	ICRMCOT+="<input type=\"button\" value=\"Cancel\" class='ICRModalCancelButton' id=\"ICRMessageCancelButton\" style=\"display:none;\" />";
	ICRMCOT+="<input type=\"button\" value=\"OK\" class='ICRModalOkButton' id=\"ICRModalOkButton\" style=\"display:none;\" />";
ICRMCOT+="</div>";
ICRMCOT+="</div></div></div>";
$("#ICRMessageModal").remove();
$(document.body).append(ICRMCOT)
/*
const ICRModalQuery480 = window.matchMedia('(max-width: 480px)');
const ICRModalQuery800 = window.matchMedia('(max-width: 800px)');
const ICRModalQuery1024 = window.matchMedia('(max-width: 1024px)');
const ICRModalQuery1280 = window.matchMedia('(max-width: 1280px)');
const ICRModalQuery1366 = window.matchMedia('(max-width: 1366px)');
*/

var ICRModalQuery480 = window.matchMedia('(max-width: 480px)');
var ICRModalQuery800 = window.matchMedia('(max-width: 800px)');
var ICRModalQuery1024 = window.matchMedia('(max-width: 1024px)');
var ICRModalQuery1280 = window.matchMedia('(max-width: 1280px)');
var ICRModalQuery1366 = window.matchMedia('(max-width: 1366px)');

$("#ICRMessageCloseButton,#ICRModalOkButton,#ICRMessageCancelButton").click(function ()
{
	$("#ICRMessageContent").html("");
	$("#ICRMessageModal").fadeOut(100);
	$("body").css("overflow", "visible");
});

function ICRModalLoader(Message)
{
	$(".ICRmodal-content").css({"width":ICRMessageLoaderResizer()});
	if (parseInt($(".ICRmodal-content").css("height").replace("px",""),10)>200)
    {
        $(".ICRmodal-content").css({"height":"200px","overflow":"hidden", "margin-top":$(window).height()/3});
    }
    $(".ICRmodal-content").css({"min-height":"200px", "margin-top":$(window).height()/3});
	
	$("#ICRMessageModal").css("display", "block");
	$("#ICRMessageContent").html("<h3 style'color:#006699'>" + Message + "</h3><div class=\"icrmessagemodal-ellipsis\"><div></div><div></div><div></div><div></div></div>");
	$("#ICRMessageCloseButton").hide();
	$("body").css("overflow", "hidden");
}

function ICRInfoModal(Message)
{
	//alert(VH/4);
	$(".ICRmodal-content").css({"width":ICRMessageInfoResizer("W"),"height":ICRMessageInfoResizer("H"), "margin-top":VH});
	var VH = $(window).height()-$(".ICRmodal-content").height();
	$(".ICRmodal-content").css({"height":"500px","overflow":"auto", "margin-top":$(window).height()/6});
	
	
	$("#ICRMessageModal").css("display", "block");
	$("#ICRMessageContent").css({"height":ICRMessageInfoResizer("H")-$(".ICRModalOK").height(),"overflow":"auto","overflow":"auto"});
	$("#ICRMessageContent").html(Message);
	$("#ICRMessageCloseButton").show();
	$("body").css("overflow", "hidden");
}

function ICRInfoModalV2(Message)
{
	//alert(VH/4);
	$(".ICRmodal-content").css({"width":ICRMessageInfoResizer("W"),"height":ICRMessageInfoResizer("H"), "margin-top":VH});
	var VH = $(window).height()-$(".ICRmodal-content").height();
	$(".ICRmodal-content").css({"height":"500px","overflow":"auto", "margin-top":$(window).height()/6});
	$("#ICRMessageModal").css("display", "block");
	$("#ICRMessageContent").css({"height":ICRMessageInfoResizer("H")-$(".ICRModalOK").height(),"overflow":"auto","border":"0px solid #000000"});
	$("#ICRMessageContent").html(Message);
	$("#ICRMessageCloseButton").show();

    $(".ICRMessageTitle").css({"position":"sticky","top":"0px","background":"#FFFFFF"});
    $(".ICRButtonHolder").css({"position":"sticky","bottom":"0px","background":"#FFFFFF"});
    //$(".ICRButtonHolder").css({"position":"inline-block", "bottom":"0px"});
    //ICRMessageTitle

	$("body").css("overflow", "hidden");
}

function ICRAlert(Message)
{
	
    $(document).prop('disabled',true);
    $("#ICRModalOkButton").hide();
	$("#ICRMessageCancelButton").hide();

    $(".ICRmodal-content").css({"width":ICRMessageDialogResizer()});
	$(".ICRmodal-content").css({"height":"200px","overflow":"hidden", "margin-top":$(window).height()/6});
	
	$("#ICRMessageModal").fadeIn(100);
	$("#ICRMessageContent").html(Message);
	$("#ICRMessageCloseButton").show();
	$("body").css("overflow", "hidden");
}

function ICRAlert(Message,element,action)
{
	
    $(document).prop('disabled',true);
    $("#ICRModalOkButton").hide();
	$("#ICRMessageCancelButton").hide();

    $(".ICRmodal-content").css({"width":ICRMessageDialogResizer()});
	$(".ICRmodal-content").css({"height":"200px","overflow":"hidden", "margin-top":$(window).height()/6});
	
	$("#ICRMessageModal").fadeIn(100);
	$("#ICRMessageContent").html(Message);
	$("#ICRMessageCloseButton").show();
	$("body").css("overflow", "hidden");

    $("#ICRMessageCloseButton").click(function(){
        $("#ICRMessageContent").html("");
	    $("#ICRMessageModal").fadeOut(100);
	    $("body").css("overflow", "visible");
        eval("$(\"#"+element+"\")."+action);
    });
     
}

function ICRConfirm(Message)
{
	$("#ICRMessageCloseButton").hide();
    $(".ICRmodal-content").css({"width":ICRMessageDialogResizer()});
	$(".ICRmodal-content").css({"height":"200px","overflow":"hidden", "margin-top":$(window).height()/6});
	$("#ICRMessageModal").fadeIn(100);
	$("#ICRMessageContent").html(Message);
	$("#ICRModalOkButton").show();
	$("#ICRMessageCancelButton").show();
	$("body").css("overflow", "hidden");
}

function CloseICRModal(Message)
{
	if (Message == "")
	{
		$("#ICRMessageModal").fadeOut(100);
		$("#ICRMessageContent").html("");
		$("body").css("overflow", "visible");
	}
	else
	{
		$("#ICRMessageModal").fadeIn(100);
		$("#ICRMessageModal").css('z-index', 300000);
		$("#ICRMessageContent").html(Message);
		$("#ICRMessageCloseButton").show();
	}
}

function ICRMessageDialogResizer()
{
	var WH=$(window).height();
	var EIWidth=$(window).width()/3;
	if (ICRModalQuery480.matches) {
		EIWidth=$(window).width()/1.15;
	}
	else if (ICRModalQuery800.matches) {
		EIWidth=$(window).width()/2;
	}
	else if ((ICRModalQuery1024.matches) || (ICRModalQuery1280.matches)  || (ICRModalQuery1366.matches))  {
		EIWidth=$(window).width()/3;
	}
	else
	{
		EIWidth=$(window).width()/3;
	}
	return EIWidth;
}
function ICRMessageLoaderResizer()
{
	var WH=$(window).height();
	var EIWidth=$(window).width()/3;
	if (ICRModalQuery480.matches) {
		EIWidth=$(window).width()/1.15;
	}
	else if (ICRModalQuery800.matches) {
		EIWidth=$(window).width()/2;
	}
	else if ((ICRModalQuery1024.matches) || (ICRModalQuery1280.matches)  || (ICRModalQuery1366.matches))  {
		EIWidth=$(window).width()/2;
	}
	else
	{
		EIWidth=$(window).width()/2;
	}
	return EIWidth;
}
function ICRMessageInfoResizer(RSIN)
{
	var EIWidth="";
	var EIHeight="";
	if (RSIN=="H")
	{
		var WH=$(window).height();
		if (ICRModalQuery480.matches) {
			EIHeight=WH/1.15;
		}
		else if (ICRModalQuery800.matches) {
			EIHeight=WH/2;
		}
		else if ((ICRModalQuery1024.matches) || (ICRModalQuery1280.matches)  || (ICRModalQuery1366.matches))  {
			EIHeight=WH/2;
		}
		else
		{
			EIHeight=WH/2;
		}
		return EIHeight;
	}
	if (RSIN=="W")
	{
		var WW=$(window).width();
		if (ICRModalQuery480.matches) {
			EIWidth=WW/1.15;
		}
		else if (ICRModalQuery800.matches) {
			EIWidth=WW/2;
		}
		else if ((ICRModalQuery1024.matches) || (ICRModalQuery1280.matches)  || (ICRModalQuery1366.matches))  {
			EIWidth=WW/2;
		}
		else
		{
			EIWidth=$(window).width()/2;
		}
		return EIWidth;
	}
}