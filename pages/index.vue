<script setup lang="ts"></script>

<template>
    <div class="flex flex-col">
        <div class="shadow mt-6 mx-10 rounded-lg bg-gray-50">
            <div class="flex">
                <div :class="{ 'bg-green-300 rounded-tr-lg': activeTab === 2 }" class="flex-1 flex justify-center rounded-tr-lg">
                    <button @click="showContent(1)" :class="{ ' text-green-300 font-bold': activeTab === 1 }">單程</button>
                </div>
                <div :class="{ 'bg-green-300 rounded-tr-lg': activeTab === 1 }" class="flex-1 flex justify-center rounded-tr-lg">
                    <button @click="showContent(2)" :class="{ ' text-green-300 font-bold': activeTab === 2 }">往返</button>
                </div>
            </div>
            <div v-if="activeTab === 1" class="flex-col p-4">
              <div class="flex justify-around">
                <div class="flex"><Icon name="i-material-symbols-directions-car" class="bg-gray-500 w-6 h-6"/>
                  <p class="flex-1 text-gray-500 ml-2">出發地點</p>
                </div>
                <div class="flex"><Icon name="i-mdi-map-marker-radius-outline" class="bg-gray-500 w-6 h-6"/>
                  <p class="flex-1 text-gray-500 ml-2">抵達地點</p>
                </div>
              </div>
              <div class="flex justify-evenly">
                <p class="ml-auto text-2xl ">金門水頭碼頭</p>
                <Icon name="i-hugeicons-exchange-01" class=" mx-auto bg-green-600 w-7 h-7"/>
                <p class="mr-auto text-2xl">金門商議機場</p>
              </div>
              <div class="border-b-2 py-3"></div>
              <div class="flex pt-3 pl-4">
                <Icon name="i-majesticons-ship-line" class="bg-green-300 w-6 h-6"></Icon>
                <p class="text-green-300">抵達碼頭時間</p>
              </div>

              <div class="flex pt-3 pl-4">
                <Icon name="i-material-symbols-directions-car" class="bg-green-300 w-6 h-6"></Icon>
                <p class="text-green-300">接駁車發車時間</p>
              </div>
              <div class="flex pl-6">
                <p class="flex-1">票價</p>
                <p class="flex-1">$30 /人</p>
                <p class="flex-1"></p>
              </div>

              <div class="flex pl-6 pt-2 justify-evenly content-center">
                <div class="flex flex-1">
                  <p class="flex-1">成人票</p>
                  <div class="flex-1 flex ">
                  <button @click="decrement('adult')">
                  <Icon name="i-mdi-minus-circle-outline"/></button>
                  <p class="px-2">{{ counts.adult }}</p>
                  <button @click="increment('adult')">
                    <Icon name="i-material-symbols-add-circle-outline"/>
                  </button>
                  </div>
                </div>
                <div class="flex flex-1">
                  <p class="flex-1">嬰兒票(<= 2嵗)</p>
                  <div class="flex-1 flex">
                  <button @click="decrement('child')">
                  <Icon name="i-mdi-minus-circle-outline"/></button>
                  <p class="px-2 ">{{ counts.child }}</p>
                  <button @click="increment('child')">
                    <Icon name="i-material-symbols-add-circle-outline"/>
                  </button>
                  </div>
                </div>
              </div>

              <div class="flex py-4 px-6 content-center">
                <p class="flex-none w-24">聯係人</p>
                <input
                  type="text"
                  placeholder="必填"
                  class="flex-none w-64 px-2 border-b-2 border-gray-600 bg-inherit focus:outline-none text-sm"/>
              </div>

              <div class="flex py-4 px-6 content-center">
                <p class="flex-none w-24">聯係電話</p>
                <input
                  type="text"
                  placeholder="必填"
                  class="flex-none w-64 px-2 border-b-2 border-gray-600 bg-inherit focus:outline-none text-sm"/>
              </div>
              <div class="pt-8 flex justify-center">
                <input
                    type="checkbox"
                    id="checkbox"
                    class="h-5 w-3 border-black rounded-full"/>
                    <label for="checkbox" class="ml-2 text-sm text-gray-700">我已閲讀并同意</label>
                    <a href="#" class="text-sm text-blue-700 ml-1">《接駁車訂票須知》</a>
              </div>
            </div>


            <div v-if="activeTab === 2">
                <p class="text-gray-500">Content for Option 2</p>
            </div>
            
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      activeTab: 1,
      counts:{
      adult: 1,
      child: 1
      },
    };
  },
  methods: {
    showContent(tab) {
      this.activeTab = tab;
    },
    increment(type) {
            this.counts[type]++;
        },
        decrement(type) {
            if (this.counts[type] > 0) {
                this.counts[type]--;
            }
        }
    }
});
</script>