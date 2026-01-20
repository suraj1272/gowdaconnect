import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [membershipType, setMembershipType] = useState('free');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await register(email, password, fullName, membershipType);
      navigate('/member-directory');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const plans = [
    {
      id: 'pioneer',
      name: 'PIONEER MEMBERSHIP',
      subtitle: 'For Businesses',
      price: 'Rs. 12000 / Year',
      description: '[100% Business or 100% Money Back Guarantee*]',
      features: [
        'Blog Posts',
        'Post Job Listings',
        'Post Property Listings',
        'Get Customer Leads',
        'Business Profile',
        'Customer Reviews',
        'Exclusive Telegram Group',
        '52 e-Meetups / Year',
        'Verified Tag (Optional @ Extra Rs.)',
        'Pioneer Profile - Example',
      ],
      highlighted: true,
    },
    {
      id: 'basic',
      name: 'BASIC MEMBERSHIP',
      subtitle: 'For Non-Businesses',
      price: 'Rs. 1000 / Year',
      features: [
        'Blog Posts (Non Promotional)',
        'Post Job Listings',
        'Post Property Listings',
        'X',
        'X',
        'X',
        'X',
        'Basic Profile - Example',
      ],
    },
    {
      id: 'free',
      name: 'FREE MEMBERSHIP',
      subtitle: 'Ideal for EVERYONE',
      price: 'Rs. 0 Forever',
      features: Array(8).fill('X'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Join Marathi Connect</h1>
          <p className="text-2xl text-gray-600">Become a Member Of Marathi Connect</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 ${
                plan.highlighted ? 'ring-2 ring-orange-500' : ''
              }`}
            >
              <div className={`${plan.highlighted ? 'bg-orange-500' : 'bg-orange-400'} text-white p-6 text-center`}>
                <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
                <p className="text-sm mb-2">{plan.subtitle}</p>
                <p className="text-lg font-bold">{plan.price}</p>
                {plan.description && <p className="text-xs mt-2">{plan.description}</p>}
              </div>

              <div className="bg-white p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700">
                      {feature === 'X' ? '✗' : feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setMembershipType(plan.id)}
                  className={`w-full py-2 rounded font-bold transition ${
                    membershipType === plan.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {membershipType === plan.id ? 'SELECTED' : 'SELECT PLAN'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Registration Form</h2>

          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Your Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="mb-6 p-4 bg-blue-50 rounded">
              <p className="text-sm text-gray-700">
                <strong>Selected Plan:</strong> {plans.find(p => p.id === membershipType)?.name}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {plans.find(p => p.id === membershipType)?.price}
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-3 rounded transition"
            >
              {loading ? 'Registering...' : 'REGISTER NOW'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-700">
              Already have an account?{' '}
              <Link to="/login" className="text-orange-500 hover:text-orange-600 font-semibold">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
