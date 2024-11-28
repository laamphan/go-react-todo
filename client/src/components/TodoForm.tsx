import { Button, Flex, Input, Spinner } from "@chakra-ui/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { FormEvent, useState } from "react"
import { IoMdAdd } from "react-icons/io"
import { BASE_URL } from "../App"

export default function TodoForm() {
  const [newTodo, setNewTodo] = useState("")

  const queryClient = useQueryClient()
  const { mutate: createTodo, isPending: isCreating } = useMutation({
    mutationKey: ["createTodo"],
    mutationFn: async (e: FormEvent) => {
      e.preventDefault()
      if (!newTodo) {
        return alert("Please enter a task")
      }

      try {
        const res = await fetch(BASE_URL + `/todos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ body: newTodo }),
        })
        const data = await res.json()

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong!")
        }

        setNewTodo("")
      } catch (error) {
        console.log(error)
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      })
    },
    onError: (error) => {
      console.log(error.message)
    },
  })

  return (
    <form onSubmit={createTodo}>
      <Flex gap={2}>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          ref={(input) => input && input.focus()}
        />
        <Button mx={2} type="submit" _active={{ transform: "scale(.97)" }}>
          {isCreating ? <Spinner size="xs" /> : <IoMdAdd size={30} />}
        </Button>
      </Flex>
    </form>
  )
}
