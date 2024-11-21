import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Career from './pages/Career';
import Finance from './pages/Finance';
import Internship from './pages/Internship';
import Sales from './pages/Sales';
import Training from './pages/Training';
import NotFound from './pages/NotFound';
import ApplicationData from './pages/NestedPages/Sales Pages/ApplicationData';
import LeadDetails from './pages/NestedPages/Sales Pages/LeadDetails';
import RawData from './pages/NestedPages/Finance Pages/RawData';
import FinanceReport from './pages/NestedPages/Finance Pages/FinanceReport';
import Tracker from './pages/NestedPages/Training Pages/Tracker';
import Checklist from './pages/NestedPages/Training Pages/Checklist';
import TrainingReport from './pages/NestedPages/Training Pages/TrainingReport';
import InternsSituations from './pages/NestedPages/Internship Pages/InternsSituations';
import DailyDataset from './pages/NestedPages/Internship Pages/DailyDataset';
import TalentPool from './pages/NestedPages/Career Pages/TalentPool';
import Vacancies from './pages/NestedPages/Career Pages/Vacancies';
import FullSideBar from './SideBar/FullSideBar';
import { SidebarWithBurgerMenu } from './SideBar/SidebarWithBurgerMenu';

function App() {
  return (
    <div className="main_page w-full h-[100vh]">
      <Router>
        <Routes>
          <Route path='/' />
          <Route path="/sales" element={<Sales />}>
            <Route path="application-data" element={<ApplicationData />} />
            <Route path="lead-details" element={<LeadDetails />} />
          </Route>

          <Route path="/finance" element={<Finance />}>
            <Route path="raw-data" element={<RawData />} />
            <Route path="report" element={<FinanceReport />} />
          </Route>

          <Route path="/training" element={<Training />}>
            <Route path="tracker" element={<Tracker />} />
            <Route path="checklist" element={<Checklist />} />
            <Route path="report" element={<TrainingReport />} />
          </Route>

          <Route path="/internship" element={<Internship />}>
            <Route path="interns-situation" element={<InternsSituations />} />
            <Route path="daily-dataset" element={<DailyDataset />} />
          </Route>

          <Route path="/career" element={<Career />}>
            <Route path="talent-pool" element={<TalentPool />} />
            <Route path="vacancies" element={<Vacancies />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className='fullSideBar_div absolute top-2 left-5 bg-white rounded-sm py-6 px-4 flex flex-col items-center z-30'>
          <SidebarWithBurgerMenu />
        </div>
      </Router>
      <div className="overlay absolute w-full top-0 left-0 h-full bg-[rgba(0,0,0,0.75)]"></div>
    </div>
  );
}

export default App;
