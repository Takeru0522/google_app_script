function myFunction() {
    const spreadsheet = SpreadsheetApp.openById('1HZADK6xnuovu3lskpajbm3KpRbP3afX49wQAFhK48hU');
    const src = spreadsheet.getSheetByName('test_src');
    const dist = spreadsheet.getSheetByName('test_dist');
    
    // getRangeの方法４種類
    // let val = src.getRange(1, 1).getValue()
    // let val = src.getRange('A1').getValue()
    // let val = src.getRange(1, 1, 2).getValues()
    // let val = src.getRange(1, 1, 2, 2).getValues()
    // let val = src.getRange('A1:A10').getValues()
  
  
    // dist.getRange('A1:B10').setValues(val)
   
  
    const values = src.getRange('A1:A10').getValues()
    
    // 1つ1つの日付をフォーマット化
    function formateDate() {
      values.forEach((val) => {
        let formattedDateArr = []
        
        // 時間を削除 | 03/May/21 1:24 PM -> 03/May/21
        const valWithoutTime = val[0].substring(0, 9)  
        // console.log(valWithoutTime) // 03/May/21
        const dividedVal = valWithoutTime.split('/')
        // console.log(dividedVal) // [ '03', 'May', '21' ]
  
        // DD/MM/YY -> YY/MM/DD
        let dividedReverse = dividedVal.reverse().join('/')
        // console.log(dividedReverse, 'a') // [ '21', 'May', '03' ]
  
        let result;
        // if(dividedReverse.includes('Jan')){
        //   const formattedDate = dividedReverse.replace('Jan', '01')
        // } else if(dividedReverse.includes('Feb')) {
        //   const formattedDate = dividedReverse.replace('Feb', '02')
        // } else if(dividedReverse.includes('Mar')) {
        //   const formattedDate = dividedReverse.replace('Mar', '03')
        // } else if(dividedReverse.includes('Apr')) {
        //   const formattedDate = dividedReverse.replace('Apr', '04')
        //   formattedDateArr.push(formattedDate)
        // } else if(dividedReverse.includes('May')) {
        //   const formattedDate = dividedReverse.replace('May', '05')
        //   formattedDateArr.push(formattedDate)
        // } else if(dividedReverse.includes('Jun')) {
        //   const formattedDate = dividedReverse.replace('Jun', '06')
        // } else if(dividedReverse.includes('Jul')) {
        //   const formattedDate = dividedReverse.replace('Jul', '07')
        // } else if(dividedReverse.includes('Aug')) {
        //   const formattedDate = dividedReverse.replace('Aug', '08')
        // } else if(dividedReverse.includes('Sep')) {
        //   const formattedDate = dividedReverse.replace('Sep', '09')
        // } else if(dividedReverse.includes('Oct')) {
        //   const formattedDate = dividedReverse.replace('Oct', '10')
        // } else if(dividedReverse.includes('Nov')) {
        //   const formattedDate = dividedReverse.replace('Nov', '11')
        // } else if(dividedReverse.includes('Dec')) {
        //   const formattedDate = dividedReverse.replace('Dec', '12')
        // }
  
        
        // formattedDateArr.push(formattedDate)
        
        // 月をアルファベットから 2digitsに | Jan -> 01
        // switch(dividedReverse[1]) {
        //   case 'Jan':
        //     result = dividedReverse[1].replace('Jan', '01')
        //     break;
        //   case 'Feb':
        //     result = dividedReverse[1].replace('Feb', '02')
        //     break;
        //   case 'Mar':
        //     result = dividedReverse[1].replace('Mar', '03')
        //     break;
        //   case 'Apr':
        //     result = dividedReverse[1].replace('Apr', '04')
        //     break;
        //   case 'May':
        //     result = dividedReverse[1].replace('May', '05')
        //     break;
        //   case 'Jun':
        //     result = dividedReverse[1].replace('Jun', '06')
        //     break;
        //   case 'Jul':
        //     result = dividedReverse[1].replace('Jul', '07')
        //     break;
        //   case 'Aug':
        //     result = dividedReverse[1].replace('Aug', '08')
        //     break;
        //   case 'Sep':
        //     result = dividedReverse[1].replace('Sep', '09')
        //     break;
        //   case 'Oct':
        //     result = dividedReverse[1].replace('Oct', '10')
        //     break;
        //   case 'Nov':
        //     result = dividedReverse[1].replace('Nov', '11')
        //     break; 
        //   case 'Dec':
        //     result = dividedReverse[1].replace('Dec', '12')
        //     break;
        // }
        
        // const testEdit2 = testEdit.replace('May', '05')
        // let resultReverse = result.reverse()
        // console.log(result, 'result')　//03/05/21
        // console.log(resultReverse, 'resultReverse')　//03/05/21
        // dist.getRange(1, 1).setValue(result)
      })
    }
    
    console.log(formattedDateArr, 'HERE');
  
  
  }
  
  
    
    
  
  
  
  
  
  
  
  