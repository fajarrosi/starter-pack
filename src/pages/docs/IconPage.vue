<template>
  <q-page class="w-full p-6">
    <q-card flat bordered>
      <q-card-section>
        <div class="text-primary-800 text-bold">Icon</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="flex w-full gap-x-4">
          <div class="item-flex flex flex-col gap-y-4">
            <div class="font-semibold text-primary-500">Regular Icon</div>
            <div class="flex w-full gap-x-2 text-[24px]">
              <d-icon
                class="cursor-pointer relative-position"
                name="home"
                regular
              >
                <q-tooltip> fi fi-rr-home </q-tooltip>
              </d-icon>
              <d-icon
                class="cursor-pointer relative-position"
                name="add"
                regular
              >
                <q-tooltip> fi fi-rr-add </q-tooltip>
              </d-icon>
            </div>
          </div>
          <div class="item-flex flex flex-col gap-y-4">
            <div class="font-semibold text-primary-500">Solid Icon</div>
            <div class="flex w-full gap-x-2 text-[24px]">
              <d-icon
                class="cursor-pointer relative-position"
                name="home"
                solid
              >
                <q-tooltip> fi fi-sr-home </q-tooltip>
              </d-icon>
              <d-icon class="cursor-pointer relative-position" name="add" solid>
                <q-tooltip> fi fi-sr-add </q-tooltip>
              </d-icon>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
