
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


const money = {
    actual: {
        total: monitoring_sheet.getRange(`${actualColumn}36`).getValue(),
        school: {
            subtotal: monitoring_sheet.getRange(`${actualColumn}37`).getValue(),
            it: monitoring_sheet.getRange(`${actualColumn}38`).getValue(),
            english: monitoring_sheet.getRange(`${actualColumn}39`).getValue(),
        },
        online: {
            subtotal: monitoring_sheet.getRange(`${actualColumn}40`).getValue(),
            it: monitoring_sheet.getRange(`${actualColumn}41`).getValue(),
            english: monitoring_sheet.getRange(`${actualColumn}42`).getValue(),
        },
        oem: monitoring_sheet.getRange(`${actualColumn}43`).getValue(),
        offshore: monitoring_sheet.getRange(`${actualColumn}44`).getValue(),
        other: monitoring_sheet.getRange(`${actualColumn}45`).getValue(),
    },
    target: {
        total: monitoring_sheet.getRange(`${targetColumn}36`).getValue(),
        school: {
            subtotal: monitoring_sheet.getRange(`${targetColumn}37`).getValue(),
            it: monitoring_sheet.getRange(`${targetColumn}38`).getValue(),
            english: monitoring_sheet.getRange(`${targetColumn}39`).getValue(),
        },
        online: {
            subtotal: monitoring_sheet.getRange(`${targetColumn}40`).getValue(),
            it: monitoring_sheet.getRange(`${targetColumn}41`).getValue(),
            english: monitoring_sheet.getRange(`${targetColumn}42`).getValue(),
        },
        oem: monitoring_sheet.getRange(`${targetColumn}43`).getValue(),
        offshore: monitoring_sheet.getRange(`${targetColumn}44`).getValue(),
        other: monitoring_sheet.getRange(`${targetColumn}45`).getValue(),
    },
}
const count = {
    actual: {
        total: monitoring_sheet.getRange(`${actualColumn}46`).getValue(),
        school: {
            subtotal: monitoring_sheet.getRange(`${actualColumn}47`).getValue(),
            it: monitoring_sheet.getRange(`${actualColumn}48`).getValue(),
            english: monitoring_sheet.getRange(`${actualColumn}49`).getValue(),
        },
        online: {
            subtotal: monitoring_sheet.getRange(`${actualColumn}50`).getValue(),
            it: monitoring_sheet.getRange(`${actualColumn}51`).getValue(),
            english: monitoring_sheet.getRange(`${actualColumn}52`).getValue(),
        }
    },
    target: {
        total: monitoring_sheet.getRange(`${targetColumn}46`).getValue(),
        school: {
            subtotal: monitoring_sheet.getRange(`${targetColumn}47`).getValue(),
            it: monitoring_sheet.getRange(`${targetColumn}48`).getValue(),
            english: monitoring_sheet.getRange(`${targetColumn}49`).getValue(),
        },
        online: {
            subtotal: monitoring_sheet.getRange(`${targetColumn}50`).getValue(),
            it: monitoring_sheet.getRange(`${targetColumn}51`).getValue(),
            english: monitoring_sheet.getRange(`${targetColumn}52`).getValue(),
        }
    },
}

// function cleanNum() {
//     for(var key in obj) {

//     }
// }

// var MoneyActualTotal = monitoring_sheet.getRange(`${actualColumn}36`).getValue();

//   var MoneyActualSchoolSubtotal = monitoring_sheet.getRange(`${actualColumn}37`).getValue();
//   var MoneyActualSchoolIt = monitoring_sheet.getRange(`${actualColumn}38`).getValue();
//   var MoneyActualSchoolEnglish = monitoring_sheet.getRange(`${actualColumn}39`).getValue();

//   var MoneyActualOnlineSubtotal = monitoring_sheet.getRange(`${actualColumn}40`).getValue();
//   var MoneyActualOnlineIt = monitoring_sheet.getRange(`${actualColumn}41`).getValue();
//   var MoneyActualOnlineEnglish = monitoring_sheet.getRange(`${actualColumn}42`).getValue();
  
