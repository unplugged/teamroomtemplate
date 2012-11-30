function dateVal(DName){var thisForm = document.forms[0];var thisformname = document.forms[0].form.valuealertMsg1 = 'The date entry is not an acceptable format.\n\nYou can enter dates in the following formats: mmddyyyy, mm/dd/yyyy, or mm-dd-yyyy.';alertMsg2 = 'Months must be entered between the range of 01 (January) and 12 (December).';alertMsg3 = 'Days must be entered between the range of 01 and a maximum of 31 (depending on the month and year).'getDelim = '/'var inputStr = document.forms[0].elements(DName).value//convert hyphen delimiters to slasheswhile (inputStr.indexOf('-') != -1) 	{		getDelim = '-'		inputStr = replaceString(inputStr, '-', '/')	}var delim1 = inputStr.indexOf('/')	var delim2 = inputStr.lastIndexOf('/')if (delim1 != -1 && delim1 == delim2)  //if there is only one delimiter in the string	{ 	alert (alertMsg1) 	 thisForm.elements(DName).focus 	 return false	}//extract month, day, and year valuesif (delim1 != -1)	{	//there are delimiters	var month = parseInt(inputStr.substring(0,delim1),10)	var day = parseInt(inputStr.substring(delim1 + 1,delim2),10)	var year=parseInt(inputStr.substring(delim2 + 1, inputStr.length),10)	}	else	//there are no delimiters	{		var month = parseInt(inputStr.substring(0,2),10)	var day = parseInt(inputStr.substring(2,4),10)	var year = parseInt(inputStr.substring(4,inputStr.length),10)	}	//check whether there are any non-numeric charactersif ((isNaN(month) || isNaN(day) || isNaN(year)) && thisformname == 'Event' )	{		alert(alertMsg1) 		 thisForm.EventDate.focus 		 return false	 }	else if ((isNaN(month) || isNaN(day) || isNaN(year)) && thisformname == 'MainTopic'  && thisForm.DueDate.value != '') 	 { 	 	alert(alertMsg1)	 	 thisForm.DueDate.focus 	 	return false	 	 } 	 if (thisformname=='MainTopic' && thisForm.DueDate.value == ''){return true}	//validate month valueif (month < 1 || month > 12) 	{	alert(alertMsg2)	thisForm.elements(DName).focus()	return false	}		//validate day valueif (day < 1 || day > 31)	{	alert(alertMsg3)	thisForm.elements(DName).focus()	return false	}		//validate year valueif (year < 100)  		//e.g., value is two digits	{	if (year >= 30)		{		year += 1900				}	else 		{		year += 2000				}		}	thisForm.elements(DName).value = month + getDelim + day + getDelim + year	//this ensures that the year has 4 digitsif (!checkMonthLength(month,day))	{	thisForm.elements(DName).focus()	return false	}if (month == 2)	{	if (!checkLeapMonth(month,day,year))		{		thisForm.elements(DName).focus()		return false		}	}	}function checkMonthLength(month,day){var months = new Array(',','January','February','March','April','May','June','July','August','September','October','November','December')if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30)	{	alert(months[month] + ' has only 30 days.')	return false	}else if (day > 31)	{	alert(months[month] + ' has only 31 days.')	return false	}return true}function checkLeapMonth(month,day,year){if (year % 4 > 0 && day > 28)	{	alert('February of ' + year + ' has only 28 days.')	return false	}else if (day > 29)	{	alert('February of ' + year + ' has only 29 days.')	return false	}	return true	}function validate(){var msg;var msgflag;msgflag = 'false';if(document.forms[0].elements(DName).value == ''){	msg='Please enter the date of the milestone/event.';	msgflag='true';                document.forms[0].elements(DName).focus()	}if (dateVal() == false){return false} if(document.forms[0].EventSummary.value == ''){	msg='Please enter the name of the milestone/event.';	msgflag='true';                document.forms[0].EventSummary.focus()	} if(msgflag == 'true'){     alert(msg);}if(msgflag == 'false'){if( navigator.appVersion.indexOf("Mac") == 0 ){  document.forms[0].Body.value = document.applets.lnaBody.getText("text/html")}document.forms[0].submit()}}