"use client";

import { updateProfile } from "@/lib/actions";
import { User } from "@prisma/client";
import Image from "next/image";
import { useActionState, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import UpdateButton from "./UpdateButton";

const UpdateUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(false);

  const [state, formAction] = useActionState(updateProfile, { success: false, error: false });

  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    state.success && router.refresh();
  };

  return (
    <div>
      <span
        className="text-blue-500 text-xs cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Update
      </span>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <div className="w-full max-w-xs lg:max-w-2xl xl:max-w-3xl bg-white rounded-lg shadow-md overflow-hidden relative p-6 lg:p-8 xl:p-10">
            <form
              action={(formData) =>
                formAction({ formData, cover: cover?.secure_url || "" })
              }
              className="space-y-4 lg:mt-[-20px] lg:mb-[-25px] xl:mt-[-20px]  xl:mb-[-25px]"
            >
              {/* TITLE */}
              <h1 className="lg:py-2 xl:py-2text-md lg:text-lg xl:text-xl font-semibold ">Update Profile</h1>
              <div className="mt-2 text-xs lg:text-sm xl:text-base text-gray-500">
                Use the navbar profile to change the avatar or username.
              </div>
              {/* COVER PIC UPLOAD */}
              <CldUploadWidget
                uploadPreset="socialify"
                onSuccess={(result) => setCover(result.info)}
              >
                {({ open }) => {
                  return (
                    <div className="mt-4 cursor-pointer" onClick={() => open()}>
                      <label htmlFor="" className="block text-xs lg:text-sm xl:text-base text-gray-500">
                        Cover Picture
                      </label>
                      <div className="flex items-center gap-2 mt-2">
                        <Image
                          src={user.cover || "/noCover.png"}
                          alt="Cover Picture"
                          width={48}
                          height={32}
                          className="w-12 h-8 lg:w-16 lg:h-10 rounded-md object-cover"
                        />
                        <span className="text-xs lg:text-sm xl:text-base underline text-gray-600">
                          Change
                        </span>
                      </div>
                    </div>
                  );
                }}
              </CldUploadWidget>

              {/* FORM FIELDS */}
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-5 xl:gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs lg:text-sm xl:text-[14px] text-gray-500">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder={user.name || "John"}
                    className="ring-1 ring-gray-300 p-2 lg:p-2 xl:p-2 rounded-md text-xs lg:text-sm xl:text-base"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="surname" className="text-xs lg:text-sm xl:text-[14px] text-gray-500">
                    Surname
                  </label>
                  <input
                    type="text"
                    placeholder={user.surname || "Doe"}
                    className="ring-1 ring-gray-300 p-2 lg:p-2 xl:p-2 rounded-md text-xs lg:text-sm xl:text-base"
                    name="surname"
                    id="surname"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="description" className="text-xs lg:text-sm xl:text-[14px] text-gray-500">
                    Description
                  </label>
                  <input
                    type="text"
                    placeholder={user.description || "Life is beautiful..."}
                    className="ring-1 ring-gray-300 p-2 lg:p-2 xl:p-2 rounded-md text-xs lg:text-sm xl:text-base"
                    name="description"
                    id="description"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="city" className="text-xs lg:text-sm xl:text-[14px] text-gray-500">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder={user.city || "New York"}
                    className="ring-1 ring-gray-300 p-2 lg:p-2 xl:p-2 rounded-md text-xs lg:text-sm xl:text-base"
                    name="city"
                    id="city"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="school" className="text-xs lg:text-sm xl:text-[14px] text-gray-500">
                    School
                  </label>
                  <input
                    type="text"
                    placeholder={user.school || "MIT"}
                    className="ring-1 ring-gray-300 p-2 lg:p-2 xl:p-2 rounded-md text-xs lg:text-sm xl:text-base"
                    name="school"
                    id="school"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="work" className="text-xs lg:text-sm xl:text-[14px] text-gray-500">
                    Work
                  </label>
                  <input
                    type="text"
                    placeholder={user.work || "Apple Inc."}
                    className="ring-1 ring-gray-300 p-2 lg:p-2 xl:p-2 rounded-md text-xs lg:text-sm xl:text-base"
                    name="work"
                    id="work"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="website" className="text-xs lg:text-sm xl:text-[14px] text-gray-500">
                    Website
                  </label>
                  <input
                    type="text"
                    placeholder={user.website || "lama.dev"}
                    className="ring-1 ring-gray-300 p-2 lg:p-2 xl:p-2 rounded-md text-xs lg:text-sm xl:text-base"
                    name="website"
                    id="website"
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap w-full gap-2 lg:gap-3 xl:gap-4 items-center">
                <UpdateButton />
                {state.success && (
                  <span className="text-xs lg:text-sm xl:text-base text-green-500">
                    Profile has been updated!
                  </span>
                )}
                {state.error && (
                  <span className="text-xs lg:text-sm xl:text-base text-red-500">
                    Something went wrong!
                  </span>
                )}
              </div>
            </form>
            <button
              type="button"
              className="absolute top-3 right-3 lg:top-4 lg:right-4 xl:top-5 xl:right-5 text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
