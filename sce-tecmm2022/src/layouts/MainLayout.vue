<template>
  <q-layout view="hHh LpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
      <!-- drawer content -->
      <q-list padding>
            <q-expansion-item expand-separator label="Profesores">
            <q-item to="/profesores">
              <q-item-section avatar>
                <q-icon name="face" />
              </q-item-section>
              <q-item-section>
                Mostrar profesores
              </q-item-section>
            </q-item>
            </q-expansion-item>
            <!-- Estudiantes -->
            <q-expansion-item expand-separator label="Estudiantes">
            <q-item to="/estudiantes">
              <q-item-section avatar>
                <q-icon name="face" />
              </q-item-section>
              <q-item-section>
                Mostrar Estudiantes
              </q-item-section>
            </q-item>
            </q-expansion-item>
          </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
