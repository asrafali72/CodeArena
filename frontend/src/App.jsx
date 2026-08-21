// import {Routes, Route ,Navigate} from "react-router";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Homepage from "./pages/Homepage";
// import { useDispatch, useSelector } from 'react-redux';
// import { checkAuth } from "./authSlice";
// import { useEffect } from "react";
// import AdminPanel from "./components/AdminPanel";
// import ProblemPage from "./pages/ProblemPage"
// import Admin from "./pages/Admin";
// import AdminVideo from "./components/AdminVideo"
// import AdminDelete from "./components/AdminDelete"
// import AdminUpload from "./components/AdminUpload"

// function App(){
  
//   const dispatch = useDispatch();
//   const {isAuthenticated,user,loading} = useSelector((state)=>state.auth);

//   // check initial authentication
//   useEffect(() => {
//     dispatch(checkAuth());
//   }, [dispatch]);
  
//   if (loading) {
//     return <div className="min-h-screen flex items-center justify-center">
//       <span className="loading loading-spinner loading-lg"></span>
//     </div>;
//   }

//   return(
//   <>
//     <Routes>
//       <Route path="/" element={isAuthenticated ?<Homepage></Homepage>:<Navigate to="/signup" />}></Route>
//       <Route path="/login" element={isAuthenticated?<Navigate to="/" />:<Login></Login>}></Route>
//       <Route path="/signup" element={isAuthenticated?<Navigate to="/" />:<Signup></Signup>}></Route>
//       <Route path="/admin" element={isAuthenticated && user?.role === 'admin' ? <Admin /> : <Navigate to="/" />} />
//       <Route path="/admin/create" element={isAuthenticated && user?.role === 'admin' ? <AdminPanel /> : <Navigate to="/" />} />
//       <Route path="/admin/delete" element={isAuthenticated && user?.role === 'admin' ? <AdminDelete /> : <Navigate to="/" />} />
//       <Route path="/admin/video" element={isAuthenticated && user?.role === 'admin' ? <AdminVideo /> : <Navigate to="/" />} />
//       <Route path="/admin/upload/:problemId" element={isAuthenticated && user?.role === 'admin' ? <AdminUpload /> : <Navigate to="/" />} />
//       <Route path="/problem/:problemId" element={<ProblemPage/>}></Route>
      
//     </Routes>
//   </>
//   )
// }

// export default App;



import { Routes, Route, Navigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { checkAuth } from "./authSlice";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import ProblemPage from "./pages/ProblemPage";
import Admin from "./pages/Admin";
import ContactUs from "./pages/ContactUs";

// Components
import Navbar from "./components/common/Navbar";
import AdminPanel from "./components/AdminPanel";
import AdminVideo from "./components/AdminVideo";
import AdminDelete from "./components/AdminDelete";
import AdminUpload from "./components/AdminUpload";


function App() {

  const dispatch = useDispatch();

  const {
    isAuthenticated,
    user,
    loading
  } = useSelector((state) => state.auth);


  // Check authentication when application starts
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);


  // Authentication loading screen
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#09090b]">
        <span className="loading loading-spinner loading-lg text-indigo-500"></span>
      </div>
    );
  }


  return (
    <>

      {/* Reusable Navbar */}
      <Navbar />


      <Routes>

        {/* =========================
            PUBLIC LANDING PAGE
        ========================== */}

        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route path="/contact" element={<ContactUs />} />


        {/* =========================
            AUTHENTICATION
        ========================== */}

        <Route
          path="/login"
          element={
            isAuthenticated
              ? <Navigate to="/home" replace />
              : <Login />
          }
        />

        <Route
          path="/signup"
          element={
            isAuthenticated
              ? <Navigate to="/home" replace />
              : <Signup />
          }
        />


        {/* =========================
            USER HOMEPAGE
        ========================== */}

        <Route
          path="/home"
          element={
            isAuthenticated
              ? <Homepage />
              : <Navigate to="/login" replace />
          }
        />


        {/* =========================
            ADMIN
        ========================== */}

        <Route
          path="/admin"
          element={
            isAuthenticated && user?.role === "admin"
              ? <Admin />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/admin/create"
          element={
            isAuthenticated && user?.role === "admin"
              ? <AdminPanel />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/admin/delete"
          element={
            isAuthenticated && user?.role === "admin"
              ? <AdminDelete />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/admin/video"
          element={
            isAuthenticated && user?.role === "admin"
              ? <AdminVideo />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/admin/upload/:problemId"
          element={
            isAuthenticated && user?.role === "admin"
              ? <AdminUpload />
              : <Navigate to="/" replace />
          }
        />


        {/* =========================
            PROBLEMS
        ========================== */}

        <Route
          path="/problem/:problemId"
          element={
            isAuthenticated
              ? <ProblemPage />
              : <Navigate to="/login" replace />
          }
        />


        {/* =========================
            UNKNOWN ROUTE
        ========================== */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </>
  );
}

export default App;