import Title from './01_Title.jsx'
import Agenda from './02_Agenda.jsx'
import Intake from './03_Intake.jsx'
import Myth1 from './04_Myth1_Diabetes.jsx'
import Myth2 from './05_Myth2_Fructose.jsx'
import Myth3 from './06_Myth3_Obesity.jsx'
import Myth4 from './07_Myth4_Addiction.jsx'
import Myth5 from './08_Myth5_Hyperactivity.jsx'
import Facts from './09_Facts.jsx'
import Sweeteners from './10_Sweeteners.jsx'
import SweetenersCounseling from './11_Sweeteners_Counseling.jsx'
import Recommendations from './12_Recommendations.jsx'
import TakeHome from './13_TakeHome.jsx'
import References from './14_References.jsx'
import Discussion from './15_Discussion.jsx'

export const slides = [
  { id: 'title', component: Title },
  { id: 'agenda', component: Agenda },
  { id: 'intake', component: Intake },
  { id: 'myth1', component: Myth1 },
  { id: 'myth2', component: Myth2 },
  { id: 'myth3', component: Myth3 },
  { id: 'myth4', component: Myth4 },
  { id: 'myth5', component: Myth5 },
  { id: 'facts', component: Facts },
  { id: 'sweeteners', component: Sweeteners },
  { id: 'sweeteners-counseling', component: SweetenersCounseling },
  { id: 'recommendations', component: Recommendations },
  { id: 'takehome', component: TakeHome },
  { id: 'references', component: References },
  { id: 'discussion', component: Discussion }
]
