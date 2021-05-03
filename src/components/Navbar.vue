<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Button from '@/components/common/Button.vue';
import IconBell from '@/components/icons/IconBell.vue';

@Component({
  components: {
    IconBell,
    Button
  }
})
export default class Navbar extends Vue {}
</script>

<template>
  <div id="navbar">
    <div>
      <div class="bg-gray-800">
        <nav class="bg-gray-800">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="border-b border-gray-700">
              <div class="flex items-center justify-between h-16 px-4 sm:px-0">
                <div class="flex items-center">
                  <div>
                    <router-link class="flex items-center text-white space-x-4" to="/">
                      <img
                          class="h-10 w-10 rounded-full"
                          src="https://picsum.photos/100/100"
                          alt="Logo"
                      />
                      <h2 class="font-bold">Messenger</h2>
                    </router-link>
                  </div>
                </div>
                <div>
                  <div
                    class="ml-4 flex items-center md:ml-6 gap-4 cursor-pointer"
                  >
                    <span class="text-white">Роберту Иерузалимски</span>
                    <span class="inline-block relative cursor-pointer">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://picsum.photos/100/100"
                        alt=""
                      />
                      <span
                        class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400"
                      ></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
