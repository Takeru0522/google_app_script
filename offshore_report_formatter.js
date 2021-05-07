// スクリプト実行ボタンをメニューに追加
function onOpen() {
    var ui = SpreadsheetApp.getUi();
    var menu = ui.createMenu('[更新]');
    menu.addItem('report', 'report');
    menu.addToUi();
  }
  onOpen()
  
  // 0. This weekにすでに入っているものがImportから入ってきそうなら実行停止（複数回押すと崩れるため）
  // 1. 今週に入っているカウントを先週分にコピーする copyLastWeek()
  // 2. 最新のスプシからステータスの値を取ってきて出力 updateThisWeek()
  
  function report() {
    updateThisWeek()
  }
  
  const spreadsheet = SpreadsheetApp.openById('1HZADK6xnuovu3lskpajbm3KpRbP3afX49wQAFhK48hU');
  const importedData = spreadsheet.getSheetByName('Import');
  const reportSheet = spreadsheet.getSheetByName('Report');
  const reportThisWeekValues = reportSheet.getRange('C3:C9').getValues()
  const reportLastWeekRange = reportSheet.getRange('D3:D9')
  const reportLastWeekValues = reportLastWeekRange.getValues()
  const reportGapLastAndThisWeekRange = reportSheet.getRange('E3:E9')
  const reportGapLastAndThisWeekValues = reportGapLastAndThisWeekRange.getValues()
  
  
  // 今週に入っているカウントを先週分にコピーする
  function copyLastWeek(){ 
    reportLastWeekRange.setValues(reportThisWeekValues)
  }
  
  
  // 2. 最新のスプシからステータスの値を取ってきて出力
  // updateThisWeek()
  function updateThisWeek(){
    const statusValues = importedData.getRange('F2:F30').getValues()
    const dueDates = importedData.getRange('Y2:Y30').getValues()
    
    let countDone = 0;
    let countClientReview = 0;
    let countPmReview = 0;
    let countInProgress = 0;
    let countTodo = 0;
    let countBacklog = 0;
    let countDelay = 0;
    // statusの値を全て確認し、ステータス毎のカウントをする
    for(let i = 0; i< statusValues.length; i++) {
      let singleStatus = statusValues[i][0];
      switch(singleStatus){
        case 'Done':
          countDone++;
          break;
        case 'Review-Client':
          countClientReview++;
          break;
        case 'Review-PM':
          countPmReview++;
          break;
        case 'In progress':
          countInProgress++;
          break;
        case 'Todo':
          countTodo++;
          break;
        case 'Backlog':
          countBacklog++;
          break; 
      }
    }
    // 遅れに関しては、別でカウント
    getDelayCount(dueDates)
    function getDelayCount(dueDates){
      const today = new Date()
      
      for(let i = 0; i< dueDates.length; i++){
        const singleDueDate = dueDates[i][0]
        const taskStatus = statusValues[i][0]
  
        if(singleDueDate){
          const due = new Date(singleDueDate)
          // dueが今日よりも前かどうか確認
          if(new Date(due) < new Date(today) && taskStatus === 'Backlog' ||  taskStatus === 'Todo' || taskStatus === 'In Progress') {
            countDelay++;
          }
        }
      }
    }
    const incomingCountArr = [
      [countDone],
      [countClientReview],
      [countPmReview],
      [countInProgress],
      [countTodo],
      [countBacklog],
      [countDelay]
    ]
    const previousCountArr = reportSheet.getRange('C3:C9').getValues()
  
    // 同じものが入ってきそうになったらその先の処理はしない
    if(isMatchPreviousWeek(previousCountArr, incomingCountArr)){
      console.log('Stop HERE. Latest data is applied already.')
      Browser.msgBox('すでに最新状態が反映されています。');
    } else {
      // 1. 前回分をLast weekカラムにコピー
      copyLastWeek()
  
      // 2. This weekカラムにImportから最新のステータスカウントを出力
      reportSheet.getRange('C3').setValue(countDone)
      reportSheet.getRange('C4').setValue(countClientReview)
      reportSheet.getRange('C5').setValue(countPmReview)
      reportSheet.getRange('C6').setValue(countInProgress)
      reportSheet.getRange('C7').setValue(countTodo)
      reportSheet.getRange('C8').setValue(countBacklog)
      reportSheet.getRange('C9').setValue(countDelay)
    }
  }
  
  // 0. 同じものが入ってこないかチェック
  function isMatchPreviousWeek(arr1, arr2){
    let count = 0;
    for(let i = 0; i < arr1.length; i++){  
      if(arr1[i][0] == arr2[i][0]){
        count++;
      } else {
      }
    }
    // if all numbers are same
    if(count === arr1.length){
      return true
    } else {
      return false
    }
  }  