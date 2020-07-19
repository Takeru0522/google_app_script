
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
  

  let count = {
    actual: {
      total: 5200000,
      school: {
          subtotal: 10123400000,
          it: 56003300
      },
    },
    target: {
      total: 692040000,
      school: {
          subtotal: 192300000,
          it: 7600000
      },
    }
  }
  
  function goodJobTakeruMoney(obj) {
      
    for(key in obj.actual) {
      let item = obj.actual[key];
      if(typeof(item) === 'object') {
        console.log('This is object');
        for(key2 in item) {
          let item2 = item[key2];
          obj.actual[key][key2] = Math.floor((item2/1000)).toLocaleString();
        }
      } else {
        obj.actual[key] = Math.floor((item/1000)).toLocaleString();
        // console.log(money.actual[key])
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
        // console.log(money.target[key])
      }
    }
    newObject = {
      actual: obj.actual, 
      target: obj.target
    }
    return newObject;
  }
  money = goodJobTakeruMoney(money);

  console.log(
    '====='
  )
  console.log(money)
  console.log(count)

  console.log(money.actual.total)
  console.log(count.actual.total)