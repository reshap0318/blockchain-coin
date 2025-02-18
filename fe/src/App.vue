<script setup lang="ts">
import { ref } from "vue"
import { votingContract, getAccount } from "@/library/web3"

const balance = ref<number>(0)

async function getBalance() {
  const account = await getAccount();
  const mb = await votingContract.methods.balanceOf(account).call() as string;
  balance.value = parseInt(mb)
}

const rupiah = (number: number) : string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 1
  }).format(number);
}
</script>

<template>
  <div class="bg-white p-8 rounded-lg shadow-lg w-full">
    <h1 class="text-2xl font-bold mb-6 text-center">WhiteCat Token (WCAT)</h1>
    <div class="grid grid-cols-1 gap-6">
      <div class="bg-gray-50 p-4 rounded-lg shadow-sm text-center">
        <h3 class="text-lg font-semibold">Your Balance: {{ rupiah(balance) }} WCAT</h3>
        <button
          class="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          @click="getBalance"> Refresh Balance
        </button>
      </div>
    </div>
  </div>
</template>
