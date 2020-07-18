
function myFunction(){
  
    var postUrl = 'https://hooks.slack.com/services/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';
    var username = 'Username';  // 通知時に表示されるユーザー名
    var icon = ':saiko2:';  // 通知時に表示されるアイコン
    // var ss = SpreadsheetApp.getActiveSpreadsheet("https://docs.google.com/spreadsheets/d/1hoz2RtWK5gl2ZHAFaBjNHb_PsVnEW82YLn22xwYbiNA/edit?folder=1agxBh4cxahGdy9KReKxJruXJoPjMcvMw&pli=1#gid=80902370");
    var message = "Hello World";
      var jsonData =
    {
       "username" : username,
       "icon_emoji": icon,
       "text" : message,
    };
    var payload = JSON.stringify(jsonData);
  
    var options =
    {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : payload
    };
  
    UrlFetchApp.fetch(postUrl, options);
  }

  var MoneyActualTotal = monitoring_sheet.getRange(`${actualColumn}36`).getValue();

  var MoneyActualSchoolSubtotal = monitoring_sheet.getRange(`${actualColumn}37`).getValue();
  var MoneyActualSchoolIt = monitoring_sheet.getRange(`${actualColumn}38`).getValue();
  var MoneyActualSchoolEnglish = monitoring_sheet.getRange(`${actualColumn}39`).getValue();

  var MoneyActualOnlineSubtotal = monitoring_sheet.getRange(`${actualColumn}40`).getValue();
  var MoneyActualOnlineIt = monitoring_sheet.getRange(`${actualColumn}41`).getValue();
  var MoneyActualOnlineEnglish = monitoring_sheet.getRange(`${actualColumn}42`).getValue();
  
  var MoneyActualOem = monitoring_sheet.getRange(`${actualColumn}43`).getValue();
  var MoneyActualOffshore = monitoring_sheet.getRange(`${actualColumn}44`).getValue();
  var MoneyActualOther = monitoring_sheet.getRange(`${actualColumn}45`).getValue();
  

  var MoneyTargetTotal = monitoring_sheet.getRange(`${targetColumn}36`).getValue();

  var MoneyTargetSchoolSubtotal = monitoring_sheet.getRange(`${targetColumn}37`).getValue();
  var MoneyTargetSchoolIt = monitoring_sheet.getRange(`${targetColumn}38`).getValue();
  var MoneyTargetSchoolEnglish = monitoring_sheet.getRange(`${targetColumn}39`).getValue();

  var MoneyTargetOnlineSubtotal = monitoring_sheet.getRange(`${targetColumn}40`).getValue();
  var MoneyTargetOnlineIt = monitoring_sheet.getRange(`${targetColumn}41`).getValue();
  var MoneyTargetOnlineEnglish = monitoring_sheet.getRange(`${targetColumn}42`).getValue();
  
  var MoneyTargetOem = monitoring_sheet.getRange(`${targetColumn}43`).getValue();
  var MoneyTargetOffshore = monitoring_sheet.getRange(`${targetColumn}44`).getValue();
  var MoneyTargetOther = monitoring_sheet.getRange(`${targetColumn}45`).getValue();
  