import CandidateNotfound from "../candidate-notfound";

const ThisWeekApplicants = () => {
  return (
    <div className="container mx-auto px-4 py-6 bg-white rounded-md relative z-20">
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-6">
          <h1 className="text-xl font-bold text-gray-700 mb-4">
            This week&apos;s applicants.
          </h1>
        </div>

        <CandidateNotfound title="Candidate Not Found!" />
      </div>
    </div>
  );
};

export default ThisWeekApplicants;