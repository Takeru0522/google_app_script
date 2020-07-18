var slack = {
  
    //postUrl: 'https://slack.com/api/chat.postMessage',
    //token: 'xoxp-398275528432-432964926627-531315226753-534e7cec0642c9296358eb84ec4eb74e', // Slackのtoken
    //groupId: "CBQR8571R", // Slack MarketingグループのID
    //userName: "ジョージ・ステファン", // botの名前
  }
  // var postUrl = 'https://hooks.slack.com/services/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';
  var postUrl = 'https://hooks.slack.com/services/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';
  console.log(postUrl);
  var username = 'Tanara・Vincent・Paul';  // 通知時に表示されるユーザー名
  var icon = ':saiko2:';  // 通知時に表示されるアイコン
  
  function myFunction(){
    //var ss = SpreadsheetApp.getActiveSpreadsheet("https://docs.google.com/spreadsheets/d/1eLu-OX_PlJ5LpmQw1LQC_sYeLZV7zLUM1TaXpSprhLc/edit#gid=1369326593")
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var toC_sheet = ss.getSheetByName('toC');
    var toC_name = toC_sheet.getName();
    var toB_sheet = ss.getSheetByName('toB');
    var toB_name = toB_sheet.getName();
    var newCourse_sheet = ss.getSheetByName('New Course');
    var newCourse_name = newCourse_sheet.getName();
    var all_sheet = ss.getSheetByName('Overall');
    var all_name = all_sheet.getName();
    
    
    //個人顧客お申込みターゲット
    var IndividualApplicationTarget = toC_sheet.getRange("K9");
    var IndividualApplicationTargetValue = IndividualApplicationTarget.getValue();
    
    //個人顧客お申込み進捗
    var IndividualApplicationCurrent = toC_sheet.getRange("L9");
    var IndividualApplicationCurrentValue = IndividualApplicationCurrent.getValue();
    
    //個人顧客お申込み差分
    var IndividualApplicationMinus = IndividualApplicationTargetValue -IndividualApplicationCurrentValue;
    
    //個人顧客お申込み達成率
    var IndividualAppulicationOfMonth = IndividualApplicationCurrentValue/IndividualApplicationTargetValue+ "%";
    
    // 個人顧客カウンセリング設定ターゲット
    var IndividualCounselingTarget = toC_sheet.getRange("K16");
    var IndividualCounselingTargetValue = IndividualCounselingTarget.getValue();
    
    // 個人顧客カウンセリング設定ターゲット英語
    var IndividualCounselingTarget_english = toC_sheet.getRange("K17");
    var IndividualCounselingTargetValue_english = IndividualCounselingTarget_english.getValue();
    
    // 個人顧客カウンセリング設定ターゲットプログラミング
    var IndividualCounselingTarget_programming = toC_sheet.getRange("K18");
    var IndividualCounselingTargetValue_programming = IndividualCounselingTarget_programming.getValue();
    
    //個人顧客カウンセリング設定進捗
    var IndividualCounselingCurrent = toC_sheet.getRange("L16");
    var IndividualCounselingCurrentValue = IndividualCounselingCurrent.getValue();
    
    //個人顧客カウンセリング設定進捗英語
    var IndividualCounselingCurrent_english = toC_sheet.getRange("L17");
    var IndividualCounselingCurrentValue_english = IndividualCounselingCurrent_english.getValue();
    
    //個人顧客カウンセリング設定進捗プログラミング
    var IndividualCounselingCurrent_programming = toC_sheet.getRange("L18");
    var IndividualCounselingCurrentValue_programming = IndividualCounselingCurrent_programming.getValue();
    
    //個人顧客カウンセリング設定達成率
    var IndividualCounselingOfMonth = Math.round(IndividualCounselingCurrentValue/IndividualCounselingTargetValue*100);
    
    //個人顧客カウンセリング差分
    var IndividualCounselingMinus = IndividualCounselingTargetValue - IndividualCounselingCurrentValue ;
    
    
    //代理店お申込みターゲット
    //var AgencyTarget = sheet.getRange("D6");
    //var AgencyTargetValue = AgencyTarget.getValue();
    
    //代理店お申込み進捗
    //var AgencyCurrent = sheet.getRange("E6");
    //var AgencyCurrentValue = AgencyCurrent.getValue();
  
    //代理店お申込み進捗対月割合
    //var AgencyCurrentValueOfMonth = AgencyCurrentValue/AgencyTargetValue+ "%";
    
    //法人お申込みターゲット
    var CompanyTarget = toB_sheet.getRange("I9");
    var CompanyTargetValue = CompanyTarget.getValue();
    
    //法人お申込み進捗
    var CompanyCurrent = toB_sheet.getRange("J9");
    var CompanyCurrentValue = CompanyCurrent.getValue();
    
    //法人店お申込み進捗対月割合
    var CompanyCurrentOfMonth = CompanyCurrentValue/CompanyTargetValue*100 + "%";
    
    
    
    //新規施策お申込みターゲット
    var NewCourseTarget = newCourse_sheet.getRange("L9");
    var NewCourseTargetValue = NewCourseTarget.getValue();
    
    //新規施策お申込み進捗
    var NewCourseCurrent = newCourse_sheet.getRange("M9");
    var NewCourseCurrentValue = NewCourseCurrent.getValue();
    
    //新規施策お申込み進捗対月割合
    var NewCourseCurrentOfMonth = NewCourseCurrentValue/NewCourseTargetValue*100 + "%";
    
    
    
    //お申込進捗総合
    var totalApplication = CompanyCurrentValue + IndividualApplicationCurrentValue + NewCourseCurrentValue;
    
    //お申込ターゲット総合
    var totalApplicationTarget = CompanyTargetValue + IndividualApplicationTargetValue + NewCourseTargetValue;
    
    //お申込進捗総合差分
    var totalApplicationMinus = totalApplicationTarget - totalApplication;
    
    //お申込進捗月次達成率
    var applicationProgress = Math.round((CompanyCurrentValue + IndividualApplicationCurrentValue + NewCourseCurrentValue)/(IndividualApplicationTargetValue + NewCourseTargetValue + CompanyTargetValue )*100);
    
    
    //お申込ターゲット総合
    var totalApplicationTarget = CompanyTargetValue + IndividualApplicationTargetValue + NewCourseTargetValue;
    
    //お申込ターゲット進捗総合
    var totalApplicationCurrent = CompanyCurrentValue + IndividualApplicationCurrentValue + NewCourseCurrentValue;
    
    
    
    //エンジニア留学受注金額
    var engeneerMoneyOrdered = all_sheet.getRange("K27");
    var engeneerMoneyOrderedValue = engeneerMoneyOrdered.getValue();
    
    //英語留学受注金額
    var englishMoneyOrdered = all_sheet.getRange("K26");
    var englishMoneyOrderedValue = englishMoneyOrdered.getValue();
    
    //[all]front-kpi-detailシート取得
    //var sheet_kpi_detail = ss.getSheetByName('[all]front-kpi-detail');
    //var name_kpi_detail = sheet_kpi_detail.getName()
    
    //すべてサービス受注内訳に人数取得
    var actualAllhNumber  = all_sheet.getRange("K9");
    var actualAllhNumberValue = actualAllhNumber.getValue();
   
    //英語サービス受注内訳に人数取得
    var targetEnglishNumber_toC = all_sheet.getRange("J11");
    var targetEnglishNumberValue_toC = targetEnglishNumber_toC.getValue();
    
    var targetEnglishNumber_toB  = all_sheet.getRange("J14");
    var targetEnglishNumberValue_toB = targetEnglishNumber_toB.getValue();
    
    var targetEnglishNumber_new  = all_sheet.getRange("J17");
    var targetEnglishNumberValue_new = targetEnglishNumber_new.getValue();
    
    var targetEnglishNumber = all_sheet.getRange("J10");
    var targetEnglishNumberValue = targetEnglishNumber.getValue();
    
    //プログラミングサービス受注内訳に人数取得
    var targetProgrammingNumber_toC  = all_sheet.getRange("J12");
    var targetProgrammingNumberValue_toC = targetProgrammingNumber_toC.getValue();
    
    var targetProgrammingNumber_toB  = all_sheet.getRange("J15");
    var targetProgrammingNumberValue_toB = targetProgrammingNumber_toB.getValue();
  
    var targetProgrammingNumber_new  = all_sheet.getRange("J18");
    var targetProgrammingNumberValue_new = targetProgrammingNumber_new.getValue();
    
    var targetProgrammingNumber = all_sheet.getRange("J11");
    var targetProgrammingNumberValue = targetProgrammingNumber.getValue();
  
    //英語サービス受注内訳に人数取得
    var actualEnglishNumber_toC  = all_sheet.getRange("K11");
    var actualEnglishNumberValue_toC = actualEnglishNumber_toC.getValue();
    
    var actualEnglishNumber_toB  = all_sheet.getRange("K14");
    var actualEnglishNumberValue_toB = actualEnglishNumber_toB.getValue();
    
    var actualEnglishNumber_new  = all_sheet.getRange("K17");
    var actualEnglishNumberValue_new = actualEnglishNumber_new.getValue();
    
    var actualEnglishNumber = all_sheet.getRange("K10");
    var actualEnglishNumberValue = actualEnglishNumber.getValue();
    
    //プログラミングサービス受注内訳に人数取得
    var actualProgrammingNumber_toC  = all_sheet.getRange("K12");
    var actualProgrammingNumberValue_toC = actualProgrammingNumber_toC.getValue();
    
    var actualProgrammingNumber_toB  = all_sheet.getRange("K15");
    var actualProgrammingNumberValue_toB = actualProgrammingNumber_toB.getValue();
    
    var actualProgrammingNumber_new  = all_sheet.getRange("K18");
    var actualProgrammingNumberValue_new = actualProgrammingNumber_new.getValue();
    
    var actualProgrammingNumber = all_sheet.getRange("K11");
    var actualProgrammingNumberValue = actualProgrammingNumber.getValue();
    
    //延長受注内訳に人数取得
    //var actualExtentionNumber = sheet_kpi_detail.getRange("N34");
    //var actualExtentionNumberValue = actualExtentionNumber.getValue();
  
    //問い合わせ数目標
    var actualAllInquiryTargetNumber  = toC_sheet.getRange("K30");
    var actualAllInquiryTargetNumberValue = actualAllInquiryTargetNumber.getValue();
  
    //問い合わせ数進捗
    var actualAllInquiryCurrentNumber  = toC_sheet.getRange("L30");
    var actualAllInquiryCurrentNumberValue = actualAllInquiryCurrentNumber.getValue();
    
    //個人受注目標数
    //var privateTargetNumber = sheet_kpi_detail.getRange("N22");
    //var privateTargetNumberValue = privateTargetNumber.getValue();
    
    //代理店受注目標数
    //var agencyTargetNumber = sheet_kpi_detail.getRange("N25");
    //var agencyTargetNumberValue = agencyTargetNumber.getValue();
    
    //法人受注目標数
    //var corporationTargetNumber = sheet_kpi_detail.getRange("N28");
    //var corporationTargetNumberValue = corporationTargetNumber.getValue();
    
    //個人受注実績
    //var privateActualNumber = sheet_kpi_detail.getRange("N35");
    //var privateActualNumberValue = privateActualNumber.getValue();
    
    //代理店受注実績
    //var agencyActualNumber = sheet_kpi_detail.getRange("N39");
    //var agencyActualNumberValue = agencyActualNumber.getValue();
    
    //法人受注実績
    //var corporationActualNumber = sheet_kpi_detail.getRange("N43");
    //var corporationActualNumberValue = corporationActualNumber.getValue();
    
    //受注金額
    //var MoneyOrdered = sheet.getRange("N6");
    //var originalValue = MoneyOrdered.getValue();
  
    //var MoneyOrderedtValue = originalValue + "円";
  
    var message = "・昨日までのKPI進捗" + "\n"+ "\n" +"KPI-1：受注人数(合計)"+ "\n"+ 
      　　　　　　"目標> "+ totalApplicationTarget + "件" + "　(個人 " + IndividualApplicationTargetValue　+ "件、法人 " + CompanyTargetValue + "件、新規 " + NewCourseTargetValue + "件)" +　"　( 英語" + targetEnglishNumberValue + "件、エンジニア" + targetProgrammingNumberValue + "件)"+"\n"+　
                "実績> " + totalApplicationCurrent + "件" + "　(個人 " + IndividualApplicationCurrentValue　+ "件、法人 " + CompanyCurrentValue + "件、新規 " + NewCourseCurrentValue + "件)" + "　( 英語" + actualEnglishNumberValue + "件、エンジニア" + actualProgrammingNumberValue + "件)"+"\n"+　
                "達成まで> " + totalApplicationMinus + "件" + "　(個人 " + (IndividualApplicationTargetValue - IndividualApplicationCurrentValue)　+ "件、法人 " + (CompanyTargetValue - CompanyCurrentValue) + "件、新規 " + (NewCourseTargetValue - NewCourseCurrentValue) + "件)" +"　( 英語" + (targetEnglishNumberValue-actualEnglishNumberValue) + "件、エンジニア" + (targetProgrammingNumberValue-actualProgrammingNumberValue) + "件)"+"\n"+　
                "達成率> " + applicationProgress + "%" + "\n"+　
                "＝＝＝＝＝" + "\n"+　　　
                "KPI-2：面談実施数(個人)" + "\n"+ 
                "目標> " + IndividualCounselingTargetValue + "\n"+　"　(英語 " + IndividualCounselingTargetValue_english　+ "件、プログラミング " + IndividualCounselingTargetValue_programming +  "件)" +"\n"+　
       　　   　 "実績> " + IndividualCounselingCurrentValue + "\n"+　"　(英語 " + IndividualCounselingCurrentValue_english　+ "件、プログラミング " + IndividualCounselingCurrentValue_programming + "件)" +"\n"+　
                "達成まで> " + IndividualCounselingMinus + "\n"+　"　(英語 " + (IndividualCounselingTargetValue_english-IndividualCounselingCurrentValue_english)　+ "件、プログラミング " + (IndividualCounselingTargetValue_programming-IndividualCounselingCurrentValue_programming) + "件)" +"\n"+　
                "達成率> " + IndividualCounselingOfMonth + "%" + "\n"+
      　　　　　　"＝＝＝＝＝" + "\n"+　
              　"申込実績詳細(All Depart)" + "\n"+
                "金額" + "\n"+
                "合計> " +  (engeneerMoneyOrderedValue + englishMoneyOrderedValue) + "円、" + actualAllhNumberValue + '人' + "\n"+
                "英語> " + englishMoneyOrderedValue + "円、" + actualEnglishNumberValue + '人' + "\n"+
                "エンジニア> " +  engeneerMoneyOrderedValue + "円、"+ actualProgrammingNumberValue　+ '人' + "\n" +
                //"延長> " + actualExtentionNumberValue + '人' + "\n" +　
                "＝＝＝＝＝" + "\n" +
                "問い合わせ数" + "\n"+　
                "目標> " + actualAllInquiryTargetNumberValue　+"件" + "\n" +
                "実績> " + actualAllInquiryCurrentNumberValue + "件" + "\n";
    
    //KPI
    //KPI-1　申込数：目標34件、実績8件、前日差+2件、残26件、達成率24%
    //KPI-2　面談設定数：目標72件、実績57件、前日差+2件、残15件 達成率24%
    //＝＝＝＝＝
    //申込内訳
    //サービス：エンジニア◯件、英語◯件
    //金額：：エンジニア◯円、英語◯円
    
    //Slackへ送る
    //var slackApp = SlackApp.create(slack["xoxp-398275528432-432964926627-531315226753-534e7cec0642c9296358eb84ec4eb74e"]);
  
    //var slackApp = SlackApp.create(slack["xoxp-398275528432-432964926627-531315226753-534e7cec0642c9296358eb84ec4eb74e"]);
    //var Slackpost = slackApp.postMessage(slack["CBQR8571R"],"```" + "\n" + "昨日までのKPI進捗" + "\n" + "オーダー件数：" + orderNum + "\n" + "オーダー単価：" + orderUnitPrice + "\n" + "会員登録数：" + signupNum + "\n" + "CPA：" + CPA + "\n" + "CPO：" + CPO + "\n" + "CVR：" + CVR + "%" + "\n" + "```", {username : slack["userName"]});
    Logger.log(toC_name);
      var jsonData =
    {
       "username" : username,
       "icon_emoji": icon,
       "text" : message
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
  
  
  
  
   
  