//   var MoneyActualOem = monitoring_sheet.getRange(`${actualColumn}43`).getValue();
//   var MoneyActualOffshore = monitoring_sheet.getRange(`${actualColumn}44`).getValue();
//   var MoneyActualOther = monitoring_sheet.getRange(`${actualColumn}45`).getValue();
  


//   // Money - Target 
//   var MoneyTargetTotal = monitoring_sheet.getRange(`${targetColumn}36`).getValue();

//   var MoneyTargetSchoolSubtotal = monitoring_sheet.getRange(`${targetColumn}37`).getValue();
//   var MoneyTargetSchoolIt = monitoring_sheet.getRange(`${targetColumn}38`).getValue();
//   var MoneyTargetSchoolEnglish = monitoring_sheet.getRange(`${targetColumn}39`).getValue();

//   var MoneyTargetOnlineSubtotal = monitoring_sheet.getRange(`${targetColumn}40`).getValue();
//   var MoneyTargetOnlineIt = monitoring_sheet.getRange(`${targetColumn}41`).getValue();
//   var MoneyTargetOnlineEnglish = monitoring_sheet.getRange(`${targetColumn}42`).getValue();
  
//   var MoneyTargetOem = monitoring_sheet.getRange(`${targetColumn}43`).getValue();
//   var MoneyTargetOffshore = monitoring_sheet.getRange(`${targetColumn}44`).getValue();
//   var MoneyTargetOther = monitoring_sheet.getRange(`${targetColumn}45`).getValue();
  
  
//   // Count - Actual
//   var CountActualTotal = monitoring_sheet.getRange(`${actualColumn}46`).getValue();

//   var CountActualSchoolSubtotal = monitoring_sheet.getRange(`${actualColumn}47`).getValue();
//   var CountActualSchoolIt = monitoring_sheet.getRange(`${actualColumn}48`).getValue();
//   var CountActualSchoolEnglish = monitoring_sheet.getRange(`${actualColumn}49`).getValue();

//   var CountActualOnlineSubtotal = monitoring_sheet.getRange(`${actualColumn}50`).getValue();
//   var CountActualOnlineIt = monitoring_sheet.getRange(`${actualColumn}51`).getValue();
//   var CountActualOnlineEnglish = monitoring_sheet.getRange(`${actualColumn}52`).getValue();
  
//   // Count - Target
//   var CountTargetTotal = monitoring_sheet.getRange(`${targetColumn}46`).getValue();

//   var CountTargetSchoolSubtotal = monitoring_sheet.getRange(`${targetColumn}47`).getValue();
//   var CountTargetSchoolIt = monitoring_sheet.getRange(`${targetColumn}48`).getValue();
//   var CountTargetSchoolEnglish = monitoring_sheet.getRange(`${targetColumn}49`).getValue();

//   var CountTargetOnlineSubtotal = monitoring_sheet.getRange(`${targetColumn}50`).getValue();
//   var CountTargetOnlineIt = monitoring_sheet.getRange(`${targetColumn}51`).getValue();
//   var CountTargetOnlineEnglish = monitoring_sheet.getRange(`${targetColumn}52`).getValue();

  

//   var CountActualSchoolSubtotal = monitoring_sheet.getRange(`${actualColumn}47`).getValue();
//   var CountActualSchoolIt = monitoring_sheet.getRange(`${actualColumn}48`).getValue();
//   var CountActualSchoolEnglish = monitoring_sheet.getRange(`${actualColumn}49`).getValue();

//   var CountActualOnlineSubtotal = monitoring_sheet.getRange(`${actualColumn}50`).getValue();
//   var CountActualOnlineIt = monitoring_sheet.getRange(`${actualColumn}51`).getValue();
//   var CountActualOnlineEnglish = monitoring_sheet.getRange(`${actualColumn}52`).getValue();


