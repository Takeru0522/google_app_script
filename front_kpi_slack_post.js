// FrontのKPIを毎日投稿するGAS

// 毎日0時にsetTriggerが実行される
// 平日（月〜金）ならmyFunction を指定した時間に実行
// 休日（土日）なら何も行わない
function setTrigger(){
    const day = new Date().getDay();
    
    // 平日のみ myFunction を実行
    if(day !== 6 && day !== 0) {
      const time = new Date();
      time.setHours(07);
      time.setMinutes(59);
      ScriptApp.newTrigger('myFunction').timeBased().at(time).create();
    }  
  }
  // トリガーを削除する
  function delTrigger() {
    const triggers = ScriptApp.getProjectTriggers();
    for(const trigger of triggers){
      if(trigger.getHandlerFunction() == "myFunction"){
        ScriptApp.deleteTrigger(trigger);
      }
    } 
  }
  function myFunction(){
    // #kpi-report
    var postUrl = 'https://hooks.slack.com/services/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';
    // #test_anything （テスト用Slackチャンネル）
    // var postUrl = 'https://hooks.slack.com/services/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';
    var username = 'Front Team KPI 2020';  // 通知時に表示されるユーザー名
    var icon = ':cat-on-keyboard:';  // 通知時に表示されるアイコン
    var ss = SpreadsheetApp.openById('1hoz2RtWK5gl2ZHAFaBjNHb_PsVnEW82YLn22xwYbiNA');
    
    
    // シートの取得
    var monitoring_sheet = ss.getSheetByName('新Monitoring Sheet');
    // シートの名前取得（使わないけど）
    var monitoring_sheet_name = monitoring_sheet.getName();
    
    // 月毎に取得する列を決める
    // 0~11の数が入る（1月なら0）
    var d = new Date(); 
    var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var currentMonth = months[d.getMonth()];
    var getColumns = {
      '7': ['R', 'S'],
      '8': ['T', 'U'],
      '9': ['V', 'W'],
      '10': ['X', 'Y'],
      '11': ['Z', 'AA'],
      '12': ['AB', 'AC'],
    }
    targetColumn = getColumns[currentMonth][0];
    actualColumn = getColumns[currentMonth][1];
    
    // シートから取得した値を連想配列に入れる
    // 受注金額
    var money = {
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
    // 受注件数
    var count = {
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
  
    // 数字を整える（ /1000, toLocaleString(), Math.floor() ）
    function goodJobTakeru(obj) {
      
      for(key in obj.actual) {
        let item = obj.actual[key];
        if(typeof(item) === 'object') {
          for(key2 in item) {
            let item2 = item[key2];
            obj.actual[key][key2] = Math.floor((item2/1000)).toLocaleString();
          }
        } else {
          obj.actual[key] = Math.floor((item/1000)).toLocaleString();
        }
      }
      for(key in obj.target) {
        let item = obj.target[key];
        if(typeof(item) === 'object') {
          console.log('This is object');
          for(key2 in item) {
            let item2 = item[key2];
            obj.target[key][key2] = Math.floor((item2/1000)).toLocaleString();
          }
        } else {
          obj.target[key] = Math.floor((item/1000)).toLocaleString();
        }
      }
      newObject = {
        actual: obj.actual, 
        target: obj.target
      }
      return newObject;
    }
    //---------------
    money = goodJobTakeru(money); 
   
    
    // 投稿内容を定義
    
    var message =
        
  `${currentMonth}月` + "\n" +
  "```" + 
  "【受注金額】" + "\n" +
  "Total    : " + money.actual.total + " / "  + money.target.total + "\n" +
  "\n" +
  "School   : "  + money.actual.school.subtotal + " / "  + money.target.school.subtotal + "\n" +
  "IT       : "  + money.actual.school.it + " / "  + money.target.school.it + "\n" +
  "English  : "  + money.actual.school.english + " / "  + money.target.school.english + "\n" +
  "\n" +
  "Online   : "  + money.actual.online.subtotal + " / "  + money.target.online.subtotal + "\n" +
  "IT       : "  + money.actual.online.it + " / "  + money.target.online.it + "\n" +
  "English  : "  + money.actual.online.english + " / "  + money.target.online.english + "\n" +
  "\n" +
  "OEM      : "  + money.actual.oem + " / "  + money.target.oem + "\n" +
  "Offshore : "  + money.actual.offshore + " / "  + money.target.offshore + "\n" +
  "Other    : " + money.actual.other + " / "  + money.target.other + "\n" +
  "\n" +
  "【受注件数】" + "\n" +
  "Total    : " + count.actual.total + " / "  + count.target.total + "\n" +
  "\n" +
  "School   : "  + count.actual.school.subtotal + " / "  + count.target.school.subtotal + "\n" +
  "IT       : "  + count.actual.school.it + " / "  + count.target.school.it + "\n" +
  "English  : "  + count.actual.school.english + " / "  + count.target.school.english + "\n" +
  "\n" +
  "Online   : "  + count.actual.online.subtotal + " / "  + count.target.online.subtotal + "\n" +
  "IT       : "  + count.actual.online.it + " / "  + count.target.online.it + "\n" +
  "English  : "  + count.actual.online.english + " / "  + count.target.online.english + "\n" +
  "```";
  
    
    var jsonData = {
          "username" : username,
          "icon_emoji": icon,
          "text" : message,
    };
    
    var payload = JSON.stringify(jsonData);
    
    var options = {
          "method" : "post",
          "contentType" : "application/json",
          "payload" : payload
    };
    
    UrlFetchApp.fetch(postUrl, options);
    // トリガーの削除
    delTrigger();
  }