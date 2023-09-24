import "./App.css";
import { Route, Routes } from "react-router-dom";
import CallToActionWithAnnotation from './Hero'
import LoginOrganization from "./Pages/LoginOrganization";
import LoginUser from "./Pages/LoginUser";
import SignupOrganization from './Pages/SignupOrganization'
import SignupUser from "./Pages/SignupUser";
import OrganizationrequestsPage from "./Pages/OrganizationRequestsPage";
import CertificateValidationPage from "./Pages/CertificateValidationPage";
import UserCertificateRequestPage from "./Pages/UserCertificateRequestPage";
import OrganizationCertificateGeneration from "./Pages/OrganizationCertificateGeneration";
// import LoginOrg from "./Pages/LoginOrg";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CallToActionWithAnnotation/>}></Route>
        <Route path="/organization-login" element={<LoginOrganization/>}></Route>
        <Route path="/user-login" element={<LoginUser/>}></Route>
        <Route path="/user-signup" element={<SignupUser/>}></Route>
        <Route path="/organization-signup" element={<SignupOrganization/>}></Route>
        <Route path="/organization-requests" element={<OrganizationrequestsPage/>}></Route>
        <Route path="/user-requests" element={<UserCertificateRequestPage/>}></Route>
        <Route path="/organization-certificate-generation" element={<OrganizationCertificateGeneration/>}></Route>
        <Route path="/certificate-validation" element={<CertificateValidationPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
