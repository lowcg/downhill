import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Academy of Technology</title>
      </Head>
      <Navbar alwaysSolid />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform sm:skew-y-0 sm:rotate-6 rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <h1 className="text-2xl font-semibold">Contact Us</h1>
              <p className="mt-4 text-lg font-medium">Academy of Technology</p>
              <p className="text-gray-600">
                G.T.ROAD (ADISAPTAGRAM), AEDCONAGAR, HOOGHLY-712121 WEST BENGAL,
                INDIA
              </p>

              <div className="mt-6">
                <h2 className="text-xl font-semibold">Admission Office</h2>
                <p className="text-gray-600">
                  Tel.: +91-98310-21706 / +91-98310-21641
                </p>
                <p className="text-gray-600">
                  Email:{" "}
                  <a
                    href="mailto:admission@aot.edu.in"
                    className="text-blue-500"
                  >
                    admission@aot.edu.in
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold">
                  Director/ Principal Office
                </h2>
                <p className="text-gray-600">
                  Tel.: +91-9830196317 / +91-9073360791
                </p>
                <p className="text-gray-600">
                  Email:{" "}
                  <a href="mailto:academy@aot.edu.in" className="text-blue-500">
                    academy@aot.edu.in
                  </a>{" "}
                  /{" "}
                  <a
                    href="mailto:principal@aot.edu.in"
                    className="text-blue-500"
                  >
                    principal@aot.edu.in
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold">Academic & Exam. Dept</h2>
                <p className="text-gray-600">Tel.: +91-9073360791</p>
                <p className="text-gray-600">
                  Email:{" "}
                  <a href="mailto:oicexam@aot.edu.in" className="text-blue-500">
                    oicexam@aot.edu.in
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold">Admin Dept</h2>
                <p className="text-gray-600">Tel.: +91-9830161441</p>
                <p className="text-gray-600">
                  Email:{" "}
                  <a href="mailto:admin@aot.edu.in" className="text-blue-500">
                    admin@aot.edu.in
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold">Account Section</h2>
                <p className="text-gray-600">Tel.: +91-9073360790</p>
                <p className="text-gray-600">
                  Email:{" "}
                  <a
                    href="mailto:accounts@aot.edu.in"
                    className="text-blue-500"
                  >
                    accounts@aot.edu.in
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold">Training Dept</h2>
                <p className="text-gray-600">Tel.: +91-9073360792</p>
                <p className="text-gray-600">
                  Email:{" "}
                  <a
                    href="mailto:training@aot.edu.in"
                    className="text-blue-500"
                  >
                    training@aot.edu.in
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold">
                  Corporate Relation Office
                </h2>
                <p className="text-gray-600">
                  CA-150, SALT LAKE, SECTOR-1, KOLKATA-700 064
                </p>
                <p className="text-gray-600">
                  Tel: +91-9830156906 / +91-9830156907
                </p>
                <p className="text-gray-600">
                  Email:{" "}
                  <a
                    href="mailto:placement@aot.edu.in"
                    className="text-blue-500"
                  >
                    placement@aot.edu.in
                  </a>
                  ,{" "}
                  <a
                    href="mailto:corporaterelations@aot.edu.in"
                    className="text-blue-500"
                  >
                    corporaterelations@aot.edu.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
