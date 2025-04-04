import { Card } from "@/components/ui/card"

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "R", "JavaScript", "SQL"],
  },
  {
    category: "Data Science & ML",
    skills: ["PyTorch", "LangChain", "Spark", "Hadoop", "A/B Testing", "Statistical Analysis"],
  },
  {
    category: "Data Visualization & BI",
    skills: ["Tableau", "D3", "Data Storytelling"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Google Cloud", "Docker", "Git"],
  },
  {
    category: "Data Engineering",
    skills: ["dbt", "Snowflake", "Data Pipelines"],
  },
]

export default function Skills() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {skillsData.map((category) => (
        <Card
          key={category.category}
          className="card-gradient border-gray-800 dark:border-gray-800 light:border-gray-200 p-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-blue-400 dark:text-blue-400 light:text-blue-600">
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-gray-800/70 dark:bg-gray-800/70 light:bg-gray-100 px-2 py-1 text-sm font-medium text-blue-300 dark:text-blue-300 light:text-blue-700 ring-1 ring-inset ring-gray-700 dark:ring-gray-700 light:ring-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

