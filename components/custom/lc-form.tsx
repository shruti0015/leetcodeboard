"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useEffect } from "react"

const formSchema = z.object({
  id: z
    .string()
    .transform((val) => val.replace(/^0+/, ""))
    .refine((val) => /^\d+$/.test(val), {
      message: "ID must be a positive integer",
    })
    .refine((val) => parseInt(val) > 0, {
      message: "ID must be a positive integer",
    }),
})

export function MyForm() {
  const router = useRouter()
  const pathname = usePathname()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: undefined,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const idValue = values.id
    router.push(`/problems/${idValue}`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter the problem ID" {...field} />
              </FormControl>
              <FormDescription>
                Redirects you to the specific problem whiteboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