//   var CountTargetTotal = monitoring_sheet.getRange(`${targetColumn}46`).getValue();

//   var CountTargetSchoolSubtotal = monitoring_sheet.getRange(`${targetColumn}47`).getValue();
//   var CountTargetSchoolIt = monitoring_sheet.getRange(`${targetColumn}48`).getValue();
//   var CountTargetSchoolEnglish = monitoring_sheet.getRange(`${targetColumn}49`).getValue();

//   var CountTargetOnlineSubtotal = monitoring_sheet.getRange(`${targetColumn}50`).getValue();
//   var CountTargetOnlineIt = monitoring_sheet.getRange(`${targetColumn}51`).getValue();
//   var CountTargetOnlineEnglish = monitoring_sheet.getRange(`${targetColumn}52`).getValue();


var message = 
"```" + 
"【受注金額】" + "\n" +
"合計 : " + Math.floor(((money.actual.total)/1000)).toLocaleString() + " / "  + money.target.total + "\n" +
"  School : "  + money.actual.school.subtotal + " / "  + money.target.school.subtotal + "\n" +
"    IT : "  + money.actual.school.it + " / "  + money.target.school.it + "\n" +
"    English : "  + money.actual.school.english + " / "  + money.target.school.english + "\n" +
"  Online : "  + money.actual.online.subtotal + " / "  + money.target.online.subtotal + "\n" +
"    IT : "  + money.actual.online.it + " / "  + money.target.online.it + "\n" +
"    English : "  + money.actual.online.english + " / "  + money.target.online.english + "\n" +
"  OEM : "  + money.actual.oem + " / "  + money.target.oem + "\n" +
"  Offshore : "  + money.actual.offshore + " / "  + money.target.offshore + "\n" +
"  Other : " + money.actual.other + " / "  + money.target.other + "\n" +
"\n" +
"【受注件数】" + "\n" +
"合計 : " + count.actual.total + " / "  + count.target.total + "\n" +
"  School : "  + count.actual.school.subtotal + " / "  + count.target.school.subtotal + "\n" +
"    IT : "  + count.actual.school.it + " / "  + count.target.school.it + "\n" +
"    English : "  + count.actual.school.english + " / "  + count.target.school.english + "\n" +
"  Online : "  + count.actual.online.subtotal + " / "  + count.target.online.subtotal + "\n" +
"    IT : "  + count.actual.online.it + " / "  + count.target.online.it + "\n" +
"    English : "  + count.actual.online.english + " / "  + count.target.online.english + "\n" +
"```";



// ===========



let money = {
    actual: {
      total: 1200000,
      school: {
          subtotal: 12300000,
          it: 5600000
      },
    },
    target: {
      total: 6200000,
      school: {
          subtotal: 192300000,
          it: 7600000
      },
    }
  }
  
  
  function goodJobTakeruMoney() {
    for(key in money.actual) {
      let item = money.actual[key];
      if(typeof(item) === 'object') {
        console.log('This is object');
        for(key2 in item) {
          let item2 = item[key2];
          money.actual[key][key2] = (item2/1000).toLocaleString();
        }
      } else {
        money.actual[key] = (item/1000).toLocaleString();
        // console.log(money.actual[key])
      }
    }
    for(key in money.target) {
      let item = money.target[key];
      if(typeof(item) === 'object') {
        console.log('This is object');
        for(key2 in item) {
          let item2 = item[key2];
          money.target[key][key2] = (item2/1000).toLocaleString();
        }
      } else {
        money.target[key] = (item/1000).toLocaleString();
        // console.log(money.target[key])
      }
    }
    money = {
      actual: money.actual, 
      target: money.target
    }
    return money;
  }
  // const array = goodJobTakeruMoney();
  // money.actual = array[0];
  // money.target = array[1];
  // console.log('aaaaa', money.actual);
  // console.log('bbbbb', money.target);
  money = goodJobTakeruMoney();
  console.log(
    '====='
  )
  console.log(money)

  