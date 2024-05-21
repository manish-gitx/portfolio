import React from "react";
import "./css_modules/Education.css";

const info=[
  {
    logo: "https://assets-v2.scaler.com/assets/scaler/svg/scaler-logo-new-15cddca2e0196e677600f6671b42a288bdc89c398adc29fe82b7441503c4b129.svg.gz",
    position: 'Undergrad',
    startDate: new Date(2023, 6),
    endDate: new Date(2027, 7),
    summary: [
      'Degree in Computer Science & Engineering from Bits-Pilani.',
      'Learning DSA and how to develop Robust web applications.',
      '1 and half Year of compoulsary internship',
    ],
  },
  {
    logo: "https://scontent.fndc1-1.fna.fbcdn.net/v/t39.30808-6/304024011_578755967283042_6609828598676413841_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mosLN-rA6boQ7kNvgGErJZd&_nc_ht=scontent.fndc1-1.fna&oh=00_AYBQPj7c9M_62NCIQLq7YcvRb7V2Gi_4VSohnrDjgDi-Wg&oe=66520173",
    startDate: new Date(2021, 4),
    endDate: new Date(2023, 3),
    position: 'College',
    summary: [
      'Studied PCM in 11th and 12th grade.',
      'Cracked Jee mains',
      '93% in boards of 11th and 12th',
      'Got admission in Bits-Pilani',
    ],
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Chaitanya_Techno.jpg",
    position: 'High-school',
    startDate: new Date(2020,3),
    endDate: new Date(2021, 3),
    summary: ['Got 100% in my 10th Grade in the State level Exam.','One of the Topper of the School','Played District level Cricket','Tried Different Olympiads'],
  },
];
function getdate(date){
  let monthName = date.toLocaleString('default', { month: 'long' }); 
let year=date.getFullYear(); 
return `${monthName} ${year}`;

}
function EducationSummary({ summary }) {
  return (
    <ul >
      {summary.map((item, index) => (
        <li className="sumary-li"  key={index}>{item}</li>
      ))}
    </ul>
  );
}
function Education_nav(props){
  return(
  <div className="edu-nav">
    <div className="edu-info">
    <img src={props.logo} width="102" height="60"/> 
    <div className="summary-points">
    <EducationSummary summary={props.summary} />
    <h2 className="position">{props.position}</h2>
    </div>
    <p className="sumary-li" >{getdate(props.startDate)}-{getdate(props.endDate)}</p>
    </div>

    


  </div>
  );
}

export default function Education() {
  return (
    <div className="edu-container">
                  <div className="About">
                <span className="span-btn">Education</span>
                <p>Here is a quick summary of my education</p>
            </div>


      <div className="edu-childs">
      {info.map((item)=>(
         <Education_nav
         logo={item.logo}
         position={item.position}
         startDate={item.startDate}
         endDate={item.endDate}
         summary={item.summary}
       />
      ))}
      </div>

    </div>
  );



}