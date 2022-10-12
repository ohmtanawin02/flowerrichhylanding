<template>
    <header
      class="
        flex
        items-center
        justify-between
      "
    >
      <ul class="flex flex-row mr-4 mt-4 space-x-5 text-sm pl-20 font-light">
        <template :key="`navItem-${i}`" v-for="(n, i) in nav">
          <li class="nav-item pl-20 text-white font-thai pt-6 text-base">
            <a :href="n.link">
              {{ n.name }}
            </a>
          </li>
        </template>
      </ul>
    </header>
  </template>

  <script setup>
    const nav = [
      {
        name: "หน้าแรก",
        link: "/",
      },
      {
        name: "สินค้าและบริการของเรา",
        link: "#headproduct",
      },
      {
        name: "ผลงานของเรา",
        link: "#perhead",
      },
      {
        name: "บทความและข่าวสาร",
        link: "#headblog",
      },
      {
        name: "เกี่ยวกับเรา",
        link: "#headabout",
      },
      {
        name: "รีวิว",
        link: "#headreview",
      },
      {
        name: "ติดต่อ",
        link: "#headContact",
      }
    ];
    </script>