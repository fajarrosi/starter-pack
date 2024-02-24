<template>
  <q-page class="w-full p-6 flex flex-col gap-y-6">
    <q-card flat bordered>
      <q-card-section>
        <div class="text-primary-800 text-bold">Menu</div>
      </q-card-section>
      <q-separator inset class="mb-4" />
    </q-card>
    <div class="text-primary-800 text-bold ty-display-xl">Usage</div>
    <q-card flat bordered>
      <q-card-section>
        <div class="text-primary-800 text-bold">Kebab Menu</div>
      </q-card-section>
      <q-separator inset class="mb-4" />
      <q-card-section>
        <div class="inline-flex">
          <div
            class="p-1 hover:bg-gray-400 hover:rounded-[10px] cursor-pointer"
          >
            <d-icon name="menu-dots-vertical" bold class="ty-text-l p-1" />
            <d-menu />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
