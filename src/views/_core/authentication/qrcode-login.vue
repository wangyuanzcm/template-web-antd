<script lang="ts" setup>
import { AuthenticationQrCodeLogin } from '@wboot/common-ui';
import { LOGIN_PATH } from '@wboot/constants';

defineOptions({ name: 'QrCodeLogin' });
</script>

<template>
  <AuthenticationQrCodeLogin :login-path="LOGIN_PATH" />
</template>
