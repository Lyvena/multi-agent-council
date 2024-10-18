import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const proposalSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long'),
  description: z.string().min(20, 'Description must be at least 20 characters long'),
  impact: z.string().min(10, 'Impact statement must be at least 10 characters long'),
});

const ProposalForm = () => {
  const form = useForm<z.infer<typeof proposalSchema>>({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      title: '',
      description: '',
      impact: '',
    },
  });

  const { toast } = useToast();

  const onSubmit = (values: z.infer<typeof proposalSchema>) => {
    // Here you would typically send the proposal to your backend
    console.log(values);
    toast({
      title: "Proposal Submitted",
      description: "Your proposal has been successfully submitted for review.",
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proposal Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter the title of your proposal" {...field} />
              </FormControl>
              <FormDescription>
                Provide a clear and concise title for your proposal.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your proposal in detail"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Explain the details of your proposal and its objectives.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="impact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expected Impact</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the expected impact of your proposal"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Outline the potential effects and benefits of implementing this proposal.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit Proposal</Button>
      </form>
    </Form>
  );
};

export default ProposalForm;