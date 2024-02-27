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
} from "@chakra-ui/react";
//TODO // Refactor: Esto deberia ser reusable para Edit session.
export default function HeadquarterForm() {
  // TODO verificar como funcionan los hooks useCreateCabin y useEditCabin
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    //TODO deshacerse del console log
    console.log(values);
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     alert(JSON.stringify(values, null, 2));
    //     resolve();
    //   }, 3000);
    // });
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

  //props a rescatar: errors.name, label, keyname, placeholder. validationOptions
  // Note: para cada FormLabel:
  // especificar keyName en htmlFor, errors.name, id, register y errormessages
  // Cambiar el label, placeholder en japones
  // Generar las condiciones necesarias y darles una descripción en japonés.

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid gap="20px">
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
          />
          <FormErrorMessage>
            {errors.hqCd && errors.hqCd.message}
          </FormErrorMessage>
        </FormControl>

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
