// OffshoreのKPIを毎日投稿するGAS
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
    //var postUrl = 'https://hooks.slack.com/services/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';
    var username = 'Offshore Team KPI 2020';  // 通知時に表示されるユーザー名
    var icon = ':dark_sunglasses:';  // 通知時に表示されるアイコン
    var ss = SpreadsheetApp.openById('1MoWB8UwdQFXOiLghmRwbd5GafCWsT49x79PXIZvD35c');
    
    
    // シートの取得
    var monitoring_sheet = ss.getSheetByName('2020Monitoring');
    // シートの名前取得（使わないけど）
    var monitoring_sheet_name = monitoring_sheet.getName();
    
    // 月毎に取得する列を決める
    // 0~11の数が入る（1月なら0）
    var d = new Date(); 
    var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var currentMonth = months[d.getMonth()];
    var getColumns = {
      '10': ['AM', 'AN'],
      '11': ['AQ', 'AR'],
      '12': ['AU', 'AV'],
    }
    targetColumn = getColumns[currentMonth][0];
    actualColumn = getColumns[currentMonth][1];
    
    // シートから取得した値を連想配列に入れる
    // 受注金額
    //var ordersTarget = monitoring_sheet.getRange(`${targetColumn}8`).getValue();
    var ordersTarget0 = Math.floor(monitoring_sheet.getRange(`${targetColumn}8`).getValue()/1000)
    var ordersTarget = ordersTarget0.toLocaleString();
    //var test = ordersTarget.toLocaleString();
    var ordersActual0 = Math.floor(monitoring_sheet.getRange(`${actualColumn}8`).getValue()/1000);
    var ordersActual = ordersActual0.toLocaleString();
    // KPI
    // 見積もり金額
    var estMoneyTarget0 = Math.floor(monitoring_sheet.getRange(`${targetColumn}11`).getValue()/1000);
    var estMoneyTarget = estMoneyTarget0.toLocaleString();
    var estMoneyActual0 = Math.floor(monitoring_sheet.getRange(`${actualColumn}11`).getValue()/1000);
    var estMoneyActual = estMoneyActual0.toLocaleString();
    
    var money = {
      orders: {
        actual: ordersActual,
        target: ordersTarget
      },
      est: {
        actual: estMoneyActual,
        target: estMoneyTarget
      }
    };
    // 見積もり数
    var estNumTarget = monitoring_sheet.getRange(`${targetColumn}12`).getValue();
    var estNumActual = monitoring_sheet.getRange(`${actualColumn}12`).getValue();
    
    // アポ数
    var appoTarget = monitoring_sheet.getRange(`${targetColumn}13`).getValue();
    var appoActual = monitoring_sheet.getRange(`${actualColumn}13`).getValue();
    
    var count = {
      estNum: {
        actual: estNumActual,
        target: estNumTarget
      },
      appo: {
        actual: appoActual,
        target: appoTarget
      }
    };
    
   
    
    // 投稿内容を定義
    
     var message =
        
   `${currentMonth}月` + "\n" +
   "```" + 
   "【受注金額 （実績/目標）単位:千円 】" + "\n" +
   "Total : " + money.orders.actual + " / "  + money.orders.target + "\n" +
   "\n" +
   "【KPI】" + "\n" +
   "見積金額 : "  + money.est.actual + " / "  + money.est.target + "\n" +
   "見積社数 : "  + count.estNum.actual + " / "  + count.estNum.target + "\n" + 
   "アポ数   : "  + count.appo.actual + " / "  + count.appo.target + "\n" + 
    "```";
    var jsonData = {
          "username" : username,
          "icon_emoji": icon,
          "text" : message,
        //   "text" : message,
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