import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../../Store/Firebase';
import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default function Profile() {
  const navigate = useNavigate();
  const { auth, user, firestore } = useContext(FirebaseContext);

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    createdAt: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/account'); // redirect if not logged in
      return;
    }

    // Fetch profile from Firestore
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const docRef = doc( firestore, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfile(docSnap.data());
        } else {
          console.log('No user profile found!');
        }
      } catch (err) {
        console.error('Error fetching profile:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user, navigate, firestore]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/account');
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="container py-5">
      {/* USER INFO */}
      <div className="card p-4 mb-4 shadow-sm">
        <h3>My Account</h3>
        <hr />
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>User ID:</strong> {user?.uid}</p>

        <button className="btn btn-danger mt-2" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* DASHBOARD */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card p-4 text-center h-100">
            <h5>📦 My Orders</h5>
            <p>Track your previous purchases</p>
            <Link to="/orders" className="btn btn-dark">View Orders</Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 text-center h-100">
            <h5>🛒 My Cart</h5>
            <p>Items waiting for checkout</p>
            <Link to="/addcart" className="btn btn-primary">Go to Cart</Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 text-center h-100">
            <h5>📍 Address</h5>
            <p>Manage shipping address</p>
            <Link to="/address" className="btn btn-success">Manage</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
