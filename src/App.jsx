import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./css/style.css";
import "./App.css";
import Home from "./Pages/Home";
import AirplaneComponent from "./Pages/Gothrough";
import Gallery_page from "./components/Gallery_page";
import About_section from "./Pages/about_section";
import FormComponent from "./Form/Inova_Fom";
import Student_dashboard from "./Pages/student_dashboard";
import Das_Home from "./Dasboard_componet/Das_Home";
import Alumni_porfile from "./Dasboard_componet/Alumni_porfile";
import Das_event from "./Dasboard_componet/Das_event";
import Job_post_alumni from "./Dasboard_componet/Job_post_alumni";
import Manage_User from "./Dasboard_componet/Manage_User";
import Contect_Us_panal from "./Dasboard_componet/Contect_Us_panal";
import Idea_info_panal from "./Dasboard_componet/Idea_info_panal";
import Profile_page_das from "./Dasboard_componet/Profile_page_das";
import Login from "./components/Login";
import Chat_bot from "./Dasboard_componet/Chat_bot";
import Page_Not_found from "./components/Page_Not_found";
import Sign_up from "./components/Sign_up";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./components/firebase";
import ResetPassword from "./components/Forget_password";
import SignIn from "./components/Collage_email";
import Varify from "./components/Varify";
import JobDetail from "./Dasboard_componet/Job_fullDetail_page";
import Sidebar from "./Pages/Alumni_dasboard";
import JobPostForm from "./Dasboard2/Job_Post_from";
import Hero_section from "./Dasboard2/Hero_section";

function App() {
  const [userr, setuser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userr) => {
      setuser(userr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login_A" element={<Login />} />
          <Route path="/forget_pass" element={<ResetPassword />} />
          <Route path="/Sign_collage_email" element={<SignIn />} />
          <Route path="/verify" element={<Varify />} />

          <Route path="/sign_up" element={<Sign_up />} />
          <Route path="/jobs" element={<AirplaneComponent />} />
          <Route path="/gallery" element={<Gallery_page />} />
          <Route path="/about" element={<About_section />} />
          <Route path="/student_email" element={<SignIn />} />

          <Route path="/InovForm" element={<FormComponent />} />
          <Route path="/Alumni_das" element={<Sidebar />}>
            <Route path="jobpost" element={<JobPostForm />} />
            <Route
              path="/Alumni_das/profile_panal"
              element={<Profile_page_das />}
            />
            <Route path="InovForm" element={<FormComponent />} />

            <Route index element={<Hero_section />} />
            <Route path="event_panal" element={<Das_event />} />
            <Route path="alumni_panal" element={<Alumni_porfile />} />
          </Route>

          <Route path="*" element={<Page_Not_found />} />

          <Route path="/student_dashboard/*" element={<Student_dashboard />}>
            <Route path="Recent_event_set" element={<Chat_bot />} />
            <Route index element={<Das_Home />} />
            <Route path="alumni_panal" element={<Alumni_porfile />} />
            <Route path="event_panal" element={<Das_event />} />
            <Route path="jobs_panal" element={<Job_post_alumni />} />
            <Route path="jobs_panal/:jobId" element={<JobDetail />} />
            <Route path="User_panal" element={<Manage_User />} />
            <Route path="profile_panal" element={<Profile_page_das />} />
            <Route path="contect_panal" element={<Contect_Us_panal />} />
            <Route path="Idea_panal" element={<Idea_info_panal />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
