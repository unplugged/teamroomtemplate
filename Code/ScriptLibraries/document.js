function showHideFields(){
	var doctype = $(".doctype").val();
	if (doctype == "Action Item"){
		$(".actionitemtypeholder").show();
	}else{
		$(".actionitemtypeholder").hide();
	}
	if (doctype == "Meeting"){
		$(".nonmeetingtypeholder").hide();
		$(".meetingtypeholder").show();
	}else{
		$(".nonmeetingtypeholder").show();
		$(".meetingtypeholder").hide();
	}
	try{
		initiscroll();
	}catch(e){
		
	}
}