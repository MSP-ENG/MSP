import { Link } from "react-router-dom";
import madhupImg from "../../public/team/madhup-singh.jpeg"; // adjust extension/path to match your actual file

export default function MadhupSingh() {
  return (
    <div className="min-h-screen bg-[#0a1a2f] text-white py-16 px-6 md:px-20">
      <Link
        to="/"
        className="inline-block mb-10 text-sm text-yellow-500 hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="grid md:grid-cols-[350px_1fr] gap-12 items-start">
        {/* Photo */}
        <img
          src={madhupImg}
          alt="Mr. Madhup Singh"
          className="w-full rounded-xl shadow-lg object-cover"
        />

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold text-yellow-500">
            Mr. Madhup Singh
          </h1>
          <h2 className="text-lg font-bold text-gray-300 mt-1 mb-6">Director</h2>
          <h2 className="text-lg font-bold text-gray-300 mt-1 mb-6">B.TECH ( CIVIL ENG.) </h2>
          <p className="text-gray-20 leading-relaxed mb-4">
            {/* Replace with Madhup Singh's actual bio */}
            Mr. Madhup Singh leads MSP ENGINEERING CONSULTANT PVT LTD as Director, overseeing engineering
            operations, project execution, and client relationships. He
            brings a strong focus on quality, timelines, and building
            long-term partnerships with clients across the industry.
          </p>

          <h2 className="text-xl font-semibold text-yellow-500 mt-8 mb-3">
            Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            {/* Replace with real credentials/experience */}
            <li>"Extensive expertise in Pharmaceuticals, APIs, and allied project management."</li>
            <li>"Specializes in project coordination, scheduling, monitoring, and cost optimization.",</li>
            <li>"Skilled at navigating complexities and delivering innovative, result-oriented solutions.",</li>
            <li>"Proven track record in managing successful projects with precision and efficiency.",</li>
            <li>"Renowned as a problem solver, dedicated to achieving organizational goals.",</li>
            <li>"Hands-on experience leading international projects including:
              <ul className="list-disc list-inside text-gray-20 space-y-2"></ul>
               <li>Elixir Pharmaceuticals (Saudi Arabia)</li>
               <li>Hester Bioscience (Tanzania)</li>
               <li> Himalaya (Dubai)</li>
               <li>Glenmark Pharmaceuticals Ltd.</li>and several other key initiatives."</li>
            </ul>
        </div>
      </div>
    </div>
  );
}