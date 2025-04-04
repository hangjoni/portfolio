import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, FileText, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  cta?: "github" | "arxiv" | "appstore";
  message?: string;
}

// Project data extracted from page.tsx
const projectsData = [
  {
    title: "Build & Train NLP Deep Learning model",
    description:
      "Deep neural network with attention mechanisms to process patient records in natural language format and predict the diagnoses.",
    image: "/hlan.jpg",
    link: "https://github.com/hangjoni/hlan-mimic-project",
    tags: ["Pytorch", "deep learning", "nlp"],
    cta: "github",
    message: "View Code on GitHub",
  },
  {
    title: "Using LLM with Prompt Engineering to Answer Biomedical Questions",
    description:
      'Published a research paper about using two-stage information retrieval system utilizing Retrieval Augmented Generation ("RAG") based on LLMs for biomedical task',
    image: "/bioasq.jpg",
    link: "https://www.arxiv.org/abs/2407.06779",
    tags: ["RAG", "LLMs", "prompt engineering"],
    cta: "arxiv",
    message: "Read Paper on arXiv",
  },
  {
    title: "Resume Agent - Automated Resume Parsing and Formatting tool",
    description:
      "Developed a full-stack application leveraging Large Language Models (LLMs) to automate resume parsing and formatting, enabling users to upload resumes and receive edited and stylized versions.",
    image: "/agent.jpg",
    link: "https://github.com",
    tags: ["Steamlit", "LangChain", "LangSmith", "Docker", "Google Cloud Run"],
    cta: "github",
  },
  {
    title: "Money Marshall - iOS app for tracking shared expenses in groups",
    description:
      "Developed and published a full-stack iOS app using React Native, enabling groups (e.g., friends traveling together) to track shared expenses and settle debts.",
    image: "/moneymarshall.jpg",
    link: "https://apps.apple.com/sg/app/money-marshall-expense-tracker/id6736398320",
    tags: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Jest unit testing",
      "iOS app dev",
    ],
    cta: "appstore",
    message: "Download on App Store",
  },
];

// Component to render a single project card
function ProjectCardItem({
  title,
  description,
  image,
  link,
  tags,
  cta = "github",
  message,
}: ProjectCardProps) {
  // Determine which icon to show based on the cta prop
  const renderIcon = () => {
    switch (cta) {
      case "github":
        return (
          <Github className="h-4 w-4 text-blue-400 dark:text-blue-400 light:text-blue-600" />
        );
      case "arxiv":
        return (
          <FileText className="h-4 w-4 text-blue-400 dark:text-blue-400 light:text-blue-600" />
        );
      case "appstore":
        return (
          <Store className="h-4 w-4 text-blue-400 dark:text-blue-400 light:text-blue-600" />
        );
      default:
        return (
          <Github className="h-4 w-4 text-blue-400 dark:text-blue-400 light:text-blue-600" />
        );
    }
  };

  // Determine the default message based on the cta type if not provided
  const getDefaultMessage = () => {
    switch (cta) {
      case "github":
        return "View on GitHub";
      case "arxiv":
        return "View on arXiv";
      case "appstore":
        return "View on App Store";
      default:
        return "View on GitHub";
    }
  };

  const displayMessage = message || getDefaultMessage();

  return (
    <Card className="card-gradient overflow-hidden flex flex-col h-full border-gray-800 dark:border-gray-800 light:border-gray-200">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105 opacity-80 dark:opacity-80 light:opacity-100"
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="font-semibold text-xl mb-2 text-blue-400 dark:text-blue-400 light:text-blue-600">
          {title}
        </h3>
        <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-gray-800/70 dark:bg-gray-800/70 light:bg-gray-100 px-2 py-1 text-xs font-medium text-blue-300 dark:text-blue-300 light:text-blue-700 ring-1 ring-inset ring-gray-700 dark:ring-gray-700 light:ring-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm hover:underline text-blue-400 dark:text-blue-400 light:text-blue-600"
        >
          {renderIcon()}
          {displayMessage}
        </Link>
      </CardFooter>
    </Card>
  );
}

// Main component that renders all projects
export default function ProjectCard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projectsData.map((project, index) => (
        <ProjectCardItem
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          tags={project.tags}
          cta={project.cta as "github" | "arxiv" | "appstore"}
          message={project.message}
        />
      ))}
    </div>
  );
}
