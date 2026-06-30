import { use } from "react";
import { FaUserEdit, FaEnvelope, FaCamera } from "react-icons/fa";
import { MdLockReset } from "react-icons/md";
import { AuthContext } from "../../Context/AuthContext";

const MyProfile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="min-h-screen bg-base-200 mt-5">
      {/* Cover Section */}
      <div
        className="hero h-72"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1920&auto=format&fit=crop)",
        }}
      >
        <div className="hero-overlay bg-black/60"></div>

        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="text-5xl font-bold">Welcome 👋</h1>
            <p className="mt-4 text-lg">
              Manage your profile and keep your information up to date.
            </p>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto -mt-16 px-4">
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">

            <div className="flex flex-col md:flex-row items-center gap-8">

              {/* Profile Image */}
              <div className="avatar">
                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/ZYW3VTp/avatar.png"
                    }
                    alt="Profile"
                  />
                </div>
              </div>

              {/* User Information */}
              <div className="flex-1 space-y-4">

                <div>
                  <h2 className="text-3xl font-bold">
                    {user?.displayName || "No Name"}
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-lg">
                  <FaEnvelope className="text-primary" />
                  <span>{user?.email}</span>
                </div>

                <div className="divider"></div>

                {/* Update Features */}
                <h3 className="text-xl font-semibold">
                  Update Features
                </h3>

                <div className="flex flex-wrap gap-4">

                  <button className="btn btn-primary">
                    <FaUserEdit />
                    Update Profile
                  </button>

                  <button className="btn btn-outline">
                    <FaCamera />
                    Change Photo
                  </button>

                  <button className="btn btn-secondary">
                    <MdLockReset />
                    Change Password
                  </button>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;