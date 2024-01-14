"use client";

import { Form } from "@/components/ui/form";
import H1 from "@/components/ui/h1";

// because Metadata cannot be in client component, so I create this component
export default function NewJobForm() {
  return (
    <main className="m-auto my-10 max-w-3xl space-y-10">
      <div className="space-y-5 text-center">
        <H1>Find your perfect job</H1>
        <p className="text-muted">
          Get your job posting seen by thousands of job seekers
        </p>
      </div>
      <div className="space-y-6 rounded-lg border p-4">
        <div>
          <h2 className="font-semibold">Job details</h2>
          <p className="text-muted-foreground">
            Provide a job description and details
          </p>
        </div>

        <Form>
          
        </Form>
      </div>
    </main>
  );
}
