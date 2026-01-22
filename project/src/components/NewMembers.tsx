import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import ProfileCard from "./ProfileCard"; 

const NewMembers = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewMembers = async () => {
      try {
        const response = await axios.get("/users/new-members");
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching new members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewMembers();
  }, []);

  const handleViewProfile = (member) => {
    navigate("/member-profile", { state: { member } });
  };

  const handleViewAll = () => {
    navigate("/member-result");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">New Members</h2>
            <p className="text-sm text-gray-500 mt-1">Joined in the last 10 days</p>
          </div>

          <button
            onClick={handleViewAll}
            className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 text-sm text-white font-medium rounded shadow-sm hover:shadow-md"
          >
            View All
          </button>
        </div>

        {/* Content */}
        {members.length === 0 ? (
          <div className="text-center py-10 text-gray-500 bg-white rounded-lg shadow-sm">
            <p>No new members have joined in the last 10 days.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map((member) => {
              // --- SAFETY CHECKS ---
              // Use fullName from your schema. Fallback to empty string to prevent crashes.
              const name = member.fullName || "New Member";
              
              // Generate a safe handle (username) from the name
              const handle = name.split(" ")[0]?.toLowerCase() || "user";
              
              // Use businessName or city as the title/status
              const title = member.businessName || "Member";
              const location = member.city || "Online";

              return (
                <div key={member._id} className="w-full max-w-[300px] mx-auto">
                  <ProfileCard
                    name={name}
                    title={title}
                    handle={handle}
                    status={location}
                    contactText="View Profile"
                    
                    // --- COMMENTED OUT IMAGES AS REQUESTED ---
                    // Since you don't have images yet, we pass empty strings or safe defaults.
                    // The ProfileCard has internal fallbacks if these are empty.
                    avatarUrl="" 
                    // avatarUrl={member.profileImage ? `http://localhost:5000/${member.profileImage}` : ""}
                    
                    miniAvatarUrl=""
                    // miniAvatarUrl={member.profileImage ? `http://localhost:5000/${member.profileImage}` : ""}
                    
                    // Component Props
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => handleViewProfile(member)}
                    showIcon={false}
                    
                    // Theming (Orange Glow)
                    showBehindGlow={true}
                    behindGlowColor="rgba(255, 165, 0, 0.4)" 
                    behindGlowSize="60%"
                    innerGradient="linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,165,0,0.15) 100%)"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewMembers;