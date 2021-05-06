
// 3. 先週と今週を比べて、差分を出力
// compareThisAndLastWeek()
function compareThisAndLastWeek(){
  const reportNewThisWeekValues = reportSheet.getRange('C3:C9').getValues()
  const reportNewLastWeekValues = reportLastWeekRange.getValues()
  let count = 0;
  for(let i = 0; i < reportThisWeekValues.length; i++){  
    let gap = 0;

    if(reportNewThisWeekValues[i][0] == reportNewLastWeekValues[i][0]){
      console.log(i + ':' + reportNewLastWeekValues[i][0] + '->' + reportNewThisWeekValues[i][0])
      gap = 0;
      count++;
    } else {
      console.log(i + ':' + reportNewLastWeekValues[i][0] + '->' + reportNewThisWeekValues[i][0])
      gap = reportNewThisWeekValues[i][0] - reportNewLastWeekValues[i][0]
      console.log(gap)   
    }
    reportGapLastAndThisWeekValues[i][0] = gap
    let row = i+3
    let column = 5
    reportSheet.getRange(row, column).setValue(gap)
  }
  // if all numbers are same
  if(count === reportNewThisWeekValues.length){
    return true
  } else {
    return false
  }
}

  

