import { Card, CardContent } from "@/components/ui/card"

const educationData = [
  {
    degree: "AWS Certified Solutions Architect - Associate",
    institution: "",
    year: "On track May 2025",
    description: "",
  },
  {
    degree: "Google Cloud Professional Machine Learning Engineer Certification",
    institution: "",
    year: "2024",
    description: "",
  },
  {
    degree: "Msc. Computer Science - Specialization in Machine Learning",
    institution: "Georgia Institute of Technology",
    year: "2022 – 2024",
    description: "",
  },
  {
    degree: "B.BA. (1st Class Honours)",
    institution: "National University of Singapore",
    year: "2008 – 2012",
    description: "",
  },
]

export default function Education() {
  return (
    <div className="space-y-6">
      {educationData.map((item, index) => (
        <Card
          key={index}
          className="card-gradient overflow-hidden border-gray-800 dark:border-gray-800 light:border-gray-200"
        >
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg text-blue-400 dark:text-blue-400 light:text-blue-600">
                  {item.degree}
                </h3>
                {item.institution && (
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-700">{item.institution}</p>
                )}
              </div>
              <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-500 whitespace-nowrap">
                {item.year}
              </p>
            </div>
            {item.description && (
              <p className="mt-2 text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">{item.description}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

