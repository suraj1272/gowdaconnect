const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        <div>
          <h4 className="font-semibold mb-3">Managed By</h4>
          <p>Suraj Buddodi</p>
          <p>XXXXXXXXXXXXX</p>
          <p>XXXXXXXXXXXXX</p>
          <p>Bangalore - 560037</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Organization</h4>
          <p>About Us</p>
          <p>Become a Member</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Search</h4>
          <p>Member Directory</p>
          <p>Upcoming Events</p>
          <p>Latest Blog</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Website</h4>
          <p>Homepage</p>
          <p>Member Login</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-300 mt-10">
        © 2026 Gowda Connect · All Rights Reserved · Terms of Use · Privacy Policy
      </div>
    </footer>
  );
};

export default Footer;
