import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { meetingsInsertSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { GeneratedAvatar } from "@/components/generated-avatat";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { meetingGetOne } from "../types";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { CommandSelect } from "@/components/command-select";
import { NewAgentDialog } from "@/modules/agents/ui/new-agent-dialog";

interface MeetingFormProps {
  onSuccess?: (id?:string) => void;
  onCancel?: () => void;
  initialValues?: meetingGetOne;
}

export const MeetingForm = ({
  onSuccess,
  onCancel,
  initialValues,
}: MeetingFormProps) => {

  const [agentSearch,setAgentSearch] = useState("")
  const [openNewAgentDialog,setOpenNewAgentDialog] = useState(false)



  const trpc = useTRPC();
  const router = useRouter();
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof meetingsInsertSchema>>({
    resolver: zodResolver(meetingsInsertSchema),
    defaultValues: {
      name: initialValues?.name ?? "",
      agentId:initialValues?.agentId ?? "",
    },
  });


  const agents = useQuery(
    trpc.agents.getMany.queryOptions({
      pageSize: 100, 
      search:agentSearch
    })
  )

  const createMeeting = useMutation(
    trpc.meetings.create.mutationOptions({
      onSuccess: async (data) => {
        queryClient.invalidateQueries(trpc.meetings.getMany.queryOptions({}));
        if (initialValues?.id) {
          queryClient.invalidateQueries(
            trpc.meetings.getOne.queryOptions({
              id: initialValues.id,
            })
          );
        }
        onSuccess?.(data?.id);
      },
      onError: (error) => {
        console.log(error.message);

        toast.error(error.message);
      },
    })
  );

  const updateMeeting = useMutation(
    trpc.meetings.update.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.meetings.getMany.queryOptions({}));
        if (initialValues?.id) {
          queryClient.invalidateQueries(
            trpc.meetings.getOne.queryOptions({
              id: initialValues.id,
            })
          );
        }
        onSuccess?.();
      },
      onError: (error) => {
        console.log(error.message);

        toast.error(error.message);
      },
    })
  );

  const isEdit = !!initialValues?.id;
  const isPending = createMeeting.isPending || updateMeeting.isPending;

  const onSubmit = (values: z.infer<typeof meetingsInsertSchema>) => {
    if (isEdit) {
      updateMeeting.mutate({ ...values, id: initialValues.id });
    } else {
      createMeeting.mutate(values);
    }
  };

  return (
    <>
    {openNewAgentDialog && <NewAgentDialog open={openNewAgentDialog} onOpenChange={setOpenNewAgentDialog}/>}
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
       
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="tracking-tight">Name</FormLabel>
              <FormControl>
                <Input
                  className="tracking-tighter "
                  placeholder="Meeting Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="agentId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="tracking-tight">Select agent</FormLabel>
              <FormControl>
                <CommandSelect
                options={(agents.data?.item ?? []).map((agent) =>({
                  id:agent.id,
                  value:agent.id,
                  children: (
                    <div className="flex items-center gap-x-2">
                      <GeneratedAvatar
                      seed={agent.name}
                      variant="botttsNeutral"
                      className="size-6 border"
                      />
                      <span>{agent.name}</span>
                    </div>
                  )
                }))}
                onSelect={field.onChange}
                onSearch={setAgentSearch}
                value={field.value}
                placeholder="Select an agent"
                />
              </FormControl>
              <FormDescription className="tracking-tighter">
                Not found what you're looking for ?{" "}
                <Button
                type="button"
                className="text-primary hover:bg-transparent bg-transparent shadow-none hover:underline"
                onClick={()=>setOpenNewAgentDialog(true)}
                >
                  Create new agent
                </Button>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between gap-x-2">
          {onCancel && (
            <Button
              variant="ghost"
              disabled={isPending}
              type="button"
              onClick={() => onCancel()}
            >
              Cancel
            </Button>
          )}
          <Button type="submit" disabled={isPending} className="">
            {isEdit ? "Update" : "Create"}
          </Button>
        </div>
      </form>
    </Form>
    </>
  );
};
