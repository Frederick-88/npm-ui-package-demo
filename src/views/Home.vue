<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>Welcome</h2>
    <hr />
    <h3>Sample Button</h3>
    <div class="home-button__wrapper">
      <SampleButton :disabled="true"
        >Disabled-Sample-Primary-Button</SampleButton
      >
      <SampleButton :is-primary="true">Sample-Primary-Button</SampleButton>
      <SampleButton :is-primary-outline="true"
        >Sample-Primary-Outline-Button</SampleButton
      >
      <SampleButton :is-success="true">Sample-success-Button</SampleButton>
      <SampleButton :is-success-outline="true"
        >Sample-success-Outline-Button</SampleButton
      >
      <SampleButton :is-warning="true">Sample-warning-Button</SampleButton>
      <SampleButton :is-warning-outline="true"
        >Sample-warning-Outline-Button</SampleButton
      >
      <SampleButton :is-danger="true">Sample-danger-Button</SampleButton>
      <SampleButton :is-danger-outline="true"
        >Sample-danger-Outline-Button</SampleButton
      >
      <SampleButton :is-light="true">Sample-light-Button</SampleButton>
      <SampleButton :is-light-outline="true"
        >Sample-light-Outline-Button</SampleButton
      >
      <SampleButton :is-dark="true">Sample-dark-Button</SampleButton>
      <SampleButton :is-dark-outline="true"
        >Sample-dark-Outline-Button</SampleButton
      >
    </div>

    <br />
    <br />

    <!------------------------------- -->
    <h3>Sample Checkbox</h3>
    <div class="home__wrapper">
      <SampleCheckbox label="remember me" />
      <SampleCheckbox :is-checked="true" label="checked-default" />
      <SampleCheckbox :is-checked="true" :is-primary="true" label="primary" />
      <SampleCheckbox :is-checked="true" :is-success="true" label="success" />
      <SampleCheckbox :is-checked="true" :is-warning="true" label="warning" />
      <SampleCheckbox :is-checked="true" :is-danger="true" label="danger" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
.home-button__wrapper {
  margin: 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.home__wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 40px;
  margin-top: 2rem;

  & > * {
    margin-right: 20px;
  }
}
</style>
