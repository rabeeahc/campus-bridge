import { useState } from "react";
import Container from "../ui/Container";
import JourneyCard from "./JourneyCard";
import { journeys } from "../../data/journeys";
import ChecklistItem from "./ChecklistItem";

function JourneySection() {
  const [selectedJourney, setSelectedJourney] = useState("Accepted");

  const currentJourney = journeys.find(
    (journey) => journey.title === selectedJourney
  );

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Where are you in your journey?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Choose your current stage and we'll guide you through the next
            steps.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {journeys.map((journey) => (
            <JourneyCard
              key={journey.id}
              emoji={journey.emoji}
              title={journey.title}
              description={journey.description}
              selected={selectedJourney === journey.title}
              onClick={() => setSelectedJourney(journey.title)}
            />
          ))}
        </div>

        {currentJourney && (
  <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg">

    {/* Header */}
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-bold text-slate-900">
          {currentJourney.emoji} {currentJourney.title}
        </h3>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          0 / {currentJourney.checklist.length} completed
        </span>
      </div>

      <p className="mt-4 text-slate-600">
        {currentJourney.description}
      </p>
    </div>

    {/* Progress Bar */}
    <div className="mb-8">
      <div className="h-2 w-full rounded-full bg-slate-200">
        <div className="h-2 w-0 rounded-full bg-blue-600"></div>
      </div>
    </div>

    {/* Checklist */}
    <div className="space-y-4">
    {currentJourney.checklist.map((item) => (
  <ChecklistItem
    key={item.title}
    title={item.title}
    info={item.info}
  />
))}
    </div>

  </div>
)}
      </Container>
    </section>
  );
}

export default JourneySection;