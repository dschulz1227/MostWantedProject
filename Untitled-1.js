

function infoLookUpTool(el) {
    let newData = el.filter(function (el) {
      //return (firstName == el.firstName && lastName == el.lastName)
    })
    if (newData.length > 0) {
      console.log(newData[0].id);
      console.log(newData[0].dob);
      // console.log(newData[0].id);
      // console.log(newData[0].id);
    }
  }
  infoLookUpTool(data)

