import React from 'react';
import xImage from './imges/cross.png'
import vImage from './imges/check.png'

import './App.css';

var questions = [
  {  a:0, q:"תחלופה גבוהה בכח אדם "}
  ,
   {a:0, q:"כח אדם לא מספיק טוב נבחר לתפקידים "}
  ,
  { a:0, q: "לא ברור מי מחזיק באיזה תפקיד ויש שינויים בהגדרות תפקיד כל הזמן "}

  ,
  { a:0, q: "כח אדם שעושה טעויות שגורמות להפסדים כספים "}
  ,
  { a:0, q: "כח אדם שעושה טעויות שגורמות לפגיעה במוניטין  "}
  , { a:0, q: "כח אדם שעושה טעויות שגורמות  ללקוחות לעזוב  "}

  , { a:0, q: "טעויות שחוזרות על עצמן והופכות לעניין שבשגרה בעסק  "}
  , { a:0, q: "עסק לא רווחי למרות שנעשות פעולות שיווק ויש מכירות  "}

  , { a:0, q: "מנהלים מותשים שהכל נופל עליהם ואין להם זמן לבנות את העסק  "}

  , { a:0, q: " מנהלים שעושים את העבודה של מישהו שמשלמים לו לעשות את העבודה  "}

  , { a:0, q: "מנהלים שאין להם מושג אמיתי מה ההספק של כל עובד ומנהלים לפי תחושות  "}
  , { a:0, q: "מצבי חירום ומצבי קיצון הם שגרת העסק  "}

]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      index : 0, showX: false, showV : false
     };
  }
  clickYes =()=>{
    console.log("כן");
    if (this.state.index === 0) {
      questions[this.state.index].a = -9
    } else { questions[this.state.index].a = -8 }
    console.log(questions)
    this.setState({ showX:true ,showV:false })

}
  clickNo=()=> {
    console.log(" לא");
    this.setState({ showV: true ,showX:false})

  }
  clickPrev = () => {
    console.log(" הבא")
     
    this.setState({ index: this.state.index - 1, showV: false, showX: false })
  
  }
  clickNext=()=>{
    console.log(" הבא")
    if (this.state.showV === false && this.state.showX === false) 
    {
      alert('יש לענות על השאלה לפני השאלה הבאה')
    } else { this.setState({ index: this.state.index + 1, showV: false, showX: false }) }


  }
  getScore(){
  let score=0
    for (let index = 0; index < questions.length; index++) {
      const element = questions[index];
      score=score+element.a
       }  return score
  }

  getMsg() {
    let score = this.getScore();

    let text;
    if (score > 96) {
      text = `ישר לקרבי! עסק בנוי לתלפיות!
`;
    } else if (score > 80) {
      text = `עסק במצב סביר שיכול לגדול תוך כדי קשיים מסוימים, מדי פעם ישנה התמודדות יוצאת דופן אך המצב הזה לא באמת מאפיין את היום יום של העסק. העובדים יציבים ויודעים את עבודתם, אך ישנו הפסד כספי של 5%-10% בשל כשלים נקודתיים במבנה הארגוני
`;
    } else if (score>50) {
      text = ` עסק במאבק עם יכולת להחזיק את עצמו רווחי לעיתים, אך הבעלים עסוק מדי בלשלם לאחרים מאשר לעצמו. עסק מעייף, מתיש, הכל נופל על כתפיים בודדות מדי למרות שמשלמים משכורות, העסק לא בנוי נכון, אין מספיק דרישה לתפוקה, נעשים הרבה ויתורים, יש הרבה אי בהירויות לגבי איך דברים צריכים להתבצע. דברים נופלים בין הכיסאות וזה עלול לפגוע במוניטין העסק. 
`;
    }
    return text = `עסק מתיש, מנהלים עמוסים עד כדי פגיעה בבריאותם, לא תמיד אפשר למשוך משכורת, בזבוז משאבים כרוני,  עסק בסכנה קיומית, או לסגור או לשנות בסיס פעולה באופן מיידי.`;
  }
  render() {
    return (
    <div className={"main_container"}>
      <h1>מבדק עסקי </h1>
        


        <h1>{questions[this.state.index].q} </h1>

  <div className ={'btns_container'}>  <button onClick={this.clickYes}  >כן</button> 
              <button onClick={this.clickNo}>לא</button>

</div>
        <h1>{this.state.index +1 } </h1>
       
{this.state.showX===true?
          <img src={xImage} className={"x_icon"} />
        :null }
        {this.state.showV === true ?
          <img src={vImage} className={"x_icon"} />
          : null}
        <div className={'btns_container'}>
        {this.state.index < questions.length-1?
          <button onClick={this.clickNext}>השאלה הבאה</button>
          :null} 
        {this.state.index > 0 ?
          <button onClick={this.clickPrev}>השאלה הקודמת</button>
          : null} 
        </div>
        {this.state.index===questions.length-1?
           this.getMsg()
           :null}


    </div>);
    
  }
}
      

export default App;
