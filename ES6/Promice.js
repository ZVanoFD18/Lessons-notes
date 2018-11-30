var cnr=0;
new Promise((resolve, reject)=>{
  return new Promise(()=>{
    alert(cnr);
    setTimeout(()=>{
      resolve(++cnr);
    }, 2000)
  });
}).then((cnr1)=>{
  return new Promise((resolve, reject)=>{
    alert(cnr1);
    setTimeout(()=>{
      resolve(++cnr1);
    }, 2000)
  });
}).then((cnr2)=>{
  return new Promise((resolve, reject)=>{
    alert(cnr2);
    setTimeout(()=>{
      resolve(++cnr2);
    }, 2000)
  });
})
