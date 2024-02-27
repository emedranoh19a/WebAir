import { useFieldArray, useForm } from "react-hook-form";
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
//TODO // Refactor: Esto deberia ser reusable para Edit session.
export default function UserForm() {
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
  //Probablemente no seas necesarios.
  function englishValidation(str) {
    str = str == null ? "" : str;
    return str.match(/^[A-Za-z0-9]*$/) ? true : false;
  }
  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
  }

  // serviceId, serviceName, authors, disabled.
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid gap="20px" templateColumns="1fr 1fr">
        <GridItem>
          <FormControl isInvalid={errors.hqCd}>
            {/* If invalid, side effects are: The form will have aria invalid set to true. */}
            <FormLabel htmlFor="hqCd">本部コード</FormLabel>
            <Input
              id="hqCd"
              placeholder="本部コード"
              {...register("hqCd", {
                required: "必須",
                //   minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              disabled={true}
              value="unchangeableValue"
            />
            <FormErrorMessage>
              {errors.hqCd && errors.hqCd.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isInvalid={errors.hqName}>
            {/* If invalid, side effects are: The form will have aria invalid set to true. */}
            <FormLabel htmlFor="hqName">本部名</FormLabel>
            <Input
              id="hqName"
              placeholder="本部名"
              {...register("hqName", {
                required: "必須",
                maxLength: { value: 50, message: "最大文字数は５０" },
              })}
            />
            <FormErrorMessage>
              {errors.hqName && errors.hqName.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isInvalid={errors.storeCd}>
            {/* If invalid, side effects are: The form will have aria invalid set to true. */}
            <FormLabel htmlFor="storeCd">店舗コード</FormLabel>
            <Input
              id="storeCd"
              placeholder="店舗コード"
              {...register("storeCd", {
                required: "必須",
                //   minLength: { value: 4, message: "Minimum length should be 4" },
              })}
            />
            <FormErrorMessage>
              {errors.storeCd && errors.storeCd.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isInvalid={errors.storeName}>
            {/* If invalid, side effects are: The form will have aria invalid set to true. */}
            <FormLabel htmlFor="storeName">店舗名</FormLabel>
            <Input
              id="storeName"
              placeholder="店舗名"
              {...register("storeName", {
                required: "必須",
                maxLength: { value: 50, message: "最大文字数は５０" },
              })}
            />
            <FormErrorMessage>
              {errors.storeName && errors.storeName.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem gridColumn="1/-1">
          <FormControl isInvalid={errors.email}>
            {/* If invalid, side effects are: The form will have aria invalid set to true. */}
            <FormLabel htmlFor="email">メールアドレス</FormLabel>
            <Input
              id="email"
              placeholder="メール"
              {...register("email", {
                required: "必須",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "無効なメールアドレス",
                },
                maxLength: { value: 50, message: "最大文字数は５０" },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isInvalid={errors.ftpUser}>
            {/* If invalid, side effects are: The form will have aria invalid set to true. */}
            <FormLabel htmlFor="ftpUser">FTPユーザ名</FormLabel>
            <Input
              id="ftpUser"
              placeholder="FTPユーザ名"
              {...register("ftpUser", {
                required: "必須",
                maxLength: { value: 50, message: "最大文字数は５０" },
              })}
            />
            <FormErrorMessage>
              {errors.ftpUser && errors.ftpUser.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isInvalid={errors.ftpPass}>
            {/* If invalid, side effects are: The form will have aria invalid set to true. */}
            <FormLabel htmlFor="ftpPass">FTPパスワード</FormLabel>
            <Input
              id="ftpPass"
              placeholder="FTPパスワード"
              {...register("ftpPass", {
                required: "必須",
                //   minLength: { value: 4, message: "Minimum length should be 4" },
              })}
            />
            <FormErrorMessage>
              {errors.ftpPass && errors.ftpPass.message}
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

//TODO Copiar el form.
//TODO ajustar algunos campos para que coincidan con la definición de tabla de users.
//TODO
// fields.map((field, index) => (
//   <input
//     key={field.id} // important to include key with field's id
//     {...register(`test.${index}.value`)}
//   />
// ));

//HOOK
// const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
