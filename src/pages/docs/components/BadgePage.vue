<template>
  <q-page class="w-full p-6 flex flex-col gap-y-6">
    <q-card flat bordered>
      <q-card-section>
        <div class="text-primary-800 text-bold">Badge</div>
      </q-card-section>
      <q-separator inset class="mb-4" />
    </q-card>
    <div class="text-primary-800 text-bold ty-display-xl">Usage</div>
    <q-card flat bordered>
      <q-card-section>
        <div class="text-primary-800 text-bold">Notifications</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="flex gap-x-3">
          <d-badge label="99+" notification />
          <d-badge label="99+" notification color="green" />
          <d-badge label="99+" notification color="red" />
          <d-badge label="99+" notification color="orange" />
          <d-badge label="99+" notification color="black" />
        </div>
      </q-card-section>
    </q-card>
    <q-card flat bordered>
      <q-card-section>
        <div class="text-primary-800 text-bold">Label</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="flex flex-col gap-y-3">
        <div class="text-primary-800 text-bold">Size Medium</div>
        <div class="flex gap-x-3">
          <d-badge label="Blue" size="medium" />
          <d-badge label="Green" color="green" size="medium" />
          <d-badge label="Red" color="red" size="medium" />
          <d-badge label="Orange" color="orange" size="medium" />
          <d-badge label="Gray" color="black" size="medium" />
        </div>
        <q-separator inset />
        <div class="text-primary-800 text-bold">Size Small</div>
        <div class="flex gap-x-3">
          <d-badge label="Blue" />
          <d-badge label="Green" color="green" />
          <d-badge label="Red" color="red" />
          <d-badge label="Orange" color="orange" />
          <d-badge label="Gray" color="black" />
        </div>
      </q-card-section>
    </q-card>
    <q-card flat bordered>
      <q-card-section>
        <div class="text-primary-800 text-bold">Circle Icon</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="flex flex-col gap-y-3">
        <div class="text-primary-800 text-bold">Solid</div>
        <div class="flex gap-x-3">
          <d-badge icon="credit-card" />
          <d-badge icon="credit-card" color="green" />
          <d-badge icon="credit-card" color="red" />
          <d-badge icon="credit-card" color="orange" />
          <d-badge icon="credit-card" color="black" />
        </div>
        <div class="flex gap-x-3">
          <d-badge icon="credit-card" size="medium" />
          <d-badge icon="credit-card" color="green" size="medium" />
          <d-badge icon="credit-card" color="red" size="medium" />
          <d-badge icon="credit-card" color="orange" size="medium" />
          <d-badge icon="credit-card" color="black" size="medium" />
        </div>
        <div class="flex gap-x-3">
          <d-badge icon="credit-card" size="large" />
          <d-badge icon="credit-card" color="green" size="large" />
          <d-badge icon="credit-card" color="red" size="large" />
          <d-badge icon="credit-card" color="orange" size="large" />
          <d-badge icon="credit-card" color="black" size="large" />
        </div>
        <q-separator inset />
        <div class="text-primary-800 text-bold">Opacity</div>
        <div class="flex gap-x-3">
          <d-badge icon="credit-card" opacity />
          <d-badge icon="credit-card" color="green" opacity />
          <d-badge icon="credit-card" color="red" opacity />
          <d-badge icon="credit-card" color="orange" opacity />
          <d-badge icon="credit-card" color="black" opacity />
        </div>
        <div class="flex gap-x-3">
          <d-badge icon="credit-card" size="medium" opacity />
          <d-badge icon="credit-card" color="green" size="medium" opacity />
          <d-badge icon="credit-card" color="red" size="medium" opacity />
          <d-badge icon="credit-card" color="orange" size="medium" opacity />
          <d-badge icon="credit-card" color="black" size="medium" opacity />
        </div>
        <div class="flex gap-x-3">
          <d-badge icon="credit-card" opacity size="large" />
          <d-badge icon="credit-card" color="green" opacity size="large" />
          <d-badge icon="credit-card" color="red" opacity size="large" />
          <d-badge icon="credit-card" color="orange" opacity size="large" />
          <d-badge icon="credit-card" color="black" opacity size="large" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
