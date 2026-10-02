import IndustryDetailHero from "./IndustryDetailHero";
import IndustryDetailSections from "./IndustryDetailSections";
import IndustryDetailCTA from "./IndustryDetailCTA";

const IndustryDetailPage = ({ industry }) => {
  return (
    <main className="bg-white text-wastely-ink">
      <IndustryDetailHero industry={industry} />
      <IndustryDetailSections industry={industry} />
      <IndustryDetailCTA industry={industry} />
    </main>
  );
};

export default IndustryDetailPage;
