import { Card, CardContent } from "@/components/ui/card"

const experienceData = [
  {
    title: "Customer Data Scientist",
    company: "Smartly.io (Ad Tech SaaS, Facebook Marketing Partner)",
    location: "Singapore",
    period: "2018 - 2023",
    responsibilities: [
      "Led Proof-of-Concept (PoC) trials for clients in partnership with the sales team. Advised clients on measurement and attribution topics; analyzed ad accounts and identified marketing campaign optimization opportunities.",
      "Designed and interpreted A/B tests, randomized control experiments to drive marketing decisions.",
      "Built Tableau dashboards, providing tailored vertical trends, seasonality insights for clients, driving $160K incremental servicing revenue annually (+15%) for the company.",
      "Conducted workshops and demos to demystify complex concepts like marketing attribution and hypothesis testing for non-technical stakeholders; achieved a 30% uptick in product adoption and elevated client satisfaction.",
    ],
  },
  {
    title: "Regional Enterprise Sales",
    company: "Smartly.io",
    location: "Singapore",
    period: "2017 - 2018",
    responsibilities: [
      "Secured new enterprise clients via outbound sales and solutions selling, conducted product demos, and gave presentations at industry conferences. Achieved 103% sales target.",
    ],
  },
  {
    title: "Account Manager",
    company: "Google",
    location: "Singapore",
    period: "2014 - 2017",
    responsibilities: [
      "Built the agency business from the ground up. Navigated stakeholder maps at agencies, identified key partners with aligned interests, and built win-win partnerships via training, joint lead-generating events and co-pitching commitments.",
      "Conducted training and workshops, improving agency partners' proficiency with Google products.",
      "Results: Grew acquisition via agencies by 250%, 3x faster than the overall agency cluster.",
    ],
  },
  {
    title: "Credit Analyst, Corporate Banking",
    company: "BNP Paribas",
    location: "Singapore",
    period: "2012 – 2014",
    responsibilities: [
      "Managed credit risk for ~$2M corporate banking deals by critically analyzing financials, proposing risk mitigations, and presenting in credit committees; aligned relationship managers with risk officers.",
    ],
  },
]

export default function WorkExperience() {
  return (
    <div className="space-y-8">
      {experienceData.map((job, index) => (
        <Card
          key={index}
          className="card-gradient overflow-hidden border-gray-800 dark:border-gray-800 light:border-gray-200"
        >
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="font-semibold text-lg text-blue-400 dark:text-blue-400 light:text-blue-600">
                  {job.title}
                </h3>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                  {job.company} • {job.location}
                </p>
              </div>
              <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-500 whitespace-nowrap">
                {job.period}
              </p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              {job.responsibilities.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

