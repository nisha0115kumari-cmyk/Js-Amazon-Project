import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
function isWeekend(date){
  const today = dayjs();
  const ThatDayDate = today.add(date,'days');
  const ThatDayDay = ThatDayDate.format('dddd,MMMM D');
  if(ThatDayDay === 'Sunday' || ThatDayDay === 'Saturday'){
    console.log('Weekend Day :)',ThatDayDay);
  }else{
    console.log('No Weekend :(',ThatDayDay);
  }
};

export default isWeekend;