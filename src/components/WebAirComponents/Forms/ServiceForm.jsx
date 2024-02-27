import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Grid,
  Switch,
  Flex,
  GridItem,
} from "@chakra-ui/react";
export default function StoreForm() {
  // TODO verificar como funcionan los hooks useCreateCabin y useEditCabin
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    //TODO deshacerse del console log
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid gap="20px" templateColumns="1fr 1fr">
        <GridItem>
          <FormControl isInvalid={errors.serviceId}>
            {/* If invalid, side effects are: The form will have aria invalid set to true. */}
            <FormLabel htmlFor="serviceId">サービスID</FormLabel>
            <Input
              id="serviceId"
              placeholder="unchangeableValue"
              {...register("serviceId", {
                required: "必須",
                //   minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              //   TODO llevarse este isReadOnly a todos lados dentro de la app.
              isReadOnly
              value="unchangeableValue"
            />
            <FormErrorMessage>
              {errors.serviceId && errors.serviceId.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isInvalid={errors.serviceName}>
            {/* If invalid, side effects are: The form will have aria invalid set to true. */}
            <FormLabel htmlFor="serviceName">サービス名</FormLabel>
            <Input
              id="serviceName"
              placeholder="サービス名"
              {...register("serviceName", {
                required: "必須",
                maxLength: { value: 20, message: "最大文字数は２０" },
              })}
            />
            <FormErrorMessage>
              {errors.serviceName && errors.serviceName.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <FormControl isInvalid={errors && errors.isDisabled}>
          <Flex>
            <FormLabel htmlFor="isDisabled">無効</FormLabel>
            <Switch id="isDisabled" {...register("isDisabled")} />
            {errors && errors.isDisabled && (
              <FormErrorMessage>{errors.isDisabled.message}</FormErrorMessage>
            )}
          </Flex>
        </FormControl>
      </Grid>

      <Button mt={4} variant="brand" isLoading={isSubmitting} type="submit">
        登録
      </Button>
    </form>
  );
}
