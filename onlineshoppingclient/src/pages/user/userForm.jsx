import {
  User,
  Mail,
  Lock,
  Eye
} from "lucide-react";

function UserForm({
  user,
  error,
  handleChange,
  handleSubmit,
  submitText,
  loginAction
}) {

  return (

    <div className="max-w-md mx-auto mt-6">

      {/* Outer Container */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200">

          {/* Header */}
          <div className="border-b border-gray-200 px-8 py-6 bg-[#F3F5F7] rounded-t-2xl">

            <h2 className="text-2xl font-semibold text-gray-800">
              Register User
            </h2>

            <p className="text-gray-500 mt-1">
              Fill in the details below
            </p>

          </div>

          {/* Body */}
          <div className="p-8">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Full Name */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Name
                </label>

                <div className="relative">

                  <User
                    size={20}
                    className="
                                absolute left-4 top-1/2 -translate-y-1/2
                                text-gray-400
                              "
                  />
                  <input
                    type="text"
                    name="fullName"
                    value={user.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="
        w-full border border-gray-300 rounded-xl
        pl-12 pr-4 py-3
        focus:outline-none
        focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500
                          transition
                        "
                  />

                </div>

              </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Email
                </label>
                <div className="relative">

                  <Mail
                    size={20}
                    className="
                                absolute left-4 top-1/2 -translate-y-1/2
                                text-gray-400
                              "
                  />
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="
        w-full border border-gray-300 rounded-xl
        pl-12 pr-4 py-3
        focus:outline-none
        focus:ring-2 focus:ring-blue-500
        focus:border-blue-500
        transition
      "
                  />

                </div>

              </div>

              {/* Password */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Password
                </label>

                <div className="relative">

                  <Lock
                    size={20}
                    className="
                            absolute left-4 top-1/2 -translate-y-1/2
                            text-gray-400
                          "
                  />

                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="
                              w-full border border-gray-300 rounded-xl
                              pl-12 pr-12 py-3
                              focus:outline-none
                              focus:ring-2 focus:ring-blue-500
                              focus:border-blue-500
                              transition
                            "
                  />

                  <Eye
                    size={20}
                    className="
                                absolute right-4 top-1/2 -translate-y-1/2
                                text-gray-400 cursor-pointer
                              "
                  />

                </div>

              </div>

              {/* Error */}
              {error && (
                <p className="text-red-500 text-sm">
                  {error}
                </p>
              )}

              {/* Buttons */}
              <div className="pt-4 flex gap-4">

                <button
                  type="submit"
                  className="
                    bg-blue-500 hover:bg-blue-600 text-white
                    px-6 py-3 rounded-xl font-medium transition
                  "
                >
                  {submitText}
                </button>

                <button
                  type="button"
                  onClick={loginAction}
                  className="
                    bg-red-500 hover:bg-red-600 text-white
                    px-6 py-3 rounded-xl font-medium transition
                  "
                >
                  Login
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
}

export default UserForm;