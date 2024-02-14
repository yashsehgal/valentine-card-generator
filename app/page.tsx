import { Button } from "@/components/button";
import CardPreview from "@/components/meme-preview";
import GeneratorForm from "@/components/generator-form";
import { ViewContainer } from "@/components/view-container";
import TemplateContextProvider from "@/providers/template-context-provider";

export default function HomePage() {
  return <div className="page-container home-page py-12">
    <ViewContainer>
      <header className="flex flex-row items-center justify-between">
        <h1 className="leading-snug tracking-tighter font-bold text-3xl">
          {"Valentine Card Generator 🩷"}
        </h1>
        <Button variant="gloss">
          {"Share on Twitter/X"}
        </Button>
      </header>
      <TemplateContextProvider>
        <div className="template-generator-container flex flex-row items-start justify-between mt-24 w-full gap-12">
          <GeneratorForm />
          <CardPreview />
        </div>
      </TemplateContextProvider>
    </ViewContainer>
  </div>
}