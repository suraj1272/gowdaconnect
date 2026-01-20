import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { MemberDirectory } from './pages/MemberDirectory';
import  MemberProfile  from './components/MemberProfile';
import MemberResult from './components/MemberResult';
import WebsiteBlog from './components/Websiteblog';
import MemberReviews from './components/MembersReview';
import MembersByCity from './components/MembersByCity';
import ProductLibrary from './components/ProductLibrary';
import ClassifiedAds from './components/ClassifiedAds';
import PropertyListings from './components/PropertyListings';
import PhotoAlbums from './components/PhotoAlbums';
import VideoLibrary from './components/VideoLibrary';
import VideoDetail from './components/VideoDetail';
import PhotoAlbumDetail from './components/PhotoAlbumDetails';
import PropertyDetail from './components/PropertyDetail';
import ClassifiedDetail from './components/ClassifiedDetail';
import ProductDetail from './components/ProductDetail';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/member-directory"
            element={
              <ProtectedRoute>
                <MemberDirectory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/member-profile"
            element={
            
                <MemberProfile />
            
            }
          />
          <Route
            path="/member-result"
            element={
          
                <MemberResult />
          
            }
          />
          <Route
            path="/website-blog"
            element={
          
                <WebsiteBlog />
          
            }
          />
          <Route path='/review'
          element={
            <MemberReviews />
          }
          />
          <Route path='/members-by-city'
          element={
            <MembersByCity />
          }
          />
          {/* <Route 
            path="/member-details"
            element={
                <MemberDetails />
            }
          /> */}
          <Route path='/product-liberary'
          element={<ProductLibrary />}
          />
          <Route path='/classified-ads'
          element={<ClassifiedAds />}
          />
          <Route path='/property-listings'
          element={<PropertyListings />}
          />
          <Route path='/photo-albums'
          element={<PhotoAlbums />}
          />
          <Route path='/video-library'
          element={<VideoLibrary />}
          />
          <Route path='/videodetails'
          element={<VideoDetail />}
          />
          <Route path='/photo-album-details'
          element={<PhotoAlbumDetail />}
          />
          <Route path='/property-detail'
          element={<PropertyDetail />}
          />
          <Route path='/classified-detail'
          element={<ClassifiedDetail />}
          />
          <Route path='/product-detail'
          element={<ProductDetail />}
          />
          <Route path='/blog-detail'
          element={<BlogDetail />}
          />
          <Route path='/contact-us'
          element={<Contact />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
