<template>
  <div class="container">
    <!-- Heading -->
    <h1 class="text-5xl font-bold">Let's make something amazing</h1>

    <!-- Personal Info -->
    <div class="personal-info">
      <img
        src="/public/images/face_card.png"
        alt="Profile Photo"
        class="h-24 w-24" />
      <div class="info">
        <p>Confidence Ekeanya</p>
        <p>Confidoekeanya@gmail.com</p>
      </div>
    </div>

    <!-- Form -->
    <form>
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label for="message">Message</label>
        <input type="textarea" name="message" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
