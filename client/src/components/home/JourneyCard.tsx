type JourneyCardProps = {
  emoji: string;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
};

function JourneyCard({
  emoji,
  title,
  description,
  selected,
  onClick,
}: JourneyCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
group
flex
flex-col
items-center
rounded-3xl
border
p-8
text-center
transition-all
duration-300

${
selected
? "border-blue-600 bg-blue-50 shadow-xl scale-105"
: "border-slate-200 bg-white hover:-translate-y-2 hover:scale-105 hover:border-blue-300 hover:shadow-xl"
}
`}
    >
      <span className="text-5xl">{emoji}</span>

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm text-slate-600">
        {description}
      </p>
    </button>
  );
}

export default JourneyCard;