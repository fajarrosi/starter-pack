<template>
  <q-page class="w-full p-6 flex flex-col gap-y-6">
    <q-card flat bordered>
      <q-card-section>
        <div class="text-primary-800 text-bold">Button</div>
      </q-card-section>
      <q-separator inset class="mb-4" />
    </q-card>
    <div class="text-primary-800 text-bold ty-display-xl">Usage</div>
    <q-card flat bordered>
      <q-card-section>
        <div class="text-primary-800 text-bold">Text Button Variant</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="text-primary-800 text-bold">Primary</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="flex flex-col gap-y-3">
          <div class="flex gap-x-2 gap-y-2">
            <d-btn label="Primary" />
            <d-btn label="Secondary" secondary />
            <d-btn label="Tertiary" tertiary />
          </div>
          <div class="flex gap-x-2 gap-y-2">
            <d-btn label="Primary" icon="plus" />
            <d-btn label="Secondary" secondary icon="plus" />
            <d-btn label="Tertiary" tertiary icon="plus" />
          </div>
          <div class="flex gap-x-2 gap-y-2">
            <d-btn label="Primary" icon="plus" icon-position="right" />
            <d-btn
              label="Secondary"
              secondary
              icon="plus"
              icon-position="right"
            />
            <d-btn
              label="Tertiary"
              tertiary
              icon="plus"
              icon-position="right"
            />
          </div>
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="text-red-800 text-bold">Danger</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="flex flex-col gap-y-3">
          <div class="flex gap-x-2 gap-y-2">
            <d-btn color="red" label="Primary" />
            <d-btn color="red" label="Secondary" secondary />
            <d-btn color="red" label="Tertiary" tertiary />
          </div>
          <div class="flex gap-x-2 gap-y-2">
            <d-btn color="red" label="Primary" icon="plus" />
            <d-btn color="red" label="Secondary" secondary icon="plus" />
            <d-btn color="red" label="Tertiary" tertiary icon="plus" />
          </div>
          <div class="flex gap-x-2 gap-y-2">
            <d-btn
              color="red"
              label="Primary"
              icon="plus"
              icon-position="right"
            />
            <d-btn
              color="red"
              label="Secondary"
              secondary
              icon="plus"
              icon-position="right"
            />
            <d-btn
              color="red"
              label="Tertiary"
              tertiary
              icon="plus"
              icon-position="right"
            />
          </div>
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="text-green-800 text-bold">Success</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="flex flex-col gap-y-3">
          <div class="flex gap-x-2 gap-y-2">
            <d-btn color="green" label="Primary" />
            <d-btn color="green" label="Secondary" secondary />
            <d-btn color="green" label="Tertiary" tertiary />
          </div>
          <div class="flex gap-x-2 gap-y-2">
            <d-btn color="green" label="Primary" icon="plus" />
            <d-btn color="green" label="Secondary" secondary icon="plus" />
            <d-btn color="green" label="Tertiary" tertiary icon="plus" />
          </div>
          <div class="flex gap-x-2 gap-y-2">
            <d-btn
              color="green"
              label="Primary"
              icon="plus"
              icon-position="right"
            />
            <d-btn
              color="green"
              label="Secondary"
              secondary
              icon="plus"
              icon-position="right"
            />
            <d-btn
              color="green"
              label="Tertiary"
              tertiary
              icon="plus"
              icon-position="right"
            />
          </div>
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="text-black-800 text-bold">Gray</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="flex flex-col gap-y-3">
          <div class="flex gap-x-2 gap-y-2">
            <d-btn color="black" label="Primary" />
            <d-btn color="black" label="Secondary" secondary />
            <d-btn color="black" label="Tertiary" tertiary />
          </div>
          <div class="flex gap-x-2 gap-y-2">
            <d-btn color="black" label="Primary" icon="plus" />
            <d-btn color="black" label="Secondary" secondary icon="plus" />
            <d-btn color="black" label="Tertiary" tertiary icon="plus" />
          </div>
          <div class="flex gap-x-2 gap-y-2">
            <d-btn
              color="black"
              label="Primary"
              icon="plus"
              icon-position="right"
            />
            <d-btn
              color="black"
              label="Secondary"
              secondary
              icon="plus"
              icon-position="right"
            />
            <d-btn
              color="black"
              label="Tertiary"
              tertiary
              icon="plus"
              icon-position="right"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card flat bordered>
      <q-card-section>
        <div class="text-primary-800 text-bold">Icon Button Variants</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="text-primary-800 text-bold">Primary</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="flex flex-col gap-y-3">
          <div class="flex gap-x-2 gap-y-2">
            <d-btn icon="plus" icon-position="right" />
            <d-btn secondary icon="plus" icon-position="right" />
            <d-btn tertiary icon="plus" icon-position="right" />
          </div>
          <div class="flex gap-x-2 gap-y-2">
            <d-btn icon="plus" icon-position="right" size="medium" />
            <d-btn secondary icon="plus" icon-position="right" size="medium" />
            <d-btn tertiary icon="plus" icon-position="right" size="medium" />
          </div>
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="text-red-800 text-bold">Danger</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="flex flex-col gap-y-3">
          <div class="flex gap-x-2 gap-y-2">
            <d-btn color="red" icon="plus" icon-position="right" />
            <d-btn color="red" secondary icon="plus" icon-position="right" />
            <d-btn color="red" tertiary icon="plus" icon-position="right" />
          </div>
          <div class="flex gap-x-2 gap-y-2">
            <d-btn
              color="red"
              icon="plus"
              icon-position="right"
              size="medium"
            />
            <d-btn
              color="red"
              secondary
              icon="plus"
              icon-position="right"
              size="medium"
            />
            <d-btn
              color="red"
              tertiary
              icon="plus"
              icon-position="right"
              size="medium"
            />
          </div>
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="text-green-800 text-bold">Success</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="flex flex-col gap-y-3">
          <div class="flex gap-x-2 gap-y-2">
            <d-btn color="green" icon="plus" icon-position="right" />
            <d-btn color="green" secondary icon="plus" icon-position="right" />
            <d-btn color="green" tertiary icon="plus" icon-position="right" />
          </div>
          <div class="flex gap-x-2 gap-y-2">
            <d-btn
              color="green"
              icon="plus"
              icon-position="right"
              size="medium"
            />
            <d-btn
              color="green"
              secondary
              icon="plus"
              icon-position="right"
              size="medium"
            />
            <d-btn
              color="green"
              tertiary
              icon="plus"
              icon-position="right"
              size="medium"
            />
          </div>
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="text-black-800 text-bold">Gray</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="flex flex-col gap-y-3">
          <div class="flex gap-x-2 gap-y-2">
            <d-btn color="black" icon="plus" />
            <d-btn color="black" secondary icon="plus" />
            <d-btn color="black" tertiary icon="plus" />
          </div>
          <div class="flex gap-x-2 gap-y-2">
            <d-btn color="black" icon="plus" size="medium" />
            <d-btn color="black" secondary icon="plus" size="medium" />
            <d-btn color="black" tertiary icon="plus" size="medium" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card flat bordered>
      <q-card-section>
        <div class="text-primary-800 text-bold">Link Variants</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="inline-flex flex-col gap-y-3">
          <div class="flex gap-x-2 gap-y-2">
            <d-btn label="Primary" link />
            <d-btn label="Primary" link icon="plus" />
            <d-btn label="Primary" link icon="plus" icon-position="right" />
          </div>
          <div class="flex gap-x-2 gap-y-2">
            <d-btn label="Danger" color="red" link />
            <d-btn label="Danger" color="red" link icon="plus" />
            <d-btn
              label="Danger"
              color="red"
              link
              icon="plus"
              icon-position="right"
            />
          </div>
          <div class="flex gap-x-2 gap-y-2">
            <d-btn label="Success" color="green" link />
            <d-btn label="Success" color="green" link icon="plus" />
            <d-btn
              label="Success"
              color="green"
              link
              icon="plus"
              icon-position="right"
            />
          </div>
          <div class="flex gap-x-2 gap-y-2 bg-primary-500 p-2">
            <d-btn label="White" color="white" link />
            <d-btn label="White" color="white" link icon="plus" />
            <d-btn
              label="White"
              color="white"
              link
              icon="plus"
              icon-position="right"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
