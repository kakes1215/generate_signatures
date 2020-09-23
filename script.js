/**
 * script.js
 * Handles the background Javascript code for index.html
 * Created by: Kaylynn Diaz-Schott
 * Last Modified: 09/23/2020
 */

/**
 * Takes in the data from the form and stores that data in an object
 */
function handleData() {

    var userInfo = {
        fn: document.getElementById("fullname").value.toUpperCase(),
        ftitle: document.getElementById("ftitle").value,
        cellPhoneNum: document.getElementById("cell").value,
        directLine: document.getElementById("direct").value,
    }

    var multipleTitles = document.getElementsByClassName("fname")
    var otherTitles = [];
    for (i = 0; i < multipleTitles.length; i++) { otherTitles[i] = multipleTitles[i].value; }
    generateSignature(userInfo, otherTitles)

}

/**
 * Generates the HTML signature and displays it in the textbox
 * 
 * @param {object} userInfo The object created from the form data 
 */
function generateSignature(userInfo, otherTitles) {
    var beg = `<table style="width:500px;font-size:10pt;font-family:Arial;" cellpadding="0" cellspacing="0"> <tbody style="width:100%;"> <tr> <td style="font-size:10pt;line-height:20px;font-family:Arial;width:514px;padding-bottom:10px;vertical-align:top;" valign="top" colspan="2"><b> <span style="font-size:10pt;font-family:Arial;color:#313e49;">${userInfo.fn}</span></b><br> <span style="font-size:10pt;font-family:Arial;color:#313e49;"><i>${userInfo.ftitle}</i></span><br>`
    var titlesString = ""
    if (otherTitles.length != 0) {
        var i;
        var temp = " ";
        for (i = 0; i < otherTitles.length; i++) {
            temp = `${temp}</b><span style="font-size:10pt;font-family:Arial;color:#313e49;"><i>${otherTitles[i]}</i></span></b><br>`
        }
        titlesString = temp;
    }
    var end = `<span style="font-size:10pt;font-family:Arial;color:#313e49;">Cell: <a href="tel:${userInfo.cellPhoneNum}" style="text-decoration:none;color:#313e49;">${userInfo.cellPhoneNum}</a> <span style="margin-left:15px;">Direct: <a href="tel:${userInfo.directLine}" style="text-decoration:none;color:#313e49;">${userInfo.directLine}</a></span></span></td> </tr> <tr> <td style="width: 80%;display:block;height: 7px;background: #cfd2d3;"></td> </tr> <tr> <td style="vertical-align:top; text-align:left;" valign="top"> <table cellpadding="0" cellspacing="0"> <tr> <td style="width: 100px; padding-top: 15px; padding-right: 15px;"> <a href="https://weigandcommercial.com/" target="_blank" style="text-decoration:none;color:#313e49;"><img src="https://weigandcommercial.com/assets/smaller-logo.png" style="width:100px;"></a> </td> <td style="width: 385px;"> <span style="font-size:10pt;font-family:Arial;color:#313e49;width:77%;line-height:20px;padding-top:15px;">J.P. Weigand & Sons, Inc. Commercial Division<br><a href="https://www.google.com/maps/dir/37.6732192,-97.3840738/6530+E+13th+St+N,+Wichita,+KS+67206/@37.6906976,-97.3946774,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x87bafcd422ff0e8f:0xad2e3b2b559c9a85!2m2!1d-97.2604391!2d37.7088053" target="_blank" style="text-decoration:none;color:#313e49;">6530 E. 13th St. N. Wichita, KS 67206</a><br><b><a href="https://weigandcommercial.com/" target="_blank" style="text-decoration:none;color:#313e49;">WeigandCommercial.com</a></b></span> </td> </tr> </table> </td> </tr> </tbody></table><html xmlns:mso="urn:schemas-microsoft-com:office:office" xmlns:msdt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882"><head><!--[if gte mso 9]><xml><mso:CustomDocumentProperties><mso:_dlc_DocId msdt:dt="string">ZH5VYKZDD7K4-1937837267-2168</mso:_dlc_DocId><mso:_dlc_DocIdItemGuid msdt:dt="string">dbf16402-497a-4b26-832d-98ba3b949a57</mso:_dlc_DocIdItemGuid><mso:_dlc_DocIdUrl msdt:dt="string">https://weigandict.sharepoint.com/sites/WeigandITTeam/_layouts/15/DocIdRedir.aspx?ID=ZH5VYKZDD7K4-1937837267-2168, ZH5VYKZDD7K4-1937837267-2168</mso:_dlc_DocIdUrl><mso:display_urn_x003a_schemas-microsoft-com_x003a_office_x003a_office_x0023_Editor msdt:dt="string">Kaylynn Diaz-Schott</mso:display_urn_x003a_schemas-microsoft-com_x003a_office_x003a_office_x0023_Editor><mso:xd_Signature msdt:dt="string"></mso:xd_Signature><mso:Order msdt:dt="string">216800.000000000</mso:Order><mso:ComplianceAssetId msdt:dt="string"></mso:ComplianceAssetId><mso:TemplateUrl msdt:dt="string"></mso:TemplateUrl><mso:xd_ProgID msdt:dt="string"></mso:xd_ProgID><mso:display_urn_x003a_schemas-microsoft-com_x003a_office_x003a_office_x0023_Author msdt:dt="string">Kaylynn Diaz-Schott</mso:display_urn_x003a_schemas-microsoft-com_x003a_office_x003a_office_x0023_Author><mso:ContentTypeId msdt:dt="string">0x0101007625530775FB7A4DB3E63512A4151FB6</mso:ContentTypeId><mso:_SourceUrl msdt:dt="string"></mso:_SourceUrl><mso:_SharedFileIndex msdt:dt="string"></mso:_SharedFileIndex></mso:CustomDocumentProperties></xml><![endif]--><title></title></head> `
    var signature = beg + titlesString + end;
    document.getElementById("html-code").value = signature;
}

/**
 * Handles the download button
 * @param {string} filename The name of the file
 * @param {string} text The HTML code that will be written to the file 
 */
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
}

/**
 * Initiates the Download 
 */
function startDownload() {
    var text = document.getElementById("html-code").value;
    var filename = "EmailSignature.html";

    download(filename, text);

}

/**
 * Selects and then copies the HTML code to the user's clipboard
 */
function copyCode() {
    var htmlCode = document.getElementById("html-code")
    htmlCode.select();
    document.execCommand("copy")
    alert("Code was copied to your clipboard")

}

/**
 * A function to determine if the pressed key is an integer
 * 
 * @param {*} evt 
 */

function numberPressed(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 36 || charCode > 40)) {
        return false;
    }
    return true;
}

/**
 * A function to format text to look like a phone number
 * @param {*} input 
 */
function phoneFormat(input) {
    // Strip all characters from the input except digits
    input = input.replace(/\D/g, '');

    // Trim the remaining input to ten characters, to preserve phone number format
    input = input.substring(0, 10);

    // Based upon the length of the string, we add formatting as necessary
    var size = input.length;
    if (size == 0) {
        input = input;
    } else if (size < 4) {
        input = input;
    } else if (size < 7) {
        input = input.substring(0, 3) + ' - ' + input.substring(3, 6);
    } else {
        input = input.substring(0, 3) + ' - ' + input.substring(3, 6) + ' - ' + input.substring(6, 10);
    }
    return input;
}