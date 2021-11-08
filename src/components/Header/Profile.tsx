import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {!!showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Huriel Lopes</Text>
          <Text color="gray.300" fontSize="small">
            huriel-lopes@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Huriel Lopes" src="https://github.com/huri3l.png" />
    </Flex>
  );
}
