import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";
import { FaUser } from "react-icons/fa";

export default function UserShowcase() {
  // Info: This should be a mere presentational component.
  // State management should be done in the component, rather than the page.
  const textColorBrand = useColorModeValue("brand.500", "white");
  // TODO Conditionally render the Chakra Badge
  // TODO Extract the actual values from the store prop

  const textColor = useColorModeValue("navy.700", "white");
  const secondaryColor = useColorModeValue("secondaryGray.600", "white");

  function AuthorsSignature({ modifiedBy, modifiedAt, createdBy, createdAt }) {
    function Info({ topLabel, topValue, bottomLabel, bottomValue }) {
      return (
        <Grid templateColumns="1fr 2fr" columnGap="10px">
          <Text fontSize="sm" color={secondaryColor} fontWeight="600">
            {topLabel}
          </Text>
          <Text fontSize="sm" color={secondaryColor} fontWeight="200">
            {topValue}
          </Text>
          <Text fontSize="sm" color={secondaryColor} fontWeight="600">
            {bottomLabel}
          </Text>
          <Text fontSize="sm" color={secondaryColor} fontWeight="200">
            {bottomValue}
          </Text>
        </Grid>
      );
    }
    return (
      <Container mr="0px" pr="0px">
        <Flex justify="flex-end" gap="20px">
          <Info
            topLabel="作成者"
            topValue={createdBy}
            bottomLabel="作成日時"
            bottomValue={createdAt}
          />
          <Info
            topLabel="編集者"
            topValue={modifiedBy}
            bottomLabel="編集日時"
            bottomValue={modifiedAt}
          />
        </Flex>
      </Container>
    );
  }

  function LabelGroup({ label, value, row }) {
    return (
      <GridItem gridColumn={row ? "1/-1" : ""}>
        <Text fontSize="xs" color={textColor} fontWeight="600">
          {label}
        </Text>
        <Text fontSize="lg">{value}</Text>
      </GridItem>
    );
  }
  // TODO Table definition: userId, loginId, userName, note, email, disabled
  // TODO Table definition: headquarter[], stores[], services[],
  // TODO Table definition: authors

  return (
    <Card shadow="xl" overflow="hidden" width="100%" borderRadius={20}>
      <CardHeader variant bg="secondaryGray.300">
        <Heading size="md" color="white">
          <Flex gap="0px" direction="row">
            <Box>
              <span>
                <Icon
                  as={FaUser}
                  width="24px"
                  height="24px"
                  color={textColorBrand}
                  mr="18px"
                />
              </span>
              <Text display="inline-block" lineHeight="100%" color="brand.200">
                ***ユーザ名***
              </Text>
            </Box>
            <Box>
              <Badge
                ml="10"
                fontSize="0.8em"
                colorScheme="green"
                variant="solid"
              >
                有効
              </Badge>
              <Badge ml="10" fontSize="0.8em" colorScheme="red" variant="solid">
                無効
              </Badge>
            </Box>
          </Flex>
        </Heading>
      </CardHeader>
      <CardBody>
        <Container>
          {/*  // TODO Table definition: , , , note, , disabled
  // TODO Table definition: headquarter[], stores[], services[], */}

          <Grid templateColumns="1fr 1fr" rowGap="10px" gridColumnGap="">
            <LabelGroup label="ユーザID" value="***userId***" />
            <LabelGroup label="メールアドレス" value="***email***" />
            <LabelGroup label="ユーザ名" value="***userName***" />
            <LabelGroup label="ログインID" value="***loginID***" />
            {/* <LabelGroup label="メールアドレス" value="***:some email***" row /> */}
            {/* <LabelGroup label="FTPユーザ" value="***FTPUser***" />
            <LabelGroup label="FTPパスワード" value="***FTPPass***" /> */}
          </Grid>
        </Container>
      </CardBody>
      <CardFooter pt="0px">
        <AuthorsSignature
          modifiedBy="Author 1"
          modifiedAt="Date 1"
          createdBy="Author 2"
          createdAt="Date 2"
        />
      </CardFooter>
    </Card>
  );
}
