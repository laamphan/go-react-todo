import { Box, Button, Container, Flex, Text } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "./ui/color-mode"
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW={"900px"}>
      <Box
        bg={useColorModeValue("gray.400", "gray.700")}
        px={4}
        my={4}
        borderRadius={5}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* LEFT SIDE */}
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
          >
            <Text>Some mindblowing text here</Text>
          </Flex>

          {/* RIGHT SIDE */}
          <Flex alignItems={"center"} gap={3}>
            <Text fontSize={"lg"} fontWeight={500}>
              Tasks
            </Text>

            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}
