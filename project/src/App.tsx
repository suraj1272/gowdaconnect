import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

// Public pages
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import About from "./pages/About";

// Member & content pages
import { MemberDirectory } from "./pages/MemberDirectory";
import MemberProfile from "./components/MemberProfile";
import MemberResult from "./components/MemberResult";
import WebsiteBlog from "./components/Websiteblog";
import BlogDetail from "./components/BlogDetail";
import MemberReviews from "./components/MembersReview";
import MembersByCity from "./components/MembersByCity";
import ProductLibrary from "./components/ProductLibrary";
import ProductDetail from "./components/ProductDetail";
import ClassifiedAds from "./components/ClassifiedAds";
import ClassifiedDetail from "./components/ClassifiedDetail";
import PropertyListings from "./components/PropertyListings";
import PropertyDetail from "./components/PropertyDetail";
import PhotoAlbums from "./components/PhotoAlbums";
import PhotoAlbumDetail from "./components/PhotoAlbumDetails";
import VideoLibrary from "./components/VideoLibrary";
import VideoDetail from "./components/VideoDetail";
import Contact from "./components/Contact";

// Dashboard + Admin
import ProtectedLayout from "./components/ProtectedLayout";
import Dashboard from "./pages/Dashbaord";
import NetworkOperations from "./pages/NetworkOperations";
import Reports from "./pages/Reports";
import AdminShortcuts from "./pages/AdminShortcuts";
import PostJob from "./pages/PostJob";
import PostAd from "./pages/PostAd";
import PostProperty from "./pages/PostProperty";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />

        <Routes>
          {/* ===== PUBLIC ROUTES ===== */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />

          {/* ===== PROTECTED MEMBER ROUTES ===== */}
          <Route
            path="/member-directory"
            element={
              <ProtectedRoute>
                <MemberDirectory />
              </ProtectedRoute>
            }
          />

          <Route path="/member-profile" element={<MemberProfile />} />
          <Route path="/member-result" element={<MemberResult />} />
          <Route path="/website-blog" element={<WebsiteBlog />} />
          <Route path="/blog-detail" element={<BlogDetail />} />

          <Route path="/review" element={<MemberReviews />} />
          <Route path="/members-by-city" element={<MembersByCity />} />

          <Route path="/product-liberary" element={<ProductLibrary />} />
          <Route path="/product-detail" element={<ProductDetail />} />

          <Route path="/classified-ads" element={<ClassifiedAds />} />
          <Route path="/classified-detail" element={<ClassifiedDetail />} />

          <Route path="/property-listings" element={<PropertyListings />} />
          <Route path="/property-detail" element={<PropertyDetail />} />

          <Route path="/photo-albums" element={<PhotoAlbums />} />
          <Route path="/photo-album-details" element={<PhotoAlbumDetail />} />

          <Route path="/video-library" element={<VideoLibrary />} />
          <Route path="/videodetails" element={<VideoDetail />} />

          {/* ===== DASHBOARD / ADMIN ROUTES (PROTECTED + SIDEBAR) ===== */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <ProtectedLayout>
                  <Dashboard />
                </ProtectedLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/network-operations"
            element={
              <ProtectedRoute>
                <ProtectedLayout>
                  <NetworkOperations />
                </ProtectedLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <ProtectedLayout>
                  <Reports />
                </ProtectedLayout>
              </ProtectedRoute>
            }
          />
          <Route path="/post-job" element={<PostJob />} />
<Route path="/post-ad" element={<PostAd />} />
<Route path="/post-property" element={<PostProperty />} />


          <Route
            path="/admin-shortcuts"
            element={
              <ProtectedRoute>
                <ProtectedLayout>
                  <AdminShortcuts />
                </ProtectedLayout>
              </ProtectedRoute>
            }
          />

          {/* ===== FALLBACK ROUTE ===== */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
