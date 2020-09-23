/**
 * script.js
 * Handles the background Javascript code for index.html
 * Created by: Kaylynn Diaz-Schott
 * Last Modified: 09/18/2020
 */

/**
 * Takes in the data from the form and stores that data in an object
 */
function handleData() {
    var userInfo = {
        fn: document.getElementById("fullname").value,
        ftitle: document.getElementById("ftitle").value,
        cellPhoneNum: document.getElementById("cell").value,
        directLine: document.getElementById("direct").value,
        address: '150 N Market St. Wichita, KS 67202',
        addressLink: 'https://www.google.com/maps/place/150+N+Market+St,+Wichita,+KS+67202/@37.6875767,-97.3388842,17z/data=!3m1!4b1!4m5!3m4!1s0x87bae3c213cd7f51:0x57ef5a084a7b960e!8m2!3d37.6875767!4d-97.3366955'
    }

    var multipleTitles = document.getElementsByClassName("fname")
    if (isEmpty(multipleTitles) == false) {
        var i;
        for (i = 0; i < multipleTitles.length; i++) {
            var temp = multipleTitles[i].value;
            var propName = "title" + i;
            userInfo[propName] = temp;

        }
    }
    generateSignature(userInfo)

}

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

/**
 * Generates the HTML signature and displays it in the textbox
 * 
 * @param {object} userInfo The object created from the form data 
 */
function generateSignature(userInfo) {
    var signature = `<br><br><table style="width:500px;font-size:10pt;font-family:Arial;" cellpadding="0" cellspacing="0"> <tbody style="width:100%;"> <tr> <td style="font-size:10pt;line-height:20px;font-family:Arial;width:514px;padding-bottom:10px;vertical-align:top;"valign="top" colspan="2"><b> <span style="font-size:10pt;font-family:Arial;color:#313e49;">${userInfo.fn}</span></b><br> ${userInfo.title} </b><br> <span style="font-size:10pt;font-family:Arial;color:#313e49;">Cell: <a href="tel:${userInfo.cellPhoneNum}" style="text-decoration:none;color:#313e49;">${userInfo.cellPhoneNum}</a> <span style="margin-left:15px;">Direct: <a href="tel:${userInfo.directLine}" style="text-decoration:none;color:#313e49;">${userInfo.directLine}</a></span> </span> </td> </tr> <tr> <td style="width: 80%;display:block;height: 7px;background: #cfd2d3;"></td> </tr> <tr> <td style="vertical-align:top; text-align:left;" valign="top"> <table cellpadding="0" cellspacing="0"> <tr> <td style="width: 100px; padding-top: 15px; padding-right: 15px;"> <a href="https://weigandcommercial.com/" target="_blank" style="text-decoration:none;color:#313e49;"> <img src="https://weigandcommercial.com/assets/smaller-logo.png" style="width:100px;"> </a> </td> <td style="width: 385px;"> <span style="font-size:10pt;font-family:Arial;color:#313e49;width:77%;line-height:20px;padding-top:15px;">J.P. Weigand & Sons, Inc. Commercial Division<br> <a href="${userInfo.addressLink}" target="_blank" style="text-decoration:none;color:#313e49;">${userInfo.address}</a><br><b> <a href="https://weigandcommercial.com/" target="_blank" style="text-decoration:none;color:#313e49;">WeigandCommercial.com</a></b> </span> </td> </tr> </table> <br> <span style="font-size:6pt;font-family:Arial;color:#313e49;width:77%;"> This email is intended for the use of the individual or entity to which it is addressed and may contain information that is privileged, confidential and exempt from disclosure under applicable law. If the reader of this email message is not the intended recipient, you are hereby notified that any dissemination, distribution or copying of this communication is prohibited. If you have received this email in error, please notify us immediately by telephone at 316-262-6400 and also indicate the sender's name. Thank you. </span> </td> </tr> </tbody></table><html xmlns:mso="urn:schemas-microsoft-com:office:office" xmlns:msdt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882"><head><!--[if gte mso 9]><xml><mso:CustomDocumentProperties><mso:_dlc_DocId msdt:dt="string">ZH5VYKZDD7K4-1937837267-2090</mso:_dlc_DocId><mso:_dlc_DocIdItemGuid msdt:dt="string">2667d998-d3ef-426d-a46d-fe855f85d653</mso:_dlc_DocIdItemGuid><mso:_dlc_DocIdUrl msdt:dt="string">https://weigandict.sharepoint.com/sites/WeigandITTeam/_layouts/15/DocIdRedir.aspx?ID=ZH5VYKZDD7K4-1937837267-2090, ZH5VYKZDD7K4-1937837267-2090</mso:_dlc_DocIdUrl></mso:CustomDocumentProperties></xml><![endif]--></head>`
